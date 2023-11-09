import { ApiError } from "./api-error.model";

export interface ApiResponse<T> {
    data: T;
    errors: ApiError[];
    statusCode: number;
    isSuccess: boolean;
}
