import React from "react";
import classes from "./Profile.module.css";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as Axios from "axios";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
  getUserProfile,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { usersApi } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId) //Thunk
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

let WithUrlDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  addPost: addPostActionCreator,
  updateNewPostText: updateNewPostTextActionCreator,
  getUserProfile
})(WithUrlDataComponent);
