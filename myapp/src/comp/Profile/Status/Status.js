import React from "react";
import classes from "./Status.module.css";

let link = React.createRef();

let Status = (props) => {
    if (!props.editMode){
        return (
            <div onDoubleClick={props.activateEdit} className={classes.status}>
                Status : {props.status}
            </div>
        );
    } else if (props.id < 5) {
        return (
            <input type={"text"} className={classes.input} ref={link} onBlur={() => {
                props.updateStatus(link.current.value);
                props.deactivateEdit();
            }
            }/>
        );
    } else {
        return (
            <div className={classes.status}>
                Status : {props.status}
            </div>
        );
    }
}

export default Status;