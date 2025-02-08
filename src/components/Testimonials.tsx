
const testimonials = [
  {
    content: "Rapid Reach a transformé notre approche de la prospection. Les résultats ont dépassé nos attentes.",
    author: "Marie L.",
    position: "Directrice Commerciale, TechStart"
  },
  {
    content: "Une équipe professionnelle qui comprend vraiment les enjeux du B2B. Je recommande vivement.",
    author: "Thomas B.",
    position: "CEO, InnovCorp"
  },
  {
    content: "Grâce à leur expertise, nous avons multiplié par 3 notre pipeline commercial en 6 mois.",
    author: "Sophie M.",
    position: "Growth Manager, DataFlex"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de notre collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="h-1 w-12 bg-primary rounded" />
                <p className="text-gray-600 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-secondary-dark">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
