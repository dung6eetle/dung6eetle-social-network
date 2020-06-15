import React from 'react'
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogsItem =(props) => {
    return (
      <div className={classes.dialogs__item}>
          <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
      </div>
    )
}

export default DialogsItem 