function EventPanel() {
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.audioClip = "";
	this.visibleText = ""; //text when the panel enters the player's vision radius
	this.detailText = ""; //text when the player reaches the actual panel
	this.autoInteract = true; //scripted event
	this.isDisplayed = false; //is visible on the map
	this.interactions = []; //{condition(function), option(string), action(function)}
	this.events = []; //{condition, action(function)}
}

EventPanel.prototype.createInteraction = function(condition, option, action) {
	this.interactions.push({
		"condition": condition,
		"option": option,
		"action": action
	});
}; 

EventPanel.prototype.createEvent = function(condition, action) {
	this.events.push({
		"condition": condition,
		"action": action
	});
};
