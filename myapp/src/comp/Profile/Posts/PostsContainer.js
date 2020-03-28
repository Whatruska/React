import {connect} from "react-redux";
import Posts from "./Posts";
import {addPostActionCreator} from "../../../reducers/postReducer";
import {getUserByLogin} from "../../../data/users";
import React from "react";
import Post from "../Post/Post";
import classes from "./Posts.module.css";
import {Field, reduxForm} from "redux-form";

let PostsForm = (props) => {
    return(
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"post"} className={classes.textarea}></Field>
            <button className={classes.button}>Submit</button>
        </form>
    );
}

let PostsFormRedux = reduxForm({form : "postsForm"})(PostsForm)

class PostContainer extends React.Component{
    renderPosts = () => this.props.posts.map((post) => {
        return (
            <Post text={post.text} likes={post.likes} ava={this.props.avatar}/>
        );
    });

    addPost = (data) => {
        this.props.add(data.post);
    };

    render() {
        if (this.props.login === "Whatruska"){
            return(
                <>
                    <PostsFormRedux onSubmit={this.addPost}/>
                    <Posts renderedPosts={this.renderPosts()} addPost={this.addPost}/>
                </>
            );
        } else {
            return (
                <>
                    <Posts renderedPosts={this.renderPosts()} addPost={this.addPost}/>
                </>
            );
        }
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