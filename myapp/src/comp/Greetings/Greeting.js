import React from "react";
import classes from "./Greeting.module.css";
import gif from "../../img/Greetings.gif"

let Greetings = () => {
    return(
        <div className={classes.Greeting}>
            <img src={gif} alt="gif"/>
        </div>
    );
};

export default Greetings;