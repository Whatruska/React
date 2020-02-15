import React from 'react';
import classes from './Info.module.css';

const Info = (props) => {
    let info = props.userInfo;
    let images = props.images;
    return(
        <div className={classes.Info}>
            <img className={classes.avatar} src={images.avatar} alt="Ava"/>
            <div className={classes.data}>
                <span className={classes.fio}>{info.login}</span>
                <span className={classes.date}>Birth date : {info.date}</span>
                <span className={classes.city}>City : {info.city}</span>
                <span className={classes.contacts}>
                    <span className={classes.phone}> Tel : {info.phone}</span>
                    <span className={classes.vk}> Vk : {info.vk}</span>
                </span>
            </div>
        </div>
    );
}

export default Info;