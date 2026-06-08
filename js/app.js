/* ============================================================
   app.js — Hotel Coronado
   Lógica principal en JavaScript puro (sin React, sin frameworks)
   ============================================================ */


/* ----------------------------------------
   1. ESTADO GLOBAL
   Aquí guardamos qué lugar está seleccionado en el mapa
   ---------------------------------------- */
let lugarSeleccionado = null; // null = mostrar el hotel


/* ----------------------------------------
   2. MAPA INTERACTIVO
   Funciones para actualizar el mapa de Google Maps
   ---------------------------------------- */

// Devuelve las coordenadas del lugar activo o del hotel si no hay ninguno
function obtenerCoordenadas() {
  if (lugarSeleccionado) {
    return lugarSeleccionado.coords;
  }
  return window.hotelLocation; // definido en places.js
}

// Actualiza el iframe del mapa con las coordenadas del lugar seleccionado
function actualizarMapa() {
  const coords = obtenerCoordenadas();
  const iframe = document.getElementById('google-map');
  const etiqueta = document.getElementById('map-label');
  const boton = document.getElementById('btn-open-maps');

  // Cambiar la URL del mapa
  iframe.src = `https://maps.google.com/maps?q=${coords.lat},${coords.lng}&hl=es&z=15&output=embed`;

  // Cambiar el texto del botón y la etiqueta
  if (lugarSeleccionado) {
    etiqueta.textContent = lugarSeleccionado.name;
    boton.querySelector('span') && (boton.querySelector('span').textContent = 'Ver en Maps');
    // Buscamos el nodo de texto del botón para cambiarlo
    boton.childNodes.forEach(nodo => {
      if (nodo.nodeType === 3) { // nodo de texto
        nodo.textContent = ' Ver en Maps ';
      }
    });
  } else {
    etiqueta.textContent = 'Hotel Coronado';
    boton.childNodes.forEach(nodo => {
      if (nodo.nodeType === 3) {
        nodo.textContent = ' Ver Hotel en Maps ';
      }
    });
  }
}

// Cuando el usuario pulsa "Abrir en Maps", abre las coordenadas en una pestaña nueva
document.getElementById('btn-open-maps').addEventListener('click', function () {
  const coords = obtenerCoordenadas();
  const url = `https://www.google.com/maps?q=${coords.lat},${coords.lng}`;
  window.open(url, '_blank');
});


/* ----------------------------------------
   3. TARJETAS DE LUGARES E INTERÉS
   Crea las tarjetas con HTML y las inserta en la página
   ---------------------------------------- */

// Crea el HTML de una tarjeta de lugar turístico
function crearTarjetaLugar(lugar) {
  const tarjeta = document.createElement('div');
  tarjeta.className = 'card';
  tarjeta.setAttribute('data-id', lugar.id);

  tarjeta.innerHTML = `
    <div class="card-image-container">
      <div class="image-placeholder card-image">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
        <span class="image-placeholder-text">${lugar.imageAlt}</span>
      </div>
      <div class="card-image-overlay"></div>
    </div>
    <div class="card-content">
      <h3 class="card-title">${lugar.name}</h3>
      <div class="card-meta-list">
        <div class="card-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${lugar.distance}</span>
        </div>
      </div>
      <p class="card-desc">${lugar.description}</p>
    </div>
  `;

  // Al hacer clic en la tarjeta: seleccionar el lugar y mover el mapa
  tarjeta.addEventListener('click', function () {
    lugarSeleccionado = lugar;
    actualizarMapa();

    // Hacer scroll suave hasta el mapa
    document.getElementById('location').scrollIntoView({ behavior: 'smooth' });
  });

  return tarjeta;
}

// Crea el HTML de una tarjeta de restaurante
function crearTarjetaRestaurante(restaurante) {
  const tarjeta = document.createElement('div');
  tarjeta.className = 'card';
  tarjeta.setAttribute('data-id', restaurante.id);

  tarjeta.innerHTML = `
    <div class="card-image-container">
      <div class="image-placeholder card-image">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
        <span class="image-placeholder-text">${restaurante.imageAlt}</span>
      </div>
      <div class="card-image-overlay"></div>
    </div>
    <div class="card-content">
      <div class="card-header-flex">
        <h3 class="card-title">${restaurante.name}</h3>
        <span class="card-badge">Top</span>
      </div>
      <div class="card-meta-list">
        <div class="card-meta-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/>
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
          </svg>
          <span>${restaurante.cuisine}</span>
        </div>
        <div class="card-meta-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${restaurante.distance}</span>
        </div>
      </div>
      <p class="card-desc">${restaurante.description}</p>
    </div>
  `;

  // Al hacer clic: seleccionar el restaurante y mover el mapa
  tarjeta.addEventListener('click', function () {
    lugarSeleccionado = restaurante;
    actualizarMapa();

    document.getElementById('location').scrollIntoView({ behavior: 'smooth' });
  });

  return tarjeta;
}

// Inserta todas las tarjetas de lugares turísticos en la página
function renderizarLugares() {
  const contenedor = document.getElementById('tourist-spots-grid');

  // Solo mostramos los que tienen nombre real (ignora los placeholders vacíos)
  const lugaresReales = window.touristSpots.filter(function (lugar) {
    return !lugar.id.startsWith('futuro');
  });

  lugaresReales.forEach(function (lugar) {
    const tarjeta = crearTarjetaLugar(lugar);
    contenedor.appendChild(tarjeta);
  });
}

// Inserta todas las tarjetas de restaurantes en la página
function renderizarRestaurantes() {
  const contenedor = document.getElementById('restaurants-grid');

  const restaurantesReales = window.recommendedRestaurants.filter(function (r) {
    return !r.id.startsWith('futuro');
  });

  restaurantesReales.forEach(function (restaurante) {
    const tarjeta = crearTarjetaRestaurante(restaurante);
    contenedor.appendChild(tarjeta);
  });
}


/* ----------------------------------------
   4. NAVBAR
   Cambia el estilo al hacer scroll y controla el menú móvil
   ---------------------------------------- */

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
let menuAbierto = false;

// Cambia el fondo del navbar al hacer scroll
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.remove('header-transparent');
    navbar.classList.add('header-scrolled');
  } else {
    navbar.classList.remove('header-scrolled');
    navbar.classList.add('header-transparent');
  }
});

// Abre y cierra el menú móvil
menuToggle.addEventListener('click', function () {
  menuAbierto = !menuAbierto;
  mobileNav.style.display = menuAbierto ? 'flex' : 'none';

  // Cambiar el icono de menú (☰ → ✕)
  menuToggle.innerHTML = menuAbierto
    ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
         <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
       </svg>`
    : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
         <line x1="4" x2="20" y1="12" y2="12"/>
         <line x1="4" x2="20" y1="6" y2="6"/>
         <line x1="4" x2="20" y1="18" y2="18"/>
       </svg>`;
});

// Al hacer clic en un enlace del menú móvil, cerrarlo
mobileNav.querySelectorAll('.mobile-nav-link').forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    menuAbierto = false;
    mobileNav.style.display = 'none';
  });
});


/* ----------------------------------------
   5. BOTONES DE SCROLL SUAVE
   ---------------------------------------- */

// Botón "Descubrir la ubicación" en el hero
document.getElementById('btn-descubrir').addEventListener('click', function () {
  document.getElementById('location').scrollIntoView({ behavior: 'smooth' });
});

// Logo → volver arriba
document.getElementById('logo-link').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ----------------------------------------
   6. ANIMACIONES AL HACER SCROLL
   Las secciones aparecen suavemente al entrar en pantalla
   ---------------------------------------- */

const observer = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('reveal-active');
      observer.unobserve(entrada.target); // Solo anima una vez
    }
  });
}, {
  threshold: 0.05,
  rootMargin: '0px 0px -50px 0px'
});

// Observar todas las secciones con la clase reveal-item
document.querySelectorAll('.reveal-item').forEach(function (seccion) {
  observer.observe(seccion);
});


/* ----------------------------------------
   7. COPYRIGHT DINÁMICO
   Pone el año actual automáticamente en el footer
   ---------------------------------------- */
document.getElementById('copyright-year').textContent =
  '© ' + new Date().getFullYear() + ' Hotel Coronado Barcelona. Todos los derechos reservados.';


/* ----------------------------------------
   8. INICIALIZACIÓN
   Ejecutamos todo al cargar la página
   ---------------------------------------- */
renderizarLugares();
renderizarRestaurantes();
