import { ApiRequest } from "./base";

const BASE = "user";

export const UserListRequest = () => {
    return ApiRequest("get", BASE);
};
