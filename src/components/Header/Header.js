import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import dung6eetle from '../../assets/dung6eetleLogo.svg'

function Header(props) {
  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>

        <div className={classes.header__logo}>
          <img src={dung6eetle}></img>
        </div>
        <div className={classes.loginBlock}>
          {props.isAuth ? <div className={classes.userName}>{props.login} -  <button onClick={props.logout} className={classes.buttonLogout}>Log out</button> </div>
           : 
          <NavLink className={classes.loginLink} to={"/login"}>Login</NavLink>}
        </div>
      </div>
    </header>
  );
}
export default Header;
