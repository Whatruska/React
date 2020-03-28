import {connect} from "react-redux";
import {INC, DEC, refreshThunkCreator} from "../../reducers/userListReducer";
import React from "react";
import classes from "./List/UserList.module.css";
import UserList from "./List/UserList";
import UserListItemContainer from "./UserListItem/UserListItemContainer";
import {Redirect} from "react-router";

class UserListAPIComponent extends React.Component{

    componentDidMount() {
        this.refresh()
    }

    refresh = (mode) => {
        this.props.refresh(mode, this.props.pageCount, this.props.pageSize);
    };

    divideItemsToColumns = (listItems) => {
        let result = [];
        let m = [];
        while (listItems.length > 0){
            if (m.length === 3){
                result.push(
                    <div className={classes.column}>
                        {m}
                    </div>
                );
                m = []
            } else {
                m.push(listItems.pop());
            }
        }
        if (m.length > 0){
            result.push(
                <div className={classes.column}>
                    {m}
                </div>
            );
        }
        return result;
    };

    getRenderedUserItems = (userItems) => {
        if (userItems){
            let listItems =  userItems.map((item) => {
                return <UserListItemContainer user={item}/>
            });
            return this.divideItemsToColumns(listItems);
        }
    };

    render() {
        let renderedUsers = this.getRenderedUserItems(this.props.users);
        if (this.props.isLogged){
            return(
                <UserList
                    renderedUsers={renderedUsers}
                    refresh={this.refresh}
                    inc={this.props.inc}
                    dec={this.props.dec}
                    pageCount={this.props.pageCount}
                    isFetching={this.props.isFetching}
                />
            );
        } else {
            return (
                <Redirect to={"/"}/>
            );
        }
    }
}

let mapStateToProps = (state) => {
    return({
        isLogged : state.loginData.isLogged,
        users : state.userList.users,
        pageSize : state.userList.pageSize,
        pageCount : state.userList.pageCount,
        isFetching : state.userList.isFetching,
        inc : INC,
        dec : DEC
    });
};

let mapDispatchToProps = (dispatch) => {
    return({
        refresh : (mode, pageCount, pageSize) => {
            dispatch(refreshThunkCreator(mode, pageCount, pageSize))
        }
    });
};
let connected = connect(mapStateToProps, mapDispatchToProps)(UserListAPIComponent);

export default connected;
