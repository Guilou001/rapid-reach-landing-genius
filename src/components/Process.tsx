
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Analyse initiale",
    description: "Étude approfondie de votre marché et de vos objectifs commerciaux."
  },
  {
    title: "Création de la stratégie",
    description: "Développement d'une stratégie personnalisée de prospection."
  },
  {
    title: "Lancement des campagnes",
    description: "Déploiement des campagnes optimisées pour votre audience."
  },
  {
    title: "Suivi et optimisation",
    description: "Analyse continue et ajustements pour maximiser les résultats."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Notre processus
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une approche méthodique pour garantir votre succès
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform transition-transform group-hover:scale-105 -z-10" />
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-primary/10 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-primary" size={24} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
