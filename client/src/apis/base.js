import axios from "axios";

const BASE_URL = "http://localhost:3333";

const config = {
    withCredentials: true,
};

const postRequset = (requestUrl, data) => {
    return axios.post(`${BASE_URL}/${requestUrl}`, data, config);
};

const getRequest = (requestUrl) => {
    return axios.get(`${BASE_URL}/${requestUrl}`, config);
};

const requestMap = {
    post: postRequset,
    get: getRequest,
};

export const ApiRequest = (method, requestUrl, data) => {
    return requestMap[method](requestUrl, data);
};
