export declare const requestService: {
    createRequest: (payload: any, tenantId: string) => Promise<{
        property: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            location: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            bedrooms: number | null;
            bathrooms: number | null;
            amenities: string[];
            images: string[];
            status: import("../../../generated/prisma/enums").PropertyStatus;
            landlordId: string;
            categoryId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").RequestStatus;
        tenantId: string;
        propertyId: string;
        message: string | null;
        startDate: Date | null;
        endDate: Date | null;
    }>;
    getRequestByTenantIdDB: (tenantId: string) => Promise<({
        property: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            location: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            bedrooms: number | null;
            bathrooms: number | null;
            amenities: string[];
            images: string[];
            status: import("../../../generated/prisma/enums").PropertyStatus;
            landlordId: string;
            categoryId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").RequestStatus;
        tenantId: string;
        propertyId: string;
        message: string | null;
        startDate: Date | null;
        endDate: Date | null;
    })[]>;
    getRequestByRequestIdDB: (requestId: string) => Promise<({
        property: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            location: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            bedrooms: number | null;
            bathrooms: number | null;
            amenities: string[];
            images: string[];
            status: import("../../../generated/prisma/enums").PropertyStatus;
            landlordId: string;
            categoryId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").RequestStatus;
        tenantId: string;
        propertyId: string;
        message: string | null;
        startDate: Date | null;
        endDate: Date | null;
    }) | null>;
};
//# sourceMappingURL=rental.service.d.ts.map