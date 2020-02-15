import React from 'react';
import classes from './Profile.module.css';
import Info from './Info/Info';
import Posts from './Posts/Posts';

const Profile = (props) => {
    let userInfo = props.state.userInform;
    let images = {
        avatar : props.state.avatar,
        header : props.state.profile_header
    };
    return(
        <div className={classes.Profile}>
            <img src={images.header} className={classes.header} alt="Profile header"/>
            <Info userInfo={userInfo} images={images}/>
            <Posts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;