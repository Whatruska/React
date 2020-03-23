import {applyMiddleware, combineReducers, createStore} from "redux";
import messageReducer from "./reducers/messageReducer";
import postReducer from "./reducers/postReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import userListReducer from "./reducers/userListReducer";
import profileReducer from "./reducers/profileReducer";
import loginReducer from "./reducers/loginReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    messagesPage: messageReducer,
    userPages: postReducer,
    friendInfo: sidebarReducer,
    userList: userListReducer,
    profilePage: profileReducer,
    loginData : loginReducer,
    form : formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;