import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../context/auth-context";

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        {this.props.isLoggedIn ? (
          <>
            <p>Hello {this.props.user && this.props.user.username}</p>

            <div className="b-navbar">
              <Link to="/HomePage">Home</Link>
            </div>

            <div className="b-navbar">
              <Link to="listofboards">list of boards</Link>
            </div>

            <div className="b-navbar">
              <Link to="/AddModelPage">Add Model</Link>
            </div>
            <button onClick={this.props.logout}>Logout</button>
          </>
        ) : (
          <>
            <div className="log">
              <Link to="/login">login</Link>
            </div>
            <Link className="log" to="/signup">
              Sign up
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
