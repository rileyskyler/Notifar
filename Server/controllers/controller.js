const MessagingResponse = require('twilio').twiml.MessagingResponse;

// Location:
// incommingSMS
// getUserLocationHistory
// userCurrentLocation

// Account:
// createUser
// getUser
// activateDevice
// activateLocator

module.exports = {
    // FROM Twillio
    incomingSMS: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { To, From, Body } = req.body;

        //formating coordinates
        var newBody = Body.replace(/[`[\]\\\/]/gi, '');
        console.log(newBody);
        var coordinates = newBody.split(',');
        var latitude = coordinates[0];
        console.log(latitude)
        var longitude = coordinates[1];
        console.log(longitude);
        
        
      dbInstance.location_ping([latitude, longitude, From])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
      },


    // //FROM DATABASE

    //Retrieve location data from database
    getUserCurrentLocation: ( req, res, next ) => {
        console.log('this test')
        const dbInstance = req.app.get('db');
  
      dbInstance.user_current_location()
        .then( (cl) => res.status(200).send(cl[0]) )
        .catch( () => res.status(500).send() );
    },

    getUserLocationHistory: ( req, res, next ) => {
        console.log('this test')
        const dbInstance = req.app.get('db');
  
      dbInstance.user_location_history()
        .then( (cl) => res.status(200).send(cl) )
        .catch( () => res.status(500).send() );
    },

    getUserLocationId: (req, res, next) => {
      // console.log('getUserLocation runnin')
      const dbInstance = req.app.get('db');

      dbInstance.get_user_location_id()
        .then( (id) => req.app.get('db') )
        .catch( () => res.status(500).send() );
    }

    //     //Account Creation

    // createUser: ( req, res, next ) => {
    //       const dbInstance = req.app.get('db');
    //   dbInstance.user_current_location()

    //     .then( (cl) => res.status(200).send(cl[0].message) )
    //     .catch( () => res.status(500).send() );
    // },

    // getUser: ( req, res, next ) => {
    //     console.log('this test')
    //     const dbInstance = req.app.get('db');

    //   dbInstance.user_current_location()
    //     .then( (cl) => res.status(200).send(cl[0].message) )
    //     .catch( () => res.status(500).send() );
    // },

    // activateDevice: ( req, res, next ) => {
    //     console.log('this test')
    //     const dbInstance = req.app.get('db');

    //   dbInstance.user_current_location()
    //     .then( (cl) => res.status(200).send(cl[0].message) )
    //     .catch( () => res.status(500).send() );
    // },

    // activateLocator: ( req, res, next ) => {
    //     console.log('this test')
    //     const dbInstance = req.app.get('db');

    // dbInstance.user_current_location()
    //     .then( (cl) => res.status(200).send(cl[0].message) )
    //     .catch( () => res.status(500).send() );
    // },

};