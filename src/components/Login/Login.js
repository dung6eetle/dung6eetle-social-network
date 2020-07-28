import React from "react";
import classes from "./login.module.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.loginFormContainer}>
      {/*обязательно передавать handleSubmit, тк с ним приходят из пропсов
      другие вещи(e.preventDefault,сбор данных,) */}
      <div className={classes.Title}>
        <p>Sign in</p>
      </div>
      <div className={classes.loginForm}>
        <Field
          name={"email"}
          component={"input"}
          className={classes.inputLogin}
          placeholder={"Email"}
        />
      </div>
      <div className={classes.passwordForm}>
        <Field
          name={"password"}
          component={"input"}
          className={classes.inputPass}
          type={"password"}
          placeholder={"Password"}
        />
      </div>
      <div className={classes.rememberMeForm}>
        <Field
          name={"rememberMe"}
          component={"input"}
          className={classes.inputRemember}
          type={"checkbox"}
        />
        Remember me
      </div>
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log("data", formData);
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  
  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  } return <LoginReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect (mapStateToProps , {login})(Login) 
