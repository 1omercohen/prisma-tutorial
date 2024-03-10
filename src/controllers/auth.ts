import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import { createUser, getUser } from "../services/auth";
import { createSendToken } from "../utils";

export const registerHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { password, ...rest } = req.body;
        const hashPassword = await bcrypt.hash(password, 12);
        await createUser({ ...rest, password: hashPassword });
        return res.status(200).json({ status: "success" });
    }
);

export const loginHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const user = await getUser(req.body.email);
        if (await bcrypt.compare(req.body.password, user.password))
            return createSendToken(user.id, 200, res);
    }
);

export const logoutHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        res.clearCookie("token");
        return res.status(200).json({ status: "success" });
    }
);
