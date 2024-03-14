import { ApiRequest } from "./base";

const BASE = "task";

export const GetTasksRequest = () => {
    return ApiRequest("get", `${BASE}`);
};

export const CreateTaskRequset = (data) => {
    return ApiRequest("post", `${BASE}`, data);
};
