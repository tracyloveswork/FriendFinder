// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up variable to call express module
var app = express();

// Set-up port
var PORT = process.env.PORT || 3000;

// Set-up express to work with body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Require route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});
