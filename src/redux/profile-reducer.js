import { profileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_LIKE_COUNTER = "SET_LIKE_COUNTER";


let initialState = {
  postData: [
    { userId: 1, message: "Its my first post" },
    { userId: 2, message: "Hi,how are you?" },
  ],
  profile: null,
  status: "",
  likeCounter: 0
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
    case SET_LIKE_COUNTER: 
      return {
        ...state,
        likeCounter: action.likeCounter
      }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText
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
export const setLikeCounter = (likeCounter) => {
  return {
    type: SET_LIKE_COUNTER,
    likeCounter
  }
}


//THUNKs

export const getUserProfile = (userId) => (dispatch) => {
  profileApi.getProfile(userId).then((response) => {
    dispatch(setUserProfileAC(response.data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileApi.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};


export default profileReducer;
