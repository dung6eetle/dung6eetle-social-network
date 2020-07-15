import React from "react";
import userPhoto from "../../assets/imgBug.png";
import classes from "./users.module.css";

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
              onClick={() => {
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
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className={classes.userImg}
              />
            </div>
            <div className={classes.name}>{u.name}</div>
            <div className={classes.status}>{u.status}</div>
            <div className={classes.location}>
              {"u.location.city"},{"u.location.country"}
            </div>
            <div className={classes.button}>
              {u.followed ? 
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
               : 
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </button>
              }
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
