import dialogs from "../data/dialogs";
import {users} from "../data/users";
import getDeepMessagesPageCopy from "../copiers/messagesPageCopier";

const ADD_MSG = 'ADD-MSG';

let initialState = {
    users: users,
    messages : dialogs,
    msg : ""
};

export const addMsgActionCreator = (msg, id) => {
    return{
        type : ADD_MSG,
        text : msg,
        id : id
    }
};

export const messageReducer = (state = initialState, action) => {

    let stateCopy = getDeepMessagesPageCopy(state);

    switch (action.type) {
        case ADD_MSG : {
            for (let i = 0; i < stateCopy.messages.length; i++){
                if (stateCopy.messages[i].userId === action.id){
                    stateCopy.messages[i].dialog.push({
                        text : action.text,
                        author : "Me"
                    });
                    return stateCopy;
                }
            }
            break;
        }
        default : {
            return stateCopy;
        }
    }
};

export default messageReducer;
