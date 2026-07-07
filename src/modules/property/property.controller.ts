import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { propertyService } from "./property.service";
import { sendResponse } from "../../utils/sendResponse";
import HttpsStatus from "http-status-codes";

const createProperty = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const landlordId = req.user?.id as string;
    const payload = req.body;
    const result = await propertyService.createPropertyIntoDB(payload, landlordId as string);
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.CREATED,
        message: "Property created successfully",
        data: result
    })
});

export const propertyController = { createProperty };