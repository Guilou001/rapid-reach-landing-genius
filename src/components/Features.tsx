
import { Mail, Target, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Emails personnalisés",
    description: "Nous créons des campagnes d'emails personnalisées qui résonnent avec vos prospects."
  },
  {
    icon: Target,
    title: "Ciblage précis",
    description: "Identification et segmentation précise de votre audience idéale."
  },
  {
    icon: Users,
    title: "Qualification avancée",
    description: "Processus rigoureux de qualification des leads pour maximiser les conversions."
  },
  {
    icon: Zap,
    title: "Optimisation continue",
    description: "Amélioration constante des performances grâce à l'analyse des données."
  }
];

const Features = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Pourquoi choisir Rapid Reach ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notre approche unique du cold emailing combine technologie et expertise humaine
            pour des résultats exceptionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
