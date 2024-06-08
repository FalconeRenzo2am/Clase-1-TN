 // Parte a: Sumar dos números y guardar el resultado en una 3er variable
 let numero1 = 5;
 let numero2 = 10;
 let sumaNumeros = numero1 + numero2;
 console.log("La suma de los números es:", sumaNumeros);

 // Parte b: Concatenar dos strings y guardar el resultado en una 3er variable
 let string1 = "Hola";
 let string2 = "Mundo";
 let concatenacionStrings = string1 + " " + string2;
 console.log("La concatenación de los strings es:", concatenacionStrings);

 // Parte c: Sumar el largo de dos strings y guardar el resultado en una 3er variable
 let longitudStrings = string1.length + string2.length;
 console.log("La suma de los largos de los strings es:", longitudStrings);

 // Mostrar los resultados en el HTML
 document.getElementById("sumaNumeros").innerText = "La suma de los números es: " + sumaNumeros;
 document.getElementById("concatenacionStrings").innerText = "La concatenación de los strings es: " + concatenacionStrings;
 document.getElementById("longitudStrings").innerText = "La suma de los largos de los strings es: " + longitudStrings;
