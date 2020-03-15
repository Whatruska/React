import api from "../api";

const AUTH_URL = "auth/me";
const LOGIN_URL = "auth/login";

let formLoginUrl = (email, pass) => {
    return LOGIN_URL + "?email=" + email + "&password=" + pass
};

const authAPI = {
     getAuthRequest : () => {
        return api.get(AUTH_URL).then((response) => response.data);
    },

     getLoginRequest : (email, pass) => {
        return api.post(formLoginUrl(email, pass)).then((response) => response.data);
    },

     getLogoutRequest : () => {
        return api.delete(LOGIN_URL).then((response) => response.data);
    }
};

export default authAPI;

