/* List of Event Panels
* fountainDeath, Fountain, playgroundTeeterTotterDeath, playgroundSwingSetDeath, Playground, DogDeath, Dog
*/

function restart ()
{
	player.x = 2;
	player.y = 18;
	updateMessages("You open your eyes and find yourself in a park.");
}



/*
*	Fountain && Fountain Death
*/
var fountainDeath = new EventPanel();
fountainDeath.x = 10;
fountainDeath.y = 10;
fountainDeath.width = 2;
fountainDeath.height =2;
fountainDeath.visibleText = "There is a body on the fountain visible in the distance.";
fountainDeath.detailText = "The body is right in front of you and you are quite hungry.";
fountainDeath.autoInteract = false;
fountainDeath.isDisplayed = false;

fountainDeath.createInteraction(
	function(gameState) { return gameState.vars('get','fountainDeath') == true; }, 
	"Investigate the dead body.", 
	function(gameState) { 
		updateMessages("You just touched a dead guy. Congrats.");}
	); 


var Fountain = new EventPanel();
	Fountain.x = 10;
	Fountain.y = 10;
	Fountain.width = 2;
	Fountain.height =2;
	Fountain.visibleText = "Fountain is visible in the distance.";
	Fountain.detailText = "The Fountain is right in front of you and you are quite thirsty.";
	Fountain.autoInteract = false;
	Fountain.isDisplayed = true;

Fountain.createInteraction(
	function(gameState) {  
		if (gameState.vars('get','fountainDeath') == null ||gameState.vars('get','fountainDeath') ==false)
			return true;
		else
			false;  }, 
	"Drink from Fountain.", 
	function(gameState) { 
		gameState.vars('set', 'fountainDeath', true); 
		fountainDeath.isDisplayed = true; 
		updateMessages("You dead.");
		restart();
	}); 
	
Fountain.createInteraction(
	function(gameState) {return true}, 
	"Leave the Fountain.", 
	function(gameState) { updateMessages("You leave the fountain.")
}); 
	

/*
*	End of Fountain Death and fountain. 
*/

/*
*	Playground Death and Playground
*/

var playgroundTeeterTotterDeath  = new EventPanel(); 
	playgroundTeeterTotterDeath.x = 4;
	playgroundTeeterTotterDeath.y = 3;
	playgroundTeeterTotterDeath.width = 2;
	playgroundTeeterTotterDeath.height = 2;
	playgroundTeeterTotterDeath.visibleText = "There seems to be a dead body in the Playground";
	playgroundTeeterTotterDeath.detailText = "There is a dead body on the Teetertotter";
	playgroundTeeterTotterDeath.autoInteract = false;
	playgroundTeeterTotterDeath.isDisplayed = false;

playgroundTeeterTotterDeath.createInteraction(
	function(gameState) {return gameState.vars('get','playgroundTeeterTotterDeath') == true;}, 
	"Investigate the dead body.", 
	function(gameState) { updateMessages("You touched a dead guy. Congrats")}); 	

var playgroundSwingSetDeath  = new EventPanel(); 
	playgroundSwingSetDeath.x = 4;
	playgroundSwingSetDeath.y = 3;
	playgroundSwingSetDeath.width = 2;
	playgroundSwingSetDeath.height = 2;
	playgroundSwingSetDeath.visibleText = "There seems to be a dead body in the Playground";
	playgroundSwingSetDeath.detailText = "There is a dead body on the Teetertotter";
	playgroundSwingSetDeath.autoInteract = false;
	playgroundSwingSetDeath.isDisplayed = false;

playgroundSwingSetDeath.createInteraction(
	function(gameState) {return gameState.vars('get','playgroundSwingSetDeath') == true;}, 
	"Investigate the dead body.", 
	function(gameState) { updateMessages("You touched a dead guy. Congrats")}); 	

var Playground = new EventPanel();
	Playground.x = 4;
	Playground.y = 3;
	Playground.width = 2;
	Playground.height = 2;
	Playground.visibleText = "There seems to be a  Playground in the distance.";
	Playground.detailText = "You are at the Playground.";
	Playground.autoInteract = false;
	Playground.isDisplayed = false;

Playground.createInteraction(
	function(gameState) {
		if (gameState.vars('get','playgroundTeeterTotterDeath') == null ||gameState.vars('get','playgroundTeeterTotterDeath') ==false)
			return true;
		else
			false;  },
	"Investigate the Teetertotter",
	function(gameState){
		playgroundTeeterTotterDeath.isDisplayed = true;
		gameState.vars('set', playgroundTeeterTotterDeath, true);
		updateMessages('You died by Teetertotter.');
		restart();
	});
Playground.createInteraction(
	function(gameState) {
		if (gameState.vars('get','playgroundSwingSetDeath') == null ||gameState.vars('get','playgroundSwingSetDeath') ==false)
			return true;
		else
			false;  },
	"Investigate Swing Set",
	function(gameState){
		playgroundSwingSetDeath.isDisplayed = true;
		gameState.vars("set",'playgroundSwingSetDeath', true);
		updateMessages("You strangle yourself on the swings. good job.");
		restart();
	});

Playground.createInteraction(
	function(gameState){
		return true
	}
	"Leave the Playground",
	function(gameState){
		updateMessages("you left the Playground");
	});

/*
*	End of Playground and Playground Deaths
*/

/*
*	Beginning of Dog and Dog Deaths
*/

var DogDeath = new EventPanel(); 
	DogDeath.x = 1;
	DogDeath.y = 9;
	DogDeath.width = 2;
	DogDeath.height = 2;
	DogDeath.visibleText = "There appears to be a mauled body ahead.";
	DogDeath.detailText = "There is a mauled body ahead.";

DogDeath.createInteraction(
	function(gameState) {
		if (gameState.vars('get','DogDeath') == null || gameState.vars('get', 'DogDeath') == false)
			return false;
		else
			return true;
	},
	"Investigate mauled body.",
	function(gameState){
		updateMessages("Now you smell like dog. weird.");
	});
var Dog = new EventPanel();
	Dog.x = 1;
	Dog.y = 9;
	Dog.width = 2;
	Dog.height= 2;
	Dog.isDisplayed = true;
	Dog.visibleText = "You think you hear barking in the distance and see a dog.";
	Dog.detailText = "Aww. A puppy. With a lot of sharp, point teeth.";

Dog.createInteraction(
	function(gameState){
		if (gameState.vars('get','DogDeath') == null ||gameState.vars('get','DogDeath') ==false)
			return false;
		else
			return true;
	}
	"Play with the nice puppy?",
	function(gameState){
		gameState.vars('set',"DogDeath", true);
		DogDeath.isDisplayed =true;
		updateMessages("Sonny Jim ate your face.");
		restart();
	}
	);

Dog.createInteraction(
	function(gameState){
		return true;
	},
	"Run away from the dog.",
	function(gameState){
		updateMessages("Good choice, the dog looked a bit rabid.");
	}
	);


/*
*	PoppyField and PoppyFieldDeath
*/

var PoppyFieldDeath = new EventPanel();
	PoppyFieldDeath.x = 17;
	PoppyFieldDeath.y = 15;
	PoppyFieldDeath.width = 2;
	PoppyFieldDeath.height = 2;
	PoppyFieldDeath.visibleText = "There seems to be a dead body in a field."; //text when the panel enters the player's vision radius
	PoppyFieldDeath.detailText = "There is a dead body surrounded by flowers."; //text when the player reaches the actual panel
	PoppyFieldDeath.autoInteract = false; //scripted event

PoppyFieldDeath.createInteraction(
	function(gameState){
		if (gameState.vars('get','PoppyFieldDeath') == null ||gameState.vars('get','PoppyFieldDeath') ==false)
			return false;
		else
			return true;
	}
	"Investigate the dead body.",
	function(gameState){
		updateMessages("You touched a dead guy. Congrats.");
	});

var PoppyField = new EventPanel();
	PoppyField.x = 17;
	PoppyField.y = 15;
	PoppyField.width = 2;
	PoppyField.height = 2;
	PoppyField.visibleText = "There seems to be a field of flowers in the distance.";
	PoppyField.detailText = "You are in a field of poppy flowers. You are feeling a bit sleepy.";
	PoppyField.autoInteract = false;
	PoppyField.isDisplayed = true;

PoppyField.createInteraction(
	function(gameState){
		return gameState.vars('get','PoppyFieldDeath') == null ||gameState.vars('get','PoppyFieldDeath') ==false ;
	}
	"Continue walking through the field.",
	function(gameState){
		PoppyFieldDeath.isDisplayed = true;
		gameState.vars('set', 'PoppyFieldDeath', true);
		updateMessages("Your eyes are getting very heavy...");
		restart();
	});
