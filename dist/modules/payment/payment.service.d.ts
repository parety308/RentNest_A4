export declare const paymentService: {
    createPaymentIntoDB: (payload: any, tenantId: string) => Promise<{
        checkoutUrl: any;
        transactionId: any;
    }>;
    getPaymentHistoryDB: (userId: string) => Promise<any>;
    getPaymentDetailsDB: (paymentId: string, userId: string) => Promise<any>;
    confirmPaymentIntoDB: (payload: Buffer, signature: string) => Promise<{
        status: string;
    }>;
};
//# sourceMappingURL=payment.service.d.ts.map