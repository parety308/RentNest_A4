import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { authService } from "./user.service"
import { sendResponse } from "../../utils/sendResponse";
import HttpsStatus from "http-status-codes"
const getAllUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //check user is exist or not
    const result = await authService.registerUser(req.body) || [];
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.CREATED,
        message: "User Register Successfully",
        data: result
    });
})


export const authController = { getAllUser }
