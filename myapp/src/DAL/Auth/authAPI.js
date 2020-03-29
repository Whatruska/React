import api from "../api";

const AUTH_URL = "auth/me";
const LOGIN_URL = "auth/login";

let formLoginUrl = (email, pass, remember) => {
    return LOGIN_URL + "?email=" + email + "&password=" + pass + "&rememberMe=" + remember;
};

const authAPI = {
     getAuthRequest : () => {
        return api.get(AUTH_URL).then((response) => response.data);
    },

     getLoginRequest : (email, pass, remember) => {
        return api.post(formLoginUrl(email, pass, remember)).then((response) => response.data);
    },

     getLogoutRequest : () => {
        return api.delete(LOGIN_URL).then((response) => response.data);
    }
};

export default authAPI;

