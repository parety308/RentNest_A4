import { prisma } from "../../lib/prisma";
import AppError from "../../utils/AppError";

const getAllUserDB = async () => {
    const result = await prisma.user.findMany({
        omit: { password: true }
    });
    return result;
};
const updateUserStatusDB = async (id: string, payload: { isBanned: boolean }) => {
    const user = await prisma.user.findUnique({
        where: { id }
    });
    if (!user) {
        throw new AppError(404, "User not found");
    };

    const result = await prisma.user.update({
        where: {
            id
        },
        data: { isBanned: payload.isBanned }
    });

    return result;
}

const getAllPropertiesDB = async () => {
    const result = await prisma.property.findMany({
        include: {
            landlord: {
                omit: { password: true }
            },
            category: true
        }
    });
    return result;
};

const getAllRentalsDB = async () => {
    const result = await prisma.rentalRequest.findMany({
        include: {
            tenant: {
                omit: {
                    password: true
                }
            },
            property: true
        }
    });
    return result;
};

export const adminService = { getAllUserDB, updateUserStatusDB, getAllPropertiesDB, getAllRentalsDB };