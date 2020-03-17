import profilePageCopier from "../copiers/profilePageCopier";
import profileAPI from "../DAL/Profile/profileAPI";
import {getUserByLogin} from "../data/users";

let FETCH_TYPE = "FETCH";
let SET_PROFILE = "SET_PROFILE";

let initialState = {
    currentProfile : undefined,
    isFetching : true
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
        debugger;
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
}

export {toggleFetchingActionCreator, setProfileActionCreator, requestThunkCreator, refreshThunkCreator};
export default profileReducer;