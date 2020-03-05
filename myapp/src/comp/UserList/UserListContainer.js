import {connect} from "react-redux";
import UserList from "./UserList";
import {
    followActionCreator, setPageCountActionCreator,
    setPageSize,
    setPageSizeActionCreator,
    setUsersActionCreator
} from "../../reducers/userListReducer";

let mapStateToProps = (state) => {
    return({
        users : state.userList.users,
        pageSize : state.userList.pageSize,
        pageCount : state.userList.pageCount
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        follow : (bool, login) => {
            dispatch(followActionCreator(bool, login));
        },
        setUsers : (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setPageSize : (size) => {
            dispatch(setPageSizeActionCreator(size))
        },
        setPageCount : (count) => {
            dispatch(setPageCountActionCreator(count))
        }
    });
};

let mergeProps = (stateProps, dispatchProps, props) => {
    return ({
        users : stateProps.users,
        pageCount : stateProps.pageCount,
        pageSize : stateProps.pageSize,
        follow : dispatchProps.follow,
        setUsers : dispatchProps.setUsers,
        setPageCount : dispatchProps.setPageCount,
        setPageSize : dispatchProps.setPageSize
    });
};

let UserListContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserList);

export default UserListContainer;