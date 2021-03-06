import { profileApi } from "../api/api";
import {stopSubmit} from 'redux-form'

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
//const SET_LIKE_COUNTER = "SET_LIKE_COUNTER";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  postData: [
    { id: 1, message: "Its my first post", likeCounter: 0 },
    { id: 2, message: "Hi,how are you?", likeCounter: 0},
  ],
  profile: null,
  status: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        userId: state.postData.length + 1,
        message: action.newPostText,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    // case SET_LIKE_COUNTER:
    //   return {
    //     ...state,
    //     likeCounter: state.postData.likeCounter+1
    //   }
    case DELETE_POST:
      return {
        ...state,
        postData: state.postData.filter((p) => p.id != action.postId),
      };
    case SAVE_PHOTO_SUCCESS: 
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export const setUserProfileAC = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
// export const setLikeCounter = (likeCounter) => {
//   return {
//     type: SET_LIKE_COUNTER,
//     likeCounter
//   }
// }
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const savePhotoSuccess = (photos) => {
  debugger;
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};

//THUNKs

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileApi.getProfile(userId);
  dispatch(setUserProfileAC(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileApi.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileApi.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileApi.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
  let response = await profileApi.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit("description", {_error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0])
    
  }
};

export default profileReducer;
