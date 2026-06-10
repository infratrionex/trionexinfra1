import { Link } from "react-router-dom";
import { Check, Factory, Settings, Truck } from "lucide-react";

export default function Industrial() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2940" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 z-0">
           <Factory className="w-96 h-96" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-amber-500 font-bold mb-4 tracking-wider text-sm uppercase">
            <Factory className="w-5 h-5" /> Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial Construction</h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl">
            Building heavy-duty, operationally efficient facilities. From vast logistics parks to specialized manufacturing plants.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Engineered for Scale & Efficiency</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Industrial infrastructure requires specialized engineering knowledge, precise safety protocols, and scalable designs. Our team delivers high-capacity structural solutions built to withstand heavy operations and optimize workflow.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                   <Settings className="w-8 h-8 text-amber-500 mb-4" />
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Manufacturing Plants</h3>
                   <p className="text-slate-600 text-sm">Foundations and heavy structural framing designed specifically for processing and manufacturing machinery.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                   <Truck className="w-8 h-8 text-amber-500 mb-4" />
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Logistics Parks</h3>
                   <p className="text-slate-600 text-sm">Expansive warehousing solutions with optimized loading bays, high-clearance roofs, and durable flooring.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Industrial Specialties</h2>
              <ul className="space-y-4 bg-white p-8 rounded-xl border border-slate-200">
                {[
                  "Heavy Manufacturing Facilities",
                  "Pre-Engineered Warehouses",
                  "Logistics & Transit Parks",
                  "Industrial Sheds & Steel Structures",
                  "Factory Buildings & Power Structures"
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
                  We are actively developing our pipeline for industrial facilities. Partner with Trionex for modern engineering expertise.
                </p>
                <Link 
                  to="/contact" 
                  className="w-full block text-center bg-amber-500 text-slate-900 font-bold py-3 rounded hover:bg-amber-400 transition-colors"
                >
                  Consult an Engineer
                </Link>
                
                <div className="mt-8 pt-8 border-t border-slate-800">
                  <p className="text-sm text-slate-400 mb-2">Direct Contact</p>
                  <a href="tel:+917208168750" className="block text-lg font-medium text-white hover:text-amber-500 mb-1">+91 7208168750</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
