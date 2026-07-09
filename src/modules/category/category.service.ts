import { prisma } from "../../lib/prisma"
const createCategoryInDB = async (payload: any) => {
    const result = await prisma.category.create({
        data: payload
    });
    return result;
};

const getAllCategoriesFromDB = async () => {
    const result = await prisma.category.findMany();
    return result;
};

export const categoryService = { createCategoryInDB, getAllCategoriesFromDB }