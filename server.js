const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware
const cors = require('cors');
const http = require('http');
const path = require('path');
// app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, '/public')));
console.warn(__dirname)
// const encyption = require('./scripts/encryptfun');

const HOST = 'https://mswrestapi-blr-dev.eng.sonicwall.com/api';

const API_URL = 'api/token'

let redirectbody = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
    origin: '*'
}));

// Route to Homepage
app.post('/redirection', (req, res) => {
    // console.log(redirectbody);
    // console.log(req);
    redirectbody = req.body;
    res.json(req.body);
    res.redirect('/');
});

// Route to Homepage
// app.get('/', (req, res) => {
//   console.log(redirectbody);
//   console.warn(redirectbody);
//   res.sendFile(__dirname + '/static/login.html');
// });



app.post('/redirecttoken', (req, res) => {
  // Insert Login Code Here
  let responsebody = http.request({
      host: HOST,
      method: 'POST',
      path: API_URL
  },function (response){
      if(response.operationStatus == "OK") {
          res.header('content', response.content)
          res.redirect()
      }
      else{
          res.send('Error!!!')
      }
  })

//   res.send(`Username: ${userName} + Password: ${password}`);
});

const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`Your app is running here: http://localhost:${port}`));
