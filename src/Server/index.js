const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();


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
