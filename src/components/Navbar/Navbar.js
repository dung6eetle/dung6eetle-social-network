import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="../Profile/Profile.js" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="../Dialogs/Dialogs.js" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to ="../Users/Users.js" activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to ="../Friends/Friends.js" activeClassName={classes.activeLink}>Friends</NavLink>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}
export default Navbar