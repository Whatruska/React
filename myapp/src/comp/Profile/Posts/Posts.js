import React from 'react';
import classes from './Posts.module.css';

const Posts = (props) => {
    return (
    <div className={classes.posts}>
        <h2>Posts</h2>
        <div className={classes.list}>
            {props.renderedPosts}
        </div>
    </div>
    );
}

export default Posts;