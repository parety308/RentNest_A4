import { Role } from "../../../generated/prisma/client";
interface IUserQuery {
    page: number;
    limit: number;
    role?: Role;
}
export declare const adminService: {
    getAllUserDB: ({ page, limit, role }: IUserQuery) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
        data: {
            id: string;
            name: string;
            email: string;
            role: Role;
            isBanned: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    updateUserStatusDB: (id: string, payload: {
        isBanned: boolean;
    }) => Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        role: Role;
        isBanned: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllPropertiesDB: () => Promise<({
        landlord: {
            id: string;
            name: string;
            email: string;
            role: Role;
            isBanned: boolean;
            createdAt: Date;
            updatedAt: Date;
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
    getAllRentalsDB: () => Promise<({
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
        tenant: {
            id: string;
            name: string;
            email: string;
            role: Role;
            isBanned: boolean;
            createdAt: Date;
            updatedAt: Date;
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
};
export {};
//# sourceMappingURL=admin.service.d.ts.map