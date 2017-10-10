require('dotenv').config()
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const controller = require('./controllers/controller')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const cors = require('cors');
const massive = require('massive');


// app.use( cors() );
// const app = module.exports = express();

// app.use(bodyParser.urlencoded({
    
    const app = express();
    //   extended: true
    // }));
    app.use( bodyParser() );
    app.use( session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    }));
    
    
    
    
    
app.use( passport.initialize() );
app.use( passport.session() );
massive ( process.env.CONNECTION_STRING).then(dbInstance => {
app.set('db', dbInstance)
    }).catch(err => console.log('err'));
passport.use( new Auth0Strategy(
  {
    domain:       process.env.AUTH_DOMAIN,
    clientID:     process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL:  'http://localhost:1337/auth/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // console.log(profile);
    // done(null, profile.identities[0].user_id)
    

    const db = app.get('db');
    console.log('getting user from database...');
    console.log('user ID: ', profile.identities[0].user_id)
    db.get_user([profile.identities[0].user_id]).then( user => {
        console.log('user is,', user[0]);
        
        if (user[0]) {
            console.log('found user');
            console.log(user[0].userid)
            done(null, user[0].userid)
        } else {
            // console.log('creating new user');
            db.create_user([profile.identities[0].user_id, profile.displayName, profile.emails[0].value, profile.picture]).then( user => {
                console.log('green', user[0])
                done(null, user[0].UserId)
            })
        }
    }).catch(err=> console.log(err))


} 
))

//Auth0
passport.serializeUser( (userId, done) => {
  console.log('serializing user')
  console.log('userID', userId)
  done(null, userId)
});

passport.deserializeUser( (userId, done) => {
    console.log('deserializing')
    app.get('db').current_user([userId]).then(user => {
        console.log(user);
        console.log(user);
        done(null, user[0]);
    })
});
///


app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',  // send to front end port
    failureRedirect: 'http://google.com'
}))
app.get('/auth/user', passport.authenticate('auth0'), (req, res) => {
    // console.log('session', req.session);
    // console.log('req.user', req.user);
    if (!req.user) {
        return res.status(404).send('User not found')
    } else {
        return res.status(200).send(req.user)
    }
})
// app.get('/auth/logout', (req, res) => {
//     req.logOut()
//     res.redirect(302, 'http://localhost:3000/')
// })
//

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
// passport.authenticate('auth0', 
//   { successRedirect: '/followers', failureRedirect: '/login', failureFlash: true, connection: 'github' }
//   )
// );



app.post('/sms', controller.incomingSMS);

// app.get('/createUser', controller.createUser)

app.get('/getUserCurrentLocation', controller.getUserCurrentLocation)
// app.get('/getUserLocationHistory', controller.getCurrentLocation)
// app.get('/getUser', controller.getUser)
// app.get('/activateDevice', controller.activateDevice)
// app.get('/activateLocator', controller.activateLocator)


// app.get( '/login',

// app.get('/followers', ( req, res, next ) => {
//   if ( req.user ) {
//     const FollowersRequest = {
//       url: req.user.followers,
//       headers: {
//         'User-Agent': req.user.clientID
//       }
//     };

//     request(FollowersRequest, ( error, response, body ) => {
//       res.status(200).send(body);
//     });
//   } else {
//     res.redirect('/login');
//   }
// });



// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on port 1337');
// });
const PORT = 1337
app.listen(PORT, () => console.log('Ship has docked on port ', PORT))