import React from 'react'
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const MessagesItem =(props)=> {
    let newMessageElement = React.createRef()

    let addMessage = () => {
       let text = newMessageElement.current.value;
       alert(text);
    }


    return (
        <div className={classes.messages__item}>
            <NavLink to={'/dialogs/' + props.id}></NavLink>
            <div>
                {props.message}
            </div>
            <div className={classes.addMessage}>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>send</button>
                </div>
                
            </div>
        </div>
    )
}
export default MessagesItem