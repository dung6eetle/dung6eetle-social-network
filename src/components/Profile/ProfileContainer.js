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
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId); //Thunk
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
//Compose
export default compose(
  connect(mapStateToProps,{getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); //HOC REDIRECT
// let WithUrlDataComponent = withRouter(AuthRedirectComponent); //HOC ROUTER
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataComponent, AuthRedirectComponent);
