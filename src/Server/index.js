const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const app = express();
const massive = require('massive');
require('dotenv').config()
const controller = require('./controllers/message_controller')






const express = require('express');
app.use( cors() );
massive ( process.env.CONNECTION_STRING).then (dbInstance => app.set('db', dbInstance) );

dbInstance.new_sms()
.then( message => console.log( message ))
.catch( err => console.log( err ) );




app.use(bodyParser.urlencoded({
    extended: true
}));
const cors = require('cors');



app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
    console.log(req)
  if (true) {
    twiml.message(req.body.From);
  }

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});






// app.use(bodyParser());
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
