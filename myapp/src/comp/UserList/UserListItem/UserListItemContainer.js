import React from "react";
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator} from "../../../reducers/userListReducer";
import UserListItem from "./UserListItem";
import axios from "axios";

class UserListItemContainer extends React.Component{

    baseUrl = "https://social-network.samuraijs.com/api/1.0/follow/";

    follow = (id) => {
        axios
            .post(this.baseUrl + id)
            .then(
                (response) => {
                    if (response.resultCode === 0){
                        this.props.follow(id);
                    }
                }
            );
    };

    unfollow = (id) => {
        axios
            .delete(this.baseUrl + id)
            .then(
                (response) => {
                    if (response.resultCode === 0){
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

    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        follow : (id) => {
            dispatch(followActionCreator(id));
        },
        unfollow : (id) => {
            dispatch(unfollowActionCreator(id));
        }
    });
};

let mergeProps = (stateProps, dispatchProps, props) => {
    return({
        user : props.user,
        follow : dispatchProps.follow,
        unfollow : dispatchProps.unfollow
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserListItemContainer);