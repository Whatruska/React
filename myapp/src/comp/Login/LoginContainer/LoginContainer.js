import React from "react";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../../reducers/loginReducer";
import Login from "../Login";
import Preloader from "../../Preloader/Preloader";
import classes from "./LoginContainer.module.css";

class LoginContainer extends React.Component{
    login = (data) => {
        let email = data.email;
        let password = data.password;
        this.props.login(email, password);
    }

    render() {
        let message = this.renderedMessages(this.props.errorMessage);
        if (!this.props.isLogged){
            if (this.props.isFetching){
                return(
                    <div className={classes.preloader_wrapper}>
                        <Preloader/>
                    </div>
                    );
            } else {
                return <Login login={this.login} errorMessage={message}/>
            }
        }
        return <></>
    }

    renderedMessages = (messages) => {
        if (messages){
            return messages.map((item) => {
                return(
                    <div className={classes.errorMessage}>{item}</div>
                );
            });
        }
    };
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
        login : (email, pass) => {
            dispatch(loginThunkCreator(email, pass));
        },
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);