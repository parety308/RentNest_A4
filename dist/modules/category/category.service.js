import { prisma } from "../../lib/prisma";
const createCategoryInDB = async (payload) => {
    const result = await prisma.category.create({
        data: payload
    });
    return result;
};
const getAllCategoriesFromDB = async () => {
    const result = await prisma.category.findMany();
    return result;
};
export const categoryService = { createCategoryInDB, getAllCategoriesFromDB };
//# sourceMappingURL=category.service.js.map