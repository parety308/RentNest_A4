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

const getAllPropertiesFromDB = async (queryParams: {
    location?: string;
    maxPrice?: number;
    type?: string;
}) => {
    const { location, maxPrice, type } = queryParams;

    const result = await prisma.property.findMany({
        where: {
            ...(location && {
                location: {
                    contains: location,
                    mode: "insensitive",
                },
            }),

            ...(maxPrice && {
                price: {
                    lte: Number(maxPrice),
                },
            }),

            ...(type && {
                category: {
                    name: {
                        equals: type,
                        mode: "insensitive",
                    },
                },
            }),
        },

        include: {
            category: true,
            landlord: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
        },
    });

    return result;
};

const getPropertyByIdFromDB = async (propertyId: string) => {
    const result = await prisma.property.findUnique({
        where: {
            id: propertyId
        },
        include: {
            category: true,
            landlord: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        },
        omit: {
            categoryId: true,
            landlordId: true
        }
    });
    return result;
}

export const propertyService = { createPropertyIntoDB, getAllPropertiesFromDB, getPropertyByIdFromDB }