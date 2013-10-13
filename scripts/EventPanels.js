/* List of Event Panels
* fountainDeath, Fountain, playgroundTeeterTotter
*


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
	function(gameState) { gameState.vars('set', 'fountainDeath', true); fountainDeath.isDisplayed = true; alert("You dead. ");}
	); 
	//action results whatever they do, sudo code alert of text until function is made.; 

Fountain.createInteraction = function(
	function(gameState) {return true}, "Leave the Fountain.", 
	function(gameState) { alert("You leave the fountain.")}); 
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
