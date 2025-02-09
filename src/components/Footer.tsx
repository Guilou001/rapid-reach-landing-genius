
const Footer = () => {
  return (
    <footer className="bg-white py-12 mt-20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Rapid Reach</h3>
            <p className="text-gray-600">
              Solutions innovantes pour votre présence digitale
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentions légales</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Conditions générales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                Email: contact@rapidreach.fr
              </li>
              <li className="text-gray-600">
                Téléphone: +33 (0)1 23 45 67 89
              </li>
              <li className="text-gray-600">
                Adresse: Paris, France
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Rapid Reach. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
