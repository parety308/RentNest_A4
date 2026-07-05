import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { authService } from "./user.service"

const getAllUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await authService.getAllUsers();
    res.status(200).json({
        message: "User retrieve successfully",
        data: result
    });
})


export const authController = { getAllUser }
