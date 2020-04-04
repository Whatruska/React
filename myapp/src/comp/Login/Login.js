import React from "react";
import classes from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Validated/Input/Input";
import {required} from "../../utils/validators/required";
import {email} from "../../utils/validators/email";

let LoginForm = (props) => {
    return(
        <form className={classes.loginForm} onSubmit={props.handleSubmit}>
            <Field placeholder={"E-mail"} type={"e-mail"} name={"email"} className={classes.input} component={Input} validate={[required, email]}/>
            <Field placeholder={"Password"} type={"password"} name={"password"} className={classes.input} component={Input} validate={[required]}/>
            <Field component={"input"} type={"checkbox"} name={"remember"} className={classes.checkbox}/>
            <span>Запомнить меня</span>
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