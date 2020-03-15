import React from "react";
import {connect} from "react-redux";
import {logoutActionCreator, setUserDataActionCreator} from "../../../reducers/loginReducer";
import Header from "../Header";
import authAPI from "../../../DAL/Auth/authAPI";

class HeaderContainer extends React.Component{

    componentDidMount() {
        authAPI.getAuthRequest().then(
            (data) => {
                if (data.resultCode === 0){
                    this.props.setUserData(data.data);
                }
            }
        );
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
       logout : () => {
           dispatch(logoutActionCreator());
       },
        setUserData : (data) => {
           dispatch(setUserDataActionCreator(data));
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);