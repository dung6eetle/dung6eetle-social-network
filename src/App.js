import React from 'react';
import './App.css';
//import Loader from './Loader'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Friends from './components/Friends/Friends'
import {BrowserRouter,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/redux-store'

//const Dialogs = React.lazy(() => import ('./components/Dialogs/Dialogs')) /* Так компонента не попадает в общий бандл, используется вместе с Саспенс*/

function App(props) {
  debugger;
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="app_wrapper">
         <Header/>
         <Navbar/>
         <div className="app_wrapper__content">
            {/* <Route path="/dialogs" component={Dialogs}/>
            <Route path="/profile" component={Profile}/> */}
            <Route path="/dialogs" render={() => <DialogsContainer 
            store={props.store} />}/> 
            <Route path="/profile" render={() => 
            <Profile store={props.store} />}/>
            <Route path="/friends" render={() => <Friends store={props.store}/>}/>
         </div>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
