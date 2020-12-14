import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import LandingPage from "./pages/LandingPage";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import ListOfBoards from "./components/ListOfBoards";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <AnonRoute exact path="/landingPage" component={LandingPage} />
          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute exact path="/listofboards" component={ListOfBoards} />
        </Switch>

        <Navbar />
      </div>
    );
  }
}

export default App;
