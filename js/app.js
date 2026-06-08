const { useState, useEffect, useRef } = React;

/* ==========================================
   SVG ICONS COMPONENTS (Inline SVGs)
   ========================================== */

const IconMenu = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const IconX = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const IconMapPin = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconMap = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.122 0c-1.898 0-3.606.877-4.722 2.228C8.283.877 6.577 0 4.678 0 2.094 0 0 2.072 0 4.629c0 1.83 1.092 3.42 2.722 4.18L4.678 24h9.444l1.956-15.19c1.63-.761 2.722-2.35 2.722-4.18C18.8 2.072 16.706 0 14.122 0z" style={{ display: 'none' }} />
    <path d="M3 6h18L18 20H6L3 6Z" style={{ display: 'none' }} />
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" x2="9" y1="3" y2="18" />
    <line x1="15" x2="15" y1="6" y2="21" />
  </svg>
);

const IconExternalLink = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const IconUtensils = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

const IconInstagram = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const IconFacebook = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconTwitter = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const IconChevronDown = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);


/* ==========================================
   GENERIC UI COMPONENTS
   ========================================== */

const Button = ({ children, className = "", variant = "primary", size = "md", onClick, ...props }) => {
  const baseClass = "btn";
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, className = "", centered = false }) => {
  return (
    <div className={`section-heading ${centered ? "section-heading-centered text-center" : ""} ${className}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-line" />
    </div>
  );
};

const ImagePlaceholder = ({ altText, className = "" }) => {
  return (
    <div className={`image-placeholder ${className}`}>
      <svg className="image-placeholder-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
      </svg>
      <span className="image-placeholder-text">{altText || "Espacio para Imagen"}</span>
    </div>
  );
};

const AnimatedSection = ({ children, className = "", id }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("reveal-active");
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} id={id} className={`reveal-item ${className}`}>
      {children}
    </section>
  );
};


/* ==========================================
   CARDS
   ========================================== */

const TouristCard = ({ name, distance, description, imageAlt, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image-container">
        <ImagePlaceholder altText={imageAlt} className="card-image" />
        <div className="card-image-overlay" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <div className="card-meta-list">
          <div className="card-meta-item">
            <IconMapPin className="w-4 h-4" />
            <span>{distance}</span>
          </div>
        </div>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
};

const RestaurantCard = ({ name, cuisine, distance, description, imageAlt, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image-container">
        <ImagePlaceholder altText={imageAlt} className="card-image" />
        <div className="card-image-overlay" />
      </div>
      <div className="card-content">
        <div className="card-header-flex">
          <h3 className="card-title">{name}</h3>
          <span className="card-badge">Top</span>
        </div>
        <div className="card-meta-list">
          <div className="card-meta-item">
            <IconUtensils className="w-3.5 h-3.5" />
            <span>{cuisine}</span>
          </div>
          <div className="card-meta-item">
            <IconMapPin className="w-3.5 h-3.5" />
            <span>{distance}</span>
          </div>
        </div>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
};


/* ==========================================
   SECTIONS
   ========================================== */

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Quiénes Somos", href: "#about" },
    { name: "Ubicación", href: "#location" },
    { name: "Restaurantes", href: "#restaurants" },
    { name: "Contacto", href: "#footer" },
  ];

  const handleLinkClick = (href, e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : "header-transparent"}`}>
      <div className="container nav-container">
        {/* Logo */}
        <a href="#" className="logo" onClick={(e) => handleLinkClick("#", e)}>
          <span className="logo-title">CORONADO</span>
          <span className="logo-subtitle">Barcelona</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleLinkClick(link.href, e)}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? "primary" : "secondary"} size="sm">
            Reservar
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {isMobileMenuOpen ? (
            <IconX className="w-6 h-6" />
          ) : (
            <IconMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={(e) => handleLinkClick(link.href, e)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full" style={{ marginTop: "1rem" }}>Reservar</Button>
        </nav>
      )}
    </header>
  );
};

const Hero = () => {
  const handleDiscover = () => {
    const target = document.querySelector("#location");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      {/* Background Placeholder */}
      <ImagePlaceholder altText="Vista cinematográfica de Barcelona al atardecer" className="hero-bg" />
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <span className="hero-tagline">Hotel Coronado</span>
        <h1 className="hero-title">Barcelona con otra mirada</h1>
        <p className="hero-desc">
          Elegancia, calma y autenticidad en el corazón de Sants-Montjuïc
        </p>
        
        <div className="hero-buttons">
          <Button size="lg">Consultar disponibilidad</Button>
          <Button size="lg" variant="outline" className="hero-btn-outline" onClick={handleDiscover}>
            Descubrir la ubicación
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">Explorar</span>
        <IconChevronDown className="w-5 h-5 opacity-70" />
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <AnimatedSection id="about" className="py-24 py-32">
      <div className="container">
        <div className="about-grid">
          {/* Text Content */}
          <div>
            <SectionHeading 
              title="Un refugio de calma" 
              subtitle="Hospitalidad, diseño cuidado y una conexión profunda con la auténtica Barcelona."
            />
            
            <div className="about-text">
              <p>
                Hotel Coronado nace de la voluntad de ofrecer un espacio donde el lujo reside en la tranquilidad, los detalles precisos y el trato humano. 
              </p>
              <p>
                Ubicados en el vibrante y genuino barrio de Sants-Montjuïc, proponemos una experiencia que combina la sofisticación de un hotel boutique premium europeo con el carácter cálido e inconfundible de Barcelona.
              </p>
              <p>
                Cada espacio ha sido diseñado para invitar al reposo tras un día descubriendo la ciudad. Materiales nobles, tonos serenos y un equipo dedicado a hacer de su estancia un recuerdo perdurable.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="about-image-wrapper">
            <ImagePlaceholder altText="Interior elegante de hotel boutique, tonos neutros" className="w-full h-full" />
            <div className="about-image-deco" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const InteractiveMap = ({ activePointId, setActivePointId }) => {
  const allPoints = [
    ...window.touristSpots,
    ...window.recommendedRestaurants
  ];
  
  const activePoint = allPoints.find(p => p.id === activePointId);
  const location = activePoint ? activePoint.coords : window.hotelLocation;
  
  const mapUrl = `https://maps.google.com/maps?q=${location.lat},${location.lng}&hl=es&z=15&output=embed`;
  const directUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}`;
  const buttonText = activePoint ? `Ver en Maps` : "Ver Hotel en Maps";

  const handleOpenMaps = () => {
    window.open(directUrl, "_blank");
  };

  return (
    <div className="interactive-map" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flexGrow: 1, position: 'relative' }}>
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0, position: 'absolute', inset: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapUrl}
        ></iframe>
      </div>

      <div className="map-controls">
        <div className="map-legend">
          <div className="legend-item" style={{ color: "var(--color-soft-black)", fontSize: "0.875rem" }}>
            {activePoint ? activePoint.name : "Hotel Coronado"}
          </div>
        </div>
        
        <Button size="sm" onClick={handleOpenMaps} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <IconMap className="w-4 h-4" />
          {buttonText}
          <IconExternalLink className="w-3 h-3" style={{ opacity: 0.7 }} />
        </Button>
      </div>
    </div>
  );
};

const Location = ({ activePointId, setActivePointId }) => {
  return (
    <AnimatedSection id="location" className="py-24 py-32 bg-soft-cream">
      <div className="container">
        <div className="location-grid">
          
          <div>
            <SectionHeading title="Ubicación" />
            
            <div className="location-address">
              <h3>Carrer Nou de la Rambla, 134</h3>
              <p>Sants-Montjuïc, 08004 Barcelona</p>
            </div>
            
            <div className="about-text">
              <p>
                Una ubicación estratégica en uno de los barrios más auténticos y mejor conectados de la ciudad.
              </p>
              <p>
                A los pies de la montaña de Montjuïc, rodeado de cultura, gastronomía y vida local, pero a un paso del centro histórico, el puerto y La Rambla.
              </p>
              <p>
                El entorno perfecto para explorar Barcelona desde un punto de partida elegante, seguro y tranquilo.
              </p>
            </div>
          </div>

          <div className="map-container">
            <InteractiveMap activePointId={activePointId} setActivePointId={setActivePointId} />
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
};

const TouristSpots = ({ onCardClick }) => {
  return (
    <AnimatedSection className="py-24">
      <div className="container">
        <SectionHeading 
          title="Descubra Barcelona" 
          subtitle="Lugares emblemáticos a pocos minutos de nuestra puerta."
          centered
        />
        
        <div className="cards-grid">
          {window.touristSpots.map((spot) => (
            <TouristCard
              key={spot.id}
              name={spot.name}
              distance={spot.distance}
              description={spot.description}
              imageAlt={spot.imageAlt}
              onClick={() => onCardClick(spot.id)}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const RecommendedRestaurants = ({ onCardClick }) => {
  return (
    <AnimatedSection id="restaurants" className="py-24 bg-soft-cream" style={{ borderTop: "1px solid rgba(196, 162, 101, 0.2)" }}>
      <div className="container">
        <SectionHeading 
          title="Gastronomía Recomendada" 
          subtitle="Una cuidada selección de restaurantes para completar su experiencia en la ciudad."
          centered
        />
        
        <div className="cards-grid">
          {window.recommendedRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              cuisine={restaurant.cuisine}
              distance={restaurant.distance}
              description={restaurant.description}
              imageAlt={restaurant.imageAlt}
              onClick={() => onCardClick(restaurant.id)}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Footer = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionScroll = (href, e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="footer">
      <div className="container footer-grid">
        
        {/* Brand */}
        <div className="footer-brand">
          <h2>Hotel Coronado</h2>
          <p className="footer-brand-sub">Barcelona</p>
          <p className="footer-brand-desc">
            Elegancia, calma y autenticidad en el corazón de Sants-Montjuïc. Un refugio de lujo discreto diseñado para vivir Barcelona con otra mirada.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-col-title">Contacto</h3>
          <ul className="footer-list">
            <li>Carrer Nou de la Rambla, 134</li>
            <li>Sants-Montjuïc, 08004 Barcelona</li>
            <li>+34 930 123 456</li>
            <li>reservas@hotelcoronado.es</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="footer-col-title">Explorar</h3>
          <ul className="footer-list">
            <li><a href="#" onClick={handleScrollToTop}>Inicio</a></li>
            <li><a href="#about" onClick={(e) => handleSectionScroll("#about", e)}>Quiénes Somos</a></li>
            <li><a href="#location" onClick={(e) => handleSectionScroll("#location", e)}>Ubicación</a></li>
            <li><a href="#restaurants" onClick={(e) => handleSectionScroll("#restaurants", e)}>Restaurantes</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="footer-col-title">Síguenos</h3>
          <div className="footer-social-flex">
            <a href="#" className="footer-social-icon" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href="#" className="footer-social-icon" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href="#" className="footer-social-icon" aria-label="Twitter">
              <IconTwitter />
            </a>
          </div>
        </div>

      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hotel Coronado Barcelona. Todos los derechos reservados.</p>
        <div className="footer-bottom-links">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos Legales</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};


/* ==========================================
   MAIN APP ORCHESTRATION
   ========================================== */

const App = () => {
  const [activePointId, setActivePointId] = useState(null);

  const handleCardClick = (id) => {
    setActivePointId(id);
    const mapSection = document.querySelector("#location");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-warm-white)" }}>
      <Navbar />
      <Hero />
      <AboutUs />
      <Location activePointId={activePointId} setActivePointId={setActivePointId} />
      <TouristSpots onCardClick={handleCardClick} />
      <RecommendedRestaurants onCardClick={handleCardClick} />
      <Footer />
    </div>
  );
};

// Render React App
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
