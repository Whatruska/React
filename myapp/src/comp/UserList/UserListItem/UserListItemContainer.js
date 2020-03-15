import React from "react";
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator} from "../../../reducers/userListReducer";
import UserListItem from "./UserListItem";
import axios from "axios";
import {toggleFetchingActionCreator} from "../../../reducers/profileReducer";

class UserListItemContainer extends React.Component{

    baseUrl = "https://social-network.samuraijs.com/api/1.0/follow/";
    API_KEY = "731c78c9-2985-45c6-a952-87bbf4059b50";

    follow = (id) => {
        axios
            .post(this.baseUrl + id, {}, {
                withCredentials : true,
                headers : {
                    "API-KEY" : this.API_KEY
                }
            })
            .then(
                (response) => {
                    debugger;
                    if (response.data.resultCode === 0){
                        this.props.follow(id);
                    }
                }
            );
    };

    unfollow = (id) => {
        axios
            .delete(this.baseUrl + id, {
                withCredentials : true,
                headers : {
                    "API-KEY" : this.API_KEY
                }
            })
            .then(
                (response) => {
                    debugger;
                    if (response.data.resultCode === 0){
                        this.props.unfollow(id);
                    }
                }
            );
    };

    render() {
        return(<UserListItem user={this.props.user} follow={this.follow} unfollow={this.unfollow}/>);
    }
}

let mapStateToProps = (state) => {
    return ({
        isFetching : state.userList.isFetching
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        follow : (id) => {
            dispatch(followActionCreator(id));
        },
        unfollow : (id) => {
            dispatch(unfollowActionCreator(id));
        },
        toggleFetching : () => {
            dispatch(toggleFetchingActionCreator());
        }
    });
};

let mergeProps = (stateProps, dispatchProps, props) => {
    return({
        user : props.user,
        follow : dispatchProps.follow,
        unfollow : dispatchProps.unfollow,
        toggleFetching : dispatchProps.toggleFetching
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserListItemContainer);