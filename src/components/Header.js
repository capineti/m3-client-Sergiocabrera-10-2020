import React, { Component } from "react";
import { withAuth } from "../context/auth-context";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h4>Home</h4>
      </div>
    );
  }
}

export default withAuth(Header);
