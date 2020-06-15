import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import MyProfile from './MyProfile/MyProfile'

function Profile(props) {
    
    return(
        <div className={classes.content}>
            <MyProfile />
            <MyPosts postData={props.postData}/>
        </div>
    )
}

export default Profile