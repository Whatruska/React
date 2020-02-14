import React from "react";
import classes from "./Link.module.css";

const Link = (props) => {
    let c = classes.link + (props.isActive == '0' ? classes.active : "");
    return(
        <li className={classes.item}>
            <a className={c} href={`../../${props.to}`}>{props.to}</a>
        </li>
    );
}

export default Link;
