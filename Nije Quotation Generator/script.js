var ovo_je_pocetak = [
"Balkan, Balkan, Balkan, ",
"Ljubiš me ",
"Ne jednom, ",
"Hop, hop, hop, ",
"Eh ",
"Ljubice, ",
"Beograd, ",
"Praviš mi, ",
"Beograd, Beograd, ",
"Grudi ti, "]

var ovo_je_sredina = ["ovo je Balkan ",
"ko balavica ",
"ne dvaput, ",
"ovo je Balkan, ",
"stisni me, ",
"na grudi ",
"Beograd, ",
" ljubice ",
"tri puta, ",
"ljubice, "]

var ovo_je_kraj = ["come on!",
"nije te sram",
"tri puta me",
"come on!",
"kissni me",
"pritisni me",
"ja bezobrazan",
"zazubice",
"po naški je",
"haubice"]

//Sve ostalo

var ostalo_pocetak = [
"Bolje je ", //solo
"Do mene ", //face
"Pucala si mi ", //brane mi te
"ma, ", //luda zeno
"Bio sam glup i mlad ", //faktor rizika
"Moj rode ", //mama
"bez tebe ", //perje
"Ovo je ", //ovo je prica o nama
"Nepopravljivo, ", //nepopravljivo
"Ti i ja "] 
var ostalo_sredina = [
"kad si ",
"prosetaj ",
"u srce ",
"dokle to, ",
"da shvatim ",
"ovo je brodolom, ",
"dane rasipam ",
"prica o ",
"nepopravlji ",
"nismo mogli "]

var ostalo_kraj = [
"solo!",
"uzivo uzivaj!",
"nisi trebala",
"luda zeno!",
"sta zelis tad",
"bar ti razumi me",
"ko perje",
"nama",
"sam lud",
"da se ludo volimo"]


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateQuotes(_category, _count) {

	for(var i = 1; i <= _count; i++) {

		var randBeginning = getRandomInt(_count);
		var randMiddle = getRandomInt(_count);
		var randEnd = getRandomInt(_count);

		var id = "quote" + i;

		if(_category=='balkan')
		{
			document.getElementById(id).innerHTML = ovo_je_pocetak[randBeginning] + ovo_je_sredina[randMiddle] + ovo_je_kraj[randEnd];
		}
		else
			document.getElementById(id).innerHTML = ostalo_pocetak[randBeginning] + ostalo_sredina[randMiddle] + ostalo_kraj[randEnd];
	}
}

function newQuote(){

	//refresh();

	var category = document.getElementById("category");
	var count = document.getElementById("count");

	generateQuotes(category.options[category.selectedIndex].value, count.options[count.selectedIndex].value);
}

function quit() {
	window.open('', '_self', '');
	window.close();
}

function refresh(){
	window.location.reload();
}