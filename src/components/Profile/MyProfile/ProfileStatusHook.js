import React, { useState, useEffect } from "react";
import classes from "./MyProfile.module.css";


const ProfileStatusHook = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {setStatus(props.status)},[props.status])

  const activateEditMode = () => {
    setEditMode(true)
  };
  const disabledEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "no status"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={classes.inputStatus}
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={disabledEditMode}
            value={status}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusHook;
