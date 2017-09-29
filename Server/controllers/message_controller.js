const MessagingResponse = require('twilio').twiml.MessagingResponse;

module.exports = {
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { To, From, Body } = req.body;
      console.log(req.body.Body)
  
      dbInstance.new_sms([ To, From, Body ])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
      currentLocation: ( req, res, next ) => {
          console.log('this test')
        const dbInstance = req.app.get('db');
    
        dbInstance.current_location()
          .then( (cl) => res.status(200).send(cl[0].message) )
          .catch( () => res.status(500).send() );
      },
};