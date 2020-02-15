import React from 'react';
import classes from './Profile.module.css';
import Info from './Info/Info';
import Posts from './Posts/Posts';

const Profile = (props) => {
    let userInfo = props.userInfo;
    return(
        <div className={classes.Profile}>
            <img src={props.header} className={classes.header} alt="Profile header"/>
            <Info 
                login={userInfo.login}
                date={userInfo.date}
                city={userInfo.city}
                phone={userInfo.phone}
                vk={userInfo.vk}
                avatar={props.avatar}
            />
            <Posts posts={props.posts}/>
        </div>
    );
}

export default Profile;