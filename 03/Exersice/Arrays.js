
            // Array inicial
            let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            
            // a. Mostrar los meses 5 y 11
            console.log("Mes 5:", meses[4]);
            console.log("Mes 11:", meses[10]);
            
            // b. Ordenar el array alfabéticamente y mostrarlo por consola
            let mesesOrdenados = [...meses].sort();
            console.log("Meses ordenados alfabéticamente:", mesesOrdenados);
            
            // c. Agregar un elemento al principio y al final del array
            meses.unshift("Inicio");
            meses.push("Fin");
            console.log("Array después de agregar elementos:", meses);
            
            // d. Quitar un elemento del principio y del final del array
            meses.shift();
            meses.pop();
            console.log("Array después de quitar elementos:", meses);
            
            // e. Invertir el orden del array
            let mesesInvertidos = [...meses].reverse();
            console.log("Array invertido:", mesesInvertidos);
            
            // f. Unir todos los elementos del array en un único string separado por guiones
            let mesesUnidos = meses.join("-");
            console.log("Array unido en un string:", mesesUnidos);
            
            // g. Crear una copia del array que contenga desde Mayo hasta Noviembre
            let copiaMeses = meses.slice(4, 11);
            console.log("Copia del array de Mayo a Noviembre:", copiaMeses);
       
