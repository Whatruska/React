import axios from "axios";

const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";
const API_KEY = "584af9e6-8cd1-4b21-a823-66525ee43aae";

const api = axios.create({
    baseURL : BASE_URL,
    withCredentials : true,
    headers : {
        "API-KEY" : API_KEY
    }
});

export default api;