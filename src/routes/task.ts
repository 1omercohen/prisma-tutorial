import { Router } from "express";
import {
    createTaskHandler,
    deleteTaskByIdHandler,
    getTaskByIdHandler,
    getTasksHandler,
    updateTaksByIdHandler,
} from "../controllers/task";
import validation from "../middlewares/validation";
import { createTaskSchema, taskCommonSchema } from "../middlewares/schema";

const taskRoutes = Router();

taskRoutes
    .get("/", getTasksHandler)
    .post("/", validation(createTaskSchema), createTaskHandler);

taskRoutes
    .get("/:id", validation(taskCommonSchema), getTaskByIdHandler)
    .put("/:id", validation(taskCommonSchema), updateTaksByIdHandler)
    .delete("/:id", validation(taskCommonSchema), deleteTaskByIdHandler);

export { taskRoutes };
