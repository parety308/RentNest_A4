import { ICreateProperty } from "../property/property.interface";
import { IUpdateProperty } from "./landlord.interface";
export declare const landlordService: {
    createPropertyDB: (payload: ICreateProperty, landlordId: string) => Promise<{
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
    }>;
    updatePropertyDB: (propertyId: string, propertyData: IUpdateProperty, landlordId: string) => Promise<{
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
    }>;
    deletePropertyDB: (propertyId: string, landlordId: string) => Promise<{
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
    }>;
    getAllRentalRequestsDB: (landlordId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").RequestStatus;
        tenantId: string;
        propertyId: string;
        message: string | null;
        startDate: Date | null;
        endDate: Date | null;
    }[]>;
    updateRentalRequestDB: (landlordId: string, rentalRequestId: string, payload: any) => Promise<{
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
};
//# sourceMappingURL=landlord.service.d.ts.map