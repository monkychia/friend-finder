var friends = require("../../app/data/friends.js");
var friendFilter = require("../javascript/app.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        let userInput = req.body.scores;
        res.json(friendFilter(userInput));
    });
}