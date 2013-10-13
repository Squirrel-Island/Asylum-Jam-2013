/* List of Event Panels
* fountainDeath, Fountain, playgroundTeeterTotterDeath, playgroundSwingSetDeath, Playground
*/


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

fountainDeath.createInteraction = function(
	function(gameState) { return gameState.vars('get','fountainDeath') == true; }, 
	"Investigate the dead body.", 
	function(gameState) { gameState.vars('set', 'fountainDeath', true); alert("You just touched a dead guy. Congrats.");}
	); 
	//action results whatever they do, sudo code alert of text until function is made.
	//also work on inventory thing for deaths.  

var Fountain = new EventPanel();
	Fountain.x = 10;
	Fountain.y = 10;
	Fountain.width = 2;
	Fountain.height =2;
	Fountain.visibleText = "Fountain is visible in the distance.";
	Fountain.detailText = "The Fountain is right in front of you and you are quite thirsty.";
	Fountain.autoInteract = false;
	Fountain.isDisplayed = true;

Fountain.createInteraction = function(
	function(gameState) {  
		if (gameState.vars('get','fountainDeath') == null ||gameState.vars('get','fountainDeath') ==false)
			return true;
		else
			false;  }, 
	"Drink from Fountain.", 
	function(gameState) { 
		gameState.vars('set', 'fountainDeath', true); 
		fountainDeath.isDisplayed = true; alert("You dead. ");
	}); 
	//action results whatever they do, sudo code alert of text until function is made.; 

Fountain.createInteraction = function(
	function(gameState) {return true}, 
	"Leave the Fountain.", 
	function(gameState) { alert("You leave the fountain.")
}); 
	//action results whatever they do, sudo code alert of text until function is made.; 

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

playgroundTeeterTotterDeath.createInteraction =function(
	function(gameState) {return gameState.vars('get','playgroundTeeterTotterDeath') == true;}, 
	"Investigate the dead body.", 
	function(gameState) { alert("You touched a dead guy. Congrats")}); 	

var playgroundSwingSetDeath  = new EventPanel(); 
	playgroundSwingSetDeath.x = 4;
	playgroundSwingSetDeath.y = 3;
	playgroundSwingSetDeath.width = 2;
	playgroundSwingSetDeath.height = 2;
	playgroundSwingSetDeath.visibleText = "There seems to be a dead body in the Playground";
	playgroundSwingSetDeath.detailText = "There is a dead body on the Teetertotter";
	playgroundSwingSetDeath.autoInteract = false;
	playgroundSwingSetDeath.isDisplayed = false;

playgroundSwingSetDeath.createInteraction =function(
	function(gameState) {return gameState.vars('get','playgroundSwingSetDeath') == true;}, 
	"Investigate the dead body.", 
	function(g ameState) { alert("You touched a dead guy. Congrats")}); 	

var Playground = new EventPanel();
	Playground.x = 4;
	Playground.y = 3;
	Playground.width = 2;
	Playground.height = 2;
	Playground.visibleText = "There seems to be a  Playground in the distance.";
	Playground.detailText = "You are at the Playground.";
	Playground.autoInteract = false;
	Playground.isDisplayed = false;

Playground.createInteraction = function(
	function(gameState) {
		if (gameState.vars('get','playgroundTeeterTotterDeath') == null ||gameState.vars('get','playgroundTeeterTotterDeath') ==false)
			return true;
		else
			false;  },
	"Investigate the Teetertotter",
	function(gameState){
		playgroundTeeterTotterDeath.isDisplayed = true;
		gameState.vars('set', playgroundTeeterTotterDeath, true);
		alert('You died by Teetertotter.');
	});
Playground.createInteraction = function(
	function(gameState) {
		if (gameState.vars('get','playgroundSwingSetDeath') == null ||gameState.vars('get','playgroundSwingSetDeath') ==false)
			return true;
		else
			false;  },
	"Investigate Swing Set",
	function(gameState){
		playgroundSwingSetDeath.isDisplayed = true;
		gameState.vars("set",'playgroundSwingSetDeath', true);
		alert("You strangle yourself on the swings. good job.");
	});

Playground.createInteraction = function(
	function(gameState){
		return true
	}
	"Leave the Playground",
	function(gameState){
		alert("you left the Playground");
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

DogDeath.createInteraction = function(
	function(gameState) {
		return gameState.vars('get','DogDeath');
	},
	"Investigate mauled body.",
	function(gameState){
		
		
		alert("Now you smell like dog. weird.");
	});
var Dog = new EventPanel();
	Dog.x = 1;
	Dog.y = 9;
	Dog.width = 2;
	Dog.height= 2;
	Dog.isDisplayed = true;
	Dog.visibleText = "You think you hear barking in the distance and see a dog.";
	Dog.detailText = "Aww. A puppy. With a lot of sharp, point teeth.";

Dog.createInteraction = function(
	function(gameState){
		if (gameState.vars('get','DogDeath') == null ||gameState.vars('get','DogDeath') ==false)
			return true;
		else
			false;
	}
	"Play with the nice puppy?",
	function(gameState){
		gameState.vars('set',"DogDeath", true);
		DogDeath.isDisplayed =true;
		alert("Sonny Jim ate your face.");
	}
	)
	


