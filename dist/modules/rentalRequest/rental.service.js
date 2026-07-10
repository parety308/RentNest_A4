import { prisma } from "../../lib/prisma";
const createRequest = async (payload, tenantId) => {
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
const getRequestByTenantIdDB = async (tenantId) => {
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
const getRequestByRequestIdDB = async (requestId) => {
    // console.log("from service : ",{requestId});
    const result = await prisma.rentalRequest.findUnique({
        where: { id: requestId },
        include: {
            property: true
        }
    });
    return result;
};
export const requestService = { createRequest, getRequestByTenantIdDB, getRequestByRequestIdDB };
//# sourceMappingURL=rental.service.js.map