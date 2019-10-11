


//Bildene blir erstattet med funksjonen et klikk på knappene.
//document.getElementById ("id til bildene i HTML-filen") sin source (src) blir byttet
//ut med det som står etter likhetstegnet. 

//Knapp GHH

   
GHH.onclick = function () {
   document.getElementById("f0").src = "./img/Graham Historic House.jpg";
   document.getElementById("f1").src = "./img/GHH-1.jpg";
   document.getElementById("f2").src = "./img/GHH-2.jpg";
   document.getElementById("f3").src = "./img/GHH-3.jpg";
   document.getElementById("imageTitle").innerText = "The Graham Historical House. Located at 117 N. Dixie Highway. Built in 1869.";
   document.getElementById("f4").innerHTML = "In 2013, the house was renamed the Graham Historical House in honor of the original builder and owner, William Graham. Also, in the late summer of 2013, fresh renovations to the exterior and the interior of the house began. First, the replacement of damaged wood siding, priming, and painting brought about a sharp, clean look to the historic exterior. Also, the scraping, sanding, priming, and painting of the picket fence accentuates the entrance to the Graham Historical House grounds. Interior renovations, with repairs to plaster walls and wainscoting, painting and wallpapering, and new flooring were completed in November, 2014. These restorations would not have been possible without the generous donations of the Van Drunen Family."
};


//Knapp HH

	
HH.onclick = function () {
	document.getElementById("f0").src = "./img/The Hammond House.jpg";
	document.getElementById("f1").src = "./img/HH.jpg";
	document.getElementById("f2").src = "./img/HH-2.jpg";
	document.getElementById("f3").src = "./img/HH-3.jpg";
	document.getElementById("imageTitle").innerText = "The Hammond House. Location 503 Peeples Street Atlanta, GA 30310.";
	document.getElementById("f4").innerHTML = "Hammonds House is the former residence of the late Dr. Otis Thrash Hammonds, an Atlanta physician and art patron. Shortly after his death in June 1985, the Fulton County Board of Commissioners purchased the house and a collection of over 250 artworks which he had amassed over the years. Dr. Hammonds took an interest in struggling young artists and art groups and supported a number of them over the years. He was a major supporter of Black artists in Atlanta, serving as Chairman of the Board of the Neighborhood Arts Center, a community arts center which since the 1970s has nurtured many Black artists and arts groups, including the African Dance Ensemble and the Southern Collective of African Writers. Dr. Hammonds was also a member of the Board of Trustees of the High Museum of Art and several committees of the museum, including the Young Collectors of the High Museum of Art.  Dr. Hammonds donated a major work of art by Romare Bearden to the museum. He also served as a member of the Board of the Sculptural Arts Museum, the Atlanta-Fulton Public Library Art Committee, the Atlanta Public Art Committee, the Atlanta Preservation Society, and the Nanette Bearden Contemporary Dance Company in New York City."
	
};

//Knapp W


W.onclick = function () {
	document.getElementById("f0").src = "./img/Westchester.jpg";
	document.getElementById("f1").src = "./img/W-1.jpg";
	document.getElementById("f2").src = "./img/W-2.jpg";
	document.getElementById("f3").src = "./img/W-3.jpg";
	document.getElementById("imageTitle").innerText = "The Westchester House. Located on the Bowery at Broome Street in Manhattan, New York City.";
	document.getElementById("f4").innerHTML = "The Westchester House, currently the Sohotel, is a hotel on the Bowery at Broome Street in Manhattan, New York City. It was later renamed the Occidental, the Pioneer, and now the Sohotel New York. The building that housed the Sohotel was added to the National Register of Historic Places on March 20, 1986. As of 2014, the Sohotel has been fully renovated."
	
};



// Knapp AWH
AWH.onclick = function () {
	document.getElementById("f0").src = "./img/Adelaide Wilcox House.jpg";
	document.getElementById("f1").src = "./img/AW-1.jpg";
	document.getElementById("f2").src = "./img/AW-2.jpg";
	document.getElementById("f3").src = "./img/AW-3.jpg";	
	document.getElementById("imageTitle").innerText = "The Adelaide Wilcox House. Was built in 1852-1853";
	document.getElementById("f4").innerHTML = "The house at 880 Hopmeadow Street in Simsbury, named for Miss Adelaide Wilcox, was built in 1852-1853 and has been owned by a number of prominent families associated with the Ensign Bickford Company. Originally having an Italianate design, the house was altered to the Neo-Classical Revival style around 1900. Also added was a third floor with a grand ballroom. Since 1969 the house has been the Vincent Funeral Home."
};
// Knapp B
B.onclick = function (){
	document.getElementById("f0").src = "./img/Broomhill-Manor.jpg";
	document.getElementById("f1").src = "./img/B-1.jpg";
	document.getElementById("f2").src = "./img/B-2.jpg";
	document.getElementById("f3").src = "./img/B-3.jpg";
	document.getElementById("imageTitle").innerText = "The Broomhill-Manor house. Located on Poughill, Bude, Cornwall, EX23 9HA.";
	document.getElementById("f4").innerHTML = "Elegant and spacious, this large, well-appointed and self-contained Apartment is in the West wing of the Manor House. On entering through an entrance on the ground floor into a large hallway, a staircase leads to the accommodation; there is a twin bedroom on the half landing and the main accommodation is on the first floor of the Manor House. The Apartment sleeps six and comprises a large open plan lounge/kitchen overlooking the main lawn and a separate dining room with sea view."
}
// Knapp G
G.onclick = function (){
	document.getElementById("f0").src = "./img/Galveston.jpg";
	document.getElementById("f1").src = "./img/G-1.jpg";
	document.getElementById("f2").src = "./img/G-2.jpg";
	document.getElementById("f3").src = "./img/G-3.jpg";
	document.getElementById("imageTitle").innerText = "The Galveston. Galvestone island.";
	document.getElementById("f4").innerHTML = "Doug Ender began building homes on Galveston Island 40 years ago.  Over the years he and his team have built many custom homes in both Michigan and Texas.  Doug missed the Island, and returned with his family to Galveston in 2009 to establish DE Custom Beach Homes. Since returning,  he and his team have fostered a reputation across the island for consistently delivering high-quality workmanship to clients from downtown  to the west end."
}
 
 // Slideshow castles
 // i står for index. Bilde er lik array []. 
 //interval er tiden som går før neste bilde kommer.
 //clearInterval nullstiller intervall når et intervall er over. 
 
let i = 0; 
let bilder = [];
let interval = 0;

bilder[0] = "url(./img/castle1.jpg)";
bilder[1] = "url(./img/castle2.jpg)";
bilder[2] = "url(./img/castle3.jpg)";
bilder[3] = "url(./img/castle4.jpg)";



function slideshow() {
	document.getElementById("slideshow").style.backgroundImage = bilder [i];
	
	if (i < bilder.length - 1) {
		i++;		
	}
	else { i = 0;
	}
	clearInterval(interval);
	interval=setInterval("slideshow()", 2000);	
	
} 


//---overlay triks-
function move(evt){
    if (evt.clientX > innerWidth/3.7){
        house.style.left = evt.clientX + "px";
    }  
}

document.addEventListener("mousemove", move);