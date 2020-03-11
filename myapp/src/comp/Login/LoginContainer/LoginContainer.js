import React from "react";
import {connect} from "react-redux";
import {loginActionCreator, setEmailActionCreator, setUserIdActionCreator} from "../../../reducers/loginReducer";
import Login from "../Login";

class LoginContainer extends React.Component{
    login = (email, pass) => {
        this.props.login();
    };

    render() {
        if (!this.props.isLogged){
            return <Login login={this.login}/>
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
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);