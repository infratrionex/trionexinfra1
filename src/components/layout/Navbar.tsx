import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import Logo from "../ui/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  const serviceLinks = [
    { name: "All Services", path: "/services" },
    { name: "Residential", path: "/services/residential" },
    { name: "Industrial", path: "/services/industrial" },
  ];

  const trailingLinks = [
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <div className="hidden sm:block">
              <span className="font-bold text-xl tracking-tight block leading-tight text-slate-900">
                TRIONEX INFRA
              </span>
              <span className="text-[0.6rem] tracking-widest text-slate-500 uppercase font-medium block leading-tight">
                Build Your Future
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-amber-500",
                  location.pathname === link.path ? "text-amber-500" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-amber-500",
                  location.pathname.includes("/services") ? "text-amber-500" : "text-slate-600"
                )}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown */}
              <div 
                className={cn(
                  "absolute top-full -left-4 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-200 origin-top transform",
                  servicesOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                )}
              >
                <div className="py-2 flex flex-col">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-amber-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {trailingLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-amber-500",
                  location.pathname === link.path ? "text-amber-500" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-slate-900 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {[...navLinks, ...serviceLinks, ...trailingLinks].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? "text-amber-500 bg-amber-50"
                    : "text-slate-600 hover:text-amber-500 hover:bg-slate-50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
