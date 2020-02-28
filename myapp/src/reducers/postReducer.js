import {Anya, Zeka, Misha, Me} from "../data/users";
import posts from "../data/posts";

const ADD_POST = 'ADD-POST';

let initialState = [
    Anya, Zeka, Misha, Me
];

let addPost = (state, post) => {
    posts[0].p.push(
        {
            text : post,
            likes: 0
        }
    );
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            addPost(state, action.post);
            return state;
        }
        default :{
            return state;
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