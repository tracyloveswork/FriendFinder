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
  	
  	// Find match
  	var bestMatch = {};

  	var best = 0;

  	var currentFriend = null;

		// Outer Loop
  	for (var i = 0; i < friends.length; i++) {

  		var differenceArray = [];

  		// Inner loop
  		for (var j = 0; j < friends[i].scores.length; j++) {
  			var difference = Math.abs(friends[i].scores[j] - req.body.scores[j]);
  			differenceArray.push(difference);
  			console.log("User Score: " + req.body.scores[j] + " Versus: " + friends[i].scores[j]);
  		};

  		var total = differenceArray.reduce(function (a,b) {
  			return a + b;
  		}, 0);

  		console.log("Difference total: " + total)

  		if(currentFriend == null) {
  			currentFriend = total;
  		}

  		else if (total < currentFriend) {
  			best = i;
  			currentFriend = total;
  		}

  	};

  	bestMatch = friends[best];

  	res.json(bestMatch);

		// Add to array
    friends.push(req.body);

		// Return result placeholder
    // res.json(friends[0]);
  });

	};
