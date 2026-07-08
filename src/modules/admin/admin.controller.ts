import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { adminService } from "./admin.service";
import { sendResponse } from "../../utils/sendResponse";
import HttpsStatus from "http-status-codes"
const getAllUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await adminService.getAllUserDB();
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.OK,
        message: "All User Retrieve Successfully",
        data: result
    })
});

const updateUserStatus = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await adminService.updateUserStatusDB(id as string, req.body);
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.OK,
        message: "User Status Updated Successfully",
        data: result

    })
});

const getAllProperties = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await adminService.getAllPropertiesDB();
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.OK,
        message: "All Properties Retrieve Successfully",
        data: result
    })
});

const getAllRentals = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await adminService.getAllRentalsDB();
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.OK,
        message: "All Rental Request Retrieve Successfully",
        data: result
    })
});




export const adminController = { getAllUser, updateUserStatus, getAllRentals, getAllProperties }