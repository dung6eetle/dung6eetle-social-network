import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import MyProfile from './MyProfile/MyProfile'
import { connect } from 'react-redux'
import {addPostActionCreator} from '../../redux/profile-reducer'


function Profile(props) {
    console.log(props)
    return(
        <div className={classes.content}>
            <MyProfile />
            <MyPosts 
            postData={props.postData} 
            newPostText={props.newPostText} 
            dispatch={props.dispatch}
            />
        </div>
    )
}
const mapStateToProps = (state) =>({
    profile: state.profileReducers
})
const mapDispatchToProps = {
    addPostActionCreator
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)