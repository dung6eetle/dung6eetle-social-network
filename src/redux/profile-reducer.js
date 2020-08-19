import { profileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_LIKE_COUNTER = "SET_LIKE_COUNTER";
const DELETE_POST = "DELETE_POST";

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

export default profileReducer;
