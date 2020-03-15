const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";
const API_KEY = "584af9e6-8cd1-4b21-a823-66525ee43aae";

const POST_HEADER = {
    "API-KEY" : API_KEY
};

const DEFAULT_CONFIG = {
    withCredentials : true
};

const POST_CONFIG = {
    withCredentials: true,
    headers : POST_HEADER
};

export {API_KEY, BASE_URL, POST_HEADER, POST_CONFIG, DEFAULT_CONFIG};