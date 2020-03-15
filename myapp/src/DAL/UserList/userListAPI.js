import api from "../api";

const USERS_URL = "users";

let formPageRequestUrl = (count = 1, size = 10) => {
    return USERS_URL + "?page=" + count + "&count=" + size
};

const userListAPI = {
    getPageRequest : (count, size) => {
        return api.get(formPageRequestUrl(count, size)).then((response) => response.data)
    }
};

export default userListAPI;