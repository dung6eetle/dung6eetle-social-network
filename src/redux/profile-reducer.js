const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  postData: [
    { id: 1, message: "Its my first post" },
    { id: 2, message: "Hi,how are you?" },
  ],
  newPostText: "",
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postData.length + 1,
        message: state.newPostText,
      };
      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, newPost],
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE: 
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
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
    profile
  }
}

export default profileReducer;
