import React from "react";
import { maxLengthCreator } from "../../utils/validators/validators";
import { Field, reduxForm } from "redux-form";

const maxLength15 = maxLengthCreator(15);

class MyProfileStatus extends React.Component {
  state = {
    myStatus: this.props.myStatus,
    editMode: false,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  disabledEditMode = () => {
    this.setState({
      editMode: false,
    });
  };
  onStatusChange = (e) => {
    this.setState({
      myStatus: e.currentTarget.value,
    });
  };

  render() {
    return (
      <form>
        {!this.state.editMode && (
          <span onDoubleClick={this.activateEditMode}>
            {this.props.myStatus || "no status"}
          </span>
        )}
        {this.state.editMode && (
          <Field
            validate={maxLength15}
            onChanged={this.onStatusChange}
            autoFocus={true}
            onBlur={this.disabledEditMode}
            value={this.state.myStatus}
          ></Field>
        )}
      </form>
    );
  }
}

export default MyProfileStatus;
