import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../context/auth-context';

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
      <div>
        <Link to={'/'} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {this.props.isLoggedIn ? (
          <>
            <p>Hello  {this.props.user && this.props.user.username}</p>
            <button onClick={this.props.logout}>Logout</button>
          </>
        ) : (
          <>
          <div>
            <Link to="/login">
              <button className="navbar-button">Login</button>{' '}
            </Link>
            </div>
            <br />
            <div>
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{' '}
            </Link>
            </div>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
