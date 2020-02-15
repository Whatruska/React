import React from 'react';
import './Main.css';
import {BrowserRouter, Route} from "react-router-dom";

import Navbar from './Navbar/Navbar';
import Messages from "./Messages/Messages";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";

const Main = (props) => {
    let state = props.state;
    let profilePage = state.profilePage;
    let messagesPage = state.messagesPage;
    let friendsInfo = state.friendInfo;

    return (
        <BrowserRouter>
            <div className='Main'>
                <Navbar state={friendsInfo}/>
                <Route path="/Messages" render={() => <Messages state={messagesPage}/>}/>
                <Route path="/Profile" render={() => <Profile state={profilePage}/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>
            </div>
        </BrowserRouter>
    );
}

export default Main;