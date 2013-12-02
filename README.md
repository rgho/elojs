elojs
======
Author: Rishi Ghosh 

A Javascript implementation of the ELO Player Rating system. The single function below handles all aspects of calculating the new ELO ratings for both players.


newRatings [function]
-------------
+   Description: Returns an array with keys "Player1" and "Player2" holding corresponding new ELO ratings.
+   Examples: No examples yet.
+   Parmeters: 
    +   player1_rating: Rating of Player1 right before match.
    +   player2_rating: Rating of Player2 right before match.
    +   k_value: The constant K-value used in developers ELO system. Read the wikipedia article on ELO for details.
    +   result: The result of the match on a scale of 0 to 1. "0" = Player1 lost, Player 2 won. "0.5" = Draw. "1" = Player 1 won, Player 2 lost.
    +	should_round: Set to "true" by default. Rounds the output ratings.



Examples:
-------------

```javascript
// OBJECT ORIENTED EXAMPLE:
var tom = new RatedPlayer("Tom", 1600);
var alan = new RatedPlayer("Alan", 2000);
console.log("toms rating: " + tom.rating);
console.log("alans rating: " + alan.rating);

new Match(tom,alan,1);
console.log("tom and alan play a match, tom wins.")

console.log("toms new rating: " + tom.rating);
console.log("alans new rating: " + alan.rating);
console.log("")


// PROCEDURAL EXAMPLE:
var tomRating = 1600;
var alanRating = 2000;
console.log("toms rating: " + tomRating);
console.log("alans rating: " + alanRating);

var scoresAfterMatch = newRatings(tomRating,alanRating,1);
console.log("tom and alan play a match, tom wins.")

var tomRating = scoresAfterMatch.player1;
var alanRating = scoresAfterMatch.player2;
console.log("toms new rating: " + tomRating);
console.log("alans new rating: " + alanRating);

```javascript
