import { Router } from "express";
import { getUsersHandler } from "../controllers/user";
import { authMiddleware } from "../middlewares/auth";

const userRoutes = Router();

userRoutes.get("/", authMiddleware, getUsersHandler);

export { userRoutes };
