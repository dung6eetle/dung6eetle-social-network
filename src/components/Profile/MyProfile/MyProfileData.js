import React from "react";
import classes from "./MyProfile.module.css";

function MyProfileData({ profile, goToEditMode, isOwner }) {
  return (
    <>
      
      <div className={classes.data}>
        <div className={classes.data_top}>
          <div className={classes.item_string}><span>Description: </span>{profile.lookingForAJobDescription} </div>
          <div className={classes.item_string}><span>Looking for a job:</span> {profile.lookingForAJob ? "yes" : "no"}</div>
        </div>
        <div className={classes.data_center}>
          <div className={classes.item_string}>
            <span>About me:</span> {profile.aboutMe != null ? profile.aboutMe : <p>ABOUT ME..</p>}
          </div>
          <div className={classes.item_string}>
          {Object.keys(profile.contacts).map((key) => (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          ))}
        </div>
        <div className={classes.data_bottom}>
           <div className={classes.edit_bottom}>
           {isOwner && <button onClick={goToEditMode}>edit</button>}
           </div>
        </div>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
}
export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <>
      <div>
        {contactTitle} : {contactValue}
      </div>
    </>
  );
};

export default MyProfileData;
