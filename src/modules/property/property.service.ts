import { prisma } from "../../lib/prisma"
import AppError from "../../utils/AppError";


const getAllPropertiesFromDB = async (queryParams: {
    location?: string;
    price?: number;
    type?: string;
}) => {
    const { location, price, type } = queryParams;

    const result = await prisma.property.findMany({
        where: {
            ...(location && {
                location: {
                    contains: location,
                    mode: "insensitive",
                },
            }),

            ...(price && {
                price: {
                    lte: Number(price),
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

export const propertyService = { getAllPropertiesFromDB, getPropertyByIdFromDB }