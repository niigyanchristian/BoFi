import apiClient from "./client";

const endpoint='predict';
const predict = (userInfo) => apiClient.post(endpoint, userInfo);
export default{
    predict
}