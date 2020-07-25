import React from "react";

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
          myStatus: e.currentTarget.value
      })
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <span onDoubleClick={this.activateEditMode}>
            {this.props.myStatus || "no status"}
          </span>
        )}
        {this.state.editMode && (
          <input
            onChanged={this.onStatusChange}
            autoFocus={true}
            onBlur={this.disabledEditMode}
            value={this.state.myStatus}
          ></input>
        )}
      </div>
    );
  }
}
export default MyProfileStatus;
