import React, { Component } from 'react';
import ActivateDevice from './Device/Activate-device.js';
import ActivateLocator from './Locator/Activate-locator.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js'

export default class Activate extends Component {
  render() {
    return (
      <div className="">
          <Register />
          {/* <Login /> */}
          <ActivateDevice />
          {/* <ActivateLocator /> */}
          <button>Activate</button>
      </div>
    )
  }
}