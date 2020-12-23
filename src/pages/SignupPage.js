import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../context/auth-context";

class Signup extends Component {
  state = { username: "", password: "", email: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password, email } = this.state;

    this.props.signup(username, password, email);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, email } = this.state;
    return (
      <div className="signp-div">
        <form className="fields" onSubmit={this.handleFormSubmit}>
          <h1>Sign Up</h1>
          <br />
          <input
            className="username"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            className="email"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            className="password"
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button className="login-button">Signup</button>
        </form>
      </div>
    );
  }
}

export default withAuth(Signup);

// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;
