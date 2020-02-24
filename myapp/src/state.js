
import render from "./render";
import {users, Anya, Zeka, Misha, Me, friends} from "./data/users";
import dialogs from "./data/dialogs";
import posts from "./data/posts";

let state = {
    messagesPage : {
        users: users,
        messages : dialogs
    },
    friendInfo : friends,
    userPages : [
        Me, Anya, Zeka, Misha
    ],
    msg : ""
};

let addPost = (post) => {
    posts[0].p.push(
        {
            text : post,
            likes: 0
        }
    );
    render(state);
    state.msg = "";
};

let append = (ch) => {
    state.msg = state.msg + ch;
    render(state);
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
    render(state);
}


export {addPost, append, addMsg};
export default state;