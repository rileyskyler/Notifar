import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
    //Front Page
import Landing from './components/Landing/Landing.js';

    //Conditon A - Login for pre-existing accounts
import Login from './components/Login/Login.js';

    //Condition B - Login for new device or web-locator application
import Activate from './components/Activate/Activate.js'
import ActivateDevice from './components/Activate/Device/Activate-device.js';
import ActivateLocator from './components/Activate/Locator/Activate-locator.js';

    // The app and it's options after user sets up
import Locate from './components/Locate/Locate.js';
import Settings from './components/Settings/Settings.js';





export default function(){
    return (
    <Switch>
        <Route component={ Landing } exact path="/"/>
        <Route component={ Login } path="/login"/>
        <Route component={ Activate } path="/activate"/>
        <Route component={ ActivateDevice }  path="/activate/device"/>
        <Route component={ ActivateLocator }  path="/activate/locator"/>
        <Route component={ Locate }  path="/locate"/>
        {/* <Route component={ Settings }  path="/Locator/Settings"/> */}
    </Switch>
    )
}