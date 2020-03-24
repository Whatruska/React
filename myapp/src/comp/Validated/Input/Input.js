import classes from "./Input.module.css";
import React from "react";

export const Input = ({input, meta, ...props}) => {
    return(
        <div className={classes.Input}>
            <input {...input} {...props} className={classes.input + (meta.error && meta.touched ? " " + classes.error : "")}/>
            {meta.error && meta.touched ? <div className={classes.span}>{meta.error}</div> : <></>}
        </div>
    );
}