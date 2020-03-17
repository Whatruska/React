import api from "../api";
import avatar from "../../img/user.png";
import header from "../../img/profile-header.jpeg";

const USERS_URL = "users";

let formPageRequestUrl = (count = 1, size = 10) => {
    return USERS_URL + "?page=" + count + "&count=" + size
};

const userListAPI = {
    getPageRequest : (count, size) => {
        return api.get(formPageRequestUrl(count, size)).then((response) => {
                return response.data.items.map((response) =>{
                    return {
                        id : response.id,
                        login:response.name,
                        followed: response.followed,
                        avatar: response.photos.large === null ? avatar : response.photos.large,
                        date: "00.00.0000",
                        city: "NaN",
                        phone: "NaN",
                        vk: "NaN",
                        header: header,
                        posts: [],
                    }});
        });
    }
};

export default userListAPI;