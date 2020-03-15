import {BASE_URL, DEFAULT_CONFIG} from "../api";
import axios from "axios";

const USERS_URL = BASE_URL + "users";

let formPageRequestUrl = (count = 1, size = 10) => {
    return USERS_URL + "?page=" + count + "&count=" + size
};

const getPageRequest = (count, size) => {
    return axios.get(formPageRequestUrl(count, size), DEFAULT_CONFIG)
};

export {getPageRequest};