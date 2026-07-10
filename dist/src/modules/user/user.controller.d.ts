import { NextFunction, Request, Response } from "express";
export declare const authController: {
    resgisterUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    loginUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getMe: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=user.controller.d.ts.map