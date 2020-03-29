import React from "react";
import {connect} from "react-redux";
import {
    toggleFetchActionCreator,
    followThunkCreator, unfollowThunkCreator
} from "../../../reducers/userListReducer";
import UserListItem from "./UserListItem";
import {isFetching} from "../../../selectors/userListSelector";

const UserListItemContainer = (props) => {
    return(<UserListItem user={props.user} follow={props.follow} unfollow={props.unfollow}/>);
}

let mapStateToProps = (state) => {
    return ({
        isFetching : isFetching(state)
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        follow : (id) => {
            dispatch(followThunkCreator(id));
        },
        unfollow : (id) => {
            dispatch(unfollowThunkCreator(id));
        },
        toggleFetching : () => {
            dispatch(toggleFetchActionCreator());
        }
    });
};

let mergeProps = (stateProps, dispatchProps, props) => {
    return({
        isFetching : stateProps.isFetching,
        user : props.user,
        follow : dispatchProps.follow,
        unfollow : dispatchProps.unfollow,
        toggleFetching : dispatchProps.toggleFetching
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserListItemContainer);