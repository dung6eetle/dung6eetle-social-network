import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'


function MyPostsContainer(props) {
    let state = props.store.getState()
    
    let addPost = () => {
      //props.addPost(text)
      props.store.dispatch(addPostActionCreator())
    }
    debugger;
    let onNewText = (text) => {
      //props.updatePostText(text)
      //props.updatePost(text)
      let action = updateNewPostTextActionCreator(text)
      props.store.dispatch(action)
    }
    
    return(<MyPosts updateNewPostText={onNewText} addPost={addPost} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer