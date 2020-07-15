import React from 'react'
import classes from '../Users/users.module.css'
import preloader from '../../assets/preloader.gif'

const Preloader = (props) => {
    return <div className={classes.preloader}><img src={preloader}></img></div>
}

export default Preloader