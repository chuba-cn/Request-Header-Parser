// init project
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', true);

app.get('/', function (req, res) {
  res.render('index');
});

// your first API endpoint...
app.get('/api/whoami', (req, res, next) => {
  try{
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const clientIP = ipAddress ? ipAddress.split(',')[0] : 'Unknown'
    res.json({
      ipaddress: clientIP,
      language: req.headers['accept-language'],
      software: req.headers['user-agent']
    });
  }catch(e){
    next(new Error("Something went wrong!!!"));
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
