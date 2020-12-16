import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import axios from "axios";


class AddHoverboard extends Component {
  //state = { model: undefined, name: undefined };
  state = { 
    model: "", 
    name: "",
    battery:"100%",
    location:[1.352,40.546]
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  componentDidMount(){
    const model=this.props.match.params.model;
    this.setState({model:model})
 }


  handleHoverboards = (even) => {
    even.preventDefault();
    const {model, name,location,battery } = this.state;
    axios.post(
      "http://localhost:5000/api/hoverboards",
      { model, name,location,battery},
      { withCredentials: true }
    )
   
    .then( (response) => {
      console.log('after post', response.data);
      this.props.history.push("/listofboards")
    } )
    this.setState({name:""})
  };

  render() {
 

    return (
      <div>
      
      

      <form onSubmit={this.handleChange}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
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
