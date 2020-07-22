import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
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
      userId = 2;
    }
    this.props.getUserProfile(userId); //Thunk
    // this.props.getStatus(userId);
    console.log('statusMount', this.status)
  }
  
  render() {
    console.log('statusСont:', this.props.status)
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />; 
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
};
//Compose
export default compose(
  connect(mapStateToProps,{getUserProfile, updateStatus, getStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); //HOC REDIRECT
// let WithUrlDataComponent = withRouter(AuthRedirectComponent); //HOC ROUTER
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataComponent, AuthRedirectComponent);
