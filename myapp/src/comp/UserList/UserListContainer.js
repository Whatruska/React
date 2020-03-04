import {connect} from "react-redux";
import UserList from "./UserList";
import {followActionCreator} from "../../reducers/userListReducer";

let mapStateToProps = (state) => {
    return({
        users : state.userList.users
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        follow : (bool, login) => {
            dispatch(followActionCreator(bool, login));
        }
    });
};

let mergeProps = (stateProps, dispatchProps, props) => {
    return ({
        users : stateProps.users,
        follow : dispatchProps.follow
    });
};

let UserListContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserList);

export default UserListContainer;