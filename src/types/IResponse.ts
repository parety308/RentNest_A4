export interface IResponse<T> {
    success: Boolean,
    statusCode: number,
    message: String,
    data: T
}