import React from 'react'
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import MyProfile from './MyProfile/MyProfile'
import { connect } from 'react-redux'
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../redux/profile-reducer'



function Profile(props) {
    return(
        <div className={classes.content}>
            <MyProfile />
            <MyPostsContainer store={props.store}
            // newPostText={props.profile.newPostText} 
            // dispatch={props.addPostActionCreator}
            // updatePost={props.updateNewPostTextActionCreator}
            />
        </div>
    )
}
const mapStateToProps = (state) =>({
    profilePage: state.profileReducers
})
const mapDispatchToProps = {
    addPostActionCreator,
    updateNewPostTextActionCreator
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)