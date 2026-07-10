import { prisma } from "../../lib/prisma";
const createReviewDB = async (payload) => {
    const result = await prisma.review.create({
        data: payload
    });
    return result;
};
export const reviewService = { createReviewDB };
//# sourceMappingURL=review.service.js.map