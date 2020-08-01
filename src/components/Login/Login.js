import React from "react";
import classes from "./login.module.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Input } from "../utils/FormControl";
import { required } from "../utils/validators/validators";

// import { makeStyles } from "@material-ui/core/styles";
// import clsx from 'clsx';
// import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';

// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
//   withoutLabel: {
//     marginTop: theme.spacing(3),
//   },
//   textField: {
//     width: '25ch',
//   },
// }));

// const styles = useStyles();
  // const [values, setValues] = React.useState({
  //   amount: '',
  //   password: '',
  //   weight: '',
  //   weightRange: '',
  //   showPassword: false,
  // });

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };


const LoginForm = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit} className={classes.loginFormContainer}>
      {/*обязательно передавать handleSubmit, тк с ним приходят из пропсов
      другие вещи(e.preventDefault,сбор данных,) */}
      <div className={classes.Title}>
        <p>Sign in</p>
      </div>
      {/* <FormControl className={clsx(styles.margin, styles.textField)}>
      <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
      <Field
          name={"password"}
          component={"input"}
          className={classes.inputPass}
          type={"password"}
          placeholder={"Password"}
        />
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl> */}
      { props.error && <div className={classes.commonError}>
        <span>{props.error}</span>
      </div>}
      <div className={classes.loginForm}>
        <Field
          name={"email"}
          component={Input}
          validate={[required]}
          className={classes.inputLogin}
          placeholder={"Email"}
        />
      </div>
      <div className={classes.passwordForm}>
        <Field
          name={"password"}
          component={Input}
          validate={[required]}
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
      <button
        className={classes.buttonLogin}
        variant="contained"
        color="primary"
      >
        Login
      </button>
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
    return <Redirect to={"/profile"} />;
  }
  return <LoginReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
