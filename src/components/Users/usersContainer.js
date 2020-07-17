import React from "react";
import { connect } from "react-redux";
import * as Axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { getUsers } from "../../api/api.js"

import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC,
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    getUsers(pageNumber,this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  toggleIsFetching: toggleIsFetchingAC
  })(UsersContainer);
