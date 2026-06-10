import { Link } from "react-router-dom";
import { Check, Home, Key, Hammer } from "lucide-react";

export default function Residential() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2950" 
            alt="Residential Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 z-0">
           <Home className="w-96 h-96" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-amber-500 font-bold mb-4 tracking-wider text-sm uppercase">
            <Home className="w-5 h-5" /> Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Residential Construction</h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl">
            We build homes that reflect your aspirations. From modern villas to robust apartment complexes, delivered with turnkey excellence.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Crafting Lasting Homes</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                At Trionex Infra, we understand that a home is more than just a structure; it is a lifetime investment. Our residential construction services are focused on delivering modern, sustainable, and highly durable living spaces tailored to your family's needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                   <Key className="w-8 h-8 text-amber-500 mb-4" />
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Turnkey Home Construction</h3>
                   <p className="text-slate-600 text-sm">End-to-end solutions taking your project from architectural drawings to the final key handover.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                   <Hammer className="w-8 h-8 text-amber-500 mb-4" />
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Renovation & Remodelling</h3>
                   <p className="text-slate-600 text-sm">Breathe new life into existing structures with our expert structural remodelling and interior renovation services.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Residential Specialties</h2>
              <ul className="space-y-4 bg-white p-8 rounded-xl border border-slate-200">
                {[
                  "Luxury Villas & Bungalows",
                  "Independent Houses & Row Houses",
                  "Multi-story Apartment Buildings",
                  "Gated Community Infrastructure",
                  "Structural Core & Shell Construction"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-slate-700 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                    <Check className="w-6 h-6 text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar CTA */}
            <div>
              <div className="bg-slate-900 text-white rounded-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Start Your Project</h3>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                  Trionex is onboarding new clients. Let's discuss your residential project requirements and get a transparent estimate.
                </p>
                <Link 
                  to="/contact" 
                  className="w-full block text-center bg-amber-500 text-slate-900 font-bold py-3 rounded hover:bg-amber-400 transition-colors"
                >
                  Request a Quote
                </Link>
                
                <div className="mt-8 pt-8 border-t border-slate-800">
                  <p className="text-sm text-slate-400 mb-2">Direct Contact</p>
                  <a href="tel:+918291915234" className="block text-lg font-medium text-white hover:text-amber-500 mb-1">+91 8291915234</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
