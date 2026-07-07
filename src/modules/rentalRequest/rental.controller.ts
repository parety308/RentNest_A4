import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { requestService } from "./rental.service";

const createRequest = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const tenantId = req.user?.id;
    const result = await requestService.createRequest(req.body,tenantId as string)
});

export const requestController = { createRequest }