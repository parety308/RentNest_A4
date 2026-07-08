import { prisma } from "../../lib/prisma";
import AppError from "../../utils/AppError";
import { ICreateProperty } from "../property/property.interface";
import { IUpdateProperty } from "./landlord.interface";

const createPropertyDB = async (payload: ICreateProperty, landlordId: string) => {
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
};

const updatePropertyDB = async (propertyId: string, propertyData: IUpdateProperty, landlordId: string) => {
    const property = await prisma.property.findFirst({
        where: {
            id: propertyId,
            landlordId: landlordId
        }
    });
    if (!property) {
        throw new AppError(404, "Property not found or unauthorized");
    }
    const result = await prisma.property.update({
        where: {
            id: propertyId,
        },
        data: propertyData
    });

    return result;
};

const deletePropertyDB = async (propertyId: string, landlordId: string) => {
    const property = await prisma.property.findFirst({
        where: {
            id: propertyId,
            landlordId: landlordId
        }
    });
    if (!property) {
        throw new AppError(404, "Property not found or unauthorized");
    }
    const result = await prisma.property.delete({
        where: {
            id: propertyId,
        }
    });

    return result;
};

const getAllRentalRequestsDB = async (landlordId: string) => {
    const result = await prisma.rentalRequest.findMany({
        where: {
            property: {
                landlordId
            }
        }
    });

    return result;

};
const updateRentalRequestDB = async (landlordId: string, rentalRequestId: string, payload: any) => {
    const result = await prisma.rentalRequest.update({
        where: {
            id: rentalRequestId,
            property: {
                landlordId
            }
        },
        data: {
            ...payload
        }
    });

    return result;
};


export const landlordService = { createPropertyDB, updatePropertyDB, deletePropertyDB, getAllRentalRequestsDB, updateRentalRequestDB }