import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import "./mymap.css"

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      destination: '',
      router: null,
    };
    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
    this.geocoder = L.Control.Geocoder.nominatim();
    this.routingControl = L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl: 'http://router.project-osrm.org/route/v1',
      }),
      waypoints: [],
      lineOptions: {
        styles: [{ color: 'blue', opacity: 0.6, weight: 4 }]
      },
      fitSelectedRoutes: false,
      show: false,
    });
    this.routingControl.addTo(this.map);
  }
  

  componentWillUnmount() {
    this.map.remove();
  }

  handleSourceChange(event) {
    this.setState({ source: event.target.value });
  }

  handleDestinationChange(event) {
    this.setState({ destination: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { source, destination } = this.state;
    if (!source || !destination) return;
    this.routingControl.setWaypoints([
      L.latLng(0, 0), // Placeholder for source
      L.latLng(0, 0), // Placeholder for destination
    ]);
    this.routingControl.hide();
    this.setState({ router: this.routingControl });
    this.geocoder.geocode(source, results => {
      const { center } = results[0];
      this.routingControl.spliceWaypoints(0, 1, center);
      this.map.setView(center, 13);
    });
    this.geocoder.geocode(destination, results => {
      const { center } = results[0];
      this.routingControl.spliceWaypoints(1, 1, center);
      this.map.fitBounds(this.routingControl.getBounds());
    });
    this.routingControl.show();
  }


    render() {
      return (
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="source">Source:</label>
            <input type="text" id="source" value={this.state.source} onChange={this.handleSourceChange} />
            <label htmlFor="destination">Destination:</label>
            <input type="text" id="destination" value={this.state.destination} onChange={this.handleDestinationChange} />
            <input type="submit" value="Submit" />
          </form>
          <div id="map" style={{ height: '700px' }}></div>
        </div>
      );
    }
  }
    export default Map;  


/*
    return (
      <div >
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Source:
            <input type="text" value={this.state.source} onChange={this.handleSourceChange} />
          </label>
          <br />
          <label>
            Destination:
            <input type="text" value={this.state.destination} onChange={this.handleDestinationChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div id="map" style={{ height: '700px' }}></div>
      </div>
    );
  }
}
*/
