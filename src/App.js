import React from 'react';
import './App.css';
//import Loader from './Loader'
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Friends from './components/Friends/Friends'
import UsersContainer from './components/Users/usersContainer'
import Login from './components/Login/Login.js'
import {BrowserRouter,Route, withRouter} from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer';
import { connect } from 'react-redux';
import { compose } from "redux";
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader';

//const Dialogs = React.lazy(() => import ('./components/Dialogs/Dialogs')) /* Так компонента не попадает в общий бандл, используется вместе с Саспенс*/

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      debugger;
       return <Preloader/>
    }
    return (
      <BrowserRouter>
      <div className="app_wrapper">
         <HeaderContainer/>
         <Navbar/>
         <div className="app_wrapper__content">
            <Route path="/dialogs" render={() => <DialogsContainer/>}/> 
            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
            <Route path="/friends" render={() => <Friends store={this.props.store}/>}/>
            <Route path="/users" render={()=> <UsersContainer />}/>
            <Route path="/login" render={()=> <Login/>}/>
         </div>
      </div>
    </BrowserRouter>
    )
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App)
