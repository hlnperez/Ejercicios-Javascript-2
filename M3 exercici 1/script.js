
function miFuncion(){
var portes = prompt("Si us plau, introdueix el número de portes:");

portes = Number(portes);  //El numero escollit arribarà al IF

if (portes == 3) {
  window.alert ("El cotxe es de tipus esportiu");  //  block of code to be executed if condition1 is true
  } else if (portes == 5) {
  window.alert ("El cotxe es de tipus familiar");//  block of code to be executed if the condition1 is false and condition2 is true
  } else {
  window.alert ("Segur que el cotxe té " + portes + " porta/es?"); 
  }
 //  block of code to be executed if the condition1 is false and condition2 is false



console.log(portes); //Missatge per a la consola
}