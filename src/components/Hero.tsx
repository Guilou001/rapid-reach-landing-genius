
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-secondary/30 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary">
              <span className="text-sm font-medium">
                Générez des leads qualifiés avec le cold email
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-dark">
              Accélérez votre <br />
              <span className="text-primary">croissance B2B</span> <br />
              avec Rapid Reach
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Notre expertise en cold emailing vous permet d'atteindre vos clients idéaux 
              et de générer un flux constant de leads qualifiés.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Commencer maintenant
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
              >
                En savoir plus
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-6" />
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Professional using laptop"
              className="relative rounded-3xl shadow-2xl transform transition-transform hover:-translate-y-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
