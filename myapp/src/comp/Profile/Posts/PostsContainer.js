import {connect} from "react-redux";
import Posts from "./Posts";
import {addPostActionCreator} from "../../../reducers/postReducer";
import {getUserByLogin} from "../../../data/users";
import React from "react";
import Post from "../Post/Post";
import classes from "./Posts.module.css";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../Validated/TextArea/TextArea";
import {minLength} from "../../../utils/validators/minLength";

let lengthValidator = minLength(1);

let PostsForm = (props) => {
    return(
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <Field component={TextArea} name={"post"} className={classes.textarea} validate={[lengthValidator]}></Field>
            <button className={classes.button}>Submit</button>
        </form>
    );
}

let PostsFormRedux = reduxForm({form : "postsForm"})(PostsForm)

const PostContainer = (props) => {
    let renderPosts = () => props.posts.map((post) => {
        return (
            <Post text={post.text} likes={post.likes} ava={props.avatar}/>
        );
    });

    let addPost = (data) => {
        props.add(data.post);
    };

    if (props.login === "Whatruska"){
        return(
            <>
                <PostsFormRedux onSubmit={addPost}/>
                <Posts renderedPosts={renderPosts()} addPost={addPost}/>
            </>
        );
    } else {
        return (
            <>
                <Posts renderedPosts={renderPosts()} addPost={addPost}/>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return({
        arr : []
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
        posts : props.posts,
        avatar : user.avatar
    });
};

let ConnectedPostsContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(PostContainer);

export default ConnectedPostsContainer;