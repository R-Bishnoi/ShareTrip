import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./TravelDetails.css"; // import CSS file for styling
import axios from "axios";
import { homeRoute } from "../utils/APIRoutes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import ComponentOne from './Map';
import passengerImage from './passenger.jpg';



//for map
/*
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
*/


const TravelDetails = () => {
  const [travelDetails, setTravelDetails] = useState([]);

  useEffect(() => {
    axios
      .get(homeRoute) //replace with your API endpoint
      .then((response) => {
        setTravelDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>

    <div className="complete-container">



          <div className="grid-container-up">


    <div className="myheader">
               <header>
                  <div class="container">
                   <h1 class="logo">ShareTrip</h1>
                   <nav>
                    <ul class="nav-links">
                      <li><a href="home">Home</a></li>
                      <li><a href="offer">Offer</a></li>
                      <li><a href="need">Need</a></li>
                      <li><a href="logout">Logout</a></li>
                   </ul>
                  </nav>
                  <a href="/" class="chat-btn">Chat</a>
                  <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Profile picture" class="profile-pic" />
                  </div>
              </header>
      </div>


    
    
     <div className="mytext">
     <div className="explore-section">
  <div className="explore-offered-ride">
    <h2>Explore Need Ride</h2>
    <p>Offered by traveler</p>
  </div>
  <div className="explore-need-ride">
  <img src={passengerImage} alt="My Image" />
  </div>
</div>
     </div>




            <div className="mysearch">
            <div className="search-boxes">
  <div className="search-box search-box-1">
    <input type="text" placeholder="From" className="search-field" />
    <input type="text" placeholder="To" className="search-field" />
    <button className="search-button">
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </div>
</div>
<div className="button-group">
        <button className="offer-ride-button">NeedRide</button>
      </div>
    </div>

         
  </div>





      <div class="grid-container-down">



             <div class="ride-offer">
             <ComponentOne />
            </div>


            <div class="ride-need">
              <div className="travel-details-container">
              {travelDetails.map((travelDetail) => (
              <div className="travel-details" key={travelDetail._id}>
               <div className="travel-details-header">
               <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile Pic" />
            <div className="travel-details-header-info">
              <p className="travel-details-header-name">{travelDetail.username}</p>
              <p className="travel-details-header-date">{travelDetail.date}</p>
            </div>
            </div>
             <div className="travel-details-body">
               <div className="travel-details-body-source">
                   <span>{travelDetail.source}</span>
                  <div className="travel-details-body-line"></div>
                 </div>
                 <h3>to</h3>
            
                <div className="travel-details-body-destination">
                 <span>{travelDetail.destination}</span>
                </div>
                  <div className="travel-details-body-price-time">
                  <span className="travel-details-body-time">
                   {travelDetail.stime} - {travelDetail.etime}
                  </span>
                 </div>
                 <p className="travel-details-body-description">{travelDetail.description}</p>
                 </div>
                <div className="travel-details-footer">
                <button className="travel-details-footer-button">Report</button>
               </div>
               <p className="travel-details-header-price">price ${travelDetail.price}</p>
              </div>
              ))}
             </div>
            </div>


      </div>






</div>

    </>
  );
};


TravelDetails.propTypes = {
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
   source: PropTypes.string.isRequired,
   destination: PropTypes.string.isRequired,
   stime: PropTypes.string.isRequired,
   etime: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   description: PropTypes.string.isRequired,
};

export default TravelDetails;