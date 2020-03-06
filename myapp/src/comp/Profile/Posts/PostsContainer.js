import {connect} from "react-redux";
import Posts from "./Posts";
import {addPostActionCreator} from "../../../reducers/postReducer";

let mapStateToProps = (state) => {
    let userPage = state.userPages;
    return({
        users : userPage
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        add :(post) => dispatch(addPostActionCreator(post))
    });
};

let mergeProps = (stateProps, dispatchProps, props) => {
    let login = props.login;
    let user = getUserByLogin(stateProps.users, login);
    return({
        add : dispatchProps.add,
        posts : user.posts,
        avatar : user.avatar
    });
};

let getUserByLogin = (users,login) => {
    for (let i = 0; i < users.length; i++){
        if (users[i].login === login){
            return users[i];
        }
    }
};

let PostsContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Posts);

export default PostsContainer;