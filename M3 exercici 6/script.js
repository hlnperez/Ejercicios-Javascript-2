
function miFuncion() {

  var mes = Number(prompt("Introdeix el mes de naixement"));       //Es demana per introduir el mes en número
  var dia = Number(prompt("Introdueix el día de naixement"));      //Es demana per introduir el dia  de naixement en número

  switch (mes) {
      case 1: //Gener
          if (dia >= 1 && dia <= 20) {                        //intervals entre els dies de naixement
            window.alert("El teu signe es Capricorn");        //Mostra per pantalla el signe zodiacal
            } else if (dia >= 21 && dia <= 31) { 
            window.alert("El teu signe es Aquari");           //Mostra per pantalla el signe zodiacal
            } else {
            window.alert("Introdueix un dia correcte, si us plau."); //Missatge per a número invalid als mesos de l'any
            }
            break;

      case 2: //Febrer, ara repetim lo anterior les vegades corresponents a tots els messos del any
          if (dia >= 1 && dia <= 19) {                          
                window.alert("El teu signe es Aquari"); 
            } else if (dia >= 20 && dia <= 29) { 
                window.alert("El teu signe es Piscis"); 
            } else {
                window.alert("Introdueix un dia correcte, si us plau."); 
            }
            break;

      case 3: //Març
          if (dia >= 1 && dia <= 20) { 
                window.alert("El teu signe es Piscis"); 
            } else if (dia >= 21 && dia <= 31) { 
                window.alert("El teu signe es Aries"); 
            } else {
                window.alert("Introdueix un dia correcte, si us plau."); 
            }
            break;

      case 4: //Abril
          if (dia >= 1 && dia <= 20) { 
                window.alert("El teu signe es Aries"); 
            } else if (dia >= 21 && dia <= 30) {
                window.alert("El teu signe es Tauro");
            } else {
                window.alert("Introdueix un dia correcte, si us plau."); 
            }
            break;

      case 5: //Maig
          if (dia >= 1 && dia <= 20) { 
                window.alert("El teu signe es Tauro"); 
            } else if (dia >= 21 && dia <= 31) { 
                window.alert("El teu signe es Geminis"); 
            } else {
                window.alert("Introdueix un dia correcte, si us plau."); 
            }
            break;

        case 6: //junio
            if (dia >= 1 && dia <= 21) { 
                window.alert("El teu signe es Geminis"); 
            } else if (dia >= 22 && dia <= 30) { 
                window.alert("El teu signe es Cancer"); 
            } else {
                window.alert("Introdueix un dia correcte, si us plau."); 
            }
            break;

        case 7: //julio
            if (dia >= 1 && dia <= 22) { 
                window.alert("El teu signe es Cancer"); 
            } else if (dia >= 23 && dia <= 31) { 
                window.alert("El teu signe es Leo"); 
            } else {
                window.alert("Introdueix un dia correcte, si us plau."); 
            }
            break;

        case 8: //agosto
            if (dia >= 1 && dia <= 23) { 
                window.alert("El teu signe es Leo"); 
            } else if (dia >= 24 && dia <= 31) { 
                window.alert("El teu signe es Virgo"); 
            } else {
                window.alert("Introdueix un dia correcte, si us plau."); 
            }
            break;

        case 9: //septiembre
            if (dia >= 1 && dia <= 22) { 
                window.alert("El teu signe es Virgo"); 
            } else if (dia >= 23 && dia <= 30) { 
                window.alert("El teu signe es Libra"); 
            } else {
                window.alert("Introdueix un dia correcte, si us plau."); 
            }
            break;

        case 10: //octubre
            if (dia >= 1 && dia <= 22) { 
                window.alert("El teu signe es Libra"); 
            } else if (dia >= 23 && dia <= 31) { 
                window.alert("El teu signe es Escorpio"); 
            } else {
                window.alert("Introdueix un dia correcte, si us plau."); 
            }
            break;

        case 11: //noviembre
            if (dia >= 1 && dia <= 22) { 
                window.alert("El teu signe es Escorpio"); 
            } else if (dia >= 23 && dia <= 30) { 
                window.alert("El teu signe es Sagitari"); 
            } else {
                window.alert("Introdueix un dia correcte, si us plau."); 
            }
            break;

        case 12: //diciembre
            if (dia >= 1 && dia <= 21) { 
                window.alert("El teu signe es Sagitari"); 
            } else if (dia >= 22 && dia <= 31) { 
                window.alert("El teu signe es Capricorn"); 
            } else {
                window.alert("Introdueix un dia correcte, si us plau."); 
            }
            break;

        default: //Mostra per pantalla qualsevol de les opcions que no siguin les anteriors
            window.alert("Si us plau, introdueix de nou les dades");
    }


}
