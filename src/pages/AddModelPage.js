import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import img from "./../img/marty.png";
import img2 from "./../img/notech.png";
import { Link } from "react-router-dom";
//import AddHoverboard from "./AddHoverboardPage";

class AddModel extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Link to={"addhoverboard/The Marty"}>
          <img className="hoverboard1" src={img} />
        </Link>

        {/* <AddHoverboard hoverboard="The Marty" /> */}

        <br />
        <br />
        <br />
        <Link to={"addhoverboard/No Tech"}>
          <img className="hoverboard2" src={img2} />
        </Link>
      </div>
    );
  }
}

export default withAuth(AddModel);
