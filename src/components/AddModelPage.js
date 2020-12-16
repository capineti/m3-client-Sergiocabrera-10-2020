import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import img from "./../img/img.png";
import img2 from "./../img/notech .jpg";
import { Link } from "react-router-dom";
import AddHoverboard from "../pages/AddHoverboardPage";

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
          <img src={img} />
        </Link>

        {/* <AddHoverboard hoverboard="The Marty" /> */}

        <br />
        <br />
        <br />
        <Link to={"addhoverboard/No Tech"}>
          <img src={img2} />
        </Link>
      </div>
    );
  }
}

export default withAuth(AddModel);
