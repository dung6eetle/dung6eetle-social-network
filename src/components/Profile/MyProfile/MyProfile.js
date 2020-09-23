import React, { useState } from "react";
import classes from "./MyProfile.module.css";
import Preloader from "../../common/Preloader";
import watermelon from "../../../assets/watermelon.svg";
import myPhoto from "../../../assets/hacker.svg";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHook from "./ProfileStatusHook";
import MyProfileData from "./MyProfileData";
import MyProfileDataForm from "./MyProfileDataForm";

function MyProfile(props) {
  const [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader />;
  }
  if (!props.profile.photos) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
     if(e.target.files.length) {
       props.savePhoto(e.target.files[0])
     }
  }

  return (
    <>
      <div className={classes.profileContainer}>
        <div className={classes.rightElementContainer}>
          <div className={classes.myTitle}>
            {props.profile.fullName}
            <img className={classes.imgStatus} src={watermelon} />
          </div>
          <div className={classes.status}>
            <ProfileStatusHook
              status={props.status}
              updateStatus={props.updateStatus}
            />
          </div>
          <div className={classes.itemPhoto}>
            <img
              className={classes.imgAnon}
              src={
                props.profile.photos.large != null
                  ? props.profile.photos.small
                  : myPhoto
              }
            />
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
          </div>

          {editMode ? <MyProfileDataForm profile={props.profile}/> : <MyProfileData goToEditMode={() => setEditMode(true)} isOwner={props.isOwner} profile={props.profile}/>}
          
          {/* */}

          
        </div>
      </div>
    </>
  );
}
export default MyProfile;
