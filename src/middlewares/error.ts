import { Request, Response } from "express";
import { ErrorResponse } from "../utils/error";

export const errorHandler = (
    err: ErrorResponse,
    req: Request,
    res: Response
) => {
    const response: { message: string; status: string; reasons?: string[] } = {
        status: err.status,
        message: err.message,
    };
    if (err.reasons) {
        response.reasons = err.reasons;
    }
    return res.status(err.statusCode).json(response);
};
