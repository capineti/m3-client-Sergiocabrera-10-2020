import React, { Component } from "react";
//import hoverboardservice from "./../lib/Hoverboards-service";
import { withAuth } from "../context/auth-context";
import axios from "axios";
//import hoverboardService from "../lib/Hoverboards-service";

class AddHoverboard extends Component {
  //state = { model: undefined, name: undefined };
  state = { model: "The Marty", name: "" };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleHoverboards = (even) => {
    even.preventDefault();
    const { name, model } = this.state;
    axios.post(
      "http://localhost:5000/api/hoverboards",
      { name, model },
      { withCredentials: true }
    )
    .then( (response) => {
      console.log('after post', response.data);

    } )
  
  };

  render() {
    const { model, name, state } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>The Marty</label>
        <br />

        <label>No Tech</label>
        <br />

        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <button onClick={this.handleHoverboards} type="submit">
          submit
        </button>
      </form>
    );
  }
}
export default withAuth(AddHoverboard);
