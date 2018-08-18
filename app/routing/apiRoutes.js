var friends = require("../../app/data/friends.js");
var friendFilter = require("../javascript/app.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        // var userInput = req.body;
        // console.log(userInput);
        var userInput = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        let blah = friendFilter(userInput);
        console.log(blah);

        res.json(blah);
    });
}