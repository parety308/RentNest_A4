export declare const categoryService: {
    createCategoryInDB: (payload: any) => Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    getAllCategoriesFromDB: () => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
};
//# sourceMappingURL=category.service.d.ts.map