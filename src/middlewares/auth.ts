import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { JWT_SECRET_KEY } from "../utils/constants";
import { catchAsync } from "../utils/catchAsync";
import { ErrorResponse } from "../utils/error";
import { AuthorizeRequest } from "../types";
import { getUserById } from "../services/auth";

export const authMiddleware = catchAsync(
    async (req: AuthorizeRequest, res: Response, next: NextFunction) => {
        const { token } = req.cookies;
        const decode = jwt.verify(token, JWT_SECRET_KEY);
        if (typeof decode === "object") {
            const user = await getUserById(decode["id"]);
            req["user"] = user;
            return next();
        }
        return next(new ErrorResponse("Authorizetion Failed", 401));
    }
);
