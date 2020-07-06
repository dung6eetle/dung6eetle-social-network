import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let reducers = combineReducers({
    dialogsRedusers: dialogsReducer,
    profileRedusers: profileReducer
})

let store = createStore(reducers)

export default store