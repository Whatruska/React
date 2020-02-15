import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
    return(
        <div className={classes.Message}>
            <div className={classes.author}>
                {props.author + " : "}
            </div>
            <div className={classes.text}>
                {props.text}
            </div>
        </div>
    );
}

export default Message;