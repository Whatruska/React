import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return(
        <div className={classes.Navbar}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <a className={classes.link} href="#Feed">Feed</a>
                </li>
                <li className={classes.item}>
                    <a className={classes.link} href="#Friends">Friends</a>
                </li>
                <li className={classes.item}>
                    <a className={`${classes.link} ${classes.active}`} href="#Profile">Profile</a>
                </li>
                <li className={classes.item}>
                    <a className={classes.link} href="#Messages">Messages</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;