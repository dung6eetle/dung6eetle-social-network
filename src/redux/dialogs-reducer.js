const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
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
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.messagesItemData.push({ id: 66, message: body });
      state.newMessageBody = "";
      return state;
    default:
      // если не найдется нужного экшона есть дефолтный кейс
      return state;
  }
  //if (action.type === UPDATE_NEW_MESSAGE_BODY ) { // этот шаблон можно заменить switch case
  //state.newMessageBody = action.body;
  //} else if (action.type === SEND_MESSAGE) {
  //let body = state.newMessageBody;
  //state.newMessageBody = "";
  //state.messagesItemData.push({ id:66, message: body });
};

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export default dialogsReducer;
