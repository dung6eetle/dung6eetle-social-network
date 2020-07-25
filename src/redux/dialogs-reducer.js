const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogsItemData: [
      { id: 1, name: "Bugg" },
      { id: 2, name: "Butterfly" },
      { id: 3, name: "Caterpillar" },
      { id: 4, name: "Spider" },
    ],
    messagesItemData: [
      { id: 11, message: "hello nigga" },
      { id: 22, message: "no hook no hoes" },
      { id: 33, message: "GIDDY UP!" },
      { id: 44, message: "Numb Numb Juice" },
    ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody
      return {
        ...state,
        messagesItemData: [...state.messagesItemData, {id:state.messagesItemData.length+1, message:body}]
      }
    default:
      // если не найдется нужного экшона есть дефолтный кейс
      return state;
  }
};


export const sendMessageCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody
  };
};

export default dialogsReducer;
