import React from "react";
import classes from "./Post.module.css";
import { NavLink } from "react-router-dom";

function Post(props) {
  return (
    <div>
      <div className={classes.dialogs__item}>
        <div className={classes.item__container}>
          <NavLink to={"/profile/" + props.id}></NavLink>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
}
export default Post;
