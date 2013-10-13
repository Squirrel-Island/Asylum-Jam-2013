var px =0, py =0;
var MapMax =20;


var secpstep = 1*1000 // 1000 is converstion to milliseconds
function up()
{
if (py<MapMax)
	py+=1;
//else
	//prompt hit wall
}
function down()
{
if (py>0)
	py-=1;
//else
	//prompt hit wall
}
function right()
{
if (px<MapMax)
	px+=1;

//else
	//prompt hit wall
}
function left()
{
if (px>0)
	px-=1;
//else 
	//prompt hit wall
}

function starttime(c) 
{	
	if (c==0)
	{
		var r = setTimeout(right(), 5);
	}
}
//combination of keydown for running later

document.addEventListener('keydown', function(event) {
    //first code is arrows, second is wasd
    var count =0;
    if (event.keyCode == 37 || event.keyCode == 65) {
        left();

    }
    else if (event.keyCode == 39|| event.keyCode == 86) {
     	right();    
    //starttime(count);
    //count++;
    }
    else if (event.keyCode == 38|| event.keyCode == 87) {
     	up(); }
    else if (event.keyCode == 40|| event.keyCode == 83) {
     	down();
     } 
}, true);

window.addEventListener('keyup',
    function(event){
        if (event.keyCode == 37 || event.keyCode == 65) {
        	alert(px)
			}
    	else if (event.keyCode == 39|| event.keyCode == 86) {
     	//	clearTimeout(r);
     		alert(px);    
    		}
    	else if (event.keyCode == 38|| event.keyCode == 87) {
     		alert(py);
     		}
    	else if (event.keyCode == 40|| event.keyCode == 83) {
     		alert(py); } 
    },
false);