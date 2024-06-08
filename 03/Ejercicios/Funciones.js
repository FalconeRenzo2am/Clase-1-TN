     // Parte a: Función suma que recibe dos valores numéricos y retorna la suma
        
     return num1 + num2;
        

     // Parte b: Validación en la función suma para controlar si los parámetros no son números
    
         // Validar si alguno de los parámetros no es un número
         if (isNaN(num1) || isNaN(num2)) {
             alert("Uno de los parámetros no es un número.");
             return NaN;
         }
         return num1 + num2;
     

     // Parte c: Función que valida si un número es entero
     
         return Number.isInteger(num);
     

     // Parte d: Agregar validación de enteros a la función sumaConValidacion
     
         // Validar si alguno de los parámetros no es un número entero
         if (!validateInteger(num1) || !validateInteger(num2)) {
             alert("Uno de los parámetros no es un número entero.");
             return Math.round(num1) + Math.round(num2); // Convertir números a enteros y sumarlos
         }
         return num1 + num2;
     

     // Parte e: Convertir la validación en una función separada y llamarla dentro de la función sumaConValidacionDeEnteros
         return Number.isInteger(num);
     

     
         // Validar si alguno de los parámetros no es un número entero
         if (!validarEntero(num1) || !validarEntero(num2)) {
             alert("Uno de los parámetros no es un número entero.");
             return Math.round(num1) + Math.round(num2); // Convertir números a enteros y sumarlos
         }
         return num1 + num2;
     

     // Ejecutar la función suma y mostrar el resultado en la consola
     let resultado = suma(5, 3);
     console.log("Resultado de la suma:", resultado);

     // Ejecutar la función sumaConValidacion y mostrar el resultado en la consola
     let resultadoConValidacion = sumaConValidacion("5", 3); // "5" no es un número
     console.log("Resultado con validación:", resultadoConValidacion);

     // Ejecutar la función sumaConValidacionDeEnteros y mostrar el resultado en la consola
     let resultadoConValidacionDeEnteros = sumaConValidacionDeEnteros(5.5, 3.7); // 5.5 y 3.7 no son enteros
     console.log("Resultado con validación de enteros:", resultadoConValidacionDeEnteros);

     // Ejecutar la función sumaConValidacionDeEnteros2 y mostrar el resultado en la consola
     let resultadoConValidacionDeEnteros2 = sumaConValidacionDeEnteros2(5.5, 3.7); // 5.5 y 3.7 no son enteros
     console.log("Resultado con validación de enteros (versión 2):", resultadoConValidacionDeEnteros2);
