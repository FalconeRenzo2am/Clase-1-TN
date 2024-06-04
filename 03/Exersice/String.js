
            // Parte a: Convertir el texto en mayúsculas
            let stringA = "javascript es genial";
            let stringAMayuscula = stringA.toUpperCase();
            console.log("Texto en mayúsculas:", stringAMayuscula);

            // Parte b: Obtener los primeros 5 caracteres
            let stringB = "programacion";
            let primerosCincoCaracteres = stringB.substring(0, 5);
            console.log("Primeros 5 caracteres:", primerosCincoCaracteres);

            // Parte c: Obtener los últimos 3 caracteres
            let stringC = "desarrollador";
            let ultimosTresCaracteres = stringC.substring(stringC.length - 3);
            console.log("Últimos 3 caracteres:", ultimosTresCaracteres);

            // Parte d: Primera letra en mayúscula y las demás en minúscula
            let stringD = "tecnologia";
            let primeraMayusculaRestoMinuscula = stringD.substring(0, 1).toUpperCase() + stringD.substring(1).toLowerCase();
            console.log("Primera letra mayúscula, resto minúscula:", primeraMayusculaRestoMinuscula);

            // Parte e: Encontrar la posición del primer espacio en blanco
            let stringE = "desarrollo web";
            let posicionPrimerEspacio = stringE.indexOf(" ");
            console.log("Posición del primer espacio en blanco:", posicionPrimerEspacio);

            // Parte f: Formatear dos palabras largas
            let stringF = "javascript desarrollo";
            let espacio = stringF.indexOf(" ");
            let primeraPalabra = stringF.substring(0, espacio);
            let segundaPalabra = stringF.substring(espacio + 1);
            let formateado = primeraPalabra.substring(0, 1).toUpperCase() + primeraPalabra.substring(1).toLowerCase() + " " + segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1).toLowerCase();
            console.log("Formato de las dos palabras:", formateado);

            // Mostrar los resultados en el HTML
            document.getElementById("stringAMayuscula").innerText = "Texto en mayúsculas: " + stringAMayuscula;
            document.getElementById("primerosCincoCaracteres").innerText = "Primeros 5 caracteres: " + primerosCincoCaracteres;
            document.getElementById("ultimosTresCaracteres").innerText = "Últimos 3 caracteres: " + ultimosTresCaracteres;
            document.getElementById("primeraMayusculaRestoMinuscula").innerText = "Primera letra mayúscula, resto minúscula: " + primeraMayusculaRestoMinuscula;
            document.getElementById("posicionPrimerEspacio").innerText = "Posición del primer espacio en blanco: " + posicionPrimerEspacio;
            document.getElementById("formateado").innerText = "Formato de las dos palabras: " + formateado;
        
