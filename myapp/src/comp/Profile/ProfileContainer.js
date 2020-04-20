import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {refreshThunkCreator} from "../../reducers/profileReducer";
import Preloader from "../Preloader/Preloader";
import Profile from "./Profile";
import classes from "./ProfileContainer.module.css";
import {getCurrentProfile, isFetching} from "../../selectors/profileSelector";

const ProfileContainer = (props) => {

    let refresh = () => {
        props.refresh(props.match.params.userId, props.isFetching);
    };

    useEffect(() => {
        refresh();
    },[]);

    let isFetching = props.isFetching;
    return(
        <div className={classes.Container}>
            {isFetching ? <Preloader/> : <Profile state={props.profile}/>}
        </div>
    );
}

let mapStateToProps = (state) => {
    return({
        isFetching : isFetching(state),
        profile : getCurrentProfile(state)
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        refresh : (userId, isFetching) => {
            dispatch(refreshThunkCreator(userId, isFetching));
        }
    });
};
let routeComp = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(routeComp);


