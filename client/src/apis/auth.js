import { ApiRequest } from "./base";

const BASE = "auth";

export const RegisterRequest = (data) => {
    return ApiRequest("post", `${BASE}/register`, data);
};

export const LoginRequest = (data) => {
    return ApiRequest("post", `${BASE}/login`, data);
};
