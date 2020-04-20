import React from "react";
import {connect} from "react-redux";
import {
    logoutThunkCreator,
} from "../../../reducers/loginReducer";
import Header from "../Header";
import {getEmail, isLogged} from "../../../selectors/loginSelector";

const HeaderContainer = (props) => {
    if (props.isLogged){
        return <Header isLogged={props.isLogged} email={props.email} logout={props.logout}/>
    } else {
        return <Header/>
    }
}

let mapStateToProps = (state) => {
    return({
        email : getEmail(state),
        isLogged : isLogged(state)
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        logout : () => {
            dispatch(logoutThunkCreator());
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);