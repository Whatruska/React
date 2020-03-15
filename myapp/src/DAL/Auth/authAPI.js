import {BASE_URL, DEFAULT_CONFIG, POST_CONFIG} from "../api";
import axios from "axios";

const AUTH_URL = BASE_URL + "auth/me";
const LOGIN_URL = BASE_URL + "auth/login";

const getAuthRequest = () => {
    return axios.get(AUTH_URL, DEFAULT_CONFIG);
};

let formLoginUrl = (email, pass) => {
    return LOGIN_URL + "?email=" + email + "&password=" + pass
};

const getLoginRequest = (email, pass) => {
    return axios.post(formLoginUrl(email, pass), {}, POST_CONFIG)
};

const getLogoutRequest = () => {
    return axios.delete(LOGIN_URL, DEFAULT_CONFIG);
};

export {getAuthRequest, getLoginRequest, getLogoutRequest}

