import React from "react";
import classes from './Messages.module.css';
import User from "./User/User";
import {Route} from "react-router-dom";
import DialogContainer from "./Dialog/DialogContainer";

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
            <Route path={'/Messages/' + d.userId} exact render={() => <DialogContainer id={d.userId}/>}/>
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