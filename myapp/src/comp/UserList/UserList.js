import React from "react";
import UserListItem from "./UserListItem/UserListItem";
import classes from "./UserList.module.css";
import * as axios from "axios";
import avatar from "../../img/ava.jpeg";
import header from "../../img/profile-header.jpeg";

class UserList extends React.Component{

    componentDidMount() {
        debugger;
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                let userItems = response.data.items.map((reps) => {
                    return this.formUserFromResponse(reps)
                });
                this.props.setUsers(userItems);
            });
    }

    getRenderedUserItems = (userItems, followCallback) => {
        if (userItems){
            return userItems.map((item) => {
                return <UserListItem user={item} follow={followCallback}/>
            });
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
                {renderedUsers}
            </div>
        );
    }
}

export default UserList;
