import React, { Component } from 'react';
import Map from '../Map/Map.js'
import './Locate.css'
import { connect } from "react-redux";
 
import axios from 'axios';
import {updateCurrentLocation, updateLocationHistory} from '../../ducks/reducer'

class Locate extends Component {
  constructor() {
    super();

    this.state = {
      currentLocationButton: -1,
      locationHistoryButton: -1
    }
}

buttonClicked(param2) {
  console.log('button clicked:', param2)
  switch (param2) {
    case "currentLocation":
      this.setState ({
        currentLocationButton: this.state.currentLocationButton += 1,
      })
      break;
    case "locationHistory":
    this.setState ({
      locationHistoryButton: this.state.locationHistoryButton += 1,
    })
    break;
  }
}


// requestCurrentLocation() {
//   return axios.get('/getUserCurrentLocation').then((response) => {
//     //  console.log('in requestCurrentLocation')
//     //  console.log(response);
//     this.props.updateCurrentLocation(response.data);
//     return response;
//   })
// }

// requestLocationHistory() {
//   return axios.get('/getUserLocationHistory').then((response) => {
//     console.log('in requestLocationHistory') 
//     console.log(response.data);
//     this.props.updateLocationHistory(response.data);
//     console.log('dddd,', this.props.locationHistory)
//     return response;
//   })
// }


//From onClicks, takes in a parameter for the setState switch statement
doAllThese(param1) {
  console.log('do All these:', param1)
  switch (param1) {
    case "currentLocation":
      axios.get('/getUserCurrentLocation').then((response) => {
        this.props.updateCurrentLocation(response.data)
        this.buttonClicked("currentLocation")
      });
      break;
    case "locationHistory":
      axios.get('/getUserLocationHistory').then((response) => {
        console.log(response.data[0])
        this.props.updateLocationHistory(response.data)
        console.log(this.props.locationHistory)
        this.buttonClicked("locationHistory")
      });

  }

  console.log('worked',this.props.locationHistory[0]);
}
 

  render() {
    //Test
    // var locationArray = this.props.locationHistory?: this.props.locationHistory[0].latitude: '';

    console.log(this.props.locationHistory[0])


    if (this.props.locationHistory[0]) {
      
      var newLocationArray = this.props.locationHistory.map((elem)=> {
        console.log(elem)
        return (
          <div className='chart'>
            <div className='chart-columns'>
              <div>{elem.latitude}</div>
            </div>
            <div className='chart-columns'>
              <div id='left-border'>{elem.longitude}</div>
            </div>
          </div>
        )
      })
    }

    
    //Map rendering options
    const mapLink = `https://www.google.com/maps/embed/v1/search?key=AIzaSyDF17p6r1DQOXIGWd02-VaBwgzqxF2Cqas&q=${this.props.currentLocation.latitude || ''},${this.props.currentLocation.longitude || ''}&maptype=roadmap`;



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
            
          <div className='L-select'id={'button' + this.state.currentLocationButton % 2}  onClick={ () => this.doAllThese("currentLocation")}>Current Location <br/>
          <div id='L-button-div'></div>
          <br />
          <span>{this.props.currentLocation.latitude},{this.props.currentLocation.longitude}</span>
          </div>
          <div className='L-select'id={'button' + this.state.locationHistoryButton % 2}  onClick={ () => this.doAllThese("locationHistory")}>Location History<br/>
          <div id='L-button-div'></div>
          <br />
          {/* <span>{this.props.locationHistory[0]? this.props.locationHistory[0].latitude: ''}</span> */}
          {/* <div>{newLocationArray}</div> */}
          <div className='chart'>
            <div className='chart-columns'>
              <div>Latitude</div>
            </div>
            <div className='chart-columns'>
              <div id='left-border'>Longitude</div>
            </div>
          </div>
            {newLocationArray}
          </div>

          
          {/* <h1>Latitude:{this.props.currentLocation.latitude}</h1>
          <h1>Longitude:{this.props.currentLocation.longitude}</h1> */}
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
	return {currentLocation: state.currentLocation, locationHistory: state.locationHistory};
}

export default connect (mapStateToProps, {updateCurrentLocation, updateLocationHistory}) (Locate);