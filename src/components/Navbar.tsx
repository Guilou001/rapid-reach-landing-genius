
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Rapid Reach
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#why-us" 
                className="text-secondary-dark hover:text-primary transition-all duration-300 hover:translate-y-[-2px]"
              >
                Pourquoi nous
              </a>
              <a 
                href="#process" 
                className="text-secondary-dark hover:text-primary transition-all duration-300 hover:translate-y-[-2px]"
              >
                Processus
              </a>
              <a 
                href="#testimonials" 
                className="text-secondary-dark hover:text-primary transition-all duration-300 hover:translate-y-[-2px]"
              >
                Témoignages
              </a>
              <a 
                href="#blog" 
                className="text-secondary-dark hover:text-primary transition-all duration-300 hover:translate-y-[-2px]"
              >
                Blog
              </a>
              <Button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary-dark transition-all duration-300 hover:translate-y-[-2px] shadow-lg hover:shadow-primary/20"
              >
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

      {/* Mobile menu with animation */}
      <div 
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-2 pt-20 pb-3 space-y-3">
          {["why-us", "process", "testimonials", "blog"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block px-3 py-2 text-secondary-dark hover:text-primary transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item === "why-us"
                ? "Pourquoi nous"
                : item === "process"
                ? "Processus"
                : item === "testimonials"
                ? "Témoignages"
                : "Blog"}
            </a>
          ))}
          <Button
            className="w-full mt-4 bg-primary hover:bg-primary-dark transition-all duration-300"
            onClick={() => {
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
          >
            Prendre RDV
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
