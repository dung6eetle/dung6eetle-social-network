import React from "react";
import classes from "./Post.module.css";
import { NavLink } from "react-router-dom";
import LikeHookCounter from "../../../Hooks/LikeHookCounter";

function Post(props) {
  return (
    <div className={classes.posts}>
      <div className={classes.posts__item}>
        <div className={classes.item__container}>
          <NavLink to={"/profile/" + props.id}></NavLink>
          {props.message}
        </div>
        <LikeHookCounter/>
      </div>
    </div>
  );
}
export default Post;
