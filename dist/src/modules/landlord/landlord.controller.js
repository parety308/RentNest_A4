import { catchAsync } from "../../utils/catchAsync";
import { landlordService } from "./landlord.service";
import { sendResponse } from "../../utils/sendResponse";
import HttpsStatus from "http-status-codes";
const createProperty = catchAsync(async (req, res, next) => {
    const landlordId = req.user?.id;
    const result = await landlordService.createPropertyDB(req.body, landlordId);
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.CREATED,
        message: "Property Created Successfully",
        data: result
    });
});
const updateProperty = catchAsync(async (req, res, next) => {
    const landlordId = req.user?.id;
    const id = req.params.id;
    const result = await landlordService.updatePropertyDB(id, req.body, landlordId);
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.OK,
        message: "Property Modified Successfully",
        data: result
    });
});
const deleteProperty = catchAsync(async (req, res, next) => {
    const landlordId = req.user?.id;
    const id = req.params.id;
    const result = await landlordService.deletePropertyDB(id, landlordId);
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.OK,
        message: "Property Deleted Successfully",
        data: result
    });
});
const getAllRentalRequests = catchAsync(async (req, res, next) => {
    const landlordId = req.user?.id;
    const result = await landlordService.getAllRentalRequestsDB(landlordId);
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.OK,
        message: "Rental Request Retrieve Successfully",
        data: result
    });
});
const updateRentalRequest = catchAsync(async (req, res, next) => {
    const landlordId = req.user?.id;
    const requestId = req.params.id;
    const result = await landlordService.updateRentalRequestDB(landlordId, requestId, req.body);
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.OK,
        message: "Rental Request Updated Successfully",
        data: result
    });
});
export const landlordController = { createProperty, updateProperty, deleteProperty, getAllRentalRequests, updateRentalRequest };
//# sourceMappingURL=landlord.controller.js.map