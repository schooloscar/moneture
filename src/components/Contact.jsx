import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-800 mb-4">
            Neem Contact Op
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Klaar om uw droomtuin te realiseren? Vul het formulier in en wij nemen zo snel mogelijk contact met u op
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
                    placeholder="Uw naam"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
                    placeholder="uw@email.nl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
                    placeholder="06 12345678"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                    Type project
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all"
                  >
                    <option value="">Selecteer...</option>
                    <option value="tuinontwerp">Tuinontwerp</option>
                    <option value="vijver">Vijveraanleg</option>
                    <option value="planten">Plantenkeuze</option>
                    <option value="onderhoud">Onderhoud</option>
                    <option value="overig">Overig</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all resize-none"
                  placeholder="Vertel ons over uw tuinproject..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
                  Bedankt voor uw bericht! Wij nemen zo snel mogelijk contact met u op.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300 text-white py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verzenden...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Verstuur aanvraag</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-xl font-serif text-slate-800 mb-6">
                Contact informatie
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Email</p>
                    <p className="text-slate-700">info@monetgardens.nl</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-pink-50 rounded-xl">
                    <Phone className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Telefoon</p>
                    <p className="text-slate-700">+31 (0)20 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 rounded-xl">
                    <MapPin className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Adres</p>
                    <p className="text-slate-700">
                      Giverny Laan 84<br />
                      1234 AB Amsterdam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-6">
              <h4 className="font-serif text-slate-800 mb-3">
                Openingstijden
              </h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Maandag - Vrijdag</span>
                  <span>9:00 - 17:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Zaterdag</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Zondag</span>
                  <span>Gesloten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
