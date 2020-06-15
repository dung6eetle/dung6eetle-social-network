import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from './DialogsItem.js'
import MessagesItem from './MessagesItem.js'


function Dialogs(props) {

    let dialogsElement = props.dialogsItemData.map(d => <DialogsItem name={d.name} id={d.id}/> )

    let messagesElement = props.messagesItemData.map(m => <MessagesItem message={m.message} id={m.id}/> )

    return(
       <div className={classes.dialogs}>
           <div className={classes.dialogsItems}>
               {dialogsElement}
           </div>
           <div className={classes.messages}>
               {messagesElement}
           </div>
       </div>
    )
}
export default Dialogs