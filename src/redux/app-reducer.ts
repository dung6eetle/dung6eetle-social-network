import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


export type InitialStateType = {
  initialized: boolean
}
export type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS             // "INITIALIZED_SUCCESS"
}

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action:any ):InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export const initializedSuccess = ():InitializedSuccessActionType => {
  return {
    type: INITIALIZED_SUCCESS
  };
};

// THUNK_CREATORs
export const initializeApp = () => (dispatch:any) => {     // Когда все промисы из массивы зарезолвятся 
  let promise = dispatch(getAuthUserData())             // тогда then и в стейте изменится с false на true 
  Promise.all([promise,]).then(() => {
      dispatch(initializedSuccess())       
  })
};

export default appReducer