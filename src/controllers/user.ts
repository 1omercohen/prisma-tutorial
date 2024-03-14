import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import { getUsers } from "../services/user";

export const getUsersHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const users = await getUsers();
        return res.status(200).json({ status: "success", users });
    }
);
