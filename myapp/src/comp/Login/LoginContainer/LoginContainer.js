import React from "react";
import {connect} from "react-redux";
import {
    loginActionCreator,
    setEmailActionCreator,
    setErrorMessageActionCreator,
    setUserIdActionCreator
} from "../../../reducers/loginReducer";
import Login from "../Login";
import Preloader from "../../Preloader/Preloader";
import {toggleFetchingActionCreator} from "../../../reducers/profileReducer";
import classes from "./LoginContainer.module.css";
import authAPI from "../../../DAL/Auth/authAPI";

class LoginContainer extends React.Component{

    login = (email, pass) => {
        this.props.toggleFetching();
        authAPI.getLoginRequest(email,pass).then((data) => {
            if (data.resultCode === 0){
                this.props.setEmail(email);
                this.props.setUserId(data.data.userId);
                this.props.login();
                this.props.toggleFetching();
            } else {
                this.props.error("Неверно введены email/пароль");
                this.props.toggleFetching();
            }
        });
    };

    render() {
        if (!this.props.isLogged){
            if (this.props.isFetching){
                return(
                    <div className={classes.preloader_wrapper}>
                        <Preloader/>
                    </div>
                    );
            } else {
                return <Login login={this.login} errorMessage={this.props.errorMessage}/>
            }
        }
        return <></>
    }
}

let mapStateToProps = (state) => {
    return({
        isLogged : state.loginData.isLogged,
        isFetching : state.loginData.isFetching,
        errorMessage : state.loginData.errorMessage
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
        },

        error : (message) => {
            dispatch(setErrorMessageActionCreator(message));
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);