import React from "react";
import classes from "./User.module.css";
import {NavLink} from "react-router-dom";

const User = (props) => {
    return(
        <div className={classes.user}>
            <NavLink to={"/Messages/" + props.id} className={classes.link} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}

export default User;