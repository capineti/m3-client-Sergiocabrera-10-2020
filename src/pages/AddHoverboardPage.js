import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import axios from "axios";
import img1 from "./../img/marty.png";
import img2 from "./../img/notech.png";

class AddHoverboard extends Component {
  //state = { model: undefined, name: undefined };
  state = {
    model: "",
    name: "",
    battery: "100%",
    location: [1.352, 40.546],
    img: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  componentDidMount() {
    const model = this.props.match.params.model;
    let img = "";
    if (model === "The Marty") {
      img = img1;
    } else {
      img = img2;
    }
    this.setState({ model, img });
  }

  handleHoverboards = (even) => {
    even.preventDefault();
    const { model, name, location, battery } = this.state;
    axios
      .post(
        "http://localhost:5000/api/hoverboards",
        { model, name, location, battery: "100%", state: "waiting" },
        { withCredentials: true }
      )

      .then((response) => {
        console.log("after post", response.data);

        this.props.history.push({
          pathname: "/setlocation",
          state: {
            // `state` in this case is a special property that react-router uses to pass data to the next component in --> /setlocation (not to be mixed with `state` of class components )
            hoverboard: response.data,
          },
        });
      });
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <img className="img" src={this.state.img} alt="model" />
        <br />
        <br />
        <form className="form" onSubmit={this.handleChange}>
          <br />
          <br />

          <h1>{this.state.model}</h1>

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
      </div>
    );
  }
}
export default withAuth(AddHoverboard);
