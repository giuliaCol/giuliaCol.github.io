var btn = document.querySelector('#btns');

btn.f1.addEventListener("click", showFact1);
function showFact1(){
	document.querySelector('#txt').innerHTML = "Scotland has 421 words for 'snow'\n <img src='Images/snow.jpg' alt='Snow'>";
}

btn.f2.addEventListener("click", showFact2);
function showFact2(){
	document.querySelector('#txt').innerHTML = "Armadillo shells are bulletproof";
}

btn.f3.addEventListener("click", showFact3);
function showFact3(){
	document.querySelector('#txt').innerHTML = "That tiny pocket in jeans was designed to store pocket watches";
}

btn.f4.addEventListener("click", showFact4);
function showFact4(){
	document.querySelector('#txt').innerHTML = "Turkeys can blush";
}

btn.f5.addEventListener("click", showFact5);
function showFact5(){
	document.querySelector('#txt').innerHTML = "The man with the world's deepest voice can make sounds humans can't hear";
}