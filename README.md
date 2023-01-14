# calculator-app
Create a calculator web application using express.js and nmp.js.

STEP 1: in this project create a new file called calculator.js

STEP 2: cd into this project and set up a new NPM package in the terminal $ npm init. This will create a new package.json file. 

STEP 3: using NPM install the express module by using the terminal $ npm install express. This will create a package-lock.json file.

STEP 4: require express in your calculator.js file.

STEP 5: run the server using nodemon in the terminal $ nodemon calculator.js

STEP 6: create an index.html file and send the entire index.html file when the browser tries to access the home route by using res.sendFile() in the calculator.js file.

STEP 7: install npm body parser in the terminal
$ npm install body-parser
This will allow us to pass information that we get sent from the post request.

STEP 8: Require the npm body parser in the calculator.js file. 
By using a Body Parser, we're able to parse the HTTP request that we get and by using urlencoded we can get access to the form data, and we can then tap into each of form entries as if they were just properties of the object body. 