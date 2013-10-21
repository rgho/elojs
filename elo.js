function newRatings(player1Rating,player2Rating,kValue,result,shouldRound=False) {
	// Assign actual results to players.
	var player1Result = result;
	var player2Result = 1 - result;

	// Calculate expectated results given ratings before game.
	var player1Expeectation = 1/(1+10^((player2Rating - player1Rating)/400));
	var player2Expeectation = 1/(1+10^((player1Rating - player2Rating)/400));

	// Calculate new rating
	var player1NewRating = player1Rating + (kValue*(player1Result - player1Expeectation));
	var player1NewRating = player2Rating + (kValue*(player2Result - player2Expeectation));

	// Handle Optional Rounding
	if (shouldRound) {
		player1NewRating = round(player1NewRating);
		player2NewRating = round(player2NewRating);	
	}

	// Create and return object
	var newScores = {player1:player1NewRating,player1:player1NewRating}; 
	return newScores
}
