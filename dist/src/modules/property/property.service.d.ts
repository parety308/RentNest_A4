export declare const propertyService: {
    getAllPropertiesFromDB: (queryParams: {
        location?: string;
        maxPrice?: number;
        type?: string;
    }) => Promise<({
        landlord: {
            id: string;
            name: string;
            email: string;
        };
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
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
    })[]>;
    getPropertyByIdFromDB: (propertyId: string) => Promise<({
        landlord: {
            id: string;
            name: string;
            email: string;
        };
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
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
    }) | null>;
};
//# sourceMappingURL=property.service.d.ts.map