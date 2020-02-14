import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return(
        <div className={classes.Post}>
            <div className={classes.avatar}/>
            <div className={classes.text}>
                Some text
            </div>
        </div>
    );
};

export default Post;