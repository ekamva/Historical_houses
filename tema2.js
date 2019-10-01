const house= document.querySelector("#house");
const velg= document.querySelector("#velg");
//const pic = document.querySelector("pic");
//const furniture = documnet.querySelector("#furniture");
//
const GHH = document.querySelector("#GHH");
const HH = document.querySelector("#HH");
//const W = document.querySelector("#W");
//const B = document.querySelector("#B");
//const G = document.querySelector("#G");
//const AWH = document.querySelector("#AWH");
//
//const GHH_pic = document.querySelector("#GHH_pic");


function chose(evt){
    const knapp = evt.target;
    const GHH_pic = url("http://momencehistoricalhouse.com/images/Historical%20Homes%20Page%20Photo%20web.jpg");
    const HH_pic = url("http://www.victoriana.com/VictorianHouses/images/thehammondhouse-9.JPG");
    if (knapp === "GHH"){
        document.body.house.backgroundImage = GHH_pic;
        //furniture.innerHTML = GHH_pic;
    }else if(knapp === "HH"){
        document.body.style.house.backgroundImage = HH_pic;
        //furniture.innerHTML = HH_pic;
    }
}
document.addEventListener("click", chose);


function move(evt){
    if (evt.clientX > innerWidth/3){
        house.style.left = evt.clientX + "px";
    }  
}

document.addEventListener("mousemove", move);