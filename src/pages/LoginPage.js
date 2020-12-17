import React, { Component } from "react";
import { withAuth } from "../context/auth-context";

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    // Call funciton coming from AuthProvider ( via withAuth )
    this.props.login(username, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="login">
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <br />
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <br />

          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input className="log" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
