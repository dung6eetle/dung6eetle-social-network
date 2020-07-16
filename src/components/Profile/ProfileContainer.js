import React from "react";
import classes from "./Profile.module.css";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as Axios from 'axios'
import {addPostActionCreator, updateNewPostTextActionCreator, setUserProfileAC} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";


class ProfileContainer extends React.Component {
  componentDidMount() {
   debugger;
   let userId = this.props.match.params.userId
   if (!userId) {
       userId = 2
   }
    Axios.get(
        `https://social-network.samuraijs.com/api/1.0/profile/` + userId
      ).then(response => {
          this.props.setUserProfile(response.data)
      })
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let WithUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
   addPost: addPostActionCreator,
   updateNewPostText: updateNewPostTextActionCreator,
  setUserProfile: setUserProfileAC
})(WithUrlDataComponent);


