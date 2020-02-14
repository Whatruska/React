import React from 'react';
import classes from './Profile.module.css';
import profile_header from '../../img/profile-header.jpeg';
import Info from './Info/Info';
import Posts from './Posts/Posts';

const Profile = () => {
    return(
        <div className={classes.Profile}>
            <img src={profile_header} className={classes.header}/>
            <Info fio="Whatruska"/>
            <Posts/>
        </div>
    );
}

export default Profile;