import { Prisma } from "@prisma/client";
import { client } from "../utils/prisma";

export const createUser = (userInput: Prisma.UserCreateInput) => {
    return client.user.create({
        data: userInput,
    });
};

export const getUser = (email: string) => {
    return client.user.findUniqueOrThrow({
        where: { email },
        select: { id: true, password: true },
    });
};

export const getUserById = (userId: string) =>
    client.user.findUniqueOrThrow({
        where: {
            id: userId,
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            role: true,
            created_at: true,
        },
    });
