import { motion } from "motion/react";
import { Target, Lightbulb, ShieldCheck, Leaf, Eye } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Quality First",
      desc: "Every structure is built with uncompromising quality standards.",
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Transparency",
      desc: "Clear communication and project visibility at every stage.",
      icon: <Eye className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Innovation",
      desc: "Leveraging modern technologies and smart construction methods.",
      icon: <Lightbulb className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Sustainability",
      desc: "Reducing environmental impact through responsible construction practices.",
      icon: <Leaf className="w-6 h-6 text-amber-500" />
    }
  ];

  const timeline = [
    { year: "2026", title: "Company Incorporated" },
    { year: "2026", title: "Engineering Team Formation" },
    { year: "2026", title: "Launch of Operations" },
    { year: "2026", title: "Client Acquisition & Pipeline Development" },
    { year: "Upcoming", title: "First Residential Project", highlight: true },
    { year: "Upcoming", title: "First Industrial Facility", highlight: true },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2940" 
            alt="About Us Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            We are a team of visionary engineers and builders dedicated to transforming infrastructure with integrity and modern practices.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-amber-500/10">
                <Target className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-amber-500" />
                  <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To become India's most trusted next-generation construction company by delivering innovative, sustainable, and high-quality infrastructure solutions that transform communities and industries.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-amber-500" />
                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Deliver construction projects with complete transparency.",
                  "Implement modern engineering practices and digital tracking.",
                  "Build sustainable and environmentally responsible infrastructure.",
                  "Create long-term value for clients, employees, and stakeholders.",
                  "Establish strong partnerships based on trust, quality, and integrity."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2.5 rounded-full bg-amber-500 shrink-0"></span>
                    <span className="text-slate-600 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">The principles that guide our every decision, design, and structural foundation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message & Journey */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Founder Message */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Founder's Message</h2>
              <blockquote className="bg-slate-50 p-8 rounded-2xl border-l-4 border-amber-500 font-serif italic text-xl text-slate-700 leading-relaxed mb-6">
                "At Trionex Infra, we believe every landmark project begins with a strong foundation of trust. As a young company, our focus is not on the number of projects completed but on building lasting relationships and delivering excellence from day one."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-bold text-slate-900 text-lg">Founder & Managing Director</p>
                  <p className="text-slate-500">Trionex Infra</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-10">Our Journey</h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {timeline.map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-slate-200 text-slate-500 group-[.is-active]:bg-amber-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow"></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-100 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-bold text-sm ${item.highlight ? 'text-amber-500' : 'text-slate-500'}`}>{item.year}</span>
                      </div>
                      <h4 className="text-slate-900 font-medium">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
