const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      // если не найдется нужного экшона есть дефолтный кейс
      return state;
  }
};

export const setAuthUserData = (id, login, email) => {
  return {
    type: SET_USER_DATA,
    data:{id,email,login}
  };
};



export default authReducer;
