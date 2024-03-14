import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import { CreateTask, getAllTaskToUser } from "../services/task";
import { AuthorizeRequest } from "../types";
import { Prisma } from "@prisma/client";

export const getTasksHandler = catchAsync(
    async (req: AuthorizeRequest, res: Response, next: NextFunction) => {
        const userTasks = await getAllTaskToUser(req.user.id as string);
        return res.status(200).json({ status: "success", tasks: userTasks });
    }
);

export const createTaskHandler = catchAsync(
    async (req: AuthorizeRequest, res: Response, next: NextFunction) => {
        const newTaskInput: Prisma.TaskCreateInput = {
            title: req.body.title,
            discription: req.body.discription,
            status: req.body.status,
        };
        const reporterId = req.user.id as string;
        const assignTo = req.body.assign_to;
        const newTask = await CreateTask(newTaskInput, reporterId, assignTo);
        return res.status(200).json({ status: "success", task: newTask });
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
