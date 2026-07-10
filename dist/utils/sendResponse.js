export const sendResponse = async (res, data) => {
    res.status(data.statusCode).json({
        success: data.success,
        statusCode: data.statusCode,
        message: data.message,
        data: data.data
    });
};
//# sourceMappingURL=sendResponse.js.map