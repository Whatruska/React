import dialogs from "../data/dialogs";
import {users} from "../data/users";

const ADD_MSG = 'ADD-MSG';

let initialState = {
    users: users,
    messages : dialogs,
    msg : ""
};

let addMsg = (text, id) => {
    for (let i = 0; i < dialogs.length; i++){
        if (dialogs[i].userId === id){
            let dialog = dialogs[i].dialog;
            dialog.push({
                text : text,
                author : "Me"
            });
        }
    }
};

export const addMsgActionCreator = (msg, id) => {
    return{
        type : ADD_MSG,
        text : msg,
        id : id
    }
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MSG : {
            addMsg(action.text, action.id);
            return state;
        }
        default : {
            return state;
        }
    }
};

export default messageReducer;
