import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import MyProfile from './MyProfile/MyProfile'
import { connect } from 'react-redux'
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../redux/profile-reducer'



function Profile(props) {
    
    return(
        <div className={classes.content}>
            <MyProfile />
            <MyPosts 
            postData={props.profile.postData} 
            newPostText={props.profile.newPostText} 
            dispatch={props.addPostActionCreator}
            updatePost={props.updateNewPostTextActionCreator}
            />
        </div>
    )
}
const mapStateToProps = (state) =>({
    profile: state.profileRedusers
})
const mapDispatchToProps = {
    addPostActionCreator,
    updateNewPostTextActionCreator
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)