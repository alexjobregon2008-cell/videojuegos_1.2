// Descripciones de cada género
const descripciones = {
    accion: "Acción: pone a prueba tus reflejos con combates y movimientos rápidos. Ejemplo: Doom.",
    aventura: "Aventura: exploras mundos y sigues una historia. Ejemplo: The Legend of Zelda.",
    estrategia: "Estrategia: planeas y administras recursos para ganar. Ejemplo: Civilization.",
    deportes: "Deportes: simulas partidos y competencias. Ejemplo: FIFA / EA FC."
};

const selector = document.getElementById("genero");
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

// Al presionar el botón mostramos la descripción del género elegido
boton.addEventListener("click", function () {
    const elegido = selector.value;

    if (elegido === "") {
        mensaje.textContent = "Primero selecciona un género de la lista.";
    } else {
        mensaje.textContent = descripciones[elegido];
    }
});
