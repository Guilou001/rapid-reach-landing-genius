
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Techniques pour Améliorer vos Taux d'Ouverture",
    description: "Découvrez les meilleures pratiques pour optimiser vos campagnes de cold email et augmenter significativement vos taux d'ouverture.",
    date: "15 Mars 2024",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "L'Art de la Personnalisation en Cold Email",
    description: "Comment créer des emails personnalisés qui résonnent avec vos prospects et génèrent plus de réponses positives.",
    date: "12 Mars 2024",
    readTime: "4 min"
  },
  {
    id: 3,
    title: "Cold Email B2B : Guide Complet 2024",
    description: "Un guide détaillé pour maîtriser le cold email en B2B, de la recherche de prospects à la conversion.",
    date: "8 Mars 2024",
    readTime: "7 min"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-secondary-dark mb-4">
            Notre Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez nos articles et conseils d'experts pour maîtriser l'art du cold email
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-lg transition-all duration-300 animate-fade-up bg-white/80 backdrop-blur-sm border-primary/10 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 flex justify-between items-center">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <div className="text-sm text-gray-500">{post.readTime}</div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {post.description}
                </p>
                <button className="mt-4 text-primary hover:text-primary-dark transition-colors duration-300 text-sm font-medium group-hover:translate-x-2 transition-transform">
                  Lire l'article →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
