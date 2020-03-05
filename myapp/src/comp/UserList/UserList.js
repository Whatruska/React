import React from "react";
import UserListItem from "./UserListItem/UserListItem";
import classes from "./UserList.module.css";
import * as axios from "axios";
import avatar from "../../img/user.png";
import header from "../../img/profile-header.jpeg";

class UserList extends React.Component{
    formRequest = (basicUrl = this.basicUrl, pageCount = 1, pageSize = 10) => {
        return basicUrl + "?" + "page=" + pageCount + "&count=" + pageSize;
    };

    componentDidMount() {
        debugger;
        this.refresh();
    }

    basicUrl = "https://social-network.samuraijs.com/api/1.0/users";

    refresh = () => {
        axios
            .get(this.formRequest(this.basicUrl,this.props.pageCount, this.props.pageSize))
            .then((response) => {
                let userItems = response.data.items.map((reps) => {
                    return this.formUserFromResponse(reps)
                });
                this.props.setPageCount(this.props.pageCount + 1);
                this.props.setUsers(userItems);
            });
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
            <div className={classes.UserList}>
                <div className={classes.wrapper}>
                    {renderedUsers}
                </div>
                <button onClick={this.refresh} className={classes.btn}>Get More</button>
            </div>
        );
    }
}

export default UserList;
