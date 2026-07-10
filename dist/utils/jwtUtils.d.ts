import type { JwtPayload } from "jsonwebtoken";
export declare const jwtUtils: {
    createToken: (payload: JwtPayload, secret: string, expiresIn: string | number) => string;
    verifyToken: (token: string, secret: string) => {
        success: boolean;
        data: JwtPayload;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    };
};
//# sourceMappingURL=jwtUtils.d.ts.map