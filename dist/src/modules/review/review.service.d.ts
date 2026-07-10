export declare const reviewService: {
    createReviewDB: (payload: any, tenantId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        propertyId: string;
        rating: number;
        comment: string | null;
    }>;
};
//# sourceMappingURL=review.service.d.ts.map