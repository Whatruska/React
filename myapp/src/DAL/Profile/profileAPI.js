import api from "../api";
import My_avatar from "../../img/ava.jpeg";
import profile_header from "../../img/profile-header.jpeg";

const PROFILE_URL = "profile/";
const STATUS_URL = PROFILE_URL + "status/";

let formProfileUrl = (userId) => {
    return PROFILE_URL + userId
};

let formStatusUrl = (userId) => {
    return STATUS_URL + userId;
};

const profileAPI = {
    getProfileRequest : (userId) => {
        return api.get(formProfileUrl(userId)).then((response) => response.data).then((response) => {
            return {
                id : response.userId,
                login : response.fullName,
                date : "Idcr",
                city : "Omsk",
                phone : "+00000000000",
                vk : response.contacts.vk,
                avatar : response.photos.large === null ? My_avatar : response.photos.large,
                header: profile_header
            };
        });
    },
    getStatusRequest : (userId) => {
        return api.get(formStatusUrl(userId)).then((response) => response.data);
    }
};

export default profileAPI;