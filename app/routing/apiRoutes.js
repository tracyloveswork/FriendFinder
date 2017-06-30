// Load data file
var friends = require("../data/friends");

// Routing
module.exports = function(app) {

	// Friends json view
	app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

	// Add Friend to array and find match
  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    res.json(friends[0]);
  });

	};
