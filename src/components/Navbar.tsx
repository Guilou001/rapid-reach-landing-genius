
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">Rapid Reach</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#why-us" className="text-secondary-dark hover:text-primary transition-colors">
                Pourquoi nous
              </a>
              <a href="#process" className="text-secondary-dark hover:text-primary transition-colors">
                Processus
              </a>
              <a href="#testimonials" className="text-secondary-dark hover:text-primary transition-colors">
                Témoignages
              </a>
              <a href="#blog" className="text-secondary-dark hover:text-primary transition-colors">
                Blog
              </a>
              <Button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                Prendre RDV
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-secondary-dark hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#why-us"
              className="block px-3 py-2 text-secondary-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pourquoi nous
            </a>
            <a
              href="#process"
              className="block px-3 py-2 text-secondary-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Processus
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-secondary-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </a>
            <a
              href="#blog"
              className="block px-3 py-2 text-secondary-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <Button
              className="w-full mt-4"
              onClick={() => {
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Prendre RDV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
