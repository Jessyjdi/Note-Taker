// contains all the server code
const PORT = process.env.PORT || 8001;
// set up express library
const express = require ('express');
// set up server
const app = express();

// allow us to build the URL
const path = require('path');
const fs = require('fs');

// parse application JSON
app.use(express.json());
// set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
// Static middleware
app.use(express.static("public"));


//Require routes file
require("./routes/htmlRoutes")(app);
require('./routes/apiRoutes')(app);

// Listen
app.listen(PORT, () =>
  console.log(`API Server listening at ${PORT} !`)
);




