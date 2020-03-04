import {Anya, Misha, Zeka} from "../data/users";
import userListCopier from "../copiers/userListCopier";

let FOLLOW_TYPE = "FOLLOW";

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
    if (action.type === FOLLOW_TYPE){
        let user = getUserByLogin(stateCopy.users, action.login);
        user.followed = action.follow;
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

export {followActionCreator};

export default userListReducer;