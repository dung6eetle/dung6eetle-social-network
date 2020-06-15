import React from 'react'
import classes from './FriendsList.module.css'

function FriendsList(props) {
    return(
    <div className={classes.friendsListContainer}>
      <div className={classes.friendListCard}>
         <div className={classes.friendsName}>{props.name}</div>
         <div className={classes.friendsCountry}>{props.country}</div>
      </div>
    </div>
    )
}
export default FriendsList