import {connect} from "react-redux";
import {
    followActionCreator, setPageCountActionCreator,
    setPageSizeActionCreator,
    setUsersActionCreator, toggleFetchActionCreator, unfollowActionCreator
} from "../../reducers/userListReducer";
import React from "react";
import classes from "./List/UserList.module.css";
import avatar from "../../img/user.png";
import header from "../../img/profile-header.jpeg";
import UserList from "./List/UserList";
import UserListItemContainer from "./UserListItem/UserListItemContainer";
import userListAPI from "../../DAL/UserList/userListAPI";

class UserListAPIComponent extends React.Component{
    inc = "INC";
    dec = "DEC";

    componentDidMount() {
        this.refresh()
    }

    refresh = (mode) => {
        this.props.toggleFetching();
        let pageCount = this.props.pageCount;
        if (mode){
            pageCount = this.changePageCount(mode);
        }
        userListAPI.getPageRequest(pageCount, this.props.pageSize).then((data) => {
            let userItems = data.items.map((reps) => {
                return this.formUserFromResponse(reps)
            });
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
                return pageCount + 1;
            }

            case this.dec : {
                if (pageCount > 1){
                    set(pageCount - 1);
                    return pageCount - 1;
                }
                break;
            }

            default : {
                return pageCount;
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

    getRenderedUserItems = (userItems) => {
        if (userItems){
            let listItems =  userItems.map((item) => {
                return <UserListItemContainer user={item}/>
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
        let renderedUsers = this.getRenderedUserItems(this.props.users);
        return(
            <UserList
                renderedUsers={renderedUsers}
                refresh={this.refresh}
                inc={this.inc}
                dec={this.dec}
                pageCount={this.props.pageCount}
                isFetching={this.props.isFetching}
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
        follow : (id) => {
            dispatch(followActionCreator(id));
        },
        unfollow : (id) => {
            dispatch(unfollowActionCreator(id));
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
        unfollow : dispatchProps.unfollow,
        setUsers : dispatchProps.setUsers,
        setPageCount : dispatchProps.setPageCount,
        setPageSize : dispatchProps.setPageSize,
        isFetching : stateProps.isFetching,
        toggleFetching : dispatchProps.toggleFetching
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserListAPIComponent);
