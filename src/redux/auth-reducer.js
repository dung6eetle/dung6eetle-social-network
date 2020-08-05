import { authApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, login, email, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

// THUNK_CREATORs

export const getAuthUserData = () => async (dispatch) => {
  let response = await authApi.me();

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true)); // true относится к isAuth
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response =  await authApi.login(email, password, rememberMe)
  
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let messageError =
        response.data.messages.length > 0 ? response.data.messages[0] : "error";
      dispatch(stopSubmit("login", { _error: messageError }));
    }
};
export const logout = () => async (dispatch) => {
  let response = await authApi.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;
