import React from "react";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import MyProfile from "./MyProfile/MyProfile";

function Profile(props) {
  return (
    <div className={classes.content}>
      <MyProfile profile={props.profile} />
      <MyPostsContainer store={props.store} />
    </div>
  );
}
export default Profile;
