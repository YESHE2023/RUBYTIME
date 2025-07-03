const body = document.body;
const explosionSound = document.getElementById('explosion-sound');

// Función para crear y animar un "te amo"
function createTeAmo(x, y) {
    const teAmoElement = document.createElement('span');
    teAmoElement.classList.add('te-amo');
    teAmoElement.textContent = 'Te amo';

    // Posición inicial del 'te amo' (donde se hizo click)
    teAmoElement.style.left = `${x}px`;
    teAmoElement.style.top = `${y}px`;

    // Añadirlo al cuerpo
    body.appendChild(teAmoElement);

    // Activar la animación de caída
    teAmoElement.style.animation = `fallAndFade 5s forwards`; // 5 segundos de duración

    // Eliminar el elemento después de que termine la animación
    teAmoElement.addEventListener('animationend', () => {
        teAmoElement.remove();
    });
}

// Función para crear la "explosión" de un "te amo"
function explodeTeAmo(x, y) {
    const explosionElement = document.createElement('span');
    explosionElement.classList.add('te-amo', 'explode'); // Reutilizamos la clase te-amo para el estilo básico
    explosionElement.textContent = '❤️‍🔥'; // Puedes cambiar esto por '✨' o '💥'
    explosionElement.style.left = `${x}px`;
    explosionElement.style.top = `${y}px`;
    explosionElement.style.fontSize = '8vw'; // Tamaño grande para la explosión
    explosionElement.style.position = 'absolute'; // Asegurar posicionamiento absoluto
    explosionElement.style.zIndex = '20'; // Por encima de los otros elementos

    body.appendChild(explosionElement);

    // Reproducir sonido de explosión
    if (explosionSound) {
        explosionSound.currentTime = 0; // Reinicia el sonido si ya se está reproduciendo
        explosionSound.play().catch(e => console.error("Error al reproducir el sonido:", e)); // Manejar posibles errores
    }

    // Eliminar el elemento de explosión después de su animación
    explosionElement.addEventListener('animationend', () => {
        explosionElement.remove();
    });
}

// Evento para detectar toques/clics en la pantalla
body.addEventListener('click', (e) => {
    // Coordenadas del clic/toque
    const x = e.clientX;
    const y = e.clientY;

    // Crear la explosión en el punto del clic
    explodeTeAmo(x, y);

    // Crear varios "te amo"s alrededor del punto del clic para la "lluvia"
    for (let i = 0; i < 10; i++) { // Puedes ajustar la cantidad de 'te amo's que aparecen
        const randomX = x + (Math.random() - 0.5) * 50; // Un poco dispersos
        const randomY = y + (Math.random() - 0.5) * 50;
        setTimeout(() => createTeAmo(randomX, randomY), i * 50); // Aparecen con un pequeño retardo
    }
});

// Función para generar "te amo"s aleatorios sin interacción (lluvia continua de fondo)
function generateRandomTeAmo() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight; // Empezarán desde arriba de la pantalla

    const teAmoElement = document.createElement('span');
    teAmoElement.classList.add('te-amo');
    teAmoElement.textContent = 'Te amo';
    teAmoElement.style.left = `${x}px`;
    teAmoElement.style.top = `-50px`; // Empieza desde arriba de la pantalla
    teAmoElement.style.animation = `fallAndFade ${5 + Math.random() * 3}s forwards`; // Duración aleatoria

    body.appendChild(teAmoElement);

    teAmoElement.addEventListener('animationend', () => {
        teAmoElement.remove();
    });
}

// Generar 'te amo's de fondo cada cierto tiempo (lluvia pasiva)
setInterval(generateRandomTeAmo, 500); // Cada 1 segundo, aparece un 'te amo' de forma aleatoria
