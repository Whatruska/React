import React from "react";
import classes from "./Dialog.module.css";
import Message from "./Message/Message";

const Dialog = (props) => {
    let renderedMessages = props.messages.map((message) => {
        return(
            <Message author={message.author} text={message.text}/>
        );
    });

    let ref = React.createRef();

    return(
        <div className={classes.Dialog}>
            {renderedMessages}
            <form className={classes.form}>
                <textarea className={classes.textarea} ref={ref}></textarea>
                <button className={classes.button} onClick={(e) => {
                    //debugger;
                    e.preventDefault();
                    let text = ref.current.value;
                    if (text !== ""){
                        props.add(text, props.id);
                    }
                    ref.current.value = "";
                }}>Submit</button>
            </form>
        </div>
    );
};

export default Dialog;