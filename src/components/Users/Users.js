import React from "react";
import userPhoto from "../../assets/imgBug.png";
import classes from "./users.module.css";
import { NavLink } from "react-router-dom";
import Axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.usersContainer}>
      <div className={classes.usersPageCount}>
        {pages.map((p) => {
          return (
            <span
              key={p.id}
              className={props.currentPage === p && classes.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={classes.userImgContainer}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={classes.userImg}
                />
              </NavLink>
            </div>
            <div className={classes.name}>{u.name}</div>
            <div className={classes.status}>{u.status}</div>
            <div className={classes.location}>
              {"u.location.city"},{"u.location.country"}
            </div>
            <div className={classes.button}>
              {u.followed ? (
                <button
                  onClick={() => {
                    Axios.delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: {"API-KEY": "5244641d-cf75-402c-bbdb-0144979168bb"}}
                    ).then((response) => {
                      if (response.data.resultCode == 0) {
                        props.unfollow(u.id);
                      }
                    });
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    Axios.post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: {"API-KEY": "5244641d-cf75-402c-bbdb-0144979168bb"}}
                    ).then((response) => {
                      if (response.data.resultCode == 0) {
                        props.follow(u.id);
                      }
                    });
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
