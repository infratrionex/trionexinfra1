import { Link } from "react-router-dom";
import { ArrowRight, Home, Factory, Building, DraftingCompass, Users } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "Residential Construction",
      desc: "Creating homes built to last, combining aesthetic design with modern structural integrity.",
      icon: <Home className="w-10 h-10 text-amber-500" />,
      path: "/services/residential",
      features: ["Villas", "Independent Houses", "Apartment Buildings", "Renovation & Remodelling", "Turnkey Home Construction"]
    },
    {
      title: "Industrial Construction",
      desc: "Robust facilities designed for scale, efficiency, and heavy-duty operations.",
      icon: <Factory className="w-10 h-10 text-amber-500" />,
      path: "/services/industrial",
      features: ["Manufacturing Facilities", "Warehouses", "Logistics Parks", "Industrial Sheds", "Factory Buildings"]
    },
    {
      title: "Commercial Construction",
      desc: "Professional environments crafted to inspire productivity and business growth.",
      icon: <Building className="w-10 h-10 text-amber-500" />,
      path: "/contact", // Routes to contact for custom quotes
      features: ["Office Buildings", "Retail Spaces", "Business Parks", "Institutional Buildings"]
    },
    {
      title: "Engineering Services",
      desc: "Expert consultancy and project supervision to ensure technical perfection.",
      icon: <DraftingCompass className="w-10 h-10 text-amber-500" />,
      path: "/contact",
      features: ["Project Management", "Quantity Surveying", "Structural Design", "Site Supervision", "Construction Consultancy"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="relative bg-slate-900 text-white py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2831" 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 font-light">
            Comprehensive civil construction and engineering solutions spanning across residential, commercial, and industrial sectors.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, i) => (
              <div key={i} className="flex flex-col border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow bg-white">
                <div className="p-10 flex-grow">
                  <div className="bg-slate-50 w-20 h-20 rounded-xl flex items-center justify-center mb-8 border border-slate-100">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 mb-8 text-lg">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-slate-50 border-t border-slate-100">
                  <Link 
                    to={service.path}
                    className="flex items-center justify-between text-slate-900 font-bold hover:text-amber-600 transition-colors group"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-slate-600 text-lg">Our core differentiators that guarantee project success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Modern Construction Approach",
              "Skilled Engineering Team",
              "Transparent Costing",
              "Sustainable Building Solutions",
              "Commitment to Timely Delivery",
              "Client-Centric Project Execution"
            ].map((reason, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <Users className="w-6 h-6 text-amber-500 shrink-0" />
                <span className="font-semibold text-slate-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
