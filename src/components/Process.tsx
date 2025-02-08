
import { Check } from "lucide-react";

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
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Notre processus
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une approche méthodique pour garantir votre succès
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 animate-fade-up ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-1" />
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-lg hover:shadow-primary/30">
                  <Check className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-primary/10">
                    <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
