import React from 'react';

import Nav from '../Nav/Nav.js';
import router from './../../router.js';
// import './app.css';
import Map from '../Map/Map.js'



export function App( { children } ) {
    return (
        <div>
          { router() }
        </div>
    );
}

export default App;
