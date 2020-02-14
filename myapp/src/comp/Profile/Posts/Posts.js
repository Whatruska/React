import React from 'react';

import Post from '../Post/Post';

import classes from './Posts.module.css';

const Posts = (props) => {
    return (
    <div className={classes.posts}>
        <h2>Posts</h2>
        <form className={classes.form}>
            <textarea className={classes.textarea}></textarea>
            <button type="submit" className={classes.button}>Submit</button>
        </form>
        <div className={classes.list}>
            <Post text={props.posts[0].text} likes={props.posts[0].likes}/>
            <Post text={props.posts[1].text} likes={props.posts[1].likes}/>
        </div>
    </div>
    );
}

export default Posts;