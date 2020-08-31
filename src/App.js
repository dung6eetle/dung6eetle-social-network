import React, { Suspense } from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/usersContainer";
import Login from "./components/Login/Login.js";
import { Route, withRouter } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";
import withSuspense from "./components/hoc/withSuspense"

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
); 
const Friends = React.lazy(() =>
  import("./components/Friends/Friends")
); 

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app_wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app_wrapper__content">
          <Route
            path="/dialogs"
            render={
              withSuspense(DialogsContainer)
            }
          />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route
            path="/friends"
            render={withSuspense(Friends)}
          />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
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
