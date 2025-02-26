let miTexto = document.getElementById('text1') //Comentario 1 línea//  /*Comentario varias líneas */  se crea objeto para enlazarlo con html
let miBoton = document.getElementById('boton1')

//Manejador de eventos//
//En javascript hay funciones anónimas//
miBoton.addEventListener("click", function(){
    miBoton.style.backgroundColor="green"
    miTexto.textContent ="Gracias!!"
})

// Función para contar las letras
function contarLetras(texto) {
    let conteo = {};

    // Recorremos cada carácter del texto
    for (let char of texto) {
        if (char.match(/[a-zA-Z]/)) { // Solo contamos letras (ignora números y otros caracteres)
            char = char.toLowerCase(); // Hacemos que todo sea en minúsculas para no contar como diferentes letras (ej: 'a' y 'A')
            conteo[char] = conteo[char] ? conteo[char] + 1 : 1; // Incrementamos el contador de la letra
        }
    }

    return conteo;
}

// Manejador de eventos
miBoton.addEventListener("click", function(event) {
    event.preventDefault(); // Evitamos que el formulario se envíe (y recargue la página)

    // Tomamos el texto del input
    let texto = miTexto.value;

    // Mostramos el total de letras
    let totalLetras = texto.length; // Contamos los caracteres totales (incluyendo espacios)
    document.getElementById('totalLetras').textContent = "Total de caracteres: " + totalLetras;

    // Contamos la cantidad de veces que aparece cada letra
    let conteo = contarLetras(texto);

    let conteoTexto = "Conteo de letras:\n";
    for (let letra in conteo) {
        conteoTexto += `${letra}: ${conteo[letra]}\n`;
    }

    // Mostramos el conteo de cada letra
    document.getElementById('conteoLetras').textContent = conteoTexto;
});