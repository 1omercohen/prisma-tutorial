import { User } from "@prisma/client";
import { Request } from "express";
export interface AuthorizeRequest extends Request {
    user: Partial<User>;
}
