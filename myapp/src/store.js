import state from "./state";
import {addPost, append, addMsg} from "./state";

const ADD_POST = 'ADD-POST';
const APPEND = 'APPEND';
const ADD_MSG = 'ADD-MSG';

let store = {
    _state : state,
    getState : function () {
        return this._state;
    },
    _addPost : addPost,
    _append : append,
    _addMsg : addMsg,
    dispatch : function (action) {
        if (action.type === ADD_POST){
            this._addPost(action.post);
        } else if (action.type === APPEND){
            this._append(action.ch);
        } else if (action.type === ADD_MSG){
            this._addMsg(action.text, action.id);
        }
    }
};

const addPostActionCreator = (post) => {
    return {
        type : ADD_POST,
        post : post
    }
};

const appendActionCreator = (ch) => {
    return {
        type : APPEND,
        ch : ch
    }
};

const addMsgActionCreator = (msg, id) => {
    return{
        type : ADD_MSG,
        text : msg,
        id : id
    }
}

export {addPostActionCreator, appendActionCreator, addMsgActionCreator};
export default store;