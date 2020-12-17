import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import axios from "axios";

import { Link } from "react-router-dom";

class HoverboardsListPage extends Component {
  state = {
    hoverboards: [],
    model: "",
  };

  setHoverboardModel(model) {
    this.setState({ model: model });
  }

  render() {
    console.log("ListOfBoards: this.state", this.state);

    const filteredHoverboards = this.state.hoverboards.filter((hoverboard) => {
      return hoverboard.model.includes(this.state.model);
    });

    return (
      <div className="overboardlistcont">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <button onClick={() => this.setHoverboardModel("The Marty")}>
            The Marty
          </button>
          <button onClick={() => this.setHoverboardModel("No Tech")}>
            No Tech
          </button>
          <button onClick={() => this.setHoverboardModel("")}>All</button>
        </div>

        {filteredHoverboards.map((hoverboardsObj) => {
          console.log("hoverboardsObj", hoverboardsObj);
          return (
            <div className="hover" key={hoverboardsObj._id}>
              <p>{hoverboardsObj.state}</p>
              <p>{hoverboardsObj.battery}</p>

              <Link to={`edithoverboard/${hoverboardsObj._id}`}>
                <p>{hoverboardsObj.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/hoverboards", { withCredentials: true })
      .then((response) => {
        this.setState({ hoverboards: response.data });
      });
  }
}
export default withAuth(HoverboardsListPage);
