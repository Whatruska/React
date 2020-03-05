import React from "react";
import classes from "./UserList.module.css";

let UserList = (props) => {
    return(
        <div className={classes.UserList}>
            <div className={classes.wrapper}>
                {props.renderedUsers}
            </div>
            <div className={classes.btns_wrapper}>
                <button onClick={() => {
                    props.refresh(props.dec);
                }} className={classes.btn}>{"<<<"}</button>
                <div className={classes.page_counter}>
                    Page number : {props.pageCount}
                </div>
                <button onClick={() => {
                    props.refresh(props.inc);
                }} className={classes.btn}>{">>>"}</button>
            </div>
        </div>
    );
};

export default UserList;