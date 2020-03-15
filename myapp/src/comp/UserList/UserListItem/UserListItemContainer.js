import React from "react";
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator} from "../../../reducers/userListReducer";
import UserListItem from "./UserListItem";
import axios from "axios";
import {toggleFetchingActionCreator} from "../../../reducers/profileReducer";

class UserListItemContainer extends React.Component{

    baseUrl = "https://social-network.samuraijs.com/api/1.0/follow/";

    follow = (id) => {
        this.props.toggleFetching();
        debugger;
        axios
            .post(this.baseUrl + "?userId=" + id)
            .then(
                (response) => {
                    if (response.resultCode === 0){
                        debugger;
                        this.props.follow(id);
                        this.props.toggleFetching();
                    }
                }
            );
    };

    unfollow = (id) => {
        this.props.toggleFetching();
        axios
            .delete(this.baseUrl + id)
            .then(
                (response) => {
                    debugger;
                    if (response.resultCode === 0){
                        this.props.unfollow(id);
                        this.props.toggleFetching();
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