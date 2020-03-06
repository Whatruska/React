import React from "react";
import classes from "./Preloader.module.css";
import preloader from "../../preloader.svg"

let Preloader = () => {
    return(
        <img src={preloader} className={classes.Preloader} alt={"Preloader"}/>
    );
};

export default Preloader;