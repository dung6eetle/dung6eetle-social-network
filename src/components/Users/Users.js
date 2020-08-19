import React from "react";

import classes from "./users.module.css";

import Paginator from "../common/Paginator";
import User from "./User";

let Users = ({
  onPageChanged,
  totalItemsCount,
  portionSize,
  pageSize,
  currentPage,
  followingInProgress,
  unfollow,
  follow,
  ...props
}) => {
  return (
    <div className={classes.usersContainer}>
      <div className={classes.usersPageCount}>
        <Paginator
          totalItemsCount={totalItemsCount}
          portionSize={portionSize}
          pageSize={pageSize}
          onPageChanged={onPageChanged}
          currentPage={currentPage}
        />
      </div>
      {props.users.map((u) => (
        <User
          key={u.id}
          user={u}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
    </div>
  );
};
export default Users;
