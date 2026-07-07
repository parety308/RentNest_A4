import { prisma } from "../../lib/prisma"
import AppError from "../../utils/AppError";
import { ICreateProperty } from "./property.interface";

const createPropertyIntoDB = async (payload: ICreateProperty, landlordId: string) => {
    if (!payload.categoryId) {
        throw new AppError(400, "Category is required");
    }
    if (!landlordId) {
        throw new AppError(400, "Landlord is required");
    };
    const result = await prisma.property.create({
        data: {
            title: payload.title,
            description: payload.description,
            location: payload.location,
            price: payload.price,
            bedrooms: payload.bedrooms,
            bathrooms: payload.bathrooms,
            amenities: payload.amenities,
            landlordId,
            categoryId: payload.categoryId,
        },
    });
    return result;
}


export const propertyService = { createPropertyIntoDB }