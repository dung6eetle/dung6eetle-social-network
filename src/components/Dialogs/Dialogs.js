import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from './DialogsItem.js'
import MessagesItem from './MessagesItem.js'
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/state'


function Dialogs(props) {
    let state = props.store.getState().dialogsPage

    let dialogsElement = state.dialogsItemData.map(d => <DialogsItem  name={d.name} id={d.id}/> )
    let messagesElement = state.messagesItemData.map(m => <MessagesItem  message={m.message} id={m.id}/> )
    let newMessageBody = state.newMessageBody
    

    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator)
    }
    
    return(
       <div className={classes.dialogs}>
           <div className={classes.dialogsItems}>
               {dialogsElement}
           </div>
           <div className={classes.messages}>
               <div>
                   {messagesElement}
               </div>
               <div>
                  <div>
                    <textarea onChange={onNewMessageChange} value={newMessageBody}></textarea>
                  </div>
                  <div>
                    <button onClick={onSendMessageClick}>send</button>
                  </div>
               </div>
                
           </div>
       </div>
    )
}
export default Dialogs