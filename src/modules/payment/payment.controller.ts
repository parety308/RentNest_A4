import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { paymentService } from "./payment.service";
import { sendResponse } from "../../utils/sendResponse";

const createPaymnet = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
 const result = await paymentService.createPaymentIntoDB(
        req.body,
        req.user.id
    );

    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Payment session created successfully",
        data:result
    });
});


export const paymentController={createPaymnet}