import React from "react";
import classes from "./Login.module.css";
import {Field, reduxForm} from "redux-form";

let emailLink = React.createRef();
let passLink = React.createRef();

let LoginForm = (props) => {
    return(
        <form className={classes.loginForm} onSubmit={props.handleSubmit}>
            <Field placeholder={"E-mail"} type={"e-mail"} name={"email"} className={classes.input} ref={emailLink} component={"input"}/>
            <Field placeholder={"Password"} type={"password"} name={"password"} className={classes.input} ref={passLink} component={"input"}/>
            <div>
                {props.errorMessage}
            </div>
            <button type={"submit"} className={classes.btn}>Login</button>
        </form>
    )
};

let LoginFormRedux = reduxForm({form : "loginForm"})(LoginForm);

class Login extends React.Component {
    render() {
        return(
            <div className={classes.Login}>
                <h1 className={classes.heading}>Welcome</h1>
                <LoginFormRedux onSubmit={this.props.login} errorMessage={this.props.errorMessage}/>
            </div>
        );
    }
}

export default Login;