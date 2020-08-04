import React from "react";
import classes from "./MyProfile.module.css";
import Preloader from "../../common/Preloader";
import watermelon from "../../../assets/watermelon.svg";
import myPhoto from "../../../assets/hacker.svg";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHook from "./ProfileStatusHook";

function MyProfile(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  if (!props.profile.photos) {
    return <Preloader />;
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
          </div>
          <div className={classes.itemDiscription}>
            <p>
              {props.profile.aboutMe != null ? (
                props.profile.aboutMe
              ) : (
                <p>ABOUT ME..</p>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyProfile;
