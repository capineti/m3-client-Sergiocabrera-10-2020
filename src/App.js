import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

// Smaller components used for react-router changing of what we see
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

// Big components - used as pages displayed by react-router
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
//import PrivatePage from "./pages/PrivatePage";
import LandingPage from "./pages/LandingPage";
import HoverboardsListPage from "./pages/HoverboardsListPage";
import AddModelPage from "./pages/AddModelPage";
import AddHoverboardPage from "./pages/AddHoverboardPage";
import EditHoverboardsPage from "./pages/EditHoverboardsPage";
import DetailPage from "./components/DetailPage";
import SetLocationPage from "./pages/SetLocationPage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Switch>
          <AnonRoute exact path="/" component={LandingPage} />

          <AnonRoute exact path="/signup" component={SignupPage} />
          <AnonRoute exact path="/login" component={LoginPage} />
          {/* <AnonRoute exact path="/landingPage" component={LandingPage} /> */}

          <PrivateRoute exact path="/HomePage" component={HomePage} />
          <PrivateRoute
            exact
            path="/listofboards"
            component={HoverboardsListPage}
          />
          <PrivateRoute
            exact
            path="/addhoverboard"
            component={AddHoverboardPage}
          />
          <PrivateRoute exact path="/AddModelPage" component={AddModelPage} />
          <PrivateRoute exact path="/setlocation" component={SetLocationPage} />

          <PrivateRoute
            exact
            path="/addhoverboard/:model"
            component={AddHoverboardPage}
          />
          <PrivateRoute exact path="/addmodel" component={AddModelPage} />
          <PrivateRoute
            exact
            path="/edithoverboard/:id"
            component={EditHoverboardsPage}
          />
          <PrivateRoute exact path="/detail/:id" component={DetailPage} />
        </Switch>

        <Navbar />
      </div>
    );
  }
}

export default App;
