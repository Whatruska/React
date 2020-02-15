import React from "react";
import classes from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={classes.Friend}>
            <div className={classes.avatar}>
                <img className={classes.img} src={props.avatar} alt="Avatar"/>
            </div>
            <div className={classes.name}>
                {props.name}
            </div>
        </div>
    );
};

export default Friend;