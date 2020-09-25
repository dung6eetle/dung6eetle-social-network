import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../utils/FormControl";
import classes from '../../Login/login.module.css'

function MyProfileDataForm({ profile, handleSubmit, error }) {
  console.log("profile", profile);
  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className={classes.commonError}>
          <span>{error}</span>
        </div>
      )}
      Full Name:
      <Field name={"fullName"} component={Input} placeholder={"Full name"} />
      Looking for a Job:
      <Field
        name={"lookingForAJob"}
        component={Input}
        type="checkbox"
        placeholder={"Looking for a job"}
      />
      My professionals skills:
      <Field
        name={"lookingForAJobDescription"}
        component={Textarea}
        placeholder={"my skills.."}
      />
      About me:
      <Field name={"aboutMe"} component={Textarea} placeholder={"about me.."} />
      <div>
        <div>
          Contacts:
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key}>
                {key}:{" "}
                <Field
                  name={"contacts." + key}
                  component={Input}
                  placeholder="https://"
                />
              </div>
            );
          })}
        </div>
        <div>
          <button variant="contained" color="primary">
            Save info
          </button>
        </div>
      </div>
    </form>
  );
}

const DescriptionReduxForm = reduxForm({
  form: "description",
})(MyProfileDataForm);

export default DescriptionReduxForm;
