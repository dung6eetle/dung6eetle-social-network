import React from "react";


function MyProfileData({ profile, goToEditMode, isOwner }) {
  return (
    <>
      {isOwner && <button onClick={goToEditMode}>edit</button>}
      <div>
        <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
        <div>Description:{profile.lookingForAJobDescription}</div>
        <p>About me:{profile.aboutMe != null ? profile.aboutMe : <p>ABOUT ME..</p>}</p>
      </div>
      <div>
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
