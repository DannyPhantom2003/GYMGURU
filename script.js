document.addEventListener("DOMContentLoaded", () => {
    const inicio = document.getElementById('inicio');
    const login = document.getElementById('login');
    const registroCorreo = document.getElementById('registro-correo');
    const registro = document.getElementById('registro');
    const actividades = document.getElementById('actividades');
    const ejercicios = document.getElementById('ejercicios');
    const actividadTitulo = document.getElementById('actividad-titulo');
    const listaEjercicios = document.getElementById('lista-ejercicios');

    const ejerciciosPorActividad = {
        caminar: [
            "Caminata Rápida: Incrementar el ritmo de caminata durante 30 minutos.",
            "Caminata con Pendientes: Caminar en colinas o subir escaleras.",
            "Caminata con Intervalos: Alternar entre caminar rápido y caminar a un ritmo moderado.",
            "Caminata con Pesas: Usar pesas de mano ligeras mientras se camina.",
            "Caminata en Terreno Irregular: Caminar en senderos con diferentes tipos de terreno."
        ],
        correr: [
            "Series de Velocidad: Correr rápido durante 1 minuto y luego caminar durante 2 minutos.",
            "Carrera de Fondo: Correr a un ritmo constante durante 30-60 minutos.",
            "Entrenamiento de Cuestas: Correr en colinas o pendientes.",
            "Entrenamiento por Intervalos: Alternar entre correr rápido y correr a un ritmo moderado.",
            "Carrera con Pesas: Usar pesas de tobillo mientras se corre."
        ],
        gimnasia: [
            "Flexiones: Realizar series de flexiones.",
            "Abdominales: Realizar diferentes tipos de abdominales.",
            "Sentadillas: Hacer series de sentadillas.",
            "Planchas: Mantener la posición de plancha durante 1 minuto.",
            "Salto de Tijera: Realizar series de saltos de tijera."
        ],
        futbol: [
            "Conducción del Balón: Practicar el control del balón.",
            "Tiros a Puerta: Realizar series de tiros a puerta.",
            "Pases: Practicar pases con un compañero o contra una pared.",
            "Entrenamiento de Agilidad: Ejercicios de cambio de dirección y velocidad.",
            "Juego Simulado: Jugar partidos cortos."
        ],
        baloncesto: [
            "Dribling: Practicar dribling con ambas manos.",
            "Tiros Libres: Realizar series de tiros libres.",
            "Entrenamiento de Pases: Practicar pases con un compañero o contra una pared.",
            "Entrenamiento de Agilidad: Ejercicios de cambio de dirección y velocidad.",
            "Juego Simulado: Jugar partidos cortos."
        ]
    };

function mostrarRegistro() {
    inicio.style.display = 'none';
    login.style.display = 'none';
    registroCorreo.style.display = 'block';
}

function mostrarLogin() {
    inicio.style.display = 'none';
    login.style.display = 'block';
    registroCorreo.style.display = 'none';
    registro.style.display = 'none';
    actividades.style.display = 'none';
    ejercicios.style.display = 'none';
}

function mostrarRegistroUsuario() {
    registroCorreo.style.display = 'none';
    registro.style.display = 'block';
}

function mostrarActividades() {
    registro.style.display = 'none';
    actividades.style.display = 'block';
}

function mostrarEjercicios(actividad) {
    actividades.style.display = 'none';
    ejercicios.style.display = 'block';
    actividadTitulo.innerText = actividad.charAt(0).toUpperCase() + actividad.slice(1);
    listaEjercicios.innerHTML = ejerciciosPorActividad[actividad].map(ejercicio => `<p>${ejercicio}</p>`).join('');
}

function handleLogin() {
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    // Por ejemplo, verificar las credenciales y redirigir al usuario
    mostrarActividades();
}

setTimeout(() => {
    document.getElementById('carga').style.animation = 'zoomOut 1s forwards';
    setTimeout(() => {
        document.getElementById('carga').style.display = 'none';
        inicio.style.display = 'block';
    }, 1000);
}, 3000);

window.mostrarRegistro = mostrarRegistro;
window.mostrarLogin = mostrarLogin;
window.mostrarRegistroUsuario = mostrarRegistroUsuario;
window.mostrarActividades = mostrarActividades;
window.mostrarEjercicios = mostrarEjercicios;
window.handleLogin = handleLogin;

});
