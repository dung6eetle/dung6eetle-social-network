import React from 'react'
import classes from './Friends.module.css'
import FriendsList from './FriendsList'

function Friends(props) {
    let state = props.store.getState().friendsPage
    let friendsElement = state.friendsItemData.map(f => <FriendsList id={f.id} name={f.name} country={f.country}/>)
    return(
        <div className={classes.friends__container}>
            <div className={classes.friends__header}>
               My friends
            </div>
            {friendsElement}
        </div>
    )
}
export default Friends