import React from "react";
import classes from "./Dialog.module.css";
import {Field, reduxForm} from "redux-form";

let MessageForm = (props) => {
    return(
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"message"} className={classes.textarea}></Field>
            <button className={classes.button}>Submit</button>
        </form>
    );
}

let MessageFormRedux = reduxForm({form : "messageForm"})(MessageForm);

const Dialog = (props) => {
    return(
        <div className={classes.Dialog}>
            {props.renderedMessages}
            <MessageFormRedux onSubmit={props.addMsg}/>
        </div>
    );
};

export default Dialog;