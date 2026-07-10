import { PropertyStatus } from "../../../generated/prisma/client";
export interface IUpdateProperty {
    title?: string;
    description?: string;
    location?: string;
    price?: number;
    bedrooms?: number;
    bathrooms?: number;
    amenities: string[];
    images: string[];
    status?: PropertyStatus;
    categoryId: string;
}
//# sourceMappingURL=landlord.interface.d.ts.map