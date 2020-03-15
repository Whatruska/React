import axios from "axios";
import {BASE_URL} from "../api";

const PROFILE_URL = BASE_URL + "profile/";

let formProfileUrl = (userId) => {
    return PROFILE_URL + userId
};

const getProfileRequest = (userId) => {
    return axios.get(formProfileUrl(userId));
};

export {getProfileRequest}