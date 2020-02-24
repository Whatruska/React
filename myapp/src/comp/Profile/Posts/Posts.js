import React from 'react';

import Post from '../Post/Post';
import {Route} from "react-router-dom";
import classes from './Posts.module.css';
import store from "../../../store";
import {addPostActionCreator, appendActionCreator} from "../../../store";

const Posts = (props) => {
    let renderedPosts = props.posts.map((post) => {
        return (
            <Post text={post.text} likes={post.likes} ava={props.avatar}/>
        );
    });

    let ref = React.createRef();

    let add = () => {
        if (ref.current.value !== ""){
            let post = ref.current.value;
            store.dispatch(
                addPostActionCreator(post)
            );
        }
        ref.current.value = "";
    };

    let append = (e) => {
        let ch = e.key;
        if (e.keyCode >= 65 && e.keyCode <= 90){
            e.preventDefault();
            store.dispatch(
                appendActionCreator(ch)
            );
            ref.current.value = props.msg + ch;
        }
    };

    return (
    <div className={classes.posts}>
        <h2>Posts</h2>
        <Route path={"/User/Whatruska"} exact>
            <form className={classes.form}>
                <textarea className={classes.textarea} ref={ref} onKeyDown={(e) => {
                    append(e);
                }}></textarea>
                <button className={classes.button} onClick={(e) => {
                    e.preventDefault();
                    add();
                }}>Submit</button>
            </form>
        </Route>
        <div className={classes.list}>
            {renderedPosts}
        </div>
    </div>
    );
}

export default Posts;