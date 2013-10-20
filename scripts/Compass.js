function Compass(element) {
	this.element = element;
	this.angle = 0;
	this.speed = 10; //travels 1 degree in this.speed milliseconds

	this.interval = null;
}

Compass.prototype.point = function(degrees)  {
	clearInterval(this.interval);
	this.interval = null;
	this.angle %= 360;
	var newAngle = degrees % 360;
	var anglePlus = (this.angle+180) % 360;
	var angleMinus = (this.angle-180 < 0) ? (360+this.angle-180):(this.angle-180);
	var intervalFunc = null;

	alert((newAngle > this.angle && newAngle <= this.angle + 180) +" "+ (newAngle >= 0 && newAngle <= anglePlus && this.angle >= 180));
	if( (newAngle > this.angle && newAngle <= this.angle + 180) || (newAngle >= 0 && newAngle <= anglePlus && this.angle >= 180) )
		intervalFunc = function() {
			this.angle %= 360;
			if(this.angle != newAngle)
				$(this.element).rotate(++this.angle);
			else {
				clearInterval(this.interval);
				this.interval = null;
			}
		}.bind(this);
	else
		intervalFunc = function() {
			this.angle %= 360;
			this.angle = (this.angle < 0) ? (this.angle+360):this.angle;
			if(this.angle != newAngle)
				$(this.element).rotate(--this.angle);
			else {
				clearInterval(this.interval);
				this.interval = null;
			}
		}.bind(this);

	if(intervalFunc != null) 
		this.interval = setInterval(intervalFunc,this.speed);
};