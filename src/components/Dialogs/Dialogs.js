import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from './DialogsItem.js'
import MessagesItem from './MessagesItem.js'


function Dialogs(props) {
    let state = props.dialogsPage 
    let dialogsElement = state.dialogsItemData.map(d => <DialogsItem  name={d.name} key={d.id} id={d.id}/> )
    let messagesElement = state.messagesItemData.map(m => <MessagesItem  message={m.message} key={m.id} id={m.id}/> )
    let newMessageBody = state.newMessageBody

    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.updateNewMessageBody(body)
    }
    
    let onSendMessageClick = () => {
        props.sendMessage()
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