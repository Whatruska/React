import React from 'react';
import './Main.css';
import {BrowserRouter, Route} from "react-router-dom";

import Navbar from './Navbar/Navbar';
import Messages from "./Messages/Messages";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";

const Main = (props) => {
    let state = props.state;

    let messagesPage = state.messagesPage;
    let friendsInfo = state.friendInfo;
    let userPages = state.userPages;

    let renderedUsers = userPages.map((user) => {
        return (
            <Route path={"/User/" + user.login} render={() => <Profile state={user}/>}/>
        );
    });

    return (
        <BrowserRouter>
            <div className='Main'>
                <Navbar state={friendsInfo}/>
                <Route path="/Messages" render={() => <Messages state={messagesPage}/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>
                {renderedUsers}
            </div>
        </BrowserRouter>
    );
}

export default Main;