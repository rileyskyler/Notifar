require('dotenv').config()
const http = require('http');
const express = require('express');
const messagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const controller = require('./controllers/controller.js')
const session = require('express-session')
//PASSPORT LATER
//AUTH0STRATEGY
const app = express();
const cors = require('cors');
const massive = require('massive');
app.use( cors() );
app.use(bodyParser.urlencoded({
  extended: true
}));
massive ( process.env.CONNECTION_STRING).then (dbInstance => app.set('db', dbInstance) );





//Controller End-Points
app.post('/sms', controller.incomingSMS);





http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});











//
// app.use(bodyParser());

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());