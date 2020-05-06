import axios from "axios";

const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";
const API_KEY = "bba2ac1a-9c7c-4d15-b0e3-ba9dcc3dbeb7";

const api = axios.create({
    baseURL : BASE_URL,
    withCredentials : true,
    headers : {
        "API-KEY" : API_KEY,
        "Content-Type" : "application/json"
    }
});

export default api;