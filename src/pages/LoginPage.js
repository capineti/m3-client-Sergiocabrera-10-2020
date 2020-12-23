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
      <div className="login-div">
        <form className="fields" onSubmit={this.handleFormSubmit}>
          <h1>Login</h1>

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
            className="password"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <br />
          <button className="login-button">login</button>
        </form>
        {/* type="submit" value="Login" */}
      </div>
    );
  }
}

export default withAuth(Login);
