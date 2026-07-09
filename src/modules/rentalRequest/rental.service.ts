import { prisma } from "../../lib/prisma";

const createRequest = async (payload: any, tenantId: string) => {
    const result = await prisma.rentalRequest.create({
        data: {
            tenantId,
            ...payload
        },
        include: {
            property: true
        }
    });

    return result;
};

const getRequestByTenantIdDB = async (tenantId: string) => {
    const result = await prisma.rentalRequest.findMany({
        where: {
            tenantId
        },
        include: {
            property: true
        }
    });

    return result;
};

const getRequestByRequestIdDB = async (requestId: string) => {
    // console.log("from service : ",{requestId});
    const result = await prisma.rentalRequest.findUnique({
        where: { id: requestId },
        include: {
            property: true
        }
    });
    return result;

};

export const requestService = { createRequest, getRequestByTenantIdDB ,getRequestByRequestIdDB}