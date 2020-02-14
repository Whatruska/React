import React from 'react';

import Post from '../Post/Post';

import classes from './Posts.module.css';

const Posts = () => {
    return (
    <div className={classes.posts}>
        <h2>Posts</h2>
        <form className={classes.form}>
            <textarea className={classes.textarea}></textarea>
            <button type="submit" className={classes.button}>Submit</button>
        </form>
        <div className={classes.list}>
            <Post />
            <Post />
        </div>
    </div>
    );
}

export default Posts;