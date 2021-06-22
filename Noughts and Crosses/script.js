// variables declaration
//----------------------
var currentPlayer = 1; // current player 1 or 2(-1)
var plays = 0; // number of turns
var btn = document.getElementsByTagName('input'); // array of buttons

// check click on each button
//---------------------------
for(var i = 0; i < btn.length; i++) {
		btn[i].addEventListener("click", takeTurn);
} // for

// determine player (X or O) and number of plays
//----------------------------------------------
function takeTurn(){
	if(this.value == "" && currentPlayer != 0){ // can click just if the button is empty and the game is not won
		
		// determine player and set style
		//-------------------------------
		if(currentPlayer == 1){ // set red X for player 1
			this.value = "X";
			this.style.color = "red";
		} else{ // set blue O for player 2
			this.value = "O";
			this.style.color = "blue";
		} // else
		
		// update player and number of plays
		//----------------------------------
		currentPlayer *= (-1); // update player
		plays++; // increment number of plays
		
		// check if someone won
		//---------------------
		if(plays >= 5) { // impossible to win before 5 turns
			checkWin();
		} // if
		
	} // if
} // takeTurn

// check if someone one
//---------------------
function checkWin(){
	
	// rows
	//-----
	for(var i = 0; i < 7; i += 3){ // repeat starting on btn 0, 3, 6
		if(btn[i].value == btn[i + 1].value && btn[i].value == btn[i + 2].value && btn[i].value != ""){ // check row is all the same (not empty)
			announceWin(btn[i].value);
			currentPlayer = 0; // change variable to determine game is over
			return; // break out of check
		} // if
	} // for
	
	// columns
	//--------
	for(var i = 0; i < 3; i++){ // repeat starting on btn 0, 1, 2
		if(btn[i].value == btn[i + 3].value && btn[i].value == btn[i + 6].value && btn[i].value != ""){ // check column is all the same (not empty)
			announceWin(btn[i].value);
			currentPlayer = 0; // change variable to determine game is over
			return; // break out of check
		} // if
	} // for
	
	// diagonals
	//----------
	for(var i = 0; i < 3; i += 2){ // repeat starting on btn 0, 2
		if(btn[i].value == btn[8 - i].value && btn[i].value == btn[4].value && btn[i].value != ""){ // check diagonal is all the same (not empty)
			announceWin(btn[i].value);
			currentPlayer = 0; // change variable to determine game is over
			return; // break out of check
		} // if
	} // for
	
	// announce nobody won
	//--------------------
	if(plays == 9){ // all the buttons are full
		announceCatsGame();
	} // if
	
} //checkWin

// show win popup
//---------------
function announceWin(winner){
	document.querySelector('#mess').innerHTML = '<h2>' + winner + ' Wins!</h2>'; // updates the win message with the right player
	document.querySelector('#cat').style.display = "none"; // hides the cat's picture
	document.querySelector('#container').style.display = "flex"; // darkens background and shows popup
} // announceWin

// show nobody won popup
//----------------------
function announceCatsGame(){
	document.querySelector('#container').style.display = "flex"; // darkens background and shows popup
} // announceWin

// hide popup when X is pressed
//-----------------------------
document.querySelector('#xButton').addEventListener("click", hidePopup); // check if X is pressed
function hidePopup(){
	document.querySelector('#container').style.display = "none"; // hide popup and remove darkness from background
} // hidePopup