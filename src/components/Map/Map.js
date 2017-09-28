
/* eslint-disable no-undef */
import React, { Component } from 'react';

import './Map.css';

 
class Map extends Component { 
  render() {
      const markers = this.props.markers || []
    return (
        <iframe className='map'
            frameborder="0" style={{border:0}}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDF17p6r1DQOXIGWd02-VaBwgzqxF2Cqas&q=Space+Needle,Seattle+WA" allowfullscreen>
        </iframe>   
    )
  }
}

export default Map

