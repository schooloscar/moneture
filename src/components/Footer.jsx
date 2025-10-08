import { Flower2, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Flower2 className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
              <div>
                <h3 className="text-2xl font-serif">Monet Gardens</h3>
                <p className="text-sm text-slate-400">Tuinontwerp</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Waar de impressionistische visie van Claude Monet tot leven komt in tijdloze tuinen
              vol kleur, licht en natuurlijke harmonie.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="p-3 bg-slate-800 hover:bg-blue-500 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-slate-800 hover:bg-blue-500 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@monetgardens.nl"
                className="p-3 bg-slate-800 hover:bg-blue-500 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Navigatie</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors duration-300">
                  Onze Tuinen
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors duration-300">
                  Diensten
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-blue-400 transition-colors duration-300">
                  Filosofie
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Giverny Laan 84</li>
              <li>1234 AB Amsterdam</li>
              <li className="pt-2">
                <a href="tel:+31201234567" className="hover:text-blue-400 transition-colors duration-300">
                  +31 (0)20 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@monetgardens.nl" className="hover:text-blue-400 transition-colors duration-300">
                  info@monetgardens.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Monet Gardens. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Privacybeleid
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Algemene voorwaarden
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
