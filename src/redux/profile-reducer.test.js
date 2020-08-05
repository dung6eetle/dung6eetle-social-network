const { addPostActionCreator, default: profileReducer, deletePost } = require("./profile-reducer");

it ('new post should be added(length of post should be incremented)', () => {
  //1. test data
  let action = addPostActionCreator("text blablabla")
  let state = {
    postData: [
      { id: 1, message: "Its my first post" },
      { id: 2, message: "Hi,how are you?" },
    ]
  };
  //2. action
  let newState = profileReducer(state, action)
  //3. expectation(ожидание)
  expect(newState.postData.length).toBe(3)
})

it ('new message', () => {
  //1. test data
  let action = addPostActionCreator("text blablabla")
  let state = {
    postData: [
      { id: 1, message: "Its my first post" },
      { id: 2, message: "Hi,how are you?" },
    ]
  };
  //2. action
  let newState = profileReducer(state, action)
  //3. expectation(ожидание)
  expect(newState.postData[2].message).toBe('text blablabla')
})

it ('delete post', () => {
  //1. test data
  let action = deletePost(1)
  let state = {
    postData: [
      { id: 1, message: "Its my first post" },
      { id: 2, message: "Hi,how are you?" },
    ]
  };
  //2. action
  let newState = profileReducer(state, action)
  //3. expectation(ожидание)
  expect(newState.postData.length).toBe(1)
})