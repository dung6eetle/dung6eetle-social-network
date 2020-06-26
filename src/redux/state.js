import {rerenderEntireTree} from '../render'

let state = {
  profilePage:{
    postData:[
      {id:1, message:'Its my first post'},
      {id:2, message:'Hi,how are you?'}
    ],
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
  }
}

export let addPost = (postMessage) => {
  debugger;
  let newPost = {
    id: 3,
    message: postMessage
  };
  state.profilePage.postData.push(newPost);
  rerenderEntireTree(state);
}

export default state