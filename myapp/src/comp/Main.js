import React from 'react';
import './Main.css';
import {BrowserRouter, Route} from "react-router-dom";

import Navbar from './Navbar/Navbar';
import Messages from "./Messages/Messages";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";

const Main = (props) => {
    let state = props.state;

    let users = state.users;
    let messages = state.messages;
    let userInfo = state.userInform;
    let posts = state.posts;
    let profile_header = state.profile_header;
    let avatar = state.avatar;

    return (
        <BrowserRouter>
            <div className='Main'>
                <Navbar/>
                <Route path="/Messages" render={() => <Messages users={users} messages={messages}/>}/>
                <Route path="/Profile" render={() => <Profile userInfo={userInfo} posts={posts} header={profile_header} avatar={avatar}/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>
            </div>
        </BrowserRouter>
    );
}

export default Main;