import React, { Component } from 'react';
import Map from '../Map/Map.js'
import './Locate.css'

export default class Locate extends Component {
  render() {
    return (
     <div className='map-container'>
      <Map />
     </div> 
    )
  }
}