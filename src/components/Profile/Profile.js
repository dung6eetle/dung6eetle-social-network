import React from "react";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import MyProfile from "./MyProfile/MyProfile";

function Profile(props) {
  // console.log('status', props.status)
  return (
    <div className={classes.content}>
      <MyProfile profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer  />
    </div>
  );
}
export default Profile;
