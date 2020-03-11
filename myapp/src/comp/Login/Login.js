import React from "react";
import classes from "./Login.module.css"

let emailLink = React.createRef();
let passLink = React.createRef();

let Login = (props) => {
    return(
        <div className={classes.Login}>
            <form className={classes.loginForm}>
                <h1 className={classes.heading}>Welcome</h1>
                <input placeholder={"E-mail"} type={"e-mail"} className={classes.input} ref={emailLink}/>
                <input placeholder={"Password"} type={"password"} className={classes.input} ref={passLink}/>
                <button type={"submit"} className={classes.btn} onClick={(e) => {
                    e.preventDefault();
                    let email = emailLink.current.value;
                    let password = passLink.current.value;
                    props.login(email, password);
                }}>Login</button>
            </form>
        </div>
    );
};

export default Login;