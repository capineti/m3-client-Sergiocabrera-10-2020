import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import axios from "axios";

import { Link } from "react-router-dom";

class ListOfBoards extends Component {
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
      <div className="ListOfBoards">
        {filteredHoverboards.map((hoverboardsObj) => {
          console.log("hoverboardsObj", hoverboardsObj);
          return (
            <div key={hoverboardsObj._id}>
              <img src="" alt="" />
              <p>{hoverboardsObj.state}</p>
              <Link to={`/hoverboards/details/${hoverboardsObj._id}`}>
                <p>{hoverboardsObj.name}</p>
              </Link>
            </div>
          );
        })}

        <button onClick={() => this.setHoverboardModel("The Marty")}>
          The Marty
        </button>
        <button onClick={() => this.setHoverboardModel("No Tech")}>
          No Tech
        </button>
        <button onClick={() => this.setHoverboardModel("")}>All</button>
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
export default withAuth(ListOfBoards);
