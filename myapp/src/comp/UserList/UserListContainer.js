import {connect} from "react-redux";
import {
    followActionCreator, setPageCountActionCreator,
    setPageSize,
    setPageSizeActionCreator,
    setUsersActionCreator, toggleFetchActionCreator
} from "../../reducers/userListReducer";
import React from "react";
import * as axios from "axios";
import classes from "./List/UserList.module.css";
import UserListItem from "./UserListItem/UserListItem";
import avatar from "../../img/user.png";
import header from "../../img/profile-header.jpeg";
import UserList from "./List/UserList";
import preloader from "../../preloader.svg";

class UserListAPIComponent extends React.Component{
    inc = "INC";
    dec = "DEC";

    formRequest = (basicUrl = this.basicUrl, pageCount = 1, pageSize = 6) => {
        return basicUrl + "?" + "page=" + pageCount + "&count=" + pageSize;
    };

    componentDidMount() {
        this.refresh()
    }

    basicUrl = "https://social-network.samuraijs.com/api/1.0/users";

    refresh = (mode) => {
        this.props.toggleFetching();
        axios
            .get(this.formRequest(this.basicUrl,this.props.pageCount, this.props.pageSize))
            .then((response) => {
                let userItems = response.data.items.map((reps) => {
                    return this.formUserFromResponse(reps)
                });
                if (mode){
                    this.changePageCount(mode);
                }
                this.props.setUsers(userItems);
                this.props.toggleFetching();
            });
    };

    changePageCount = (mode) => {
        let pageCount = this.props.pageCount;
        let set = this.props.setPageCount;
        switch (mode) {
            case this.inc : {
                set(pageCount + 1);
                break;
            }

            case this.dec : {
                if (pageCount > 1){
                    set(pageCount - 1);
                }
                break;
            }

            default : {
                break;
            }
        }
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

    getRenderedUserItems = (userItems, followCallback) => {
        if (userItems){
            let listItems =  userItems.map((item) => {
                return <UserListItem user={item} follow={followCallback}/>
            });
            return this.divideItemsToColumns(listItems);
        }
    };

    formUserFromResponse = (response) => {
        return {
            id : response.id,
            login : response.name,
            followed : response.followed,
            avatar : response.photos.large === null ? avatar : response.photos.large,
            date : "00.00.0000",
            city : "NaN",
            phone : "NaN",
            vk : "NaN",
            header : header,
            posts : [],
        }
    };

    render() {
        let renderedUsers = this.getRenderedUserItems(this.props.users, this.props.follow);
        return(
            <UserList
                renderedUsers={renderedUsers}
                refresh={this.refresh}
                inc={this.inc}
                dec={this.dec}
                pageCount={this.props.pageCount}
                isFetching={this.props.isFetching}
                preloader={preloader}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return({
        users : state.userList.users,
        pageSize : state.userList.pageSize,
        pageCount : state.userList.pageCount,
        isFetching : state.userList.isFetching
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
        },
        toggleFetching : () => {
            dispatch(toggleFetchActionCreator());
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
        setPageSize : dispatchProps.setPageSize,
        isFetching : stateProps.isFetching,
        toggleFetching : dispatchProps.toggleFetching
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserListAPIComponent);
