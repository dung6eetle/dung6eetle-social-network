import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./LogoComponent";

function Header(props) {
  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <Logo/>
        <div className={classes.loginBlock}>
          {props.isAuth ? <div className={classes.userName}>{props.login}<button onClick={props.logout} className={classes.buttonLogout}>Log out</button> </div>
           : 
          <NavLink className={classes.loginLink} to={"/login"}>Login</NavLink>}
        </div>
      </div>
    </header>
  );
}
export default Header;
