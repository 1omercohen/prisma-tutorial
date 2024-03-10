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
