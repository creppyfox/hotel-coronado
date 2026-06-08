window.hotelLocation = { lat: 41.3739, lng: 2.1678 }; // Carrer Nou de la Rambla, 134

window.touristSpots = [
  {
    id: "rambla",
    name: "La Rambla",
    distance: "A 5 min caminando",
    description: "El paseo más emblemático de la ciudad, lleno de vida, arte callejero, kioscos y una atmósfera inconfundible.",
    imageAlt: "La Rambla iluminada, ambiente editorial",
    imagePath: "images/rambla.jpg",
    coords: { lat: 41.3810, lng: 2.1730 } // Coordenadas geográficas reales
  },
  {
    id: "boqueria",
    name: "Mercado de la Boquería",
    distance: "A 10 min caminando",
    description: "Un templo gastronómico donde los colores y aromas de los productos locales crean una experiencia sensorial única.",
    imageAlt: "Puestos coloridos en el Mercado de la Boquería",
    imagePath: "images/boqueria.jpg",
    coords: { lat: 41.3817, lng: 2.1716 }
  },
  {
    id: "gotico",
    name: "Barrio Gótico",
    distance: "A 12 min caminando",
    description: "Calles estrechas y laberínticas, plazas escondidas y arquitectura medieval que cuenta la historia de Barcelona.",
    imageAlt: "Calles empedradas del Barrio Gótico al atardecer",
    imagePath: "images/gotico.jpg",
    coords: { lat: 41.3826, lng: 2.1769 }
  },
  {
    id: "montjuic",
    name: "Montjuïc",
    distance: "A 8 min caminando",
    description: "Un pulmón verde con jardines majestuosos, instalaciones olímpicas y vistas panorámicas de toda la ciudad y el mar.",
    imageAlt: "Jardines elegantes en la montaña de Montjuïc",
    imagePath: "images/montjuic.jpg",
    coords: { lat: 41.3630, lng: 2.1580 }
  },
  {
    id: "port-vell",
    name: "Port Vell",
    distance: "A 15 min caminando",
    description: "El histórico puerto de la ciudad, ahora un elegante paseo marítimo ideal para caminar al atardecer junto a los yates.",
    imageAlt: "Yates atracados en el Port Vell con luz dorada",
    imagePath: "images/port_vell.jpg",
    coords: { lat: 41.3787, lng: 2.1852 }
  },
  {
    id: "catalunya",
    name: "Plaça de Catalunya",
    distance: "A 15 min caminando",
    description: "El centro neurálgico que une el casco antiguo con el Eixample, rodeada de monumentos y tiendas de lujo.",
    imageAlt: "Vista amplia de la Plaça de Catalunya",
    imagePath: "images/catalunya.jpg",
    coords: { lat: 41.3870, lng: 2.1700 }
  },
  {
    id: "colon",
    name: "Mirador de Colón",
    distance: "A 10 min caminando",
    description: "El icónico monumento al final de La Rambla, ofreciendo una perspectiva única donde la ciudad se encuentra con el mar.",
    imageAlt: "Monumento a Colón elevándose sobre el puerto",
    imagePath: "images/colon.jpg",
    coords: { lat: 41.3758, lng: 2.1778 }
  },
  {
    id: "maritim",
    name: "Museu Marítim",
    distance: "A 12 min caminando",
    description: "Ubicado en las impresionantes Reales Atarazanas, es una joya de la arquitectura gótica civil enfocada en la historia naval.",
    imageAlt: "Arcos góticos de las Reales Atarazanas",
    imagePath: "images/maritim.jpg",
    coords: { lat: 41.3751, lng: 2.1764 }
  },
  
  // --- ESPACIOS PARA FUTURAS ATRACCIONES (6) ---
  // IMPORTANTE: Para habilitar una nueva atracción, modifique "lat" y "lng" a las coordenadas reales, y complete los demás datos.
  {
    id: "futuro-turistico-1",
    name: "Próximamente: Nueva Atracción 1",
    distance: "Distancia por definir",
    description: "Descripción del nuevo lugar de interés.",
    imageAlt: "Imagen de la nueva atracción",
    imagePath: "",
    coords: { lat: 41.3800, lng: 2.1700 } // MODIFICAR COORDENADAS GEOGRÁFICAS AQUÍ
  },
  {
    id: "futuro-turistico-2",
    name: "Próximamente: Nueva Atracción 2",
    distance: "Distancia por definir",
    description: "Descripción del nuevo lugar de interés.",
    imageAlt: "Imagen de la nueva atracción",
    imagePath: "",
    coords: { lat: 41.3800, lng: 2.1700 } // MODIFICAR COORDENADAS GEOGRÁFICAS AQUÍ
  },
  {
    id: "futuro-turistico-3",
    name: "Próximamente: Nueva Atracción 3",
    distance: "Distancia por definir",
    description: "Descripción del nuevo lugar de interés.",
    imageAlt: "Imagen de la nueva atracción",
    imagePath: "",
    coords: { lat: 41.3800, lng: 2.1700 } // MODIFICAR COORDENADAS GEOGRÁFICAS AQUÍ
  },
  {
    id: "futuro-turistico-4",
    name: "Próximamente: Nueva Atracción 4",
    distance: "Distancia por definir",
    description: "Descripción del nuevo lugar de interés.",
    imageAlt: "Imagen de la nueva atracción",
    imagePath: "",
    coords: { lat: 41.3800, lng: 2.1700 } // MODIFICAR COORDENADAS GEOGRÁFICAS AQUÍ
  },
  {
    id: "futuro-turistico-5",
    name: "Próximamente: Nueva Atracción 5",
    distance: "Distancia por definir",
    description: "Descripción del nuevo lugar de interés.",
    imageAlt: "Imagen de la nueva atracción",
    imagePath: "",
    coords: { lat: 41.3800, lng: 2.1700 } // MODIFICAR COORDENADAS GEOGRÁFICAS AQUÍ
  },
  {
    id: "futuro-turistico-6",
    name: "Próximamente: Nueva Atracción 6",
    distance: "Distancia por definir",
    description: "Descripción del nuevo lugar de interés.",
    imageAlt: "Imagen de la nueva atracción",
    imagePath: "",
    coords: { lat: 41.3800, lng: 2.1700 } // MODIFICAR COORDENADAS GEOGRÁFICAS AQUÍ
  }
];

window.recommendedRestaurants = [
  {
    id: "tickets",
    name: "Tickets",
    cuisine: "Tapas Creativas / Autor",
    distance: "A 4 min caminando",
    description: "Alta gastronomía en formato de tapas. Una experiencia teatral e innovadora creada por Albert Adrià.",
    imageAlt: "Plato creativo en restaurante Tickets",
    imagePath: "images/tickets.jpg",
    coords: { lat: 41.3756, lng: 2.1481 }
  },
  {
    id: "bodega-1900",
    name: "Bodega 1900",
    cuisine: "Vermutería / Tradicional",
    distance: "A 5 min caminando",
    description: "Un homenaje a la tradición del vermut con producto de primera calidad, conservas y embutidos premium.",
    imageAlt: "Mesa elegante con vermut y tapas tradicionales",
    imagePath: "images/bodega_1900.jpg",
    coords: { lat: 41.3761, lng: 2.1539 }
  },
  {
    id: "martinez",
    name: "Terraza Martínez",
    cuisine: "Arroces / Mediterránea",
    distance: "A 15 min caminando (Montjuïc)",
    description: "Arroces excepcionales, marisco fresco y carnes a la brasa con vistas espectaculares al puerto de Barcelona.",
    imageAlt: "Paella premium con vistas al puerto de Barcelona",
    imagePath: "images/martinez.jpg",
    coords: { lat: 41.3685, lng: 2.1706 }
  },
  {
    id: "xemei",
    name: "Xemei",
    cuisine: "Italiana Veneciana",
    distance: "A 10 min caminando",
    description: "Considerado uno de los mejores restaurantes italianos de la ciudad, especializado en auténtica cocina veneciana.",
    imageAlt: "Plato de pasta elegante en ambiente íntimo",
    imagePath: "images/xemei.jpg",
    coords: { lat: 41.3705, lng: 2.1601 }
  },
  {
    id: "quimet",
    name: "Quimet & Quimet",
    cuisine: "Montaditos / Vinos",
    distance: "A 8 min caminando",
    description: "Un pequeño pero legendario local especializado en montaditos espectaculares, conservas selectas y una extensa bodega.",
    imageAlt: "Barra tradicional con montaditos y botellas de vino",
    imagePath: "images/quimet.jpg",
    coords: { lat: 41.3742, lng: 2.1654 }
  },
  {
    id: "enigma",
    name: "Enigma",
    cuisine: "Alta Cocina / Estrella Michelin",
    distance: "A 15 min en coche",
    description: "El proyecto más ambicioso de Albert Adrià. Una experiencia culinaria inmersiva, misteriosa y vanguardista.",
    imageAlt: "Diseño interior futurista y elegante de Enigma",
    imagePath: "images/enigma.jpg",
    coords: { lat: 41.3770, lng: 2.1541 }
  },

  // --- ESPACIOS PARA FUTUROS RESTAURANTES (6) ---
  // IMPORTANTE: Para habilitar un nuevo restaurante, modifique "lat" y "lng" a las coordenadas reales, y complete los demás datos.
  {
    id: "futuro-restaurante-1",
    name: "Próximamente: Nuevo Restaurante 1",
    cuisine: "Tipo de cocina",
    distance: "Distancia por definir",
    description: "Descripción del nuevo restaurante.",
    imageAlt: "Imagen del nuevo restaurante",
    imagePath: "",
    coords: { lat: 41.3800, lng: 2.1700 } // MODIFICAR COORDENADAS GEOGRÁFICAS AQUÍ
  },
  {
    id: "futuro-restaurante-2",
    name: "Próximamente: Nuevo Restaurante 2",
    cuisine: "Tipo de cocina",
    distance: "Distancia por definir",
    description: "Descripción del nuevo restaurante.",
    imageAlt: "Imagen del nuevo restaurante",
    imagePath: "",
    coords: { lat: 41.3800, lng: 2.1700 } // MODIFICAR COORDENADAS GEOGRÁFICAS AQUÍ
  },
  {
    id: "futuro-restaurante-3",
    name: "Próximamente: Nuevo Restaurante 3",
    cuisine: "Tipo de cocina",
    distance: "Distancia por definir",
    description: "Descripción del nuevo restaurante.",
    imageAlt: "Imagen del nuevo restaurante",
    imagePath: "",
    coords: { lat: 41.3800, lng: 2.1700 } // MODIFICAR COORDENADAS GEOGRÁFICAS AQUÍ
  },
  {
    id: "futuro-restaurante-4",
    name: "Próximamente: Nuevo Restaurante 4",
    cuisine: "Tipo de cocina",
    distance: "Distancia por definir",
    description: "Descripción del nuevo restaurante.",
    imageAlt: "Imagen del nuevo restaurante",
    imagePath: "",
    coords: { lat: 41.3800, lng: 2.1700 } // MODIFICAR COORDENADAS GEOGRÁFICAS AQUÍ
  },
  {
    id: "futuro-restaurante-5",
    name: "Próximamente: Nuevo Restaurante 5",
    cuisine: "Tipo de cocina",
    distance: "Distancia por definir",
    description: "Descripción del nuevo restaurante.",
    imageAlt: "Imagen del nuevo restaurante",
    imagePath: "",
    coords: { lat: 41.3800, lng: 2.1700 } // MODIFICAR COORDENADAS GEOGRÁFICAS AQUÍ
  },
  {
    id: "futuro-restaurante-6",
    name: "Próximamente: Nuevo Restaurante 6",
    cuisine: "Tipo de cocina",
    distance: "Distancia por definir",
    description: "Descripción del nuevo restaurante.",
    imageAlt: "Imagen del nuevo restaurante",
    imagePath: "",
    coords: { lat: 41.3800, lng: 2.1700 } // MODIFICAR COORDENADAS GEOGRÁFICAS AQUÍ
  }
];
