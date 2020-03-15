import React from "react";
import {connect} from "react-redux";
import {loginActionCreator, logoutActionCreator, setUserDataActionCreator} from "../../../reducers/loginReducer";
import Header from "../Header";
import axios from "axios";

class HeaderContainer extends React.Component{

    componentDidMount() {
        debugger;
        axios
            .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
                withCredentials : true
            })
            .then(
                (response) => {
                    debugger;
                    let data = response.data;
                    if (data.resultCode === 0){
                        this.props.setUserData(data.data);
                    }
                }
            );
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
       logout : () => {
           dispatch(logoutActionCreator());
       },
        setUserData : (data) => {
           dispatch(setUserDataActionCreator(data));
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);