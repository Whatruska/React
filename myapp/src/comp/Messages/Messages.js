import React from "react";

import classes from './Messages.module.css';
import User from "./User/User";
import Dialog from "./Dialog/Dialog";
import {Route} from "react-router-dom";

const Messages = (props) => {
    let state = props.state;
    console.log(props);
    let renderedUsers = state.users.map((user) => {
        return (
            <User id={user.id} name={user.name}/>
        );
    });
    let renderedDialogs = state.messages.map((d) => {
        return(
            <Route path={'/Messages/' + d.userId} exact render={() => <Dialog id={d.userId} messages={d.dialog}/>}/>
        );
    });
    return (
        <div className={classes.Messages}>
            <div className={classes.users}>
                {renderedUsers}
            </div>
            {renderedDialogs}
        </div>
    );
}

export default Messages;