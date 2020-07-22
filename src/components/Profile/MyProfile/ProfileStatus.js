import React from "react";

class ProfileStatus extends React.Component {
  
  state = {
    editMode: false,
    status: this.props.status
    
  };
  
  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }
  disabledEditMode() {
      this.setState({
          editMode:false
      })
  }
  render() {
    console.log("statusState",this.status);
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status}
            </span>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input autoFocus={true} onBlur={this.disabledEditMode.bind(this)} value={this.props.status}></input>
          </div>
        )}
      </div>
      
    );
  }
}
export default ProfileStatus;
