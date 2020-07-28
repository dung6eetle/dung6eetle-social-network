import { authApi } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, login, email, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
  };
};

// THUNK_CREATORs

export const getAuthUserData = () => (dispatch) => {
  authApi.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, login, email, true));    // true относится к isAuth
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {   // 
  authApi.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    }
  })
}
export const logout = () => (dispatch) => {
  authApi.logout().then(response => {
    if (response.data.resultCode === 0 ) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}

export default authReducer;
