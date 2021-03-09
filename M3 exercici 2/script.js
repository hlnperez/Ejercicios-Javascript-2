
function miFuncion(){
var edat = prompt("Si us plau, introdueix l'edat:");

edat = Number(edat);  //El numero escollit arribarà al IF

if (edat <= 5) {
  window.alert ("L'edat correspon a: Preescolar");  //  block of code to be executed if condition1 is true
  } else if (edat >= 6 && edat <= 11) {
  window.alert ("L'edat correspon a: Primària");//  block of code to be executed if the condition1 is false and condition2 is true
  
  } else if (edat >= 12 && edat <= 15) {
    window.alert ("L'edat correspon a: Institut");

  } else if (edat >= 16 && edat <= 18) {
  window.alert ("L'edat correspon a: Batxillerat");

  } else if (edat > 18 ) {
  window.alert ("L'edat correspon a: Universitat")
  }
 //  block of code to be executed if the condition1 is false and condition2 is false



console.log(edat); //Missatge per a la consola
}