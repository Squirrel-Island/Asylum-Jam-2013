function EventPanel() {
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.audioClip = "";
	this.visibleText = "";
	this.detailText = "";
	this.autoInteract = false;
	this.isDisplayed = false;
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
