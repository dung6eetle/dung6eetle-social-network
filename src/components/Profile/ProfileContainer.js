import React from "react";
import classes from "./Profile.module.css";
import { connect } from "react-redux";
import Profile from "./Profile";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <Profile />;
  }
}
let mapStateToProps = (state = {
  profilePage: state.profileReducers,
});

export default connect(mapStateToProps, {
  addPost: addPostActionCreator,
  updateNewPostText: updateNewPostTextActionCreator,
})(ProfileContainer);
export default ProfileContainer;
