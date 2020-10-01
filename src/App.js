import React, { Suspense } from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/usersContainer";
import Login from "./components/Login/Login.js";
import { Redirect, Route, withRouter, Switch } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";
import withSuspense from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends React.Component {
  
  componentDidMount() {
    this.props.initializeApp(); // запускаем инициализацию
  }
  
  render() {
    if (!this.props.initialized) {
      // если приложение не проинициализировалось то мы показываем прелоадер
      return <Preloader />;
    }
    return (
      <div className="app_wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app_wrapper__content">
          <Switch>
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route
              path="/friends"
              render={() => <Friends store={this.props.store} />}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route exact path="/login" render={() => <Login />} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
