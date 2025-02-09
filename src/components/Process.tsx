
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const processDetails = [
  {
    title: "Analyse initiale",
    description: "Étude approfondie de votre marché et de vos objectifs commerciaux.",
    details: [
      "Analyse complète de votre secteur d'activité",
      "Étude de votre positionnement actuel",
      "Identification de vos objectifs de croissance",
      "Analyse de votre audience cible"
    ]
  },
  {
    title: "Création de la stratégie",
    description: "Développement d'une stratégie personnalisée de prospection.",
    details: [
      "Élaboration d'un plan d'action personnalisé",
      "Sélection des canaux de prospection adaptés",
      "Création de messages et contenus ciblés",
      "Définition des indicateurs de performance"
    ]
  },
  {
    title: "Lancement des campagnes",
    description: "Déploiement des campagnes optimisées pour votre audience.",
    details: [
      "Mise en place des outils de prospection",
      "Configuration des campagnes",
      "Tests A/B pour optimiser les performances",
      "Lancement progressif des actions"
    ]
  },
  {
    title: "Suivi et optimisation",
    description: "Analyse continue et ajustements pour maximiser les résultats.",
    details: [
      "Monitoring quotidien des performances",
      "Rapports détaillés hebdomadaires",
      "Optimisation continue des campagnes",
      "Ajustements stratégiques selon les résultats"
    ]
  }
];

const Process = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

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
          {processDetails.map((step, index) => (
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
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                        {step.title}
                      </h3>
                      <button
                        onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        {expandedStep === index ? (
                          <ChevronUp size={24} />
                        ) : (
                          <ChevronDown size={24} />
                        )}
                      </button>
                    </div>
                    <p className="text-gray-600 mb-2">
                      {step.description}
                    </p>
                    
                    {expandedStep === index && (
                      <div className="mt-4 space-y-2 animate-accordion-down">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <p>{detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {index < processDetails.length - 1 && (
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
