import React from "react";
import classes from "./UserListItem.module.css";
import {NavLink} from "react-router-dom";

let UserListItem = (props) => {
    let user = props.user;
    let followClass = user.followed ? classes.unfollow : classes.follow;
    let followText = user.followed ? "Unfollow" : "Follow";

    let folFunc = () => {
        debugger;
        props.follow(!user.followed, user.login);
    };
      return (
          <div className={classes.UserListItem}>
              <div className={classes.meta}>
                  <img className={classes.avatar} src={user.avatar} alt="Avatar"/>
                  <button type="submit" className={classes.btn + " " + followClass} onClick={
                      (e) => {
                          e.preventDefault();
                          folFunc();
                      }
                  }>{followText}</button>
              </div>
              <div className={classes.info}>
                  <NavLink className={classes.login} to={"../User/" + user.login}>{user.login}</NavLink>
                  <h4>City : {user.city}</h4>
                  <h4>Birthday : {user.date}</h4>
              </div>
          </div>
      );
};

export default UserListItem;