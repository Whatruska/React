import React from "react";
import classes from './Sidebar.module.css';
import Friend from "./Friend/Friend";

const Sidebar = (props) => {
    let info = props.state;
    let renderedFriends = info.map((friend) => {
        return (
            <Friend avatar={friend.avatar} name={friend.name}/>
        );
    });
    return(
        <div className={classes.Sidebar}>
            <h2 className={classes.heading}>Friends</h2>
            <div className={classes.friends}>
                {renderedFriends}
            </div>
         </div>
    );
};

export default Sidebar;