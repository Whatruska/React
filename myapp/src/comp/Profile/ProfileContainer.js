import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {refreshThunkCreator} from "../../reducers/profileReducer";
import Preloader from "../Preloader/Preloader";
import Profile from "./Profile";
import classes from "./ProfileContainer.module.css";

class ProfileContainer extends React.Component{

    refresh = () => {
        this.props.refresh(this.props.match.params.userId, this.props.isFetching);
    };

    componentDidMount() {
        this.refresh();
    }

    render() {
        let isFetching = this.props.isFetching;
        return(
            <div className={classes.Container}>
                {isFetching ? <Preloader/> : <Profile state={this.props.profile}/>}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return({
        isFetching : state.profilePage.isFetching,
        profile : state.profilePage.currentProfile
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


