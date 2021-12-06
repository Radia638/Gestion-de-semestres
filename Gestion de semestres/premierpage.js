var cmptimg=1;
var totalimage=8;


function slider(x){
	var image=decument.getElementById('img');
	cmptimg=cmptimg+x;
	image.src="estsb"+cmptimg+".jpg";
	if(cmptimg>=totalimage){
		cmptimg=1;
	}
	if (cmptimg<1) {cmptimg=totalimage;}
}
