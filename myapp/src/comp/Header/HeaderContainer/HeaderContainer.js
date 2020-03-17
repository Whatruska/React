import React from "react";
import {connect} from "react-redux";
import {
    authThunkCreator,
    logoutActionCreator,
} from "../../../reducers/loginReducer";
import Header from "../Header";
import authAPI from "../../../DAL/Auth/authAPI";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.auth();
    }

    logout = () => {
        authAPI.getLogoutRequest().then((data) => {
                this.props.logout();
       });
    };

    render() {
        if (this.props.isLogged){
            return <Header email={this.props.email} logout={this.logout}/>
        } else {
            return <Header/>
        }
    }
}

let mapStateToProps = (state) => {
    return({
        email : state.loginData.email,
        isLogged : state.loginData.isLogged
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        auth : () => {
            dispatch(authThunkCreator());
        },
        logout : () => {
            dispatch(logoutActionCreator());
        },
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);