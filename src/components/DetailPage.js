import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import axios from "axios";

class DetailPage extends Component {
  state = {
    hoverboards: [],
    model: "",
    name: "",
  };

  render() {
    console.log("ListOfBoards: this.state", this.state);

    const filteredHoverboards = this.state.hoverboards.filter((hoverboard) => {
      return hoverboard.model.includes(this.state.model);
    });

    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* <p>{this.state.name}</p> */}
        {filteredHoverboards.map((hoverboardsObj) => {
          return (
            <div key={hoverboardsObj._id}>
              <p>{hoverboardsObj.name}</p>
              <p>{hoverboardsObj.state}</p>
              <p>{hoverboardsObj.battery}</p>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`http://localhost:5000/api/hoverboards/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("reponse", this.state);
        //this.setState((name: response.data.name));
      });
  }
}

export default withAuth(DetailPage);
