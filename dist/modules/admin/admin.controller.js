import { catchAsync } from "../../utils/catchAsync";
import { adminService } from "./admin.service";
import { sendResponse } from "../../utils/sendResponse";
import HttpsStatus from "http-status-codes";
const getAllUser = catchAsync(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const role = req.query.role;
    const result = await adminService.getAllUserDB({ page,
        limit,
        role,
    });
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.OK,
        message: "All users retrieved successfully",
        data: result,
    });
});
const updateUserStatus = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const result = await adminService.updateUserStatusDB(id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.OK,
        message: "User Status Updated Successfully",
        data: result
    });
});
const getAllProperties = catchAsync(async (req, res, next) => {
    const result = await adminService.getAllPropertiesDB();
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.OK,
        message: "All Properties Retrieve Successfully",
        data: result
    });
});
const getAllRentals = catchAsync(async (req, res, next) => {
    const result = await adminService.getAllRentalsDB();
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.OK,
        message: "All Rental Request Retrieve Successfully",
        data: result
    });
});
export const adminController = { getAllUser, updateUserStatus, getAllRentals, getAllProperties };
//# sourceMappingURL=admin.controller.js.map