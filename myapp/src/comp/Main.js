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
import {initFinishActionCreator} from "../reducers/initialReducer";
import {isLogged} from "../selectors/loginSelector";
import {authThunkCreator} from "../reducers/loginReducer";
import Preloader from "./Preloader/Preloader";
import {isInitialized} from "../selectors/initialSelector";

class Main extends React.Component{
    myProfile = <Route path={"/Profile"} exact render={() => {
        let profile = this.props.userPages[0];
        return(<Profile state={profile}/>);
    }}/>;

    renderedFriends = this.props.userPages.map((user) => {
        if (user.login !== "Whatruska"){
            return <Route path={"/Friend/" + user.login} exact render = {() => <Profile state={user}/>}/>
        }
        return undefined
    });

    render() {
        if (this.props.isInitialized){
            if (this.props.isLogged){
                return(
                    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
        } else {
            this.props.auth();
            this.props.finishInit();
            return (<Preloader/>);
        }
    }
}

let mapStateToProps = (state) => {
    return({
        messagesPage : state.messagesPage,
        friendInfo : state.friendInfo,
        userPages : state.userPages.users,
        isLogged : isLogged(state),
        isInitialized : isInitialized(state)
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        finishInit : () => {
            dispatch(initFinishActionCreator());
        },
        auth : () => {
            dispatch(authThunkCreator());
        }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);