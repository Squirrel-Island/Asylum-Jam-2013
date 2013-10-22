/* List of Event Panels
* fountainDeath, Fountain, playgroundTeeterTotterDeath, playgroundSwingSetDeath, Playground, DogDeath, Dog, PondDeath,
Pond,MudDeath, Mud 
*/

function restart ()
{
	window.gameController.gameState.player.x = 2;
	window.gameController.gameState.player.y = 15;
	window.gameController.update();
	updateMessages("You open your eyes and find yourself in a park.");
}

function endGame() {
	var endText = "You walk out of the park and into the street. The lights from the street lamps blind you as you abandon the darkness from the park.\
	You look up, and your eyes meet another set of lights -- the front of a car. You feel the car smash you into the pavement, and you become painfully\
	aware of the light fading around you. You have just enough time to make out the driver's face as your eyes droop shut."
	updateMessages(endText);
	var endText2 = "You open your eyes and find yourself next to a park. You're in a car. The hood is dented.";
	setTimeout(function(){
		updateMessages(endText2); 
		setTimeout(function(){updateMessages("Welcome to Hyde Park.");}, 10000);
	},15000);
}

/*
*	Fountain && Fountain Death
*/
var fountainDeath = new EventPanel();
fountainDeath.name = "Corpse (fountain)";
fountainDeath.x = 10;
fountainDeath.y = 10;
fountainDeath.width = 2;
fountainDeath.height =2;
fountainDeath.visibleText = "There is a body on the fountain visible in the distance.";
fountainDeath.detailText = "The body is right in front of you and you are quite hungry.";
fountainDeath.autoInteract = false;
fountainDeath.isDisplayed = false;

fountainDeath.createInteraction(
	function(gameState) { return window.gameController.gameState.vars('get','fountainDeath') == true; }, 
	"Investigate the dead body.", 
	function(gameState) { 
		if(!window.gameController.gameState.player.inventory ==[] && window.gameController.gameState.vars('get', 'itemsfountain'))
		{	updateMessages("You found items on the body.");
			window.gameController.gameState.player.itemsget();
			window.gameController.gameState.vars('set', 'itemsfountain', false);
		}
		else
			updateMessages("You just touched a dead guy. Congrats.");}
	); 


var Fountain = new EventPanel();
	Fountain.name = "Fountain";
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
		if (window.gameController.gameState.vars('get','fountainDeath') == null || window.gameController.gameState.vars('get','fountainDeath') ==false)
			return true;
		else
			return false;  }, 
	"Drink from Fountain.", 
	function(gameState) { 
		window.gameController.gameState.vars('set', 'fountainDeath', true); 
		fountainDeath.isDisplayed = true; 
		if (!window.gameController.gameState.player.inventory ==[])
			{
				window.gameController.gameState.vars('set', 'itemsfountain', true);
				window.gameController.gameState.player.itemsdeath();
			}

		updateMessages("That water had an off texture, and you suddenly don't feel too well...");
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
	playgroundTeeterTotterDeath.name = "Corpse (playground)";
	playgroundTeeterTotterDeath.x = 4;
	playgroundTeeterTotterDeath.y = 3;
	playgroundTeeterTotterDeath.width = 2;
	playgroundTeeterTotterDeath.height = 2;
	playgroundTeeterTotterDeath.visibleText = "There seems to be a dead body in the Playground";
	playgroundTeeterTotterDeath.detailText = "There is a dead body on the Teetertotter";
	playgroundTeeterTotterDeath.autoInteract = false;
	playgroundTeeterTotterDeath.isDisplayed = false;

playgroundTeeterTotterDeath.createInteraction(
	function(gameState) {return window.gameController.gameState.vars('get','playgroundTeeterTotterDeath') == true;}, 
	"Investigate the dead body.", 
	function(gameState) { 
		if(!window.gameController.gameState.player.inventory ==[] && window.gameController.gameState.vars('get', 'itemstotter'))
		{	updateMessages("You found items on the body.");
			window.gameController.gameState.player.itemsget();
			window.gameController.gameState.vars('set', 'itemstotter', false);
		}
		else 
			updateMessages("You touched a dead guy. Congrats");
	}); 	

var playgroundSwingSetDeath  = new EventPanel(); 
	playgroundSwingSetDeath.name = "Corpse (playground)";
	playgroundSwingSetDeath.x = 4;
	playgroundSwingSetDeath.y = 3;
	playgroundSwingSetDeath.width = 2;
	playgroundSwingSetDeath.height = 2;
	playgroundSwingSetDeath.visibleText = "There seems to be a dead body in the Playground";
	playgroundSwingSetDeath.detailText = "There is a dead body on the Teetertotter";
	playgroundSwingSetDeath.autoInteract = false;
	playgroundSwingSetDeath.isDisplayed = false;

playgroundSwingSetDeath.createInteraction(
	function(gameState) {return window.gameController.gameState.vars('get','playgroundSwingSetDeath') == true;}, 
	"Investigate the dead body.", 
	function(gameState) { 
		if(!window.gameController.gameState.player.inventory ==[] && window.gameController.gameState.vars('get', 'itemsswing'))
		{	updateMessages("You found items on the body.");
			window.gameController.gameState.player.itemsget();
			window.gameController.gameState.vars('set', 'itemsswing', false);
		}
		else 
			updateMessages("You touched a dead guy. Congrats");
	}); 	

var Playground = new EventPanel();
	Playground.name = "Playground";
	Playground.x = 4;
	Playground.y = 3;
	Playground.width = 2;
	Playground.height = 2;
	Playground.visibleText = "There seems to be a  Playground in the distance.";
	Playground.detailText = "You are at the Playground.";
	Playground.autoInteract = false;
	Playground.isDisplayed = true;

Playground.createInteraction(
	function(gameState) {
		if (window.gameController.gameState.vars('get','playgroundTeeterTotterDeath') == null ||window.gameController.gameState.vars('get','playgroundTeeterTotterDeath') ==false)
			return true;
		else
			return false;  },
	"Investigate the Teetertotter",
	function(gameState){
		playgroundTeeterTotterDeath.isDisplayed = true;
		window.gameController.gameState.vars('set', 'playgroundTeeterTotterDeath', true);
		if (!window.gameController.gameState.player.inventory ==[])
			{
				window.gameController.gameState.vars('set', 'itemstotter', true);
				window.gameController.gameState.player.itemsdeath();
			}
		updateMessages('You died by Teetertotter.');
		restart();
	});
Playground.createInteraction(
	function(gameState) {
		if (window.gameController.gameState.vars('get','playgroundSwingSetDeath') == null ||window.gameController.gameState.vars('get','playgroundSwingSetDeath') ==false)
			return true;
		else
			return false;  },
	"Investigate Swing Set",
	function(gameState){
		playgroundSwingSetDeath.isDisplayed = true;
		window.gameController.gameState.vars("set",'playgroundSwingSetDeath', true);
		if (!window.gameController.gameState.player.inventory ==[])
			{
				window.gameController.gameState.vars('set', 'itemsswing', true);
				window.gameController.gameState.player.itemsdeath();
			}
		updateMessages("You strangle yourself on the swings. good job.");
		restart();
	});

Playground.createInteraction(
	function(gameState){
		return true
	},
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
	DogDeath.name = "Corpse (dog)";
	DogDeath.x = 1;
	DogDeath.y = 9;
	DogDeath.width = 2;
	DogDeath.height = 2;
	DogDeath.visibleText = "There appears to be a mauled body ahead.";
	DogDeath.detailText = "There is a mauled body ahead.";
	DogDeath.isDisplayed= false;

DogDeath.createInteraction(
	function(gameState) {
		if (window.gameController.gameState.vars('get','DogDeath') == null || window.gameController.gameState.vars('get', 'DogDeath') == false)
			return false;
		else
			return true;
	},
	"Investigate mauled body.",
	function(gameState){
		updateMessages("Now you smell like dog. weird.");
	});
var Dog = new EventPanel();
	Dog.name = "Dog";
	Dog.x = 1;
	Dog.y = 9;
	Dog.width = 2;
	Dog.height= 2;
	Dog.isDisplayed = true;
	Dog.visibleText = "You think you hear barking in the distance and see a dog.";
	Dog.detailText = "Aww. A puppy. With a lot of sharp, pointy teeth.";

Dog.createInteraction(
	function(gameState){
		if (window.gameController.gameState.vars('get','DogDeath') == null ||window.gameController.gameState.vars('get','DogDeath') ==false)
			return true;
		else
			return false;
	},
	"Play with the nice puppy?",
	function(gameState){
		window.gameController.gameState.vars('set',"DogDeath", true);
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
	PoppyFieldDeath.name = "Corpse (field)";
	PoppyFieldDeath.x = 17;
	PoppyFieldDeath.y = 15;
	PoppyFieldDeath.width = 2;
	PoppyFieldDeath.height = 2;
	PoppyFieldDeath.visibleText = "There seems to be a dead body in a field."; //text when the panel enters the player's vision radius
	PoppyFieldDeath.detailText = "There is a dead body surrounded by flowers."; //text when the player reaches the actual panel
	PoppyFieldDeath.autoInteract = false; //scripted event
	PoppyFieldDeath.isDisplayed = false;

PoppyFieldDeath.createInteraction(
	function(gameState){
		if (window.gameController.gameState.vars('get','PoppyFieldDeath') == null ||window.gameController.gameState.vars('get','PoppyFieldDeath') ==false)
			return false;
		else
			return true;
	},
	"Investigate the dead body.",
	function(gameState){
		updateMessages("You touched a dead guy. Congrats.");
	});

var PoppyField = new EventPanel();
	PoppyField.name = "Poppy Field";
	PoppyField.x = 17;
	PoppyField.y = 15;
	PoppyField.width = 2;
	PoppyField.height = 2;
	PoppyField.visibleText = "There seems to be a field of flowers in the distance.";
	PoppyField.detailText = "You are in a field of poppy flowers. You are feeling a bit sleepy. There is a mound of dirt at the edge of the field.";
	PoppyField.autoInteract = false;
	PoppyField.isDisplayed = true;

PoppyField.createInteraction(
	function(gameState){
		return window.gameController.gameState.vars('get','PoppyFieldDeath') == null ||window.gameController.gameState.vars('get','PoppyFieldDeath') ==false ;
	},
	"Continue walking through the field.",
	function(gameState){
		PoppyFieldDeath.isDisplayed = true;
		window.gameController.gameState.vars('set', 'PoppyFieldDeath', true);
		updateMessages("Your eyes are getting very heavy...");
		restart();
	});

PoppyField.createInteraction(
	function(gameState) {
		return window.gameController.gameState.player.has('Shovel') && !window.gameController.gameState.player.has('Rusty Key');
	},
	"Dig into the mound",
	function() {
		window.gameController.gameState.player.items('set','Rusty Key',function(){updateMessages("This can open a door somewhere.");});
		updateMessages("You dig a hole and find a rusty key! Did a dog bury this or something?");
	});

/*
*	End of Poppy Field and PoppyFieldDeath.
*/

/*
*	Start of Pond and Pond Death. 
*/

var PondDeath = new EventPanel();
	PondDeath.name = "Bloated Corpse";
	PondDeath.x = 13;
	PondDeath.y = 17;
	PondDeath.width = 2;
	PondDeath.height =2;
	PondDeath.visibleText = "There seems to be a body floating on the pond.";
	PondDeath.detailText = "There is a bloated body floating by the shore of the pond.";
	PondDeath.autoInteract = false;
	PondDeath.isDisplayed = false;

PondDeath.createInteraction(
	function(gameState){
	if (window.gameController.gameState.vars('get','PondDeath') == null ||window.gameController.gameState.vars('get','PondDeath') ==false)
			return false;
		else
			return true;	
	},
	"Investigate the dead body.",
	function(gameState){
		updateMessages("You touched a dead body. Congrats.");
	});

var Pond= new EventPanel();
	Pond.name = "Pond";
	Pond.x = 13;
	Pond.y = 17;
	Pond.width = 2;
	Pond.height = 2;
	Pond.visibleText = "There seems to be a pond in the distance.";
	Pond.detailText = "There is a pond in front of you. There seems to be lights on across the pond. Is there something under the water?";
	Pond.autoInteract = false;
	Pond.isDisplayed = true;

Pond.createInteraction(
	function(gameState){
	 return (window.gameController.gameState.vars('get','PondDeath') == null ||window.gameController.gameState.vars('get','PondDeath') ==false) ;	
	},
	"Approach the pond's edge",
	function(gameState){
		PondDeath.isDisplayed = true;
		window.gameController.gameState.vars('set', 'PondDeath', true);
		updateMessages("You feel drawn to the pond. Something grabs you ankle and you're pulled down into the dark depths of the water.");
		restart();
	});

Pond.createInteraction(
	function(gameState) {
		return !window.gameController.gameState.player.has('Shovel');
	},
	"Reach into the water",
	function() {
		window.gameController.gameState.player.items('set','Shovel',function(){updateMessages("Used to dig for treasure!");});
		updateMessages("You reach into the water and pull out a shovel.");
	});

Pond.createInteraction(
	function(gameState) {
		return window.gameController.gameState.player.has('Shovel');
	},
	"Reach into the water",
	function() {
		updateMessages("You don't feel inclined to reach into the water a second time.");
	});

Pond.createInteraction(
	function(gameState){
		return true;
	},
	"Leave the pond.",
	function(gameState){
		updateMessages("You left the pond.");
	});

/*
*	End of Pond and PondDeath 
*/

/*
*	Start of Mud and Mud death.
*/

var MudDeath = new EventPanel();
	MudDeath.name = "Muddy Corpse";
	MudDeath.x = 6;
	MudDeath.y = 14;
	MudDeath.width =2;
	MudDeath.height =2;
	MudDeath.visibleText = "The seems to be a muddy body ahead."
	MudDeath.detailText = "The is a body facedown, covered in mud."
	MudDeath.autoInteract = false;
	MudDeath.isDisplayed = false;

MudDeath.createInteraction(
	function(gameState)
	{
	if (window.gameController.gameState.vars('get','MudDeath') == null ||window.gameController.gameState.vars('get','MudDeath') ==false)
			return false;
		else
			return true;	
	},
	"Investigate the muddy body.",
	function(gameState){
		updateMessages("You touched a dead guy, Congrats");
	});

var Mud = new EventPanel();
	Mud.name = "Mud";
	Mud.x = 6;
	Mud.y = 14;
	Mud.width =2;
	Mud.height =2;
	Mud.visibleText = "The seems to be a patch of mud closeby."
	Mud.detailText = "The is a muddy patch on the ground."
	Mud.autoInteract = false;
	Mud.isDisplayed = true;

Mud.createInteraction(
	function(gameState){
	return window.gameController.gameState.vars('get','MudDeath') == null ||window.gameController.gameState.vars('get','MudDeath') ==false ;		
	},
	"Continue through the Mud.",
	function(gameState){
		MudDeath.isDisplayed = true;
		window.gameController.gameState.vars('set', 'MudDeath', true);
		updateMessages("You continue through the mud and get stuck, suffocating yourself.");
		restart();
	});

Mud.createInteraction(
	function(gameState)
	{
		return true;
	},
	"Do not walk through the mud.",
	function(gameState){
		updateMessages("You walk around the mud.");
	});

/*
*	End of Mud and Mud Death
*/

var ToolShed = new EventPanel();
	ToolShed.name = "Tool Shed";
	ToolShed.x = 0;
	ToolShed.y = 20;
	ToolShed.width = 2;
	ToolShed.height = 2;
	ToolShed.visibleText = "A small building is visible in the distance.";
	ToolShed.detailText = "The building turns out to be a rickety tool shed. A slight breeze may knock it over.";
	ToolShed.autoInteract = false;
	ToolShed.isDisplayed = true;

ToolShed.createInteraction(
	function(gameState){
		return !window.gameController.gameState.player.has('Rusty Key');
	},
	"Search the shed",
	function(gameState){
		updateMessages("The door is locked. You can make out a rusty keyhole under the doorknob.");
	});

ToolShed.createInteraction(
	function(gameState){
		return window.gameController.gameState.player.has('Rusty Key');
	},
	"Search the shed",
	function(gameState){
		updateMessages("You use the rusty key to unlock the door. Searching the shed reveals a small silver key on a shelf. As you're about to leave, a harsh wind rips through the park, and the shed collapses on your head. You faintly realize that you're still holding the silver key as you fall unconscious.");
		window.gameController.gameState.player.items('set','Silver Key', function() {updateMessages('This looks like it opens some sort of gate.');});
		ToolShed.isDisplayed = false;
		ToolShedDeath.isDisplayed = true;
		window.gameController.gameState.vars('set','ToolShedDeath',true);
		setTimeout(function() {restart(); window.gameController.gameState.player.items('remove','Silver Key');}, 1500);
	});

var ToolShedDeath = new EventPanel();
	ToolShedDeath.name = "Crushed Corpse";
	ToolShedDeath.x = 0;
	ToolShedDeath.y = 20;
	ToolShedDeath.width = 2;
	ToolShedDeath.height = 2;
	ToolShedDeath.visibleText = "A dead body is lying in a pile of rubble.";
	ToolShedDeath.detailText = "There is a dead body lying in the remains of a tool shed. There is something shiny in its hand.";
	ToolShedDeath.autoInteract = false;
	ToolShedDeath.isDisplayed = false;

ToolShedDeath.createInteraction(
	function(gameState){
		return !window.gameController.gameState.player.has('Silver Key');
	},
	"Search the body",
	function(gameState){
		updateMessages("You find a silver key in the corpse's hand.");
		window.gameController.gameState.player.items('set','Silver Key', function() {updateMessages('This looks like it opens some sort of gate.');});
	});

ToolShedDeath.createInteraction(
	function(gameState){
		return window.gameController.gameState.player.has('Silver Key');
	},
	"Search the body",
	function(gameState){
		updateMessages("You really like touching this body, huh?");
	});

var SilverGate = new EventPanel();
	SilverGate.name = "Silver Gate";
	SilverGate.x = 0;
	SilverGate.y = 2;
	SilverGate.width = 2;
	SilverGate.height = 2;
	SilverGate.visibleText = "Is that an exit to the park?";
	SilverGate.detailText = "The large silver gate is firmly shut. There is a keyhole in the middle. You can see cars driving along the road beyond the gate.";
	SilverGate.autoInteract = false;
	SilverGate.isDisplayed = true;

SilverGate.createInteraction(
	function(gameState){
		return window.gameController.gameState.player.has('Silver Key');
	},
	"Exit the park",
	function(gameState){
		endGame();
	});

SilverGate.createInteraction(
	function(gameState){
		return !window.gameController.gameState.player.has('Silver Key');
	},
	"Exit the park",
	function(gameState){
		updateMessages("The gate is locked.");
	});
//fountainDeath, Fountain, playgroundTeeterTotterDeath, playgroundSwingSetDeath, Playground, DogDeath, Dog, PondDeath,
//Pond,MudDeath, Mud 

window.gameController.gameState.events('set','fountainDeath',fountainDeath);
window.gameController.gameState.events('set','Fountain',Fountain);
window.gameController.gameState.events('set', 'playgroundSwingSetDeath',playgroundSwingSetDeath );
window.gameController.gameState.events('set', 'playgroundTeeterTotterDeath',playgroundTeeterTotterDeath );
window.gameController.gameState.events('set', 'Playground',Playground );
window.gameController.gameState.events('set', 'DogDeath', DogDeath );
window.gameController.gameState.events('set', 'Dog',Dog );
window.gameController.gameState.events('set', 'PondDeath',PondDeath );
window.gameController.gameState.events('set', 'Pond',Pond );
window.gameController.gameState.events('set', 'MudDeath',MudDeath );
window.gameController.gameState.events('set', 'Mud',Mud );
window.gameController.gameState.events('set', 'PoppyField', PoppyField );
window.gameController.gameState.events('set', 'PoppyFieldDeath',PoppyFieldDeath );
window.gameController.gameState.events('set', 'ToolShed', ToolShed );
window.gameController.gameState.events('set', 'ToolShedDeath',ToolShedDeath );
window.gameController.gameState.events('set', 'SilverGate', SilverGate );
//window.gameController.gameState.events('set', '', );
