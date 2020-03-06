import profilePageCopier from "../copiers/profilePageCopier";

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

export {toggleFetchingActionCreator, setProfileActionCreator};
export default profileReducer;