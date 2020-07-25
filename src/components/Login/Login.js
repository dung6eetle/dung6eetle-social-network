import React from "react";
import classes from "./login.module.css";
// import { Form } from 'react-final-form'
import { Field, reduxForm } from "redux-form";

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
          name={"login"}
          component={"input"}
          className={classes.inputLogin}
          type={"text"}
          placeholder={"Login"}
        />
      </div>
      <div className={classes.passwordForm}>
        <Field
          name={"password"}
          component={"input"}
          className={classes.inputPass}
          type={"text"}
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

const Login = () => {
  const onSubmit = (formData) => {
    console.log("data", formData);
  };
  return <LoginReduxForm onSubmit={onSubmit} />;
};
export default Login;
