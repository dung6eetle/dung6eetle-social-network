const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 1, message: "Its my first post" },
    { id: 2, message: "Hi,how are you?" },
  ],
  newPostText: "hue moe",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
  //if (action.type === ADD_POST) {
  //    let newPost = {
  //      id: 3,
  //      message: state.newPostText
  //    };
  //    state.postData.push(newPost);
  //    state.newPostText = '';
  //
  //
  //  } else if (action.type === UPDATE_NEW_POST_TEXT) {
  //    state.newPostText = action.newText;
  //
  //  }
  //return state
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
