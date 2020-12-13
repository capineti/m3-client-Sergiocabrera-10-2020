import React, { Component } from "react";
import { withAuth } from "./../context/auth-context";
import AddHoverboard from "./../pages/AddHoverboard"
import ReactPlayer from "react-player";


class Private extends Component {
  render() {
    return (
      <div>
        <h1>Private Route</h1>
        <h2>Welcome {this.props.user && this.props.user.username}</h2>
        {/* 
        <h2>Welcome {this.props.user ? this.props.user.username : null }</h2> 
        */}

        <ReactPlayer url="https://www.youtube.com/watch?v=F_R1HUnH7EA&feature=emb_logo" />
        <br/>
        <br/>
        <br/>
        <br/>
        <AddHoverboard className="add"/>
      </div>
    );
  }
}

export default withAuth(Private);
