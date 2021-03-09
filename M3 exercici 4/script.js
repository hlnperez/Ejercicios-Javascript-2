
function miFuncion(){

  var mes = Number(prompt("Introdueix un mes de l'any (numero)")); //ens associa la variable mes com un número

  console.log(mes); //ens mostra el mes a la nostra consola

  switch(mes) {
    case 1:
      document.getElementById("mostrarDatos").innerHTML = "El mes de gener te 31 dies";// code block
      break;
    case 2:
      document.getElementById("mostrarDatos").innerHTML = "El mes de febrer te 28 dies";// code block
      break;
    case 3:
      document.getElementById("mostrarDatos").innerHTML = "El mes de març te 31 dies";// code block
      break;
    case 4:
      document.getElementById("mostrarDatos").innerHTML = "El mes de abril te 30 dies";// code block
      break;
    case 5:
      document.getElementById("mostrarDatos").innerHTML = "El mes de maig te 31 dies";// code block
      break;
    case 6:
      document.getElementById("mostrarDatos").innerHTML = "El mes de juny te 30 dies";// code block
      break;
    case 7:
      document.getElementById("mostrarDatos").innerHTML = "El mes de juliol te 31 dies";// code block
      break;
    case 8:
      document.getElementById("mostrarDatos").innerHTML = "El mes de agost te 31 dies";// code block
      break;
    case 9:
      document.getElementById("mostrarDatos").innerHTML = "El mes de septembre te 30 dies";// code block
      break;
    case 10:
      document.getElementById("mostrarDatos").innerHTML = "El mes de octubre te 31 dies";// code block
      break;
    case 11:
      document.getElementById("mostrarDatos").innerHTML = "El mes de novembre te 30 dies";// code block
      break;
    case 12:
      document.getElementById("mostrarDatos").innerHTML = "El mes de desembre te 31 dies";// code block
      break;
    default:
      document.getElementById("mostrarDatos").innerHTML = "No hem trobat el mes corresponent. Torna a repetir, si us plau.";// code block
  }


 


}
