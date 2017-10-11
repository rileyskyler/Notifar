import React, { Component } from 'react';
import Map from '../Map/Map.js'
import './Locate.css'
import { connect } from "react-redux";

import axios from 'axios';
import {updateCurrentLocation} from '../../ducks/reducer'

class Locate extends Component {

 requestCurrentLocation() {
   axios.get('/getUserCurrentLocation').then((response) => {
    //  console.log(response);
    //  console.log('cheese')
      this.props.updateCurrentLocation(response.data);
   })
 }
 
  render() {
    // console.log(this.props)
    const mapLink = `https://www.google.com/maps/embed/v1/search?key=AIzaSyDF17p6r1DQOXIGWd02-VaBwgzqxF2Cqas&q=${this.props.currentLocation.latitude || ''},${this.props.currentLocation.longitude || ''git}&maptype=roadmap`;
    return (
     <div className='L-page'>

       <nav className='L-navbar'>
         <div className='L-logo'>
         <div className='logo'>
						<span className='text'>Noti</span><span className='red'>·</span><span className='text'>Far</span>
					</div>
         </div>
       </nav>
       <div className='L-main-content'>
        <div className='L-sidebar'>
          <div className='L-selector'>
          <button id='L-select' onClick={ () => this.requestCurrentLocation()}> Current Location </button>
          <button id='L-select'>Location History</button>
          <button id='L-select'>Settings</button>
          <h1>Latitude:{this.props.currentLocation.latitude}</h1>
          <h1>Longitude:{this.props.currentLocation.longitude}</h1>
          </div>
        </div>
        <div className='L-map-container'>
        <iframe className='map'
            frameBorder="0" style={{border:0}}
            src={mapLink} allowFullScreen>
        </iframe>   
        </div>
       </div>
     </div> 
    )
  }
}

function mapStateToProps( state ) {
	return {currentLocation: state.currentLocation};
}

export default connect (mapStateToProps, {updateCurrentLocation}) (Locate);