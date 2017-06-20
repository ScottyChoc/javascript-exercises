/*
	Below is a small script which generates random adventures. There are two
	problems which are marked below with "TODO". Your assignment is to solve
	those TODOs and get this script really up to snuff.
*/
var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid",
	"white walkers",
	"spaghetti monster",
	"JavaScript Bug",
	"puppy"
];

var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace",
	"15-inch MacBook Pro with Retina display",
	"Snarf's 12\" prime rib & provolone sandwich",
	"feature-rich JavaScript library",
	"potato"
];

var actions = [
	"defeated",
	"attacked",
	"ran from",
	"debugged",
	"wrapped a container div around",
	"console.logged",
	"walked through the Pearl Street Mall with",
	"talked to"
];

var gender = [];

/*
	TODO: The following three lines of code have a lot of repetition and are
	ripe for turning into a function! 

	Create a function to handle choosing
	a random element from an array instead of doing the math each time.
*/

function pickRandom(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function pickGender() {
	if (Math.random() < 0.5) {
		heroGender = gender.push("heroine");
		heroPosssessive = gender.push("her");
	} else {
		heroGender = gender.push("hero");
		heroPosssessive = gender.push("his");
	}
}

function newAdventure() {

	pickGender();

	var output = "Armed with only " +
		gender[1] + 
		" " + 
		pickRandom(weapons) +
		" our " +
		gender[0] +
		" " +
		pickRandom(actions) +
		" the evil " +
		pickRandom(monsters) +
		"!";

	document.getElementById("adventure").innerHTML = output;

}

newAdventure();

document.getElementById("new_adventure").onclick = newAdventure;

/*
	TODO: Right now the "new adventure!" button doesn't work. Create a function
	to bind to that button so that the user can create a new adventure without
	refreshing the page.
*/

/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/

// function showBookmark (sBookmark, bUseHash) {
//   if (arguments.length === 1 || bUseHash) { location.hash = sBookmark; return; }
//   var oBookmark = document.querySelector(sBookmark);
//   if (oBookmark) { showNode(oBookmark); }
// }
