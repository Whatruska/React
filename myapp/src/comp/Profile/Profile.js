import React from 'react';
import classes from './Profile.module.css';
import Info from './Info/Info';
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    let state = props.state;
    let userInfo = {
        login : state.login,
        date : state.date,
        city : state.city,
        phone : state.phone,
        vk : state.vk
    }
    return(
        <div className={classes.Profile}>
            <img src={state.header} className={classes.header} alt="Profile header"/>
            <Info userInfo={userInfo} avatar={state.avatar}/>
            <PostsContainer login={state.login}/>
        </div>
    );
}

export default Profile;