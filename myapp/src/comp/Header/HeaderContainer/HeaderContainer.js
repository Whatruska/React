import React from "react";
import {connect} from "react-redux";
import {logoutActionCreator, setUserDataActionCreator} from "../../../reducers/loginReducer";
import Header from "../Header";
import {getAuthRequest, getLogoutRequest} from "../../../DAL/Auth/authAPI";

class HeaderContainer extends React.Component{

    componentDidMount() {
        getAuthRequest().then(
            (response) => {
                debugger;
                let data = response.data;
                if (data.resultCode === 0){
                    this.props.setUserData(data.data);
                }
            }
        );
    }

    logout = () => {
       getLogoutRequest().then((response) => {
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