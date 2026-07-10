// middlewares/globalErrorHandler.ts
import AppError from "../utils/AppError";
export const globalErrorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }
    return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: err.message,
    });
};
//# sourceMappingURL=globalErrorHandler.js.map