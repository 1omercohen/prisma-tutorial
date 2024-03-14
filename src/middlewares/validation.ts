import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
import { ErrorResponse } from "../utils/error";

export const validation =
    (schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            return next();
        } catch (error: any) {
            const reasons = error.issues.map((issue: any) => issue.message);
            return next(new ErrorResponse("Validation Error", 400, reasons));
        }
    };
