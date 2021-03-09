
function miFuncion(){

  var edat = prompt("Si us plau, introdueix la seva edat");
  edat = Number(edat); // associar la variable edat com a número
  var títol = prompt("Disposa de títol universitari?");
  var atur = prompt("Es troba en situació d'atur?");


  console.log(edat); //missatge a la consola

  if (edat >= 18 && títol === "si" && atur === "si") {
    document.getElementById("mostrarDatos").innerHTML = "Vosté té accés a la beca";   //  codi a executar si la condició 1 i 2 son veritat
    window.alert("Vosté té accés a la beca")

  } else if (edat >= 18 && títol === "no" && atur == "si") {
      document.getElementById("mostrarDatos").innerHTML = "Vosté té accés a la beca";   //  codi a executar si la condició1 es falsa
      window.alert("Vosté te accés a la beca")

  } else {
      document.getElementById("mostrarDatos").innerHTML = "Vosté no té accés a la beca";   //  codi a executar per a altres opcions
      window.alert("Vosté no te accés a la beca")
    }

}
