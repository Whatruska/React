import {BASE_URL, POST_CONFIG} from "../../api";
import axios from "axios";

const FOLLOW_URL = BASE_URL + "follow/";

let formLoginRequest = (id) => {
    return FOLLOW_URL + id;
};

const getFollowRequest = (id) => {
    return axios.post(formLoginRequest(id),{}, POST_CONFIG)
};

const getUnfollowRequest = (id) => {
    return axios.delete(formLoginRequest(id), POST_CONFIG)
};

export {getFollowRequest, getUnfollowRequest}