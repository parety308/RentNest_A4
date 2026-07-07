import { prisma } from "../../lib/prisma";

const createRequest = async (payload: any, tenantId: string) => {
    const result = await prisma.rentalRequest.create({
        data: {
            tenantId,
            ...payload
        }
    });

    return result;
};

export const requestService = { createRequest }