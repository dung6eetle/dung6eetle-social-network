import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem.js";
import MessagesItem from "./MessagesItem.js";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../utils/FormControl";
import { required, maxLengthCreator } from "../utils/validators/validators";



function Dialogs(props) {
  let state = props.dialogsPage;
  let dialogsElement = state.dialogsItemData.map((d) => (
    <DialogsItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElement = state.messagesItemData.map((m) => (
    <MessagesItem message={m.message} key={m.id} id={m.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElement}
        <div>{messagesElement}</div>
        <div className={classes.messages}>
          <div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}
const maxLength100 = maxLengthCreator(100);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength100]}
          component={Textarea}
          name="newMessageBody"
        ></Field>
      </div>
      <div>
        <button>send</button>
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
