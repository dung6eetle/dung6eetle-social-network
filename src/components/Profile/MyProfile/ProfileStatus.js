import React from "react";
import classes from "./MyProfile.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };
  
  activateEditMode= () =>{
    this.setState({
      editMode: true,
    });
  }
  disabledEditMode = () => {
      this.setState({
          editMode:false
      })
      this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "no status"}
            </span>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input className={classes.inputStatus} onChange={this.onStatusChange} autoFocus={true} onBlur={this.disabledEditMode} value={this.state.status}></input>
          </div>
        )}
      </div>
      
    );
  }
}
export default ProfileStatus;
