import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1.5 rounded text-amber-500">
                <Logo className="h-8 w-8" />
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight block leading-tight">
                  TRIONEX INFRA
                </span>
                <span className="text-[0.6rem] tracking-widest text-slate-400 uppercase font-medium block leading-tight">
                  Build Your Future
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              To become India's most trusted next-generation construction company by delivering innovative, sustainable, and high-quality infrastructure solutions that transform communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Residential Projects", path: "/services/residential" },
                { name: "Industrial Solutions", path: "/services/industrial" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 text-sm hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Residential Construction</li>
              <li>Industrial Buildings</li>
              <li>Warehouses & Factories</li>
              <li>Commercial Structures</li>
              <li>Turnkey Construction</li>
              <li>Engineering Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  Office 001, Sai Prasad Building<br />
                  Bhandar Ali, J.S Road<br />
                  Thane, Maharashtra 400601, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918291915234" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Omkar Kadam: +91 8291915234
                  </a>
                  <a href="tel:+917208168750" className="text-sm text-slate-400 hover:text-white transition-colors mt-1">
                    Raj Vishe: +91 7208168750
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="mailto:infratrionex@gmail.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  infratrionex@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Trionex Infra. All rights reserved.
          </p>
          <div className="text-sm text-slate-500 flex items-center gap-4">
            <span className="hidden sm:inline-block">Monday – Saturday: 9:00 AM – 6:30 PM</span>
            <Building2 className="w-4 h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}
