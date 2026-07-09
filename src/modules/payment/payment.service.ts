import Stripe from "stripe";
import { PaymentProvider, PaymentStatus, RequestStatus } from "../../../generated/prisma/client";
import { config } from "../../config";
import stripe from "../../config/stripe";
import { prisma } from "../../lib/prisma"
import AppError from "../../utils/AppError";
import HttpStatus from "http-status-codes"
const createPaymentIntoDB = async (payload: any, tenantId: string) => {
    const { rentalRequestId } = payload;
    //check rental request
    const rental = await prisma.rentalRequest.findUnique({
        where: { id: rentalRequestId },
        include: {
            property: true,
            tenant: {
                omit: {
                    password: true
                }
            }
        }
    });
    if (!rental) {
        throw new AppError(HttpStatus.NOT_FOUND, "Rental request not found");
    };

    if (rental.tenantId !== tenantId) {
        throw new AppError(HttpStatus.FORBIDDEN, "You are not authorized to make payment for this rental request");
    }
    if (rental.status !== RequestStatus.APPROVED) {
        throw new AppError(
            HttpStatus.BAD_REQUEST,
            "Rental request is not approved"
        );
    }

    const existingPayment = await prisma.payment.findMany({
        where: {
            rentalRequestId: rentalRequestId
        }
    });


    if (existingPayment) {
        throw new AppError(HttpStatus.CONFLICT, "Payment already exists for this rental request");
    };

    const session = await stripe.checkout.sessions.create({

        line_items: [{
            quantity: 1,
            price_data: {
                currency: 'usd',
                unit_amount: Math.round(Number(rental.property.price) * 100),
                product_data: {
                    name: rental.property.title
                }
            }
        }], mode: 'payment',
        payment_method_types: ['card'],
        customer_email: rental.tenant.email,
        success_url: `${config.app_url}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${config.app_url}/payment/cancel?session_id={CHECKOUT_SESSION_ID}`,
        metadata: { tenantId: rental.tenant.id }
    });
    await prisma.payment.create({
        data: {
            transactionId: session.id,
            amount: Number(rental.property.price),
            provider: PaymentProvider.STRIPE,
            status: PaymentStatus.PENDING,
            rentalRequestId: rentalRequestId,
            userId: tenantId,
            paidAt: null
        }
    })
    return { checkoutUrl: session.url, transactionId: session.id };
};
const confirmPaymentIntoDB = async (
    payload: Buffer,
    signature: string
) => {

    try {

        const event = stripe.webhooks.constructEvent(
            payload,
            signature,
            config.stripe_webhook_secret
        );

        if (event.type !== "checkout.session.completed") {
            return {
                status: "IGNORED"
            };
        }

        const session = event.data.object as Stripe.Checkout.Session;

        await prisma.$transaction(async (tx) => {

            const payment = await tx.payment.update({
                where: {
                    transactionId: session.id
                },
                data: {
                    status: PaymentStatus.COMPLETED,
                    paidAt: new Date()
                }
            });

            await tx.rentalRequest.update({
                where: {
                    id: payment.rentalRequestId
                },
                data: {
                    status: RequestStatus.ACTIVE
                }
            });

        });

        return {
            status: "SUCCESS"
        };

    } catch (error: any) {
        console.log(error);

        throw new AppError(
            HttpStatus.BAD_REQUEST,
            error.message
        );
    }
};

const getPaymentHistoryDB = async (userId: string) => {
    return prisma.payment.findMany({
        where: {
            userId,
        },
        include: {
            rentalRequest: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};

const getPaymentDetailsDB = async (
    paymentId: string,
    userId: string
) => {
    const payment = await prisma.payment.findFirst({
        where: {
            id: paymentId,
            userId,
        },
        include: {
            rentalRequest: true,
        },
    });

    if (!payment) {
        throw new AppError(HttpStatus.NOT_FOUND, "Payment not found");
    }

    return payment;
};

export const paymentService = { createPaymentIntoDB, getPaymentHistoryDB, getPaymentDetailsDB, confirmPaymentIntoDB }