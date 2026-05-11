import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer id="footer" className="bg-soft-black text-warm-white pt-20 pb-10 border-t-4 border-soft-gold">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div>
          <h2 className="font-serif text-3xl mb-2">Hotel Coronado</h2>
          <p className="text-secondary-gray text-sm tracking-widest uppercase mb-6">Barcelona</p>
          <p className="text-sm text-secondary-gray leading-relaxed">
            Elegancia, calma y autenticidad en el corazón de Sants-Montjuïc. Un refugio de lujo discreto diseñado para vivir Barcelona con otra mirada.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-6">Contacto</h3>
          <ul className="space-y-4 text-sm text-secondary-gray">
            <li>Carrer Nou de la Rambla, 134</li>
            <li>Sants-Montjuïc, 08004 Barcelona</li>
            <li>+34 930 123 456</li>
            <li>reservas@hotelcoronado.es</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-6">Explorar</h3>
          <ul className="space-y-3 text-sm text-secondary-gray">
            <li><a href="#" className="hover:text-soft-cream transition-colors">Inicio</a></li>
            <li><a href="#about" className="hover:text-soft-cream transition-colors">Quiénes Somos</a></li>
            <li><a href="#location" className="hover:text-soft-cream transition-colors">Ubicación</a></li>
            <li><a href="#restaurants" className="hover:text-soft-cream transition-colors">Restaurantes</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-6">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-secondary-gray/30 flex items-center justify-center hover:bg-soft-gold hover:border-soft-gold hover:text-soft-black transition-all">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-secondary-gray/30 flex items-center justify-center hover:bg-soft-gold hover:border-soft-gold hover:text-soft-black transition-all">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-secondary-gray/30 flex items-center justify-center hover:bg-soft-gold hover:border-soft-gold hover:text-soft-black transition-all">
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-secondary-gray/20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-secondary-gray">
        <p>&copy; {new Date().getFullYear()} Hotel Coronado Barcelona. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-warm-white transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-warm-white transition-colors">Términos Legales</a>
          <a href="#" className="hover:text-warm-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
