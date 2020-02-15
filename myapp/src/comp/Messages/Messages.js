import React from "react";

import classes from './Messages.module.css';
import User from "./User/User";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {
    let renderedUsers = props.users.map((user) => {
        return (
            <User id={user.id} name={user.name}/>
        );
    });
    return (
        <div className={classes.Messages}>
            <div className={classes.users}>
                {renderedUsers}
            </div>
            <Dialog id='1' messages={props.messages}/>
        </div>
    );
}

export default Messages;