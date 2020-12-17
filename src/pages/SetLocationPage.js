import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import axios from "axios";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FwaW5ldGkiLCJhIjoiY2tpcmMwbDR3MGFhbDJybjRuenZ0ZXFjbCJ9.n_feBGhT7Ws3TfEp-yAclA";
class SetLocationPage extends Component {
  state = {
    showPrompt: false,
    lng: 2.0787281, // default map location and zoom
    lat: 41.3948976, // default map location and zoom
    zoom: 15, // default map location and zoom,
  };

  updateLocation = () => {
    // We take coordinates saved in the state
    const { lng, lat } = this.state;

    // Get hoverboard object coming from AddHoverboardPage -> we sent this via this.props.history.push({ state: { hoverboard: response.data }})
    const hoverboard = this.props.location.state.hoverboard;
    console.log("location from state, READY TO SEND", { lng, lat, hoverboard });

    // Make call to server to update this hoverboard location
    axios
      .put(
        `http://localhost:5000/api/hoverboards/${hoverboard._id}`,
        {
          name: hoverboard.name,
          state: hoverboard.state,
          model: hoverboard.model,
          location: [lng, lat],
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.history.push("/HomePage");
      });
  };

  render() {
    return (
      <div
        style={{
          position: "relative",
          zIndex: "100",
          width: "100vw",
          height: "100vh",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {this.state.showPrompt ? (
          <div
            style={{
              position: "absolute",
              zIndex: "100",
              bottom: "0",
              height: "300px",
              width: "100vw",
              width: "300px",
              minWidth: "200px",
              backgroundColor: "pink",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <h3>lng: {this.state.lng}</h3>
              <h3>lat: {this.state.lat}</h3>
            </div>

            <div>
              <h1>{this.props.location.state.hoverboard.name}</h1>
              <img
                width="50"
                src={this.props.location.state.hoverboard.image}
              />
            </div>

            <button
              style={{ position: "absolute", bottom: 0, width: "100px" }}
              onClick={this.updateLocation}
            >
              Set Location
            </button>
          </div>
        ) : null}

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

    // We add an event listener to mapbox map
    // whenever there's a click on the map the code inside will run
    this.map.on("click", (e) => {
      var coordinates = e.lngLat;

      // Remove Marker if it exists
      if (this.visibleMarker) {
        this.visibleMarker.remove();
      }

      // Reset the marker to the newly clicked coordiantes
      this.visibleMarker = new mapboxgl.Marker({
        color: "#C52C7C",
      });

      this.visibleMarker.setLngLat(coordinates).addTo(this.map);

      this.setState({
        lng: coordinates.lng,
        lat: coordinates.lat,
        showPrompt: true,
      });
    });
  }
}

export default withAuth(SetLocationPage);
