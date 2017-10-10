import React, { Component } from 'react';
import ActivateDevice from './Device/Activate-device.js';
import ActivateLocator from './Locator/Activate-locator.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js'
import './Activate.css'

export default class Activate extends Component {
  render() {
    return (
      <div className="activate-page">
        <div className='A-main-content'>

        </div>
          <button>Activate</button>
      </div>
    )
  }
}