
function miFuncion(){

    var numero1 = Number (prompt("Introdueix el primer número, si us plau"));
    var numero2 = Number (prompt("Introdueix el segon número, si us plau"));
    var operador = (prompt("Introdueix el teu operador"));

    a = numero1+numero2; //associem la caixa A com la suma de dos variables numèriques
    b = numero1-numero2; //associem la caixa B com la resta de dos variables numèriques
    c = numero1*numero2; //associem la caixa C com la multiplicació de dos variables numèriques
    d = numero1/numero2; //associem la caixa D com la divisió de dos variables numèriques


    switch (operador) {
    case "+":
    document.getElementById("mostrarDatos").innerHTML = "El resultat és: " + " " + a;
    window.alert("El resultat és: " + " " + a) //Ens mostra el resultat en pantalla
    break;
    case "-":
    document.getElementById("mostrarDatos").innerHTML = "El resultat és: " + " " + b;
    window.alert("El resultat és: " + " " + b) //Ens mostra el resultat en pantalla
    break;
    case "*":
    document.getElementById("mostrarDatos").innerHTML = "El resultat és: " + " " +c;
    window.alert("El resultat és: " + " " + c) //Ens mostra el resultat en pantalla
    break;
    case "/":
    document.getElementById("mostrarDatos").innerHTML = "El resultat és:" + " " + d;
    window.alert("El resultat és: " + " " + d) //Ens mostra el resultat en pantalla
    break;
    default: 
    window.alert("El resultat és incorrecte") //Ens mostra el resultat en pantalla
    }
    

 


}
