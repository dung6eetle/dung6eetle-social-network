
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
      ]
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
  

  addPost () {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
    
  },
  
  updatePostText (newText)  {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  
}


export default store
window.store = store