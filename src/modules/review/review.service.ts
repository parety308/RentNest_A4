import { prisma } from "../../lib/prisma";

const createReviewDB = async (payload: any) => {
    const result = await prisma.review.create({
        data: payload
    });
    return result;
};

export const reviewService = { createReviewDB };