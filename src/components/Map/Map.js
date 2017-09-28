
/* eslint-disable no-undef */
import React, { Component } from 'react';

import './Map.css';

 
class Map extends Component { 
  render() {
      
    return (
        <iframe className='map'
            frameborder="0" style={{border:0}}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDF17p6r1DQOXIGWd02-VaBwgzqxF2Cqas&q=33.450001,-112.074838" allowfullscreen>
        </iframe>   
    )
  }
}

export default Map

