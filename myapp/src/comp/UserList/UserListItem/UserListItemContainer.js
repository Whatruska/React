import React from "react";
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, toggleFetchActionCreator} from "../../../reducers/userListReducer";
import UserListItem from "./UserListItem";
import {getFollowRequest, getUnfollowRequest} from "../../../DAL/UserList/Follow/followAPI";

class UserListItemContainer extends React.Component{

    follow = (id) => {
        debugger;
        this.props.toggleFetching();
        getFollowRequest(id).then(
            (response) => {
                debugger;
                if (response.data.resultCode === 0){
                    this.props.follow(id);
                }
                this.props.toggleFetching();
            }
        );
    };

    unfollow = (id) => {
        this.props.toggleFetching();
        getUnfollowRequest(id).then(
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