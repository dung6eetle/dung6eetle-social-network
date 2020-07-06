import React from 'react'
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'


const MessagesItem = (props) => {
    return (
        <div className={classes.messages__item}>
            <NavLink to={'/dialogs/' + props.id}>{props.message}</NavLink>
        </div>
    )
}
export default MessagesItem