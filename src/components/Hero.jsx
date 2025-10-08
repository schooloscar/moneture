import { Droplets } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-pink-50/30 to-green-50/40" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-green-300 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <Droplets className="w-16 h-16 text-blue-400 animate-pulse" strokeWidth={1} />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-slate-800 mb-6 leading-tight">
          Waar kunst en natuur
          <span className="block text-blue-600 mt-2">samenkomen</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Geïnspireerd door de impressionistische tuin van Claude Monet, creëren wij tijdloze tuinen
          waar kleur, licht en water harmonieus samenvloeien
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Ontdek onze tuinen
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200"
          >
            Vraag offerte aan
          </button>
        </div>

        <div className="mt-16 text-sm text-slate-500 italic">
          "Een tuin is het portret van de tuinier"
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
