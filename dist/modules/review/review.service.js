import { PaymentStatus } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import AppError from "../../utils/AppError";
import HttpsStatus from "http-status-codes";
const createReviewDB = async (payload, tenantId) => {
    //check payment is done or not
    const propertyId = payload.propertyId;
    const request = await prisma.rentalRequest.findFirst({
        where: {
            propertyId
        },
        include: {
            payment: true
        }
    });
    if (!request) {
        throw new AppError(HttpsStatus.NOT_FOUND, "Rental request not found for the specified property");
    }
    const completedPayment = request.payment.find((payment) => payment.status === PaymentStatus.COMPLETED);
    if (!completedPayment) {
        throw new AppError(HttpsStatus.BAD_REQUEST, "Payment not completed for the specified property");
    }
    const result = await prisma.review.create({
        data: {
            ...payload,
            tenantId
        }
    });
    return result;
};
export const reviewService = { createReviewDB };
//# sourceMappingURL=review.service.js.map