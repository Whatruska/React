import {Anya, Misha, Zeka} from "../data/users";
import userListCopier from "../copiers/userListCopier";
import userListAPI from "../DAL/UserList/userListAPI";
import followAPI from "../DAL/UserList/Follow/followAPI";

let FOLLOW_TYPE = "FOLLOW";
let UNFOLLOW_TYPE = "UNFOLLOW";
let SET_USERS = "USERS";
let SET_PAGE_COUNT = "SET_PAGE_COUNT";
let SET_PAGE_SIZE = "SET_PAGE_SIZE";
let TOGGLE_FETCH = "TOGGLE_FETCH";

let initialState = {
    users : [
        Anya, Misha, Zeka
    ],
    pageSize : 5,
    pageCount : 1,
    isFetching : false
};

let INC = "INC";
let DEC = "DEC";

let getUserByID = (id, users) => {
    for (let i = 0; i < users.length; i++){
        if (users[i].id === id){
            return users[i];
        }
    }
};

let userListReducer = (state = initialState, action) => {
    let stateCopy = userListCopier(state);
    switch (action.type) {
        case FOLLOW_TYPE : {
            let user = getUserByID(action.id, stateCopy.users);
            user.followed = true;
            break;
        }

        case UNFOLLOW_TYPE : {
            let user = getUserByID(action.id, stateCopy.users);
            user.followed = false;
            break;
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

let refreshThunkCreator = (mode, pageCount, pageSize) => (dispatch) => {
    dispatch(toggleFetchActionCreator());
    if (mode){
        switch (mode) {
            case INC : {
                dispatch(setPageCountActionCreator(++pageCount));
                break;
            }

            case DEC : {
                if (pageCount > 1){
                    dispatch(setPageCountActionCreator(--pageCount));
                }
                break;
            }
            default : {
                break;
            }
        }
    }
    userListAPI.getPageRequest(pageCount, pageSize).then((items) => {
        dispatch(setUsersActionCreator(items));
        dispatch(toggleFetchActionCreator());
    });
};

let followThunkCreator = (id) => (dispatch) => {
    dispatch(toggleFetchActionCreator());
    followAPI.getFollowRequest(id).then(
        (data) => {
            if (data.resultCode === 0){
                dispatch(followActionCreator(id));
            }
            dispatch(toggleFetchActionCreator());
        }
    );
};

let unfollowThunkCreator = (id) => (dispatch) => {
    dispatch(toggleFetchActionCreator());
    followAPI.getUnfollowRequest(id).then(
        (data) => {
            if (data.resultCode === 0){
                dispatch(unfollowActionCreator(id));
            }
            dispatch(toggleFetchActionCreator());
        }
    );
};

export {followActionCreator, setUsersActionCreator, setPageCountActionCreator, setPageSizeActionCreator, toggleFetchActionCreator, unfollowActionCreator, INC, DEC, refreshThunkCreator, followThunkCreator, unfollowThunkCreator};

export default userListReducer;