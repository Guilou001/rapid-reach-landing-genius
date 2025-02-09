
const Footer = () => {
  return (
    <footer className="bg-[#E5DEFF] py-12 mt-20 border-t border-[#D6BCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-[#6E59A5] mb-4">Rapid Reach</h3>
            <p className="text-[#7E69AB]">
              Solutions innovantes pour votre présence digitale
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-[#6E59A5] mb-4">Mentions légales</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#7E69AB] hover:text-[#9b87f5] transition-colors">
                  Conditions générales
                </a>
              </li>
              <li>
                <a href="#" className="text-[#7E69AB] hover:text-[#9b87f5] transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-[#7E69AB] hover:text-[#9b87f5] transition-colors">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-[#6E59A5] mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-[#7E69AB] flex items-center gap-2">
                <span>Email:</span>
                <a href="mailto:contact@rapidreach.fr" className="hover:text-[#9b87f5] transition-colors">
                  contact@rapidreach.fr
                </a>
              </li>
              <li className="text-[#7E69AB] flex items-center gap-2">
                <span>Téléphone:</span>
                <a href="tel:+33123456789" className="hover:text-[#9b87f5] transition-colors">
                  +33 (0)1 23 45 67 89
                </a>
              </li>
              <li className="text-[#7E69AB]">
                Adresse: Paris, France
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#D6BCFA]">
          <p className="text-center text-[#7E69AB]">
            © {new Date().getFullYear()} Rapid Reach. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
