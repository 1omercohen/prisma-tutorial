import * as jwt from "jsonwebtoken";
import {
    JWT_COOKIE_EXPIRES_IN,
    JWT_EXPIRES_IN,
    JWT_SECRET_KEY,
} from "./constants";
import { Response } from "express";

const signToken = (id: string) => {
    return jwt.sign({ id }, JWT_SECRET_KEY, {
        expiresIn: JWT_EXPIRES_IN,
    });
};

export const createSendToken = (
    user_id: string,
    statusCode: number,
    res: Response
) => {
    const token = signToken(user_id);
    const cookieOptions: {
        expires: Date;
        httpOnly: boolean;
        secure?: boolean;
    } = {
        expires: new Date(
            Date.now() + JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

    res.cookie("token", token, cookieOptions);

    res.status(statusCode).json({
        status: "success",
    });
};
