import { IRegisterPayload } from "./user.interface";
export declare const authService: {
    registerUserDB: (userData: IRegisterPayload) => Promise<any>;
    logInUserIntoDB: (userData: {
        email: string;
        password: string;
    }) => Promise<{
        accessToken: any;
        refreshToken: any;
        user: any;
    }>;
    getMeDB: (email: string) => Promise<any>;
};
//# sourceMappingURL=user.service.d.ts.map