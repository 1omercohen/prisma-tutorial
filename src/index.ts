import express, { Express, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authRoutes } from "./routes/auth";
import { taskRoutes } from "./routes/task";
import { ErrorResponse } from "./utils/error";
import { errorHandler } from "./middlewares/error";
import { userRoutes } from "./routes/user";

const server: Express = express();

server.use(express.json());
server.use(cookieParser());
server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: true,
    })
);
server.use("/auth", authRoutes);
server.use("/task", taskRoutes);
server.use("/user", userRoutes);

server.use("*", (req: Request, res: Response, next: NextFunction) => {
    next(
        new ErrorResponse(`Can't find ${req.originalUrl} on this server!`, 404)
    );
});

server.use(errorHandler);

server.listen(3333, () => console.log("server runtting on port 3333"));
