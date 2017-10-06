
/* eslint-disable no-undef */
import React, { Component } from 'react';
import './Map.css';
import axios from 'axios';
 
class Map extends Component {
    constructor() {
        super();
    
        this.state = {
          coordinates: '33.449891,-112.074829'
        }
        //this.homeTown = this.homeTown.bind( this );
    }
    updateLocation(coordinates) {
        console.log(coordinates)
          axios.get('http://localhost:1337/currentLocation').then((response) => {
            console.log(response);
            this.setState({
              coordinates: response.data
            })
          })   
        }         
          componentDidMount() {
              this.updateLocation()
          
        }


  render() {
    //   var location = '33.449891,-112.074829';
    var location = this.state.coordinates;
    const mapLink = `https://www.google.com/maps/embed/v1/search?key=AIzaSyDF17p6r1DQOXIGWd02-VaBwgzqxF2Cqas&q=${location}&maptype=roadmap`;
    return (
        <iframe className='map'
            frameBorder="0" style={{border:0}}
            src={mapLink} allowFullScreen>
        </iframe>    
    )
  }
}

export default Map

