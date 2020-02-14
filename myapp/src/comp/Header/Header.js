import React from 'react';
import logo from '../../logo.svg';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.Header}>
            <img src={logo} className={classes.logo} alt="Web App Logo"/>
            <span className={classes.heading}>Web App</span>
        </div>
    );
}

export default Header;