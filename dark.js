// Este código debe estar presente en todas las páginas que deben soportar modo oscuro
const toggleButton = document.getElementById('toggle-dark-mode');
const bodyElement = document.body;
const darkModeClass = 'dark-mode';
let isDarkMode;

// Función para alternar el modo oscuro
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  bodyElement.classList.toggle(darkModeClass);
  localStorage.setItem('darkMode', isDarkMode);
}

// Comprobación inicial del modo oscuro y aplicación si está activo
const prefersDarkMode = matchMedia('(prefers-color-scheme: dark)').matches;
isDarkMode = prefersDarkMode;

if (localStorage.getItem('darkMode') === 'true') {
  isDarkMode = true;
} else if (localStorage.getItem('darkMode') === 'false') {
  isDarkMode = false;
}

if (isDarkMode) {
  bodyElement.classList.add(darkModeClass);
}

// Añadir el evento al botón de alternar modo oscuro
if (toggleButton) {
  toggleButton.addEventListener('click', toggleDarkMode);
}
