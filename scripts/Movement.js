var player = window.gameController.gameState.player;
var mapMax = window.gameController.gameState.mapX;
var currentKey = null;
var interval = null;
var timeout = null;
var stepDuration = 1000 / window.gameController.movementSpeed; //milliseconds between steps
var moveDelay = 100; //milliseconds before a movement initiates

setInterval(function() {document.getElementById('coord').innerHTML=player.x+","+player.y;},100);

function up()
{
    
    if(player.y < mapMax)
    	player.y+=1;
    //else
    	//prompt hit wall

    window.gameController.update();
}

function down()
{
    if(player.y > 0)
    	player.y-=1;
    //else
    	//prompt hit wall

    window.gameController.update();
}

function right()
{
    if(player.x < mapMax)
    	player.x+=1;

    //else
    	//prompt hit wall

    window.gameController.update();
}
function left()
{
    if(player.x > 0)
    	player.x-=1;
    //else 
    	//prompt hit wall

    window.gameController.update();
}

function initiateMove(moveFunc) {
    timeout = setTimeout(function() {
      moveFunc(); 
      interval = setInterval(moveFunc,stepDuration);
    },moveDelay);
}

document.addEventListener('keydown', function(event) {
    //first code is arrows, second is wasd
    if (event.keyCode == 37 || event.keyCode == 65) {
        if(timeout == null && interval == null || currentKey != event.keyCode) {
          clearInterval(interval);
          clearTimeout(timeout);
          initiateMove(left);
          currentKey = event.keyCode; 
        } 
    }
    else if (event.keyCode == 39 || event.keyCode == 68) {
     	if(timeout == null && interval == null || currentKey != event.keyCode) {
          clearInterval(interval);
          clearTimeout(timeout);
          initiateMove(right);
          currentKey = event.keyCode; 
        }    
    }
    else if (event.keyCode == 38|| event.keyCode == 87) {
        if(timeout == null && interval == null || currentKey != event.keyCode) {
          clearInterval(interval);
          clearTimeout(timeout);
     	    initiateMove(up);
          currentKey = event.keyCode; 
        }
     }
    else if (event.keyCode == 40|| event.keyCode == 83) {
     	if(timeout == null && interval == null || currentKey != event.keyCode) {
          clearInterval(interval);
          clearTimeout(timeout);
          initiateMove(down);
          currentKey = event.keyCode; 
        } 
     } 
}, true);

window.addEventListener('keyup',
    function(event){
        clearInterval(interval);
        interval = null;
        clearTimeout(timeout);
        timeout = null;
        if (event.keyCode == 37 || event.keyCode == 65) {
        	//alert(player.x);
			}
    	else if (event.keyCode == 39|| event.keyCode == 86) {
     		//alert(player.x);    
    		}
    	else if (event.keyCode == 38|| event.keyCode == 87) {
     		//alert(window.gameController.gameState.player.x);
     		}
    	else if (event.keyCode == 40|| event.keyCode == 83) {
     		//alert(player.y); 
        } 
    },
false);