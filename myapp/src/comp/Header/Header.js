import React from 'react';
import logo from '../../logo.svg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <div className={classes.logo_wrapper}>
                <img src={logo} className={classes.logo} alt="Web App Logo"/>
                <span className={classes.heading}>Web App</span>
            </div>
            {props.email
                ? <div className={classes.login_block}>
                    <div className={classes.email}>
                        {props.email}
                    </div>
                    <button className={classes.logout} onClick={props.logout}>Log out</button>
                </div>
                : <></>
            }
        </div>
    );
};

export default Header;