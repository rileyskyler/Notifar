const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const ctrl = require('./controllers/message_controller')


// const app = express();
const app = module.exports = express();

///
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()

//
// app.use(bodyParser());

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use( cors() );
massive ( process.env.CONNECTION_STRING).then (dbInstance => app.set('db', dbInstance) );

app.post('/sms', ctrl.create);



http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
