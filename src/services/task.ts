import { Prisma } from "@prisma/client";
import { client } from "../utils/prisma";

export const getAllTaskToUser = (userId: string) => {
    const query: Prisma.TaskFindManyArgs<any> = {
        relationLoadStrategy: "join",
        include: {
            assign_to: {
                where: {
                    user_id: userId,
                },
            },
            reporter: {
                where: {
                    user_id: userId,
                },
            },
        },
    };
    return client.task.findMany(query);
};

export const CreateTask = (
    taskDetail: any,
    reporterId: string,
    assignTo: string
) => {
    const query: Prisma.TaskCreateInput = {
        ...taskDetail,
        reporter: {
            create: {
                user_id: reporterId,
            },
        },
        ...(assignTo && { assign_to: { create: { user_id: assignTo } } }),
    };
    return client.task.create({ data: query });
};
