import { Router } from "express";
import {
    loginHandler,
    logoutHandler,
    registerHandler,
} from "../controllers/auth";
import validation from "../middlewares/validation";
import { registerSchema, loginSchema } from "../middlewares/schema";

const authRoutes = Router();

authRoutes.post("/register", validation(registerSchema), registerHandler);

authRoutes.post("/login", validation(loginSchema), loginHandler);

authRoutes.post("/logput", logoutHandler);

export { authRoutes };
