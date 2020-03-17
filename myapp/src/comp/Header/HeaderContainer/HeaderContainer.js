import React from "react";
import {connect} from "react-redux";
import {
    authThunkCreator,
    logoutThunkCreator,
} from "../../../reducers/loginReducer";
import Header from "../Header";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.auth();
    }

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
        auth : () => {
            dispatch(authThunkCreator());
        },
        logout : () => {
            dispatch(logoutThunkCreator);
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);