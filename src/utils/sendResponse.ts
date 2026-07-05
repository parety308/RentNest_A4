import type { Response } from "express"
import { IResponse } from "../types/IResponse"


export const sendResponse = async (res: Response, data: IResponse<Object>) => {
    res.status(data.statusCode).json({
        success: data.success,
        statusCode: data.statusCode,
        message: data.message,
        data: data.data
    })
}