import { NextFunction, Request, Response } from "express";
export declare const requestController: {
    createRequest: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getRequestByTenantId: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getRequestByRequestId: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=rental.controller.d.ts.map