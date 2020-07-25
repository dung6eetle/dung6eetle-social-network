import React from 'react';
import './App.css';
//import Loader from './Loader'
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Friends from './components/Friends/Friends'
import UsersContainer from './components/Users/usersContainer'
import Login from './components/Login/Login.js'
import {BrowserRouter,Route} from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer';

//const Dialogs = React.lazy(() => import ('./components/Dialogs/Dialogs')) /* Так компонента не попадает в общий бандл, используется вместе с Саспенс*/

function App(props) {
  return (
      <BrowserRouter>
      <div className="app_wrapper">
         <HeaderContainer/>
         <Navbar/>
         <div className="app_wrapper__content">
            <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/> 
            <Route path="/profile/:userId?" render={() => <ProfileContainer store={props.store}/>}/>
            <Route path="/friends" render={() => <Friends store={props.store}/>}/>
            <Route path="/users" render={()=> <UsersContainer store={props.store}/>}/>
            <Route path="/login" render={()=> <Login/>}/>
         </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
