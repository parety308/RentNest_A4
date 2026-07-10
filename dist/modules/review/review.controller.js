import { catchAsync } from "../../utils/catchAsync";
import { reviewService } from "./review.service";
import { sendResponse } from "../../utils/sendResponse";
import HttpsStatus from "http-status-codes";
const createReview = catchAsync(async (req, res, next) => {
    const tenantId = req.user?.id;
    const result = await reviewService.createReviewDB(req.body, tenantId);
    sendResponse(res, {
        success: true,
        statusCode: HttpsStatus.CREATED,
        message: "Review Created Successfully",
        data: result
    });
});
export const reviewController = { createReview };
//# sourceMappingURL=review.controller.js.map