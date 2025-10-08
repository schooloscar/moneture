import { Flower2 } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Onze Tuinen' },
    { id: 'services', label: 'Diensten' },
    { id: 'philosophy', label: 'Filosofie' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Flower2 className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
            <div>
              <h1 className="text-2xl font-serif text-slate-800">Monet Gardens</h1>
              <p className="text-xs text-slate-500 tracking-wide">Tuinontwerp</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  activeSection === section.id
                    ? 'text-blue-600 font-medium'
                    : 'text-slate-600 hover:text-blue-500'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
