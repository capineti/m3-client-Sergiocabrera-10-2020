import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import axios from "axios";
import Header from "./../components/Header";


import { Link } from "react-router-dom";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FwaW5ldGkiLCJhIjoiY2tpcmMwbDR3MGFhbDJybjRuenZ0ZXFjbCJ9.n_feBGhT7Ws3TfEp-yAclA";

class SetLocationPage extends Component {
  state = {
    lng: 2.0787281, // default map location and zoom
    lat: 41.3948976, // default map location and zoom
    zoom: 15, // default map location and zoom
  };

  setHoverboardModel(model) {
    this.setState({ model: model });
  }

  render() {
    return (
      <div className="ListOfBoards">
      
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

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

    this.map.on("mousedown", (e) => {
      console.log("e.point", e.point);
      console.log("e.lngLat.wrap()", e.lngLat.wrap());
    });
  }
}
export default withAuth(SetLocationPage);
