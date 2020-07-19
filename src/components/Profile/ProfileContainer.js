import React from "react";
import classes from "./Profile.module.css";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
  getUserProfile,
} from "../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId) //Thunk
  }
  render() {
    if (!this.props.isAuth) return <Redirect to={"/login"}/>
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  };
};

let WithUrlDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  addPost: addPostActionCreator,
  updateNewPostText: updateNewPostTextActionCreator,
  getUserProfile
})(WithUrlDataComponent);
