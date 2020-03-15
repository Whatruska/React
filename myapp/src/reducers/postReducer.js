import {Anya, Zeka, Misha, Me} from "../data/users";
import getUserPagesCopy from "../copiers/userPagesCopier";

const ADD_POST = 'ADD-POST';

let initialState = {
    users :[Me, Zeka, Misha, Anya],
    myPostsCount : 2
};

const postReducer = (state = initialState, action) => {

    let stateCopy = getUserPagesCopy(state);

    switch (action.type) {
        case ADD_POST : {
            stateCopy.users[0].posts.push({
                text : action.post,
                likes: 0
            });
            stateCopy.myPostsCount++;
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