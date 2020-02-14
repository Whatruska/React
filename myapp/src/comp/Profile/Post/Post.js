import React from 'react';
import classes from './Post.module.css';
import ava from '../../../img/ava.jpeg';

const Post = (props) => {
    return(
        <div className={classes.Post}>
            <img className={classes.avatar} src={ava} alt='post author img'/>
            <div className={classes.text}>
                {props.text}
            </div>
            <div className={classes.likes}>
                <b>Likes : </b>{props.likes}
            </div>
        </div>
    );
};

export default Post;