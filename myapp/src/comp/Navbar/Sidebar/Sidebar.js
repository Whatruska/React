import React from "react";
import classes from './Sidebar.module.css';
import Friend from "./Friend/Friend";
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    let info = props.state.friends;
    let renderedFriends = info.map((friend) => {
        return (
            <NavLink to={"../Friend/" + friend.name} active={classes.active}>
                <Friend avatar={friend.avatar} name={friend.name}/>
            </NavLink>
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