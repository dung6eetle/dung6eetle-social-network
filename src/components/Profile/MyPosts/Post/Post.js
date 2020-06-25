import React from 'react'
import classes from './Post.module.css'
import { NavLink } from 'react-router-dom'

function Post(props) {
    
    return (
        <div>
            <div className={classes.dialogs__item}>
             <NavLink to={'/profile/' + props.id}></NavLink>
             <p>{props.message}</p>
           </div>
        </div>
    )
}
export default Post