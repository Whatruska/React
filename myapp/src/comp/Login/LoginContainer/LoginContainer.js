import React from "react";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../../reducers/loginReducer";
import Login from "../Login";
import Preloader from "../../Preloader/Preloader";
import classes from "./LoginContainer.module.css";

class LoginContainer extends React.Component{
    render() {
        if (!this.props.isLogged){
            if (this.props.isFetching){
                return(
                    <div className={classes.preloader_wrapper}>
                        <Preloader/>
                    </div>
                    );
            } else {
                return <Login login={this.props.login} errorMessage={this.props.errorMessage}/>
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
        login : (email, pass) => {
            dispatch(loginThunkCreator(email, pass));
        },
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);