export declare const Role: {
    readonly TENANT: "TENANT";
    readonly LANDLORD: "LANDLORD";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const RequestStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly ACTIVE: "ACTIVE";
    readonly COMPLETED: "COMPLETED";
};
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const PaymentProvider: {
    readonly STRIPE: "STRIPE";
    readonly SSLCOMMERZ: "SSLCOMMERZ";
};
export type PaymentProvider = (typeof PaymentProvider)[keyof typeof PaymentProvider];
export declare const PropertyStatus: {
    readonly AVAILABLE: "AVAILABLE";
    readonly UNAVAILABLE: "UNAVAILABLE";
};
export type PropertyStatus = (typeof PropertyStatus)[keyof typeof PropertyStatus];
//# sourceMappingURL=enums.d.ts.map