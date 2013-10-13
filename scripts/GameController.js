function GameController() {
	this.gameState = new Game();
	this.inSight = [];
	this.inContact = [];
}

GameController.prototype.checkCollision = function() {

	var playerX = this.gameState.player.x
	var playerY = this.gameState.player.y;

	for(var iii=0; iii<this.gameState.eventPanels.length; iii++) {
		var panel = this.gameState.eventPanels[iii];
		if(panel != null) {
			panel = panel['event'];
			if(playerX >= panel.x && playerX <= (panel.x + panel.width) && playerY <= panel.y && playerY >= (panel.x - panel.height)) {
				alert('I hit something!');
				return true;
			}
		}
	}
	return false;
};

GameController.prototype.checkVisionRadius = function() {
	
	var playerX = this.gameState.player.x
	var playerY = this.gameState.player.y;
	var fov = this.gameState.player.fieldOfView;

	var playerCoords = [];
	for(var jjj = playerX-fov; jjj <= playerX+fov; jjj++)
		for(var bbb = playerY-fov; bbb <= playerY+fov; bbb++)
			playerCoords.push([jjj,bbb]);

	//find panel
	for(var iii=0; iii<this.gameState.eventPanels.length; iii++) {
		
		var panel = this.gameState.eventPanels[iii];

		if(panel != null) {
			panel = panel['event'];

			var panelCoords = [];
			for(var jjj = panel.x; jjj <= panel.x+panel.width; jjj++) 
				for(var bbb = panel.y-panel.height; bbb <= panel.y; bbb++)
					panelCoords.push([jjj,bbb]);

			for(var jjj=0; jjj<panelCoords.length; jjj++) 
				for(var bbb=0; bbb<playerCoords.length;bbb++)
					if(panelCoords[jjj][0] == playerCoords[bbb][0] && panelCoords[jjj][1] == playerCoords[bbb][1])
						alert("I can see... I CAN FIGHT!"); 
		}
	}
	return false;
};
