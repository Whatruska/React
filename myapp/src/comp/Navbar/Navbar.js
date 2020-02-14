import React from 'react';
import classes from './Navbar.module.css';
import Link from "./Link/Link";


const Navbar = () => {
    return(
        <div className={classes.Navbar}>
            <ul className={classes.list}>
                <Link to="Feed"/>
                <Link to="Friends"/>
                <Link to="Profile"/>
                <Link to="Messages"/>
            </ul>
        </div>
    );
}

export default Navbar;