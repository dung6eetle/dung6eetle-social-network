import React from 'react'
import classes from './FriendsList.module.css'
import FriendsHook from './FriendsHook'

function FriendsList(props) {
    return(
    // <div className={classes.friendsListContainer}>
    //   <div className={classes.friendListCard}>
    //      <div className={classes.friendsName}>{props.name}</div>
    //      <div className={classes.friendsCountry}>{props.country}</div>
    //   </div>
    // </div>
    <div>
      <FriendsHook/>
    </div>
    )
}
export default FriendsList