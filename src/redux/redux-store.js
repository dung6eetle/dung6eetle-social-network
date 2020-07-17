import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./usersReducer"
import authReducer from "./auth-reducer";




let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)
window.store = store

export default store