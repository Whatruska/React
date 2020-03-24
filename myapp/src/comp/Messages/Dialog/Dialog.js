import React from "react";
import classes from "./Dialog.module.css";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../Validated/TextArea/TextArea";
import {required} from "../../../utils/validators/required";
import {maxLength} from "../../../utils/validators/maxLength";

const maxLengthValidator = maxLength(100);

let MessageForm = (props) => {
    return(
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <Field component={TextArea} name={"message"} validate={[required, maxLengthValidator]}></Field>
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