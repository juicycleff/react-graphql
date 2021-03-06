import React, { Component } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import LoginPage from "../screens/LoginPage";
import SignupPage from "../screens/SignupPage";
import HomePage from "../screens/HomePage";
import { AuthRoute, UnauthRoute } from "../common/RouteUtil";

import "../App.css";
import Header from "../components/Header";

class AppRouter extends Component {

  render() {
    const { canAccess } = this.props;
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <UnauthRoute exact path="/" canAccess={canAccess} component={LandingPage} />
            <AuthRoute canAccess={canAccess} path="/home" component={HomePage} />
            <UnauthRoute canAccess={canAccess} path="/login" component={LoginPage} />
            <UnauthRoute canAccess={canAccess} path="/signup" component={SignupPage} />
          </Switch>
        </div>		
      </Router>
    );
  }
}

export default AppRouter;