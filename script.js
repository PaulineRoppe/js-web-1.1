
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

//Afficher un carré noir dans le div #carre
//document.querySelector("#carre").innerHTML='<div style= "margin:30px; width:100px; height:100px; background-color:black;"></div>';
document.querySelector("#carre").style.backgroundColor="black";

document.querySelector("#buttonBlue").addEventListener("click",() => {
   document.querySelector("#carre").style.backgroundColor="blue";
});
document.querySelector("#buttonRed").addEventListener("click",() => {
   document.querySelector("#carre").style.backgroundColor="red";
});
document.querySelector("#buttonGreen").addEventListener("click",() => {
   document.querySelector("#carre").style.backgroundColor="green";
});


//Quand on clique sur un bouton
//Le carré doit prendre la couleur notée
