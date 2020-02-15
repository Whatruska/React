import React from "react";
import classes from "./Dialog.module.css";
import Message from "./Message/Message";

const Dialog = (props) => {
    let renderedMessages = props.messages.map((message) => {
        return(
            <Message author={message.author} text={message.text}/>
        );
    });
    return(
        <div className={classes.Dialog}>
            {renderedMessages}
        </div>
    );
}

export default Dialog;