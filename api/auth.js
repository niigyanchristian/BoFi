import apiClient from "./client";

const login =(data) => apiClient.post('login',data);

export default {
    login
}