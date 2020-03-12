import React from "react";
import {connect} from "react-redux";
import {logoutActionCreator} from "../../../reducers/loginReducer";
import Header from "../Header";

class HeaderContainer extends React.Component{

    render() {
        if (this.props.isLogged){
            return <Header email={this.props.email} logout={this.props.logout}/>
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
       }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);