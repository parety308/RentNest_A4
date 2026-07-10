import { Role } from "../../../generated/prisma/client";
interface IUserQuery {
    page: number;
    limit: number;
    role?: Role;
}
export declare const adminService: {
    getAllUserDB: ({ page, limit, role }: IUserQuery) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: any;
            totalPage: number;
        };
        data: any;
    }>;
    updateUserStatusDB: (id: string, payload: {
        isBanned: boolean;
    }) => Promise<any>;
    getAllPropertiesDB: () => Promise<any>;
    getAllRentalsDB: () => Promise<any>;
};
export {};
//# sourceMappingURL=admin.service.d.ts.map