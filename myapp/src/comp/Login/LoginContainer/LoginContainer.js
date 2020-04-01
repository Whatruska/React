import React from "react";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../../reducers/loginReducer";
import Login from "../Login";
import Preloader from "../../Preloader/Preloader";
import classes from "./LoginContainer.module.css";
import {getErrorMessage, isFetching, isLogged} from "../../../selectors/loginSelector";

const LoginContainer = (props) => {
    let login = (data) => {
        let email = data.email;
        let password = data.password;
        let remember = !!data.remember;
        props.login(email, password, remember);
    }

    let renderedMessages = (messages) => {
        if (messages){
            return messages.map((item) => {
                return(
                    <div className={classes.errorMessage}>{item}</div>
                );
            });
        }
    };

    let message = renderedMessages(props.errorMessage);
    if (!props.isLogged){
        if (props.isFetching){
            return(
                <div className={classes.preloader_wrapper}>
                    <Preloader/>
                </div>
                );
        } else {
            return <Login login={login} errorMessage={message}/>
        }
    }
    return <></>;
}

let mapStateToProps = (state) => {
    return({
        isLogged : isLogged(state),
        isFetching : isFetching(state),
        errorMessage : getErrorMessage(state)
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        login : (email, pass, remember) => {
            dispatch(loginThunkCreator(email, pass, remember));
        },
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);