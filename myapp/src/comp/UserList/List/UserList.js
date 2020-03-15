import React from "react";
import classes from "./UserList.module.css";
import Preloader from "../../Preloader/Preloader";

let UserList = (props) => {
    return(
        <div className={classes.UserList}>
            {props.isFetching
                ? <Preloader/>
            : <div className={classes.wrapper}>
                {props.renderedUsers}
              </div>
            }
            <div className={classes.btns_wrapper}>
                <button onClick={() => {
                    props.refresh(props.dec);
                }} className={classes.btn} disabled={props.isFetching}>{"<<<"}</button>
                <div className={classes.page_counter}>
                    Page number : {props.pageCount}
                </div>
                <button onClick={() => {
                    props.refresh(props.inc);
                }} className={classes.btn} disabled={props.isFetching}>{">>>"}</button>
            </div>
        </div>
    );
};

export default UserList;