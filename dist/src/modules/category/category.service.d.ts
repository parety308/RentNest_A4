export declare const categoryService: {
    createCategoryInDB: (payload: any) => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllCategoriesFromDB: () => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
};
//# sourceMappingURL=category.service.d.ts.map