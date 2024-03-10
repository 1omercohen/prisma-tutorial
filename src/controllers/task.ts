import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";

export const getTasksHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200);
    }
);

export const createTaskHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200);
    }
);

export const getTaskByIdHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200);
    }
);

export const updateTaksByIdHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200);
    }
);

export const deleteTaskByIdHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200);
    }
);
