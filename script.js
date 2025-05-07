let cartaMostrada = false;

function mostrarCarta() {
  const mensaje = document.getElementById('mensaje');
  const boton = document.querySelector('button');

  if (!cartaMostrada) {
    mensaje.textContent = "Mi reina, se que estamos pasando por momentos preocupantes y difíciles, pero en ningún momento se te vaya a olvidar que te amo con todo mi corazón ❤️.";
    boton.textContent = "Cerrar Carta";
    cartaMostrada = true;
  } else {
    // Redirige a index.html
    window.location.href = "index.html";
  }
}