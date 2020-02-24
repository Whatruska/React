import React from "react";
import classes from "./Dialog.module.css";
import Message from "./Message/Message";
import {addMsgActionCreator} from "../../../store";
import store from "../../../store";

const Dialog = (props) => {
    let renderedMessages = props.messages.map((message) => {
        return(
            <Message author={message.author} text={message.text}/>
        );
    });

    let ref = React.createRef();

    let add = () => {
        let text = ref.current.value;
        store.dispatch(
            addMsgActionCreator(text, props.id)
        );
    };

    return(
        <div className={classes.Dialog}>
            {renderedMessages}
            <form className={classes.form}>
                <textarea className={classes.textarea} ref={ref}></textarea>
                <button className={classes.button} onClick={(e) => {
                    e.preventDefault();
                    add();
                }}>Submit</button>
            </form>
        </div>
    );
}

export default Dialog;