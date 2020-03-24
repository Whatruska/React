import React from "react";
import classes from "./TextArea.module.css";

export const TextArea = ({input, meta, ...props}) => {
    return(
        <div className={classes.TextArea}>
            <textarea {...input} {...props} className={classes.textarea + (meta.error && meta.touched ? " " + classes.error : "")}/>
            {meta.error && meta.touched ? <div className={classes.span}>{meta.error}</div> : <></>}
        </div>
    );
}