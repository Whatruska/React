import api from "../../api";

const FOLLOW_URL = "follow/";

let formLoginRequest = (id) => {
    return FOLLOW_URL + id;
};

const followAPI = {
    getFollowRequest : (id) => {
        return api.post(formLoginRequest(id),{}).then((response) => response.data);
    },

    getUnfollowRequest : (id) => {
        return api.delete(formLoginRequest(id)).then((response) => response.data);
    }
};

export default followAPI;

