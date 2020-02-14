import React from 'react';
import classes from './Profile.module.css';
import profile_header from '../../img/profile-header.jpeg';
import Info from './Info/Info';
import Posts from './Posts/Posts';

let posts = [
    {
        text :"Hi, wassup?",
        likes : 45
    },
    {
        text: "How are you?",
        likes: 24
    }
];

const Profile = () => {
    return(
        <div className={classes.Profile}>
            <img src={profile_header} className={classes.header}/>
            <Info 
                login="Whatruska"
                date="03.03.2002"
                city="Omsk"
                phone="+79136560423"
                vk="vk.com/vitdub"
            />
            <Posts posts={posts}/>
        </div>
    );
}

export default Profile;