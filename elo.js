
var RatedPlayer = function(id,rating){
	this.rating = rating;
	this.id = id;
};

RatedPlayer.prototype.updateRating = function(newRating){
	this.rating = newRating;
};

var Match = function(player1,player2,result){
	ratingsAfterMatch = newRatings(player1.rating,player2.rating,1);
	player1.updateRating(ratingsAfterMatch.player1);
	player2.updateRating(ratingsAfterMatch.player2);
};

function newRatings(player1Rating,player2Rating,result,kValue,shouldRound) {
	// DO THE FOLLOWING STATEMENTS NEED A 'var' before kValue and shouldRound?
	if (!kValue) kValue = 32;
	if (!shouldRound) shouldRound = true;
	
	// Assign actual results to players.
	var player1Result = result;
	var player2Result = 1 - result;

	// Calculate expectated results given ratings before game.
	var player1Expectation = 1 / (1+Math.pow(10,((player2Rating - player1Rating)/400)));
	var player2Expectation = 1 / (1+Math.pow(10,((player1Rating - player2Rating)/400)));

	// Calculate new rating
	var player1NewRating = player1Rating + (kValue*(player1Result - player1Expectation));
	var player2NewRating = player2Rating + (kValue*(player2Result - player2Expectation));

	// Handle Optional Rounding
	if (shouldRound) {
		player1NewRating = Math.round(player1NewRating);
		player2NewRating = Math.round(player2NewRating);	
	}

	// Create and return new scores object
	var newScores = {'player1':player1NewRating,'player2':player2NewRating}; 
	return newScores
};
