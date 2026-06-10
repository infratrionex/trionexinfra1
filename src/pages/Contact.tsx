import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2948" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 font-light">
            Reach out to discuss your next construction project, request a consultation, or partner with us.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Corporate Office</h2>
              <div className="space-y-8">
                
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Location</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Trionex Infra<br />
                      Office 001, Sai Prasad Building<br />
                      Bhandar Ali, J.S Road<br />
                      Thane, Maharashtra 400601<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Phone</h3>
                    <div className="space-y-2">
                       <a href="tel:+918291915234" className="block text-slate-600 hover:text-amber-600 font-medium">Omkar Kadam: +91 8291915234</a>
                       <a href="tel:+917208168750" className="block text-slate-600 hover:text-amber-600 font-medium">Raj Vishe: +91 7208168750</a>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                      <a href="mailto:infratrionex@gmail.com" className="text-slate-600 hover:text-amber-600 text-sm">infratrionex@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Working Hours</h3>
                      <p className="text-slate-600 text-sm leading-snug">Mon – Sat<br/>9:00 AM – 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us A Message</h2>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Enquiry Sent! We will contact you shortly."); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow" placeholder="you@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow" placeholder="+91" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Project Type</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow bg-white">
                    <option>Residential Construction</option>
                    <option>Industrial Facility</option>
                    <option>Commercial Building</option>
                    <option>Turnkey Project</option>
                    <option>Engineering Consultancy</option>
                    <option>Other / General Enquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow resize-none" placeholder="Tell us about your project requirements..."></textarea>
                </div>

                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors">
                  Submit Enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
