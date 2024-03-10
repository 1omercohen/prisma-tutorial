import express, { Express } from "express";
import { authRoutes } from "./routes/auth";
import { taskRoutes } from "./routes/task";

const server: Express = express();

server.use(express.json());
server.use("/auth", authRoutes);
server.use("/task", taskRoutes);

server.listen(3333, () => console.log("server runtting on port 3333"));