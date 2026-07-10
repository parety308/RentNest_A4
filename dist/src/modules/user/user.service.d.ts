import { IRegisterPayload } from "./user.interface";
export declare const authService: {
    registerUserDB: (userData: IRegisterPayload) => Promise<{
        id: string;
        name: string;
        email: string;
        role: import("../../../generated/prisma/enums").Role;
        isBanned: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    logInUserIntoDB: (userData: {
        email: string;
        password: string;
    }) => Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            name: string;
            email: string;
            password: string;
            role: import("../../../generated/prisma/enums").Role;
            isBanned: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getMeDB: (email: string) => Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        role: import("../../../generated/prisma/enums").Role;
        isBanned: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map