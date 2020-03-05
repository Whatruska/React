import {Anya, Misha, Zeka} from "../data/users";
import userListCopier from "../copiers/userListCopier";

let FOLLOW_TYPE = "FOLLOW";
let SET_USERS = "USERS";

let initialState = {
    users : [
        Anya, Misha, Zeka
    ]
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
            let user = getUserByLogin(stateCopy.users, action.login);
            user.followed = action.follow;
            break;
        }
        case SET_USERS : {
            stateCopy.users = action.users;
            break;
        }

        default : {
            return stateCopy;
        }
    }
    return stateCopy;
};

let followActionCreator = (follow, login) => {
    return ({
        type : FOLLOW_TYPE,
        follow : follow,
        login : login
    });
};

let setUsersActionCreator = (users) => {
    return({
        type : SET_USERS,
        users : users
    })
};

export {followActionCreator, setUsersActionCreator};

export default userListReducer;