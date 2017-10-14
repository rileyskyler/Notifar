import React, { Component } from 'react';

import axios from 'axios';
import Locate from '../Locate/Locate'
class Activate extends Component {


  componentDidMount() {
    console.log('Component DID MOUNT!')
  
      axios.get('/auth/user').then((response) => {
      console.log(response)
      this.props.updateProfilePhoto(response.data.profilephoto)
      console.log(this.props.profilePhoto)
      
      this.props.updateUserName(response.data.username)
  
    }).catch((err) => {
      console.log(err)
    })
  
  }


// renderContent() {
//   switch (this.state.noworkie) {
//     case 'Oranges':
//       console.log('Oranges are $0.59 a pound.');
//       break;
//     case 'Apples':
//       console.log('Apples are $0.32 a pound.');
//       break;

//     default:
//       console.log('Sorry, we are out of ' + expr + '.');
//   }
  
// }

  render() {
    return (
      <div>
        <Locate />
      </div>
    );
  }
}

export default Activate;