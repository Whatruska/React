import {Anya, Misha, Zeka} from "../data/users";
import userListCopier from "../copiers/userListCopier";
import axios from "axios";

let FOLLOW_TYPE = "FOLLOW";
let UNFOLLOW_TYPE = "UNFOLLOW";
let SET_USERS = "USERS";
let SET_PAGE_COUNT = "SET_PAGE_COUNT";
let SET_PAGE_SIZE = "SET_PAGE_SIZE";
let TOGGLE_FETCH = "TOGGLE_FETCH";

let followUrl = "https://social-network.samuraijs.com/api/1.0";

let initialState = {
    users : [
        Anya, Misha, Zeka
    ],
    pageSize : 6,
    pageCount : 1,
    isFetching : false
};

let getUserByLogin = (users, login) => {
    for (let i = 0; i < users.length; i++){
        if (login === users[i].login){
            return users[i];
        }
    }
};

let userListReducer = (state = initialState, action) => {
    let stateCopy = userListCopier(state);
    switch (action.type) {
        case FOLLOW_TYPE : {
            stateCopy.isFetching = true;
            axios
                .post(followUrl + "/follow?userId=" + action.id)
                .then(() => {
                    stateCopy.isFetching = false;
                    return stateCopy;
                });
            break;
        }

        case UNFOLLOW_TYPE : {
            stateCopy.isFetching = true;
            axios
                .delete(followUrl + "/follow?userId=" + action.id)
                .then(() => {
                    stateCopy.isFetching = false;
                    return stateCopy;
                });
            break
        }

        case SET_USERS : {
            stateCopy.users = action.users;
            break;
        }

        case SET_PAGE_COUNT : {
            stateCopy.pageCount = action.count;
            break;
        }

        case SET_PAGE_SIZE : {

            break;
        }

        case TOGGLE_FETCH : {
            stateCopy.isFetching = !stateCopy.isFetching;
            break
        }

        default : {
            return stateCopy;
        }
    }
    return stateCopy;
};

let followActionCreator = (id) => {
    return ({
        type : FOLLOW_TYPE,
        id : id
    });
};

let unfollowActionCreator = (id) => {
    return ({
        type : UNFOLLOW_TYPE,
        id : id
    });
};

let setUsersActionCreator = (users) => {
    return({
        type : SET_USERS,
        users : users
    })
};

let setPageCountActionCreator = (count) => {
    return({
        type : SET_PAGE_COUNT,
        count : count
    });
};

let setPageSizeActionCreator = (size) => {
    return({
        type : SET_PAGE_SIZE,
        size : size
    });
};

let toggleFetchActionCreator = () => {
    return({
        type : TOGGLE_FETCH
    });
};

export {followActionCreator, setUsersActionCreator, setPageCountActionCreator, setPageSizeActionCreator, toggleFetchActionCreator, unfollowActionCreator};

export default userListReducer;