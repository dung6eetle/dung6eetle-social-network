import { authApi, securityApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "sumurai-network/auth/GET_CAPTCHA_URL_SUCCESS"

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null // если нал то каптча не нужна
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl},
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

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authApi.login(email, password, rememberMe, captcha);
  
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
       dispatch(getCaptchaUrl())
    }
    let messageError = response.data.messages.length > 0 ? response.data.messages[0] : "error";
    dispatch(stopSubmit("login", { _error: messageError }));
  }
};

export const logout = () => async (dispatch) => {
  let response = await authApi.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {  // диспатчу эту санку из другой
  let response = await securityApi.getCaptcha();
  const captchaUrl = response.data.url
     dispatch(getCaptchaUrlSuccess(captchaUrl))
     console.log('captchaUrl', captchaUrl)
};
export default authReducer;
