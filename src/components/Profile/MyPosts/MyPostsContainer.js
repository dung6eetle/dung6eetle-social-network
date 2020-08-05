import {addPostActionCreator, setLikeCounter } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
  return {
     postData: state.profilePage.postData,
     likeCounter: state.profilePage.likeCounter
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    },
    // setLikeCounter: (likeCounter) => {
    //    dispatch(setLikeCounter(likeCounter))
    // }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer