import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import axios from "axios";
import {setProfileActionCreator, toggleFetchingActionCreator} from "../../reducers/profileReducer";
import Preloader from "../Preloader/Preloader";
import Profile from "./Profile";
import My_avatar from "../../img/ava.jpeg";
import profile_header from "../../img/profile-header.jpeg";

class ProfileContainer extends React.Component{
    formProfileFromResponse = (response) => {
        debugger;
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

    refresh = () => {
        this.props.toggleFetch();
        axios
            .get("https://social-network.samuraijs.com/api/1.0/profile/2")
            .then((response) => {
                let profile = this.formProfileFromResponse(response.data);
                this.props.setProfile(profile);
                this.props.toggleFetch();
            });
    };

    componentDidMount() {
        this.refresh();
    }

    render() {
        debugger;
        return(
            <>
                {this.props.isFetching ? <Preloader/> : <Profile state={this.props.profile}/>}
            </>
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
//let routeComp = withRouter(ProfileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);


