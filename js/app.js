// ========================================================
// RETO 1: MODO OSCURO INTERACTIVO
// ========================================================

// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// getElementById busca y selecciona un único elemento HTML utilizando el valor exacto de su atributo id ('btn-toggle-tema'). Le pasamos este nombre específico para establecer una conexión directa desde JavaScript con nuestro botón de alternar tema, permitiéndonos manipularlo después.
const btnTema = document.getElementById('btn-toggle-tema');

// Seleccionamos el body directamente con document.body porque es el elemento raíz de la estructura visible de la página. Al querer aplicar o quitar el tema oscuro de forma global en toda la pantalla, necesitamos acceder a este contenedor principal.
const body = document.body;

// 2. MANEJO DE EVENTOS
// El evento 'click' es una acción que detecta cuando el usuario hace clic con el ratón sobre el botón. La función anónima (function() { ... }) actúa como un contenedor de instrucciones que se ejecutará únicamente en el momento exacto en que ocurra ese clic.
btnTema.addEventListener('click', function() {
    
    // Este método verifica si el elemento ya posee la clase 'tema-oscuro'. Si la tiene, la elimina (desactivando el modo oscuro); si no la tiene, se la añade (activándolo). Funciona como un interruptor automático que alterna ambos estados.
    body.classList.toggle('tema-oscuro');

    // Cambiar el texto del botón dependiendo del estado
    if (body.classList.contains('tema-oscuro')) {
        btnTema.textContent = "☀️ Modo Claro";
    } else {
        btnTema.textContent = "🌙 Modo Oscuro";
    }
});


// ========================================================
// RETO 2: SALUDO DINÁMICO
// ========================================================

// 1. SELECCION DEL CONTENEDOR
const textoSaludo = document.getElementById('saludo-tiempo-real');

// 2. LÓGICA DE TIEMPO
const fechaActual = new Date();
const horaActual = fechaActual.getHours();
let mensaje = "";

if (horaActual >= 6 && horaActual < 12) {
    mensaje = "¡Buenos días! Espero que tengas una excelente mañana.";
} else if (horaActual >= 12 && horaActual < 18) {
    mensaje = "¡Buenas tardes! Gracias por visitar mi perfil.";
} else {
    mensaje = "¡Buenas noches! Descubre mi trabajo.";
}

// 3. INYECCIÓN EN EL DOM
// textContent manipula de forma segura únicamente el texto plano que contiene un elemento, ignorando cualquier etiqueta HTML. En cambio, innerHTML procesa y puede renderizar código HTML dentro del elemento. Usamos textContent aquí porque solo necesitamos inyectar una cadena de texto (el mensaje de saludo según la hora), lo que además previene riesgos de seguridad como ataques XSS.
textoSaludo.textContent = mensaje;