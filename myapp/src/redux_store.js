import {combineReducers, createStore} from "redux";
import messageReducer from "./reducers/messageReducer";
import postReducer from "./reducers/postReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import userListReducer from "./reducers/userListReducer";
import profileReducer from "./reducers/profileReducer";

let reducers = combineReducers({
    messagesPage: messageReducer,
    userPages: postReducer,
    friendInfo: sidebarReducer,
    userList: userListReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

export default store;