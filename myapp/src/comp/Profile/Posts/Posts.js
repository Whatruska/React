import React from 'react';
import Post from '../Post/Post';
import {Route} from "react-router-dom";
import classes from './Posts.module.css';
import {addPostActionCreator} from "../../../reducers/postReducer";
import Context from "../../Context/Context";

const Posts = (props) => {
    let renderedPosts = props.posts.map((post) => {
        return (
            <Post text={post.text} likes={post.likes} ava={props.avatar}/>
        );
    });

    let ref = React.createRef();

    let add = (store) => {
        if (ref.current.value !== ""){
            let post = ref.current.value;
            store.dispatch(
                addPostActionCreator(post)
            );
        }
        ref.current.value = "";
    };

    return (
    <div className={classes.posts}>
        <h2>Posts</h2>
        <Route path={"/User/Whatruska"} exact>
            <Context.Consumer>
                {
                    (store) => (
                        <form className={classes.form}>
                            <textarea className={classes.textarea} ref={ref}></textarea>
                            <button className={classes.button} onClick={(e) => {
                                e.preventDefault();
                                add(store);
                            }}>Submit</button>
                        </form>
                    )
                }
            </Context.Consumer>
        </Route>
        <div className={classes.list}>
            {renderedPosts}
        </div>
    </div>
    );
}

export default Posts;