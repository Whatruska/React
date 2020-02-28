import React from "react";
import classes from "./Dialog.module.css";
import Message from "./Message/Message";
import Context from "../../Context/Context";
import {addMsgActionCreator} from "../../../reducers/messageReducer";

const Dialog = (props) => {
    let renderedMessages = props.messages.map((message) => {
        return(
            <Message author={message.author} text={message.text}/>
        );
    });

    let ref = React.createRef();

    let add = (store) => {
        let text = ref.current.value;
        if (text !== ""){
            store.dispatch(
                addMsgActionCreator(text, props.id)
            );
        }
        ref.current.value = "";
    };

    return(
        <Context.Consumer>
            {
                (store) => (
                    <div className={classes.Dialog}>
                        {renderedMessages}
                        <form className={classes.form}>
                            <textarea className={classes.textarea} ref={ref}></textarea>
                            <button className={classes.button} onClick={(e) => {
                                e.preventDefault();
                                add(store);
                            }}>Submit</button>
                        </form>
                    </div>
                )
            }
        </Context.Consumer>
    );
};

export default Dialog;