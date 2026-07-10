import { PaymentProvider, PaymentStatus, RequestStatus } from "../../../generated/prisma/client";
export declare const paymentService: {
    createPaymentIntoDB: (payload: any, tenantId: string) => Promise<{
        checkoutUrl: string | null;
        transactionId: string;
    }>;
    getPaymentHistoryDB: (userId: string) => Promise<({
        rentalRequest: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: RequestStatus;
            tenantId: string;
            propertyId: string;
            message: string | null;
            startDate: Date | null;
            endDate: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: PaymentStatus;
        rentalRequestId: string;
        transactionId: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        provider: PaymentProvider;
        userId: string;
        paidAt: Date | null;
    })[]>;
    getPaymentDetailsDB: (paymentId: string, userId: string) => Promise<{
        rentalRequest: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: RequestStatus;
            tenantId: string;
            propertyId: string;
            message: string | null;
            startDate: Date | null;
            endDate: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: PaymentStatus;
        rentalRequestId: string;
        transactionId: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        provider: PaymentProvider;
        userId: string;
        paidAt: Date | null;
    }>;
    confirmPaymentIntoDB: (payload: Buffer, signature: string) => Promise<{
        status: string;
    }>;
};
//# sourceMappingURL=payment.service.d.ts.map