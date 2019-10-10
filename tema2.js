


//Bildene blir erstattet med funksjonen et klikk på knappene.
//document.getElementById ("id til bildene i HTML-filen") sin source (src) blir byttet
//ut med det som står etter likhetstegnet. 

//Knapp GHH

   
GHH.onclick = function () {
   document.getElementById("f0").src = "./img/Graham Historic House.jpg";
   document.getElementById("f1").src = "./img/GHH-1.jpg";
   document.getElementById("f2").src = "./img/GHH-2.jpg";
   document.getElementById("f3").src = "./img/GHH-3.jpg";
   
   
};


//Knapp HH

	
HH.onclick = function () {
	document.getElementById("f0").src = "./img/The Hammond House.jpg";
	document.getElementById("f1").src = "./img/HH.jpg";
	document.getElementById("f2").src = "./img/HH-2.jpg";
	document.getElementById("f3").src = "./img/HH-3.jpg";
	
	
};

//Knapp W


W.onclick = function () {
	document.getElementById("f0").src = "./img/Westchester.jpg";
	document.getElementById("f1").src = "./img/W-1.jpg";
	document.getElementById("f2").src = "./img/W-2.jpg";
	document.getElementById("f3").src = "./img/W-3.jpg";
	
	
};



// Knapp AWH
AWH.onclick = function () {
	document.getElementById("f0").src = "./img/Adelaide Wilcox House.jpg";
	document.getElementById("f1").src = "./img/AW-1.jpg";
	document.getElementById("f2").src = "./img/AW-2.jpg";
	document.getElementById("f3").src = "./img/AW-3.jpg";	
};
// Knapp B
B.onclick = function (){
	document.getElementById("f0").src = "./img/Broomhill-Manor.jpg";
	document.getElementById("f1").src = "./img/B-1.jpg";
	document.getElementById("f2").src = "./img/B-2.jpg";
	document.getElementById("f3").src = "./img/B-3.jpg";
}
// Knapp G
G.onclick = function (){
	document.getElementById("f0").src = "./img/Galveston.jpg";
	document.getElementById("f1").src = "./img/G-1.jpg";
	document.getElementById("f2").src = "./img/G-2.jpg";
	document.getElementById("f3").src = "./img/G-3.jpg";
	
}
 
//---overlay triks-
function move(evt){
    if (evt.clientX > innerWidth/3.7){
        house.style.left = evt.clientX + "px";
    }  
}

document.addEventListener("mousemove", move);