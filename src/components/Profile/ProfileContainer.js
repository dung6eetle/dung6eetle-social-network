import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getStatus,
  updateStatus,
  getUserProfile,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId); //Thunk
    this.props.getStatus(userId); //Thunk
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        myStatus={this.props.myStatus}
        updateStatus={this.props.updateStatus}
        likeCounter={this.props.likeCounter}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myStatus: state.profilePage.myStatus,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    likeCounter: state.profilePage.likeCounter
  };
};
//Compose
export default compose(
  connect(mapStateToProps, { getUserProfile, updateStatus, getStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); //HOC REDIRECT
// let WithUrlDataComponent = withRouter(AuthRedirectComponent); //HOC ROUTER
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataComponent, AuthRedirectComponent);
