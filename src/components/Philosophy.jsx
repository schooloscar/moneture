import { Flower, Sun, Heart } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-800 mb-4">
            Onze Filosofie
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Geïnspireerd door Claude Monet's visie op natuur, licht en kleur
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-300 via-pink-200 to-green-300 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white/30 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif text-slate-800 mb-3">
                Het impressionistische principe
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Zoals Monet het licht ving op zijn canvas, vangen wij de essentie van natuur in onze tuinen.
                Het gaat niet om perfectie, maar om het gevoel - de speelse dans van zonlicht op water,
                de zachte overgangen van kleur, de natuurlijke vloeiendheid van seizoenen.
              </p>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl">
              <Flower className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Kleurharmonie</h4>
                <p className="text-slate-600 text-sm">
                  Wij componeren met planten zoals Monet met verf - zachte pastels naast levendige accenten,
                  creërend een visuele symfonie die door de seizoenen danst.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-pink-50 rounded-2xl">
              <Sun className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Licht en schaduw</h4>
                <p className="text-slate-600 text-sm">
                  Elk ontwerp houdt rekening met de reis van de zon, waardoor uw tuin
                  een voortdurend veranderend schilderij wordt van licht en schaduw.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-2xl">
              <Heart className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Natuurlijke schoonheid</h4>
                <p className="text-slate-600 text-sm">
                  Wij omarmen de wilde, natuurlijke charme van Monet's Giverny -
                  waar structuur en spontaniteit hand in hand gaan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block w-16 h-1 bg-blue-400 rounded-full mb-6" />
              <h3 className="text-3xl font-serif text-slate-800 mb-6">
                Citaten die ons inspireren
              </h3>
            </div>

            <div className="space-y-8">
              <blockquote className="border-l-4 border-blue-400 pl-6 py-2">
                <p className="text-slate-700 italic text-lg mb-2">
                  "Mijn tuin is mijn mooiste meesterwerk"
                </p>
                <footer className="text-slate-500 text-sm">- Claude Monet</footer>
              </blockquote>

              <blockquote className="border-l-4 border-pink-400 pl-6 py-2">
                <p className="text-slate-700 italic text-lg mb-2">
                  "Ik moet waterlelies hebben, altijd, altijd"
                </p>
                <footer className="text-slate-500 text-sm">- Claude Monet</footer>
              </blockquote>

              <blockquote className="border-l-4 border-green-400 pl-6 py-2">
                <p className="text-slate-700 italic text-lg mb-2">
                  "De natuur wordt een schilderij dat zich voor mijn ogen ontvouwt"
                </p>
                <footer className="text-slate-500 text-sm">- Claude Monet</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
