import profilePageCopier from "../copiers/profilePageCopier";
import profileAPI from "../DAL/Profile/profileAPI";
import {getUserByLogin} from "../data/users";

let FETCH_TYPE = "FETCH";
let SET_PROFILE = "SET_PROFILE";
let SET_STATUS = "STATUS";

let initialState = {
    currentProfile : undefined,
    isFetching : true,
    status : ""
};

let profileReducer = (state = initialState, action) => {
    let stateCopy = profilePageCopier(state);
    switch (action.type) {
        case FETCH_TYPE : {
            stateCopy.isFetching = !stateCopy.isFetching;
            break;
        }

        case SET_PROFILE : {
            stateCopy.currentProfile = action.profile;
            break;
        }

        case SET_STATUS : {
            stateCopy.status = action.status;
            break;
        }

        default : {
            break;
        }
    }
    return stateCopy;
};

let toggleFetchingActionCreator = () => {
    return({
        type : FETCH_TYPE
    });
};

let setProfileActionCreator = (profile) => {
    return({
        type : SET_PROFILE,
        profile : profile
    });
};

let setStatusActionCreator = (status) => {
    return ({
        type : SET_STATUS,
        status : status
    });
};

let statusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatusRequest(userId).then((status) => {
            dispatch(setStatusActionCreator(status));
        });
    }
};

let requestThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileRequest(userId).then((profile) => {
            dispatch(setProfileActionCreator(profile));
            dispatch(toggleFetchingActionCreator());
        });
    }
};

let refreshThunkCreator = (userId, isFetching) => {
    return (dispatch) => {
        if (!isFetching){
            dispatch(toggleFetchingActionCreator());
        }
        let m = userId.match(new RegExp('\\d+'));
        if (m != null){
            dispatch(requestThunkCreator(userId));
        } else {
            let profile = getUserByLogin(userId);
            dispatch(setProfileActionCreator(profile));
            dispatch(toggleFetchingActionCreator());
        }
    }
};

export {toggleFetchingActionCreator, setProfileActionCreator, setStatusActionCreator, requestThunkCreator, refreshThunkCreator, statusThunkCreator};
export default profileReducer;