import React, { Component } from "react";
import { withAuth } from "./..//context/auth-context";
import hoverboardService from "./../lib/Hoverboards-service";

class AddHoverboard extends Component {
  state = { model: "", name: "", state: "waiting" };

  hadleFormSubmit = (event) => {
    event.preventDefault();
    const { model, name, state } = this.state;

    this.props.AddHoverboard(name, model, state);
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleHoverboards = (event) => {
    const { id } = this.props.match.params;
    hoverboardService
      .createHoverboard(id)
      .then(() => console.log("Create teh Hoverboard"));
  };

  render() {
    const { model, name, state } = this.state;

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>The Marty</label>
          <label>The Marty</label>

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
      </div>
    );
  }
}
export default withAuth(AddHoverboard);

/*<section class="payment-plan cf">
        <h2>Select a payment plan:</h2>
        <input type="radio" name="radio2" id="monthly" value="monthly" checked><label class="monthly-label four col" for="monthly">Monthly</label>
        <input type="radio" name="radio2" id="yearly" value="yearly"><label class="yearly-label four col" for="yearly">Yearly</label>
      </section>*/
