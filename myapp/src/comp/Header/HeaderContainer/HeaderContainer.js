import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    authThunkCreator,
    logoutThunkCreator,
} from "../../../reducers/loginReducer";
import Header from "../Header";
import {getEmail, isLogged} from "../../../selectors/loginSelector";

const HeaderContainer = (props) => {
    if (props.isLogged){
        return <Header email={props.email} logout={props.logout}/>
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