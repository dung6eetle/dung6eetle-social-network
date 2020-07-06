import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer"

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage:{
      postData:[
        {id:1, message:'Its my first post'},
        {id:2, message:'Hi,how are you?'}
      ],
      newPostText: 'hue moe'
    },
      
    dialogsPage:{
      dialogsItemData:[
        {id:1, name:'Bugg'},
        {id:2, name:'Butterfly'},
        {id:3, name:'Caterpillar'},
        {id:4,name:'Spider'}
      ],
      messagesItemData:[
        {id:11, message:"hello nigga"},
        {id:22, message:"no hook no hoes"},
        {id:33, message:"GIDDY UP!"},
        {id:44, message:"Numb Numb Juice"}
      ],
      newMessageBody:''
    },
    friendsPage:{
      friendsItemData:[
        {id:1, name:"Bug", country:"Russia"},
        {id:2, name:"Butterfly", country:"Bolgaria"},
        {id:3, name:"Spider",country:"USA"},
        {id:4, name:"Caterpillar",country:"Australia"},
        {id:5, name:"Pogg",country:"Ukraine"},
      ]
    },
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe (observer)  {
    this._callSubscriber = observer;
  },
  

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state);
  }   
}

export const addPostActionCreator = () => {
  debugger;
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
  }
}

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body

  }
}

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  }
}


window.store = store
export default store