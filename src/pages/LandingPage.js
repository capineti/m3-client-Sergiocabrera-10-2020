import React, { Component } from "react";
import logo from "./../img/logo.svg";
class LandingPage extends Component {
  render() {
    return (
      <div class="landing-div ">
        <img className="logo" src={logo} />

        <h3 id="message">Admin account</h3>
      </div>
    );
  }
}

export default LandingPage;
