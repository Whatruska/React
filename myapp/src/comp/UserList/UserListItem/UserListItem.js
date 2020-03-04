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
              <NavLink className={classes.info} to={"../User/" + user.login}>
                  <h2 className={classes.login}>{user.login}</h2>
              </NavLink>
          </div>
      );
};

export default UserListItem;