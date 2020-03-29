import {connect} from "react-redux";
import {INC, DEC, refreshThunkCreator} from "../../reducers/userListReducer";
import React, {useEffect} from "react";
import classes from "./List/UserList.module.css";
import UserList from "./List/UserList";
import UserListItemContainer from "./UserListItem/UserListItemContainer";
import {Redirect} from "react-router";
import {isLogged} from "../../selectors/loginSelector";
import {getPageCount, getPageSize, getUsers, isFetching} from "../../selectors/userListSelector";

const UserListAPIComponent = (props) => {
    let refresh = (mode) => {
        props.refresh(mode, props.pageCount, props.pageSize);
    };

    useEffect(() => {
        refresh();
    },[]);

    let divideItemsToColumns = (listItems) => {
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

    let getRenderedUserItems = (userItems) => {
        if (userItems){
            let listItems =  userItems.map((item) => {
                return <UserListItemContainer user={item}/>
            });
            return divideItemsToColumns(listItems);
        }
    };

    let renderedUsers = getRenderedUserItems(props.users);
    if (props.isLogged){
        return(
            <UserList
                renderedUsers={renderedUsers}
                refresh={refresh}
                inc={props.inc}
                dec={props.dec}
                pageCount={props.pageCount}
                isFetching={props.isFetching}
            />
        );
    } else {
        return (
            <Redirect to={"/"}/>
        );
    }
}

let mapStateToProps = (state) => {
    return({
        isLogged : isLogged(state),
        users : getUsers(state),
        pageSize : getPageSize(state),
        pageCount : getPageCount(state),
        isFetching : isFetching(state),
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
