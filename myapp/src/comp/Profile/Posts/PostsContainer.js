import {connect} from "react-redux";
import Posts from "./Posts";
import {addPostActionCreator} from "../../../reducers/postReducer";
import {getUserByLogin} from "../../../data/users";

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
    let user = getUserByLogin(login);
    return({
        login : login,
        add : dispatchProps.add,
        posts : user.posts,
        avatar : user.avatar
    });
};

let PostsContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Posts);

export default PostsContainer;