// Generar un número aleatorio entre 0 y 1
let randomNum = Math.random();
if (randomNum >= 0.5) {
    alert("Greater than 0.5");
} else {
    alert("Lower than 0.5");
}

// Crear una variable "Age" con un número entero entre 0 y 100
let age = Math.floor(Math.random() * 101);  // Genera un número entero entre 0 y 100
console.log("Edad:", age);  // Mostrar la edad en la consola para referencia

// Mostrar mensajes según la edad
if (age < 2) {
    alert("Bebe");
} else if (age >= 2 && age <= 12) {
    alert("Niño");
} else if (age >= 13 && age <= 19) {
    alert("Adolescente");
} else if (age >= 20 && age <= 30) {
    alert("Joven");
} else if (age >= 31 && age <= 60) {
    alert("Adulto");
} else if (age >= 61 && age <= 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}
