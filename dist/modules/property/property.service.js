import { prisma } from "../../lib/prisma";
const getAllPropertiesFromDB = async (queryParams) => {
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
const getPropertyByIdFromDB = async (propertyId) => {
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
};
export const propertyService = { getAllPropertiesFromDB, getPropertyByIdFromDB };
//# sourceMappingURL=property.service.js.map