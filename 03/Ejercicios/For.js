            // Parte a: Crear un array con 5 palabras y mostrar alerta con cada palabra
            var palabras = ["uno", "dos", "tres", "cuatro", "cinco"];
            for (let i = 0; i < palabras.length; i++) {
                alert(palabras[i]);
            }
        

        
            // Parte b: Convertir la primera letra de cada palabra en mayúscula y mostrar alerta
            var palabras = ["uno", "dos", "tres", "cuatro", "cinco"];
            for (let i = 0; i < palabras.length; i++) {
                let palabraModificada = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
                alert(palabraModificada);
            }
        

        
            // Parte c: Crear una variable "sentence" y mostrar una única alerta con la cadena completa
            var palabras = ["uno", "dos", "tres", "cuatro", "cinco"];
            var sentence = "";
            for (let i = 0; i < palabras.length; i++) {
                sentence += palabras[i] + " ";
            }
            alert(sentence);
        

        
            // Parte d: Crear un array vacío y llenarlo con el número de repetición
            var numeros = [];
            for (let i = 0; i < 10; i++) {
                numeros.push(i);
            }
            console.log(numeros);
