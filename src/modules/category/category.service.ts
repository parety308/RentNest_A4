import { prisma } from "../../lib/prisma"
const createCategoryInDB = async (payload: any) => {
    const result = await prisma.category.createMany({
        data: payload.categories,
        skipDuplicates: true,
    });
    return result;
};

export const categoryService = { createCategoryInDB }