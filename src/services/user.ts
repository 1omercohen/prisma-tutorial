import { Prisma } from "@prisma/client";
import { client } from "../utils/prisma";

export const getUsers = () => {
    return client.user.findMany({
        select: { id: true, first_name: true, last_name: true },
    });
};
