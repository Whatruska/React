import React from 'react';
import classes from './Posts.module.css';
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

const Posts = (props) => {
    return (
    <div className={classes.posts}>
        <h2>Posts</h2>
        <PostsFormRedux onSubmit={props.addPost}/>
        <div className={classes.list}>
            {props.renderedPosts}
        </div>
    </div>
    );
}

export default Posts;