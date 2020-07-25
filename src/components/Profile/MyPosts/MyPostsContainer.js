import React from 'react'
import {addPostActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
  return {
     postData: state.profilePage.postData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer