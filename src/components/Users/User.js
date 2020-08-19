import React from "react";
import userPhoto from "../../assets/imgBug.png";
import classes from "./users.module.css";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div key={user.id}>
      <span>
        <div className={classes.userImgContainer}>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={classes.userImg}
            />
          </NavLink>
        </div>
        <div className={classes.name}>{user.name}</div>
        <div className={classes.status}>{user.status}</div>
        <div className={classes.location}></div>
        <div className={classes.button}>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              follow
            </button>
          )}
        </div>
      </span>
    </div>
  );
};
export default User;
