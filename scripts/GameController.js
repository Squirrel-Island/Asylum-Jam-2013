function GameController() {
	this.gameState = new Game();
	this.movementSpeed = 0;
	this.inSight = [];
	this.inContact = [];
}

GameController.prototype.checkCollision = function() {

	var playerX = this.gameState.player.x
	var playerY = this.gameState.player.y;

	var collidingWith = [];

	for(var iii=0; iii<this.gameState.eventPanels.length; iii++) {
		var panel = this.gameState.eventPanels[iii];
		var panelObj = panel;
		if(panel != null) {
			panel = panel['event'];

			if(playerX >= panel.x && playerX <= (panel.x + panel.width) && playerY <= panel.y && playerY >= (panel.y - panel.height)) {
				collidingWith.push(panelObj);
			}
		}
	}

	//alert(collidingWith.toString());
	return collidingWith.filter(function(value,index,self) {
	    		return self.indexOf(value) === index
			});
}; 

GameController.prototype.checkVisionRadius = function() {
	
	var playerX = this.gameState.player.x
	var playerY = this.gameState.player.y;
	var fov = this.gameState.player.fieldOfView;

	var seeing = [];

	var playerCoords = [];
	for(var jjj = playerX-fov; jjj <= playerX+fov; jjj++)
		for(var bbb = playerY-fov; bbb <= playerY+fov; bbb++)
			playerCoords.push([jjj,bbb]);

	//find panel
	for(var iii=0; iii<this.gameState.eventPanels.length; iii++) {
		
		var panel = this.gameState.eventPanels[iii];
		var panelObj = panel;

		if(panel != null) {
			panel = panel['event'];

			var panelCoords = [];
			for(var jjj = panel.x; jjj <= panel.x+panel.width; jjj++) 
				for(var bbb = panel.y-panel.height; bbb <= panel.y; bbb++)
					panelCoords.push([jjj,bbb]);

			for(var jjj=0; jjj<panelCoords.length; jjj++) 
				for(var bbb=0; bbb<playerCoords.length;bbb++)
					if(panelCoords[jjj][0] == playerCoords[bbb][0] && panelCoords[jjj][1] == playerCoords[bbb][1])
						seeing.push(panelObj); 
		}
	}

	return seeing.filter(function(value,index,self) {
	    		return self.indexOf(value) === index
			});
};

GameController.prototype.onMove = function() {
	
	//VISION RADIUS CHECKS
	var canSee = this.checkVisionRadius();

	//if it is in sight, but not in this.inSight array, push it to this.inSight
	for(var iii=0; iii<canSee.length; iii++) {
		if(this.inSight.indexOf(canSee[iii]) < 0) {
			document.body.innerHTML += canSee[iii]['event'].visibleText + "<br>"; //replace with actual add text function
			this.inSight.push(canSee[iii]);
		}
	}

	//if it is in the this.inSight array, but not in sight, remove it from the array
	for(var iii=0; iii<this.inSight.length; iii++)
		if(canSee.indexOf(this.inSight[iii]) < 0)
			this.inSight.splice(iii,1);

	//COLLISION CHECKS
	var walkingOn = this.checkCollision();

	//if player is in contact with it, but it's not in this.inContact array, push it to this.inContact
	for(var iii=0; iii<walkingOn.length; iii++) {
		if(this.inContact.indexOf(walkingOn[iii]) < 0) {
			document.body.innerHTML += walkingOn[iii]['event'].detailText + "<br>"; //replace with actual add text function
			this.runEvents(walkingOn[iii]);
			this.inContact.push(walkingOn[iii]);
		}
	}

	//if it is in the this.inContact array, but not in contact with the player, remove it from the array
	for(var iii=0; iii<this.inContact.length; iii++)
		if(walkingOn.indexOf(this.inContact[iii]) < 0)
			this.inContact.splice(iii,1);

	this.runEvents();

};

GameController.prototype.runEvents = function(e) {
	var eventObj = e;
	if(eventObj != null) {
		eventObj = eventObj['event'];

		for(var jjj=0; jjj<eventObj.events.length; jjj++)
			if(eventObj.events[jjj] != null)
				if(eventObj.events[jjj]['condition'](this.gameState))
					eventObj.events[jjj]['action'](this.gameState);

	}
};