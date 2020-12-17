import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import logo2 from "./../img/logo2.png";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className="logo2" src={logo2} />
      </div>
    );
  }
}

export default withAuth(Header);
