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
      <div className="signup">
        <h1>Sign Up</h1>
        <br />
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
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
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
          <input className="log" type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link className="loginLink" to={"/login"}>
          {" "}
          Login
        </Link>
      </div>
    );
  }
}

export default withAuth(Signup);

// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;
