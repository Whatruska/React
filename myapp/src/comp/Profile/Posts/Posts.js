import React from 'react';
import Post from '../Post/Post';
import classes from './Posts.module.css';

const Posts = (props) => {
    let renderedPosts = props.posts.map((post) => {
        return (
            <Post text={post.text} likes={post.likes} ava={props.avatar}/>
        );
    });

    let ref = React.createRef();

    debugger;
    return (
    <div className={classes.posts}>
        <h2>Posts</h2>
            {props.login === "Whatruska"
                ? <form className={classes.form}>
                    <textarea className={classes.textarea} ref={ref}></textarea>
                    <button className={classes.button} onClick={(e) => {
                        e.preventDefault();
                        let text = ref.current.value;
                        if (text !== ""){
                            props.add(text);
                        }
                        ref.current.value = "";
                    }}>Submit</button>
                 </form>
                : <></>
            }

        <div className={classes.list}>
            {renderedPosts}
        </div>
    </div>
    );
}

export default Posts;