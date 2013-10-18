function TextBuffer() {
	this.buffer = []; //{text,priority,group}
}

TextBuffer.prototype.flush = function() {
	var groupNames = []; //names of groups
	var groups = []; //group objects

	//add group names from objects in buffer to groupNames array
	for(var iii=0; iii<this.buffer.length; iii++) 
		if(this.buffer[iii] != null && groupNames.indexOf(this.buffer[iii]["group"]) < 0)
			groupNames.push(this.buffer[iii]["group"]);

	//for each group name...
	for(var iii=0; iii<groupNames.length; iii++) {
		var groupTexts = this.buffer.filter(function(value) {
			return value["group"] === groupNames[iii];
		});

		groupTexts.sort(function(a,b) {
			return b["priority"] - a["priority"];
		});

		var textArr = [];
		var groupPriority = 0;
		for(var jjj=0;jjj<groupTexts.length;jjj++) {
			textArr.push(groupTexts[jjj]["text"]);
			groupPriority += groupTexts[jjj]["priority"];
		}


		var finalText = textArr.join(" ");

		//push group object with completed text and final group priority
		groups.push({
				"texts": finalText,
				"groupPriority": groupPriority
			});
	}

	groups.sort(function(a,b) {
		return a["groupPriority"] - b["groupPriority"];
	});

	hr();

	for(var iii=0; iii<groups.length;iii++) {
		updateMessages(groups[iii]["texts"]);
		br();
	}

	this.buffer = [];
};

TextBuffer.prototype.add = function(text, priority, group) {
	if(priority < 1)
		priority = 1;
	if(priority > 5) 
		priority = 5;

	this.buffer.push({
		"text": text,
		"priority": priority,
		"group": group
	});
};