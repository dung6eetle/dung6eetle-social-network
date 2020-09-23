import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getStatus,
  updateStatus,
  getUserProfile,
  savePhoto
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {                              // создаем отдельный метод для отображения нужной img 
    let userId = this.props.match.params.userId;  // так как логика UI при нажатии по random юзеру
    if (!userId) {                                // перемещаться на владку профайл и показывать его img,
      userId = this.props.authorizedUserId;       // а при первом рендере или по нажатию на вкалдку профайл 
      if (!userId) {                              // должна показываться img Моего профиля, логика дублируется
        this.props.history.push("/login")         // в два метода didUpdate didMount. 
      }
    }
    this.props.getUserProfile(userId); //Thunk
    this.props.getStatus(userId); //Thunk
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps) {
    if(this.props.match.params.userId != prevProps.match.params.userId) {   // didUpdate сработал потому что изменилось Id из пропсов
      this.refreshProfile()
    }
  }
  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        myStatus={this.props.myStatus}
        updateStatus={this.props.updateStatus}
        likeCounter={this.props.likeCounter}
        savePhoto={this.props.savePhoto}
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
  connect(mapStateToProps, { getUserProfile, updateStatus, getStatus, savePhoto }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); //HOC REDIRECT
// let WithUrlDataComponent = withRouter(AuthRedirectComponent); //HOC ROUTER
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataComponent, AuthRedirectComponent);
