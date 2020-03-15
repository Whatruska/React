import React from "react";
import {connect} from "react-redux";
import {logoutActionCreator, setUserDataActionCreator} from "../../../reducers/loginReducer";
import Header from "../Header";
import axios from "axios";

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
                withCredentials : true
            })
            .then(
                (response) => {
                    let data = response.data;
                    if (data.resultCode === 0){
                        this.props.setUserData(data.data);
                    }
                }
            );
    }

    logout = () => {
        axios
            .delete("https://social-network.samuraijs.com/api/1.0/auth/login", {
                withCredentials : true
            })
            .then((response) => {
                debugger;
                this.props.logout();
            });
    };

    render() {
        debugger;
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