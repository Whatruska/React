import React from "react";
import classes from "./Dialog.module.css";
import Message from "./Message/Message";
import store from "../../../redux_store";
import {addMsgActionCreator} from "../../../reducers/messageReducer";

const Dialog = (props) => {
    let renderedMessages = props.messages.map((message) => {
        return(
            <Message author={message.author} text={message.text}/>
        );
    });

    let ref = React.createRef();

    let add = () => {
        let text = ref.current.value;
        if (text !== ""){
            store.dispatch(
                addMsgActionCreator(text, props.id)
            );
        }
        ref.current.value = "";
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