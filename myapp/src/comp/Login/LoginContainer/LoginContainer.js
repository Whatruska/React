import React from "react";
import {connect} from "react-redux";
import {loginActionCreator, setEmailActionCreator, setUserIdActionCreator} from "../../../reducers/loginReducer";
import Login from "../Login";
import Preloader from "../../Preloader/Preloader";
import {toggleFetchingActionCreator} from "../../../reducers/profileReducer";
import axios from "axios";

class LoginContainer extends React.Component{
    baseUrl = "https://social-network.samuraijs.com/api/1.0/auth/login";

    login = (email, pass) => {
        this.props.toggleFetching();
        axios
            .post(this.baseUrl + "?email=" + email + "&password=" + pass)
            .then((response) => {
                let data = response.data;
                debugger;
                if (data.resultCode === 0){
                    this.props.setEmail(email);
                    this.props.setUserId(data.data.userId);
                    this.props.login();
                    this.props.toggleFetching();
                }
            });
    };

    render() {
        if (!this.props.isLogged){
            if (this.props.isFetching){
                return <Preloader/>;
            } else {
                return <Login login={this.login}/>
            }
        }
        return <></>
    }
}

let mapStateToProps = (state) => {
    return({
        isLogged : state.loginData.isLogged
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        setUserId : (id) => {
            dispatch(setUserIdActionCreator(id));
        },

        setEmail : (email) => {
            dispatch(setEmailActionCreator(email));
        },

        login : () => {
            dispatch(loginActionCreator());
        },

        toggleFetching : () => {
            dispatch(toggleFetchingActionCreator());
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);