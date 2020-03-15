import React from "react";
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, toggleFetchActionCreator} from "../../../reducers/userListReducer";
import UserListItem from "./UserListItem";
import axios from "axios";

class UserListItemContainer extends React.Component{

    baseUrl = "https://social-network.samuraijs.com/api/1.0/follow/";
    API_KEY = "731c78c9-2985-45c6-a952-87bbf4059b50";

    follow = (id) => {
        this.props.toggleFetching();
        axios
            .post(this.baseUrl + id, {}, {
                withCredentials : true,
                headers : {
                    "API-KEY" : this.API_KEY
                }
            })
            .then(
                (response) => {
                    if (response.data.resultCode === 0){
                        this.props.follow(id);
                    }
                    this.props.toggleFetching();
                }
            );
    };

    unfollow = (id) => {
        this.props.toggleFetching();
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
                    this.props.toggleFetching();
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
            dispatch(toggleFetchActionCreator());
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