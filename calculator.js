// STEP 1: require express.js
const express = require("express");

// STEP 2: set up a new app that is going to be using the express module
const app = express();

// STEP 3: set up a new port that is set to 3000.
const port = 3000;

// STEP 4: create a home route

app.get("/", function(req, res) {
    // STEP 6: use res.sendFile(path) to provide a path to the index.html file
    //__dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.
    //__dirname only works in common JS modules DOES NOT WORK IN ESM
    res.sendFile(__dirname + "/index.html");
  });
  
// STEP 5: Spin up server on port 3000 with app.listen
  app.listen(port, function() {
    console.log("Sever started successfully on port 3000.")
  });