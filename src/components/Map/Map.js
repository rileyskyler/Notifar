
/* eslint-disable no-undef */
import React, { Component } from 'react';
import './Map.css';
import axios from 'axios';
import { connect } from "react-redux";
import {updateCurrentLocation} from '../../ducks/reducer'
 
class Map extends Component {
   
    //Classic Construtor, using store instead
  constructor() {
        super();
    
        this.state = {
          latitude: '33.452006',
          longitude: '-112.083475'
        }
        //this.homeTown = this.homeTown.bind( this );
    }
    updateLocation(latitude, longitude) {
      
          axios.get('/getUserCurrentLocation').then((response) => {
            console.log(response);
            this.setState({
              latitude: response.data.latitude,
              longitude: response.data.longitude
            })
          })   
        }         
          componentDidMount() {
              this.updateLocation()
          
        }

 

  render() {

      // const {
      //   defaultCoordinates
      // } = this.props;


    // var location = this.props.currentLocation.latitude;

    // location += ',';
    // location += this.props.currentLocation.longitude;
    const mapLink = `https://www.google.com/maps/embed/v1/search?key=AIzaSyDF17p6r1DQOXIGWd02-VaBwgzqxF2Cqas&q=${this.state.latitude},${this.state.longitude}&maptype=roadmap`;
    return (
        <iframe className='map'
            frameBorder="0" style={{border:0}}
            src={mapLink} allowFullScreen>
        </iframe>    
    )
  }
}

function mapStateToProps( state ) {
	return {coordinates: state.defaultCoordinates};
}

export default connect (mapStateToProps, {}) (Map);

