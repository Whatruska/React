import {combineReducers, createStore} from "redux";
import messageReducer from "./reducers/messageReducer";
import postReducer from "./reducers/postReducer";
import sidebarReducer from "./reducers/sidebarReducer";

let reducers = combineReducers({
    messagesPage: messageReducer,
    userPages: postReducer,
    friendInfo: sidebarReducer
});

let store = createStore(reducers);

export default store;