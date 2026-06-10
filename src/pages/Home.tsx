import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Building, Home as HomeIcon, Factory, HardHat } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541888081622-c31f417f6311?auto=format&fit=crop&q=80&w=2940" 
            alt="Construction Site" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 mb-6 border border-amber-500/20">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide">ESTABLISHED 2026</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              BUILD YOUR <span className="text-amber-500">FUTURE</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              India's next-generation civil construction company specializing in transparent, sustainable, and innovative infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-amber-500 text-slate-900 px-8 py-4 rounded font-bold text-lg hover:bg-amber-400 transition-colors inline-flex justify-center items-center gap-2"
              >
                Our Services <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded font-bold text-lg hover:bg-white/20 transition-colors inline-flex justify-center items-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Modernizing The Construction Industry</h2>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Trionex Infra is a newly established civil construction company based in Thane, Maharashtra. We were founded with a singular vision: to modernize construction through transparent project management, sustainable practices, and innovative engineering.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Residential, Commercial & Industrial Solutions",
                  "Transparent Project Management",
                  "Sustainable Building Practices"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-amber-600 font-semibold hover:text-amber-700 inline-flex items-center gap-2">
                Learn more about our vision <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-center">
                <HardHat className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-3xl font-bold text-slate-900 mb-1">08</h3>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Expert Team Members</p>
              </div>
              <div className="bg-slate-900 p-8 rounded-lg text-white flex flex-col items-center justify-center text-center mt-8">
                <Building className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-3xl font-bold mb-1">HQ</h3>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wide">Thane, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Focus Areas</h2>
            <p className="text-slate-600 text-lg">Comprehensive construction solutions tailored to residential, industrial, and commercial demands.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential",
                icon: <HomeIcon className="w-8 h-8 text-amber-500" />,
                desc: "Villas, apartment buildings, and turnkey home construction with uncompromising quality.",
                path: "/services/residential"
              },
              {
                title: "Industrial",
                icon: <Factory className="w-8 h-8 text-amber-500" />,
                desc: "Manufacturing facilities, logistics parks, and warehouses built for operational efficiency.",
                path: "/services/industrial"
              },
              {
                title: "Commercial",
                icon: <Building className="w-8 h-8 text-amber-500" />,
                desc: "Modern office spaces, retail environments, and institutional structures.",
                path: "/services"
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed bg-white">
                  {service.desc}
                </p>
                <Link to={service.path} className="text-sm font-bold text-slate-900 hover:text-amber-600 flex items-center gap-2">
                  EXPLORE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-500 text-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to build your vision?</h2>
          <p className="text-xl mb-10 text-slate-800 font-medium">Partner with Trionex Infra for your next landmark project.</p>
          <Link 
            to="/contact" 
            className="bg-slate-900 text-white px-8 py-4 rounded font-bold text-lg hover:bg-slate-800 transition-colors inline-block"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
