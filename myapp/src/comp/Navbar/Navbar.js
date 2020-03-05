import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = (props) => {
    return(
        <div className={classes.Navbar}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <NavLink className={classes.link} to="../User/Whatruska" activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to="../Messages" activeClassName={classes.active}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to="../UserListAPIComponent" activeClassName={classes.active}>Users</NavLink>
                </li>
            </ul>
            <Sidebar state={props.state}/>
        </div>
    );
}

export default Navbar;