import React from 'react';
import './Main.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Messages from "./Messages/Messages";
import Profile from "./Profile/Profile";
import UserListContainer from "./UserList/UserListContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import LoginContainer from "./Login/LoginContainer/LoginContainer";
import {connect} from "react-redux";
import Greetings from "./Greetings/Greeting";

class Main extends React.Component{
    myProfile = <Route path={"/Profile"} exact render={() => <Profile state={this.props.userPages[0]}/>}/>;

    renderedFriends = this.props.userPages.map((user) => {
        if (user.login !== "Whatruska"){
            return <Route path={"/Friend/" + user.login} exact render = {() => <Profile state={user}/>}/>
        }
        return undefined
    });

    render() {
        if (this.props.loginData.isLogged){
            return(
                <BrowserRouter>
                    <div className='Main'>
                        <Navbar state={this.props.friendInfo}/>
                        <Route path="/Messages" render={() => <Messages state={this.props.messagesPage}/>}/>
                        <Route path="/UserListAPIComponent" render={() => <UserListContainer/>}/>
                        {this.myProfile}
                        {this.renderedFriends}
                        <Route path="/User/:userId">
                            <ProfileContainer/>
                        </Route>
                        <Route path="/" exact render={() => <Greetings/>}/>
                    </div>
                </BrowserRouter>
            );
        } else {
            return (
                <BrowserRouter>
                    <div className='Main'>
                        <Redirect to={"/"}/>
                        <Route path="/" exact render={() => <LoginContainer/>}/>
                    </div>
                </BrowserRouter>
            );
        }
    }
}

let mapStateToProps = (state) => {
    return({
        messagesPage : state.messagesPage,
        friendInfo : state.friendInfo,
        userPages : state.userPages.users,
        loginData : state.loginData
    });
};

export default connect(mapStateToProps)(Main);