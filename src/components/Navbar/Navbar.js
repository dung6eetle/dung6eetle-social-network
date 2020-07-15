import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="../Profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="../Dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to ="../Users" activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to ="../Friends" activeClassName={classes.activeLink}>Friends</NavLink>
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