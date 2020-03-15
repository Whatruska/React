import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {setProfileActionCreator, toggleFetchingActionCreator} from "../../reducers/profileReducer";
import Preloader from "../Preloader/Preloader";
import Profile from "./Profile";
import My_avatar from "../../img/ava.jpeg";
import profile_header from "../../img/profile-header.jpeg";
import classes from "./ProfileContainer.module.css";
import {getUserByLogin} from "../../data/users";
import profileAPI from "../../DAL/Profile/profileAPI";

class ProfileContainer extends React.Component{
    formProfileFromResponse = (response) => {
        return {
            id : response.userId,
            login : response.fullName,
            date : "Idcr",
            city : "Omsk",
            phone : "+00000000000",
            vk : response.contacts.vk,
            avatar : response.photos.large === null ? My_avatar : response.photos.large,
            header: profile_header
        };
    };

    request = (userId) => {
            profileAPI.getProfileRequest(userId).then((data) => {
                let profile = this.formProfileFromResponse(data);
                this.props.setProfile(profile);
                this.props.toggleFetch();
            });
    };

    refresh = () => {
        let props = this.props;
        debugger;
        let userId = props.match.params.userId;
        if (!props.isFetching){
            props.toggleFetch();
        }
        let m = userId.match(new RegExp('\\d+'));
        if (m != null){
            this.request(userId)
        } else {
            props.setProfile(getUserByLogin(userId));
            props.toggleFetch();
        }
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
        toggleFetch : () => {
            dispatch(toggleFetchingActionCreator())
        },

        setProfile : (profile) => {
            dispatch(setProfileActionCreator(profile));
        }
    });
};
let routeComp = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(routeComp);


