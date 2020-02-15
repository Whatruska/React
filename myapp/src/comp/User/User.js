import React from 'react';
import Info from "../Profile/Info/Info";
import classes from "./User.module.css";


const User = (props) => {
    let userInfo = props.state;
    let images = {
        avatar : userInfo.avatar,
        header : userInfo.header
    };
    return(
        <div className={classes.User}>
            <img src={images.header} className={classes.header} alt="Profile header"/>
            <Info userInfo={userInfo} images={images}/>
        </div>
    );
}

export default User;