import React from "react";
import classes from "./Greeting.module.css";

let Greetings = () => {
    return(
        <div className={classes.Greeting}>
            <h2 className={classes.title}>Greetings!</h2>
        </div>
    );
};

export default Greetings;