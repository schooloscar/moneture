import { useState } from 'react';
import { Waves } from 'lucide-react';

const gardens = [
  {
    id: 1,
    title: 'Waterlelie Vijver',
    description: 'Een serene vijver met drijvende waterlelies en reflecties van de hemel',
    color: 'from-blue-400 to-blue-600',
    accent: 'bg-blue-100',
  },
  {
    id: 2,
    title: 'Japanse Brug',
    description: 'Iconische groene brug over water, omringd door weelderige beplanting',
    color: 'from-green-400 to-emerald-600',
    accent: 'bg-green-100',
  },
  {
    id: 3,
    title: 'Roze Bloementuin',
    description: 'Overvloedige borders vol rozen, pioenrozen en andere bloemen',
    color: 'from-pink-400 to-rose-600',
    accent: 'bg-pink-100',
  },
  {
    id: 4,
    title: 'Lavendel Pad',
    description: 'Geurende paden tussen lavendelvelden in zachte paarse tinten',
    color: 'from-purple-400 to-purple-600',
    accent: 'bg-purple-100',
  },
  {
    id: 5,
    title: 'Witte Sereniteit',
    description: 'Rustgevende tuin met witte bloemen en reflecterend water',
    color: 'from-slate-400 to-slate-600',
    accent: 'bg-slate-100',
  },
  {
    id: 6,
    title: 'Zonsondergang Tuin',
    description: 'Warme kleuren van goud tot oranje creëren een magische sfeer',
    color: 'from-amber-400 to-orange-600',
    accent: 'bg-amber-100',
  },
];

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Waves className="w-12 h-12 text-blue-400" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-800 mb-4">
            Onze Tuinen
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Elke tuin is een uniek kunstwerk, ontworpen om de impressionistische schoonheid
            van Monet's Giverny naar uw eigen omgeving te brengen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gardens.map((garden) => (
            <div
              key={garden.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl"
              onMouseEnter={() => setHoveredId(garden.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`aspect-[4/5] bg-gradient-to-br ${garden.color} transition-transform duration-700 ${
                hoveredId === garden.id ? 'scale-110' : 'scale-100'
              }`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  hoveredId === garden.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm animate-pulse" />
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-500 ${
                hoveredId === garden.id ? 'translate-y-0' : 'translate-y-2'
              }`}>
                <h3 className="text-2xl font-serif text-white mb-2">
                  {garden.title}
                </h3>
                <p className={`text-white/90 text-sm transition-all duration-500 ${
                  hoveredId === garden.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                }`}>
                  {garden.description}
                </p>
              </div>

              <div className={`absolute top-4 right-4 w-16 h-16 ${garden.accent} rounded-full transition-all duration-500 ${
                hoveredId === garden.id ? 'scale-100 opacity-80' : 'scale-0 opacity-0'
              }`} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 italic">
            "De kleur is mijn dagelijkse obsessie, vreugde en kwelling" - Claude Monet
          </p>
        </div>
      </div>
    </section>
  );
}
