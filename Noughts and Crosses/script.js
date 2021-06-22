var currentPlayer = 1; // current player 1 or 2(-1)
var plays = 0; // number of turns
var btn = document.getElementsByTagName('input'); // array of buttons

var board = document.querySelector('#board');

for(var i = 0; i < btn.length; i++) {
		btn[i].addEventListener("click", takeTurn);
}
function takeTurn(){
	if(this.value == ""){
		if(currentPlayer == 1){
			this.value = "X";
			this.style.color = "red";
		}
		else{
			this.value = "O";
			this.style.color = "blue";
		}
		currentPlayer *= (-1);
		plays++;
		console.log("plays = " + plays + " & currentPlayer = " + currentPlayer);
		if(plays >= 5) {
			checkWin();
		}
	}
} // takeTurn

function checkWin(){
	for(var i = 0; i < 7; i += 3){
		if(btn[i].value == btn[i + 1].value && btn[i].value == btn[i + 2].value && btn[i].value != ""){
			announceWin(btn[i].value);
			return;
		}
	}
	for(var i = 0; i < 3; i++){
		if(btn[i].value == btn[i + 3].value && btn[i].value == btn[i + 6].value && btn[i].value != ""){
			announceWin(btn[i].value);
			return;
		}
	}
	for(var i = 0; i < 3; i += 2){
		if(btn[i].value == btn[8 - i].value && btn[i].value == btn[4].value && btn[i].value != ""){
			announceWin(btn[i].value);
			return;
		}
	}
	if(plays == 9){
		announceCatsGame();
	}
} //checkWin

function announceWin(winner){
	document.querySelector('#mess').innerHTML = '<h2>' + winner + ' Wins!</h2>';
	document.querySelector('#cat').style.display = "none";
	document.querySelector('#container').style.display = "flex";
} // announceWin

function announceCatsGame(){
	document.querySelector('#container').style.display = "flex";
} // announceWin

document.querySelector('#xButton').addEventListener("click", hidePopup);
function hidePopup(){
	document.querySelector('#container').style.display = "none";
} // hidePopup