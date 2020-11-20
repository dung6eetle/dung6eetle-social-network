import { authApi, securityApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "sumurai-network/auth/GET_CAPTCHA_URL_SUCCESS"

export type InitialStateType = {
  userId: number | null
  login: string | null
  email: string | null
  isAuth: boolean
  captchaUrl: string | null
}
export type SetAuthUserDataPayloadActionType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth:boolean | null
}
export type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataPayloadActionType
}
export type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: {captchaUrl: string},  // протипизировал как бы на ходу(одна из возможностей тайпскрипт)
}

let initialState:InitialStateType = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null // если нал то каптча не нужна
};

const authReducer = (state = initialState, action: any):InitialStateType => {
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

export const setAuthUserData = (userId:number | null, login:string | null, email:string | null, isAuth:boolean):SetAuthUserDataActionType => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }, // это подьобьект поэтому тоже нужно указать типы
  };
};

export const getCaptchaUrlSuccess = (captchaUrl: string):GetCaptchaUrlSuccessActionType => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl},
  };
};

// THUNK_CREATORs

export const getAuthUserData = () => async (dispatch:any) => {
  let response = await authApi.me();

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true)); // true относится к isAuth
  }
};

export const login = (email:string, password:string, rememberMe:boolean, captcha:string) => async (dispatch:any) => {
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

export const logout = () => async (dispatch:any) => {
  let response = await authApi.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch:any) => {  // диспатчу эту санку из другой
  let response = await securityApi.getCaptcha();
  const captchaUrl = response.data.url
     dispatch(getCaptchaUrlSuccess(captchaUrl))
     console.log('captchaUrl', captchaUrl)
};
export default authReducer;
