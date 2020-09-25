import React from "react";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import MyProfile from "./MyProfile/MyProfile";

function Profile(props) {
  return (
    <div className={classes.content}>
      <MyProfile 
      saveProfile={props.saveProfile}
      savePhoto={props.savePhoto}
      isOwner={props.isOwner}
      profile={props.profile} 
      status={props.status} 
      updateStatus={props.updateStatus}/>
      <MyPostsContainer likeCounter={props.likeCounter}/>
    </div>
  );
}
export default Profile;
