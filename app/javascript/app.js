let friends = require("../data/friends.js");

module.exports = function(userInput) {
    
    // Pseudo code:
    // 1) iterate the aray of friends
    // 2) iterate through the score for each friend
    // 3) reduce the array to one final score for each friend, keep track of whoever has the lowest value 
    // 4) return to FE the lowest score person and display name and image. 
    //5) Need variable to keep track of best match outside foreach.

    var bestMatch = null;
    friends.forEach(friend => {
        let data = friend.scores;
        var person = data.reduce((totalDifference, number, index) => {
            const difference = Math.abs(number - userInput[index]);
            totalDifference += difference;
            return totalDifference;
        }, 0);
        
        if (!bestMatch) {
            bestMatch = {score: person, friend};
        }
        else {
            if(bestMatch.score > person) {
                bestMatch = {score: person, friend};;
            }
        }
    });
    return bestMatch;
}


