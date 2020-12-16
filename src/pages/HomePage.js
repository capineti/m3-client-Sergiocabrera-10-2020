import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import axios from "axios";

import { Link } from "react-router-dom";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FwaW5ldGkiLCJhIjoiY2tpcmMwbDR3MGFhbDJybjRuenZ0ZXFjbCJ9.n_feBGhT7Ws3TfEp-yAclA";

class HomePage extends Component {
  state = {
    hoverboards: [],
    model: "",
    lng: 2.0787281, // default map location and zoom
    lat: 41.3948976, // default map location and zoom
    zoom: 15, // default map location and zoom
  };

  setHoverboardModel(model) {
    this.setState({ model: model });
  }

  render() {
    console.log("ListOfBoards: this.state", this.state);

    // Depending on the value stored in this.state.model we filter the array of hoverboards
    // to include only hoverboards that have same model as this.state.model
    const filteredHoverboards = this.state.hoverboards.filter((hoverboard) => {
      const modelNameIsMatching = hoverboard.model.includes(this.state.model);
      return modelNameIsMatching;
    });

    if (this.map) {
      filteredHoverboards.forEach((hoverboard) => {
        const marker = new mapboxgl.Marker({
          color: "#C52C7C",
        });
        marker
          .setLngLat(hoverboard.location)
          .setPopup(new mapboxgl.Popup().setHTML(`
          <div class="details-card">
            <p>Name: ${hoverboard.name}</p>
            <p>State: ${hoverboard.state}</p>
            <p>Battery: ${hoverboard.battery}</p>
          </div>
          `) )
          
          .addTo(this.map);
      });
    }

    return (
      <div className="ListOfBoards">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={() => this.setHoverboardModel("The Marty")}>
          The Marty
        </button>
        <button onClick={() => this.setHoverboardModel("No Tech")}>
          No Tech
        </button>
        <button onClick={() => this.setHoverboardModel("")}>All</button>

        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }

  componentDidMount() {
    // We create and setup the mapbox map
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat], // at the monet we use hardcoded location coordinates
      zoom: this.state.zoom,
    });

    // Retrieves the geolocation using the browser's Navigator API
    // Docs: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          var pos = [position.coords.longitude, position.coords.latitude];
          this.map.setCenter(pos);
        },
        () => alert("Issue retrieving your location")
      );
    } else {
      alert(" Your browser doesn't support Geolocation");
    }

    // Get hoverboards from server and update the state of this component(this.setState will update state and re-render the component)
    axios
      .get("http://localhost:5000/api/hoverboards", { withCredentials: true })
      .then((response) => {
        this.setState({ hoverboards: response.data });
      });
  }
}
export default withAuth(HomePage);
