import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./users.module.css";
import Paginator from "../common/Paginator";
import User from "./User";
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getPortionSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selectors";
import { getUsersThunk } from "../../redux/usersReducer";

export const Users = (props) => {
  const users = useSelector(getUsers);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const pageSize = useSelector(getPageSize);
  const portionSize = useSelector(getPortionSize);
  const currentPage = useSelector(getCurrentPage);
  const followingInProgress = useSelector(getFollowingInProgress);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk(currentPage, pageSize));
  }, []);

  const onPageChanged = (pageNumber) => {
    dispatch(getUsersThunk(pageNumber, pageSize));
  };

  return (
    <div className={classes.usersContainer}>
      <div className={classes.usersPageCount}>
        <Paginator
          totalItemsCount={totalUsersCount}
          portionSize={portionSize}
          pageSize={pageSize}
          onPageChanged={onPageChanged}
          currentPage={currentPage}
        />
      </div>
      {users.map((u) => (
        <User key={u.id} user={u} followingInProgress={followingInProgress} />
      ))}
    </div>
  );
};
export default Users;
