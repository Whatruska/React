import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <div className={classes.Navbar}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <NavLink className={classes.link} to="../Profile" activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to="../Messages" activeClassName={classes.active}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to="../Settings" activeClassName={classes.active}>Settings</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;