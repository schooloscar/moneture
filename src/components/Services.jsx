import { Palette, Droplet, Sprout, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Tuinontwerp',
    description: 'Op maat gemaakte tuinontwerpen geïnspireerd door impressionistische kunstprincipes. Wij creëren harmonieuze composities van kleur, licht en textuur.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Droplet,
    title: 'Vijveraanleg',
    description: 'Specialisatie in natuurlijke vijvers met waterlelies, reflecterend water en waterplanten. Elk waterlichaam wordt een levend kunstwerk.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
  },
  {
    icon: Sprout,
    title: 'Plantenkeuze',
    description: 'Zorgvuldige selectie van planten voor kleurrijke borders, seizoensbloei en natuurlijke harmonie. Van pioenrozen tot iris en campanula.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: Sparkles,
    title: 'Onderhoud',
    description: 'Regelmatig onderhoud om uw tuin het hele jaar door in optimale conditie te houden. Wij begrijpen de subtiele veranderingen van elk seizoen.',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-800 mb-4">
            Onze Diensten
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Van concept tot realisatie - wij begeleiden u bij elke stap naar uw droomtuin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.bg} rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150`} />

              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl ${service.bg} mb-6 transition-transform duration-500 group-hover:scale-110`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-serif text-slate-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className={`mt-6 h-1 w-0 group-hover:w-20 ${service.bg} transition-all duration-500 rounded-full`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-serif text-slate-800 mb-4">
            Klaar om te beginnen?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Neem contact met ons op voor een vrijblijvend gesprek over uw tuinproject.
            Wij luisteren naar uw wensen en vertalen deze naar een uniek ontwerp.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Neem contact op
          </button>
        </div>
      </div>
    </section>
  );
}
