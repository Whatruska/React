import React from "react";
import UserListItem from "./UserListItem/UserListItem";
import classes from "./UserList.module.css";

let getRenderedUserItems = (userItems, followCallback) => {
    debugger;
    return userItems.map((item) => {
        return <UserListItem user={item} follow={followCallback}/>
    });
};

let UserList = (props) => {
    debugger;
    let userItems = props.users;
    let renderedUsers = getRenderedUserItems(userItems, props.follow);
    return(
        <div className={classes.UserList}>
            {renderedUsers}
        </div>
    );
};

export default UserList;
