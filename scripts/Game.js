function Game() {
	this.player = 1;//new Player();
	this.mapX = 0;
	this.mapY = 0;
	this.eventPanels = []; //{name,event}
	this.gameVars = []; //{name,value}
}
								//"set"/"get", varName, variable value
Game.prototype.vars = function(mode, varName, value) {
	var arrElement = null;
	var iii = 0;
	for(iii=0; iii<this.gameVars.length; iii++) {
		if(this.gameVars[iii]["name"] == varName) {
			arrElement = this.gameVars[iii];
			break;
		}
	}

	switch(mode) {
		case "set":
			if(arrElement != null)
				this.gameVars[iii] = {"name": varName, "value": value};
			else
				this.gameVars.push({"name": varName, "value": value});
		break;
		case "get":
			if(arrElement != null)
				return arrElement["value"];
			break;
		case "remove":
			if(arrElement != null)
				this.gameVars.splice(iii,1);
			break;
		default:
			return null;
	}
};

Game.prototype.events = function(mode, eventName, eventPanel) {
	var arrElement = null;
	var iii = 0;
	for(iii=0; iii<this.eventPanels.length; iii++) {
		if(this.eventPanels[iii]["name"] == eventName) {
			arrElement = this.eventPanels[iii];
			break;
		}
	}

	switch(mode) {
		case "set":
			if(!(eventPanel instanceof EventPanel))
				break;

			if(arrElement != null)
				this.eventPanels[iii] = {"name": eventName, "event": eventPanel};
			else
				this.eventPanels.push({"name": eventName, "event": eventPanel});
		break;
		case "get":
			if(arrElement != null)
				return arrElement["event"];
			break;
		case "remove":
			if(arrElement != null)
				this.eventPanels.splice(iii,1);
			break;
		default:
			return null;
	}
};