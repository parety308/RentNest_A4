import { prisma } from "../../lib/prisma"

const createPaymentIntoDB = async (payload: any, tenantId: string) => {

    //check rental request
    const result =await prisma.rentalRequest.findMany
}


export const paymentService = { createPaymentIntoDB }