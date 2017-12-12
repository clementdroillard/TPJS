var OnStart = false;
var interval;

function myFunction() {
	var body = document.getElementById('body');
	if(body.style.backgroundColor == 'blue')
	{
		body.style.backgroundColor = 'red';
	}
	else if(body.style.backgroundColor == 'green')
	{
		body.style.backgroundColor = 'blue';
	}
	else{
		body.style.backgroundColor = 'green';
	}
}

function OnOff(){
	var body = document.getElementById('body');
	OnStart = !OnStart;
	if(OnStart){
		interval = setInterval('myFunction()', 75);
	}
	else{
		clearInterval(interval);
		body.style.backgroundColor = 'white';
	}
}


