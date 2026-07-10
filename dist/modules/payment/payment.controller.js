import HttpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { paymentService } from "./payment.service";
import { sendResponse } from "../../utils/sendResponse";
import AppError from "../../utils/AppError";
const createPayment = catchAsync(async (req, res, next) => {
    const tenantId = req.user?.id;
    const result = await paymentService.createPaymentIntoDB(req.body, tenantId);
    sendResponse(res, {
        success: true,
        statusCode: HttpStatus.CREATED,
        message: "Payment session created successfully",
        data: result,
    });
});
const confirmPayment = catchAsync(async (req, res) => {
    // console.log("webhook body:", req.body);
    const signature = req.headers["stripe-signature"];
    // console.log("Stripe Signature:", signature);
    if (!signature) {
        throw new AppError(HttpStatus.BAD_REQUEST, "Missing Stripe Signature");
    }
    const result = await paymentService.confirmPaymentIntoDB(req.body, signature);
    sendResponse(res, {
        success: true,
        statusCode: HttpStatus.OK,
        message: "Payment confirmed successfully",
        data: result,
    });
});
const getPaymentHistory = catchAsync(async (req, res, next) => {
    const tenantId = req.user?.id;
    const result = await paymentService.getPaymentHistoryDB(tenantId);
    sendResponse(res, {
        success: true,
        statusCode: HttpStatus.OK,
        message: "Payment history retrieved successfully",
        data: result,
    });
});
const getPaymentDetails = catchAsync(async (req, res, next) => {
    const tenantId = req.user?.id;
    const result = await paymentService.getPaymentDetailsDB(req.params.id, tenantId);
    sendResponse(res, {
        success: true,
        statusCode: HttpStatus.OK,
        message: "Payment details retrieved successfully",
        data: result,
    });
});
export const paymentController = {
    createPayment,
    getPaymentHistory,
    getPaymentDetails,
    confirmPayment
};
//# sourceMappingURL=payment.controller.js.map