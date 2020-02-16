import React from 'react';

import Post from '../Post/Post';

import classes from './Posts.module.css';

const Posts = (props) => {
    let renderedPosts = props.posts.map((post) => {
        return (
            <Post text={post.text} likes={post.likes} ava={props.avatar}/>
        );
    });
    return (
    <div className={classes.posts}>
        <h2>Posts</h2>
        <form className={classes.form}>
            <textarea className={classes.textarea}></textarea>
            <button type="submit" className={classes.button}>Submit</button>
        </form>
        <div className={classes.list}>
            {renderedPosts}
        </div>
    </div>
    );
}

export default Posts;