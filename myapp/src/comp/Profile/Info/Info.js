import React from 'react';
import classes from './Info.module.css';

const Info = (props) => {
    return(
        <div className={classes.Info}>
            <img className={classes.avatar} src={props.avatar} alt="Ava"/>
            <div className={classes.data}>
                <span className={classes.fio}>{props.login}</span>
                <span className={classes.date}>Birth date : {props.date}</span>
                <span className={classes.city}>City : {props.city}</span>
                <span className={classes.contacts}>
                    <span className={classes.phone}> Tel : {props.phone}</span>
                    <span className={classes.vk}> Vk : {props.vk}</span>
                </span>
            </div>
        </div>
    );
}

export default Info;