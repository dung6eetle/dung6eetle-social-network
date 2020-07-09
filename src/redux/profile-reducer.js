const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 1, message: "Its my first post" },
    { id: 2, message: "Hi,how are you?" },
  ],
  newPostText: "hue moe"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postData.length+1,
        message: state.newPostText,
      };
      return {
          ...state,
          newPostText:'',
          postData: [
              ...state.postData,
              newPost
          ]
      }
    case UPDATE_NEW_POST_TEXT:
      console.log('action',action)
      return {
          ...state,
          newPostText:action.newText
      }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  debugger;
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

export default profileReducer;
