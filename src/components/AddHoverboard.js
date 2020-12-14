import React, { Component } from "react";
import hoverboardservice from "./../lib/Hoverboards-service";
import { withAuth } from "../context/auth-context";
//import hoverboardService from "../lib/Hoverboards-service";
//import axios from "axios";

class AddHoverboard extends Component {
  state = { model: "", name: "" };

  hadleFormSubmit = (event) => {
    event.preventDefault();
    const { model, name, state } = this.state;
  };
  handleHoverboards = () => {
    console.log(this.state);
    const { name } = this.state;
    hoverboardservice.createHoverboard(name);
    console.log("WORKS");
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { model, name, state } = this.state;

    return (
      <form onSubmit={this.hadleFormSubmit}>
        <label>The Marty</label>
        <br />

        <label>No Tech</label>
        <br />

        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />

        <input
          onClick={this.handleHoverboards}
          type="submit"
          value="AddHoverboard"
        />
      </form>
    );
  }
}
export default withAuth(AddHoverboard);

/*<section class="payment-plan cf">
        <h2>Select a payment plan:</h2>
        <input type="radio" name="radio2" id="monthly" value="monthly" checked><label class="monthly-label four col" for="monthly">Monthly</label>
        <input type="radio" name="radio2" id="yearly" value="yearly"><label class="yearly-label four col" for="yearly">Yearly</label>
      </section>*/
