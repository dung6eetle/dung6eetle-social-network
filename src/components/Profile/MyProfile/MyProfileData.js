import React from "react";
import classes from "./MyProfile.module.css";

function MyProfileData({ profile, goToEditMode, isOwner }) {
  return (
    <>
      
      <div className={classes.data}>
        <div className={classes.data_top}>
          <div>Description:{profile.lookingForAJobDescription}</div>
          <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
        </div>
        <div className={classes.data_center}>
          <div>
            About me:
            {profile.aboutMe != null ? profile.aboutMe : <p>ABOUT ME..</p>}
          </div>
          <div>
          Contacts:
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
