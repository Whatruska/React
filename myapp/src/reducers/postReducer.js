import {Anya, Zeka, Misha, Me} from "../data/users";
import getUserPagesCopy from "../copiers/userPagesCopier";

const ADD_POST = 'ADD-POST';

let initialState = [
    Me, Zeka, Misha, Anya
];

const postReducer = (state = initialState, action) => {

    let stateCopy = getUserPagesCopy(state);
    debugger;

    switch (action.type) {
        case ADD_POST : {
            stateCopy[0].posts.push({
                text : action.post,
                likes: 0
            });
            return stateCopy;
        }
        default :{
            return stateCopy;
        }
    }
};

export const addPostActionCreator = (post) => {
    return {
        type : ADD_POST,
        post : post
    }
};

export default postReducer;