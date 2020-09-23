import React from "react";
import { Field, reduxForm, FormName } from "redux-form";
import {Input} from '../../utils/FormControl'

function MyProfileDataForm({ profile }) {
  console.log("profile", profile);
  return (
    <form>
      <Field
        name={"fullName"}
        component={Input}
        placeholder={"Name"}
      />
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
        <div></div>
      </div>
    </form>
  );
}

const DescriptionForm = reduxForm({
  form: "description",
})(MyProfileDataForm);

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <>
      <div>
        {contactTitle} : {contactValue}
      </div>
    </>
  );
};

export default DescriptionForm;
