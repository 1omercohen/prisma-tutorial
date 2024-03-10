import { Request, Response, NextFunction } from "express";
import catchAsync from "../utils/catchAsync";

export const registerHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200);
    }
);

export const loginHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200);
    }
);

export const logoutHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200);
    }
);
