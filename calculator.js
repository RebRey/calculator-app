// STEP 1: require express.js
const express = require("express");

// STEP 8: require npm body-parser
const bodyParser = require("body-parser");

// STEP 2: set up a new app that is going to be using the express module
const app = express();

// STEP 9: allow the web app to use body-parser package
// use .urlencoded(); to use the information that gets posted to your server from an HTML form
// add an option called extended and set it to be true to allow us to post nested objects
app.use(bodyParser.urlencoded({ extended: true }));

// STEP 3: set up a new port that is set to 3000.
const port = 3000;

// STEP 4: create a home route

app.get("/", function (req, res) {
  // STEP 6: use res.sendFile(path) to provide a path to the index.html file
  // use directory name and append the index.html file (__dirname + "/index.html")
  //__dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.
  //__dirname only works in common JS modules DOES NOT WORK IN ESM
  res.sendFile(__dirname + "/index.html");
});

// STEP 7: Add an app.post method to handle any post requests (needed for forms)
app.post("/", function (req, res) {
    console.log(req.body);
  res.send("Thanks for posting that!");
});

// STEP 5: Spin up server on port 3000 with app.listen
app.listen(port, function () {
  console.log("Sever started successfully on port 3000.");
});
