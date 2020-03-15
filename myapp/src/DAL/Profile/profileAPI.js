import api from "../api";

const PROFILE_URL = "profile/";

let formProfileUrl = (userId) => {
    return PROFILE_URL + userId
};

const profileAPI = {
    getProfileRequest : (userId) => {
        return api.get(formProfileUrl(userId)).then((response) => response.data);
    }
};

export default profileAPI;