import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import axios from "axios";

class EditHoverboards extends Component {
  state = {
    model: "The Marty",
    name: "",
    location: "",
    battery: "",
    id: "",
  };

  componentDidMount() {
    const model = this.props.match.params.id;

    this.setState({ id: model });
  }

  handleHoverboards = (even) => {
    even.preventDefault();
    const { model, name, location, battery } = this.state;
    axios.post(
      "http://localhost:5000/api/hoverboards",
      { model, name, location, battery },
      { withCredentials: true }
    );
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  putHoverboards = (event) => {
    event.preventDefault();

    axios
      .put(
        `http://localhost:5000/api/hoverboards/${this.state.id}`,
        {
          name: this.state.name,
          state: this.state.state,
          model: this.state.model,
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.history.push("/listofboards");
      });
  };

  deleteHoverboards = () => {
    axios
      .delete(`http://localhost:5000/api/hoverboards/${this.state.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.props.history.push("/listofboards");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("lallala", this.state);

    return (
      <>
        <form onSubmit={this.putHoverboards}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            defaultValue={this.state.name}
          />

          <select
            value={this.state.model}
            name="model"
            onChange={this.handleChange}
          >
            <option value="The Marty">The Marty</option>
            <option value="No Tech">No Tech</option>
          </select>

          <select
            value={this.state.state}
            name="state"
            onChange={this.handleChange}
          >
            <option value="waiting">waiting</option>
            <option value="flying">flying</option>
          </select>

          <button type="submit">New Name</button>
        </form>

        <button onClick={() => this.deleteHoverboards(this.state.id)}>
          Delete
        </button>
      </>
    );
  }
}
export default withAuth(EditHoverboards);
