import React from 'react';
import './Main.css';
import {BrowserRouter, Route} from "react-router-dom";

import Navbar from './Navbar/Navbar';
import Messages from "./Messages/Messages";
import Profile from "./Profile/Profile";
import UserListContainer from "./UserList/UserListContainer";
import ProfileContainer from "./Profile/ProfileContainer";

const Main = (props) => {
    let state = props.state;

    let messagesPage = state.messagesPage;
    let friendsInfo = state.friendInfo;
    let userPages = state.userPages;

    let myProfile = <Route path={"/Profile"} exact render={() => <Profile state={userPages[0]}/>}/>;
    let rendoredFriends = userPages.map((user) => {
        if (user.login !== "Whatruska"){
            return <Route path={"/Friend/" + user.login} exact render = {() => <Profile state={user}/>}/>
        }
        return undefined
    });

    return (
        <BrowserRouter>
            <div className='Main'>
                <Navbar state={friendsInfo}/>
                <Route path="/Messages" render={() => <Messages state={messagesPage}/>}/>
                <Route path="/UserListAPIComponent" render={() => <UserListContainer/>}/>
                {myProfile}
                {rendoredFriends}
                <Route path="/User">
                    <ProfileContainer/>
                </Route>
            </div>
        </BrowserRouter>
    );
};

export default Main;