import React from "react";
import Contact from './MyProfileDataForm'

function MyProfileData({ profile, goToEditMode, isOwner }) {
  return (
    <>
      {isOwner && <button onClick={goToEditMode}>edit</button>}
      <div>
        <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
        <p>{profile.aboutMe != null ? profile.aboutMe : <p>ABOUT ME..</p>}</p>
      </div>
      <div>
        {/* <div>
          Contacts:
          {Object.keys(profile.contacts).map((key) => (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          ))}
        </div> */}
      </div>
    </>
  );
}

export default MyProfileData;
