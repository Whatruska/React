import React from 'react';
import classes from './Info.module.css';
import avatar from '../../../img/ava.jpeg';

const Info = () => {
    return(
        <div className={classes.Info}>
            <img className={classes.avatar} src={avatar} alt="Ava"/>
            <div className={classes.data}>
                <span className={classes.fio}>Whatruska</span>
                <span className={classes.date}>Birth date : 03.03.2002</span>
                <span className={classes.city}>City : Omsk</span>
                <span className={classes.contacts}>
                    <span className={classes.phone}> Tel : +79136560423</span>
                    <span className={classes.vk}> Vk : vk.com/vitdub</span>
                </span>
            </div>
        </div>
    );
}

export default Info;