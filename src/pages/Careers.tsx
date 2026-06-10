import { Briefcase, Send } from "lucide-react";

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2940" 
            alt="Careers Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Career With Us</h1>
          <p className="text-xl text-slate-300 font-light">
            Join a modern construction company redefining infrastructure engineering in India.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-8">
               <Briefcase className="w-10 h-10 text-amber-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">We are growing!</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Trionex Infra is currently expanding its initial core team. We are looking for passionate civil engineers, project managers, and supervisors who want to grow alongside a dynamic new organization.
            </p>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="text-left">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Submit Your Application</h3>
                  <p className="text-slate-600">Send your resume to our HR department.</p>
               </div>
               <a 
                 href="mailto:infratrionex@gmail.com?subject=Job Application" 
                 className="bg-slate-900 text-white px-8 py-3 rounded font-bold hover:bg-slate-800 transition-colors inline-flex items-center gap-2 whitespace-nowrap"
               >
                 <Send className="w-4 h-4" /> Email Resume
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
