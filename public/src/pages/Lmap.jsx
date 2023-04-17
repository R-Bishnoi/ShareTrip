
/*
import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import axios from 'axios';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses:[  { name: "Delhi", address: "New Delhi, Delhi" },  { name: "Mumbai", address: "Mumbai, Maharashtra" }]

    };
  }

  componentDidMount() {
    // Create a map instance and set its view
    this.map = L.map('map').setView([20.5937, 78.9629], 5);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    // Add the geocoder control to the map
    L.Control.geocoder({
      defaultMarkGeocode: false,
      placeholder: 'Search for a location',
      collapsed: true,
      position: 'topright',
      geocoder: L.Control.Geocoder.nominatim({
        // Options for the Nominatim geocoder
        searchBounds: L.latLngBounds([40.712, -74.227], [40.774, -74.125]),
        countrycodes: 'us'
      })
    }).on('markgeocode', event => {
      // Remove any existing markers from the map
      this.map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          layer.remove();
        }
      });

      // Handle the geocoder result
      const { center } = event.geocode;
      this.addMarker(center);

      // Update the map view to center on the searched location
      this.map.setView(center, 13);
    }).addTo(this.map);

    // Add the markers to the map
    this.state.addresses.forEach(address => {
      this.addAddressMarker(address);
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  addMarker(coords, title) {
    const icon = L.icon({
      iconUrl: markerIcon,
      iconRetinaUrl: markerIconRetina,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.marker(coords, { icon, title }).addTo(this.map);
  }

  addAddressMarker(address) {
    axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: address.address,
        format: 'json'
      }
    })
      .then(response => {
        const { lat, lon } = response.data[0];
        const coords = [lat, lon];
        this.addMarker(coords, address.name);
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <div id="map" style={{ height: '400px' }}></div>
    );
  }
}

export default LeafletMap;

*/


import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import axios from 'axios';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses:[  { name: "Delhi", address: "New Delhi, Delhi" },  { name: "Mumbai", address: "Mumbai, Maharashtra" },  { name: "Bangalore", address: "Bengaluru, Karnataka" },  { name: "Kolkata", address: "Kolkata, West Bengal" },  { name: "Chennai", address: "Chennai, Tamil Nadu" },  { name: "Hyderabad", address: "Hyderabad, Telangana" },  { name: "Ahmedabad", address: "Ahmedabad, Gujarat" },  { name: "Pune", address: "Pune, Maharashtra" },  { name: "Surat", address: "Surat, Gujarat" },  { name: "Jaipur", address: "Jaipur, Rajasthan" }]

    };
  }

  componentDidMount() {
    // Create a map instance and set its view
    this.map = L.map('map').setView([20.5937, 78.9629], 5);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    // Add the geocoder control to the map
    L.Control.geocoder({
      defaultMarkGeocode: false,
      placeholder: 'Search for a location',
      collapsed: true,
      position: 'topright',
      geocoder: L.Control.Geocoder.nominatim({
        // Options for the Nominatim geocoder
        searchBounds: L.latLngBounds([40.712, -74.227], [40.774, -74.125]),
        countrycodes: 'us'
      })
      
    }).on('markgeocode', event => {
      // Remove any existing markers from the map
      this.map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          layer.remove();
        }
      });

      // Handle the geocoder result
      const { center } = event.geocode;
      this.addMarker(center);

      // Update the map view to center on the searched location
      this.map.setView(center, 13);
    }).addTo(this.map);

    // Add the markers to the map
    this.state.addresses.forEach(address => {
      this.addAddressMarker(address);
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  addMarker(coords, title) {
    const icon = L.icon({
      iconUrl: markerIcon,
      iconRetinaUrl: markerIconRetina,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.marker(coords, { icon, title }).addTo(this.map);
  }

  addAddressMarker(address) {
    axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: address.address,
        format: 'json'
      }
    })
      .then(response => {
        const { lat, lon } = response.data[0];
        const coords = [lat, lon];
        this.addMarker(coords, address.name);
  
        // Draw a line between the current address and the previous address
        if (this.prevCoords) {
          const latLngs = [this.prevCoords, coords];
          const polyline = L.polyline(latLngs, { color: 'red' }).addTo(this.map);
        }
  
        this.prevCoords = coords;
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  render() {
    return (
      <div id="map" style={{ height: '600px' }}></div>
    );
  }
}

export default LeafletMap;