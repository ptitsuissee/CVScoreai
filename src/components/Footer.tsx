import { Mail, Shield, FileText } from 'lucide-react';

interface FooterProps {
  language: 'fr' | 'en';
  setCurrentPage?: (page: string) => void;
}

const content = {
  fr: {
    tagline: 'Analyse assistée par intelligence artificielle',
    links: {
      legal: 'Mentions légales',
      privacy: 'Confidentialité',
      contact: 'Contact',
    },
    quickLinks: 'Liens rapides',
    company: 'Entreprise',
    copyright: '© 2025 CVScore.ai. Tous droits réservés.',
  },
  en: {
    tagline: 'AI-powered resume analysis',
    links: {
      legal: 'Legal Notice',
      privacy: 'Privacy',
      contact: 'Contact',
    },
    quickLinks: 'Quick Links',
    company: 'Company',
    copyright: '© 2025 CVScore.ai. All rights reserved.',
  },
};

export function Footer({ language, setCurrentPage }: FooterProps) {
  const t = content[language];

  const handleNavClick = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="text-2xl text-white mb-4">
              CVScore<span className="text-blue-400">.ai</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">{t.tagline}</p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Shield size={16} />
              <span>
                {language === 'fr'
                  ? 'Vos données sont sécurisées et confidentielles'
                  : 'Your data is secure and confidential'}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">{t.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  {language === 'fr' ? 'Analyser mon CV' : 'Analyze my Resume'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('examples')}
                  className="hover:text-white transition-colors text-left"
                >
                  {language === 'fr' ? 'Exemples' : 'Examples'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('pricing')}
                  className="hover:text-white transition-colors text-left"
                >
                  {language === 'fr' ? 'Tarifs' : 'Pricing'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('dashboard')}
                  className="hover:text-white transition-colors text-left"
                >
                  {language === 'fr' ? 'Tableau de bord' : 'Dashboard'}
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">{t.company}</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick('legal')}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <FileText size={16} />
                  {t.links.legal}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('privacy')}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Shield size={16} />
                  {t.links.privacy}
                </button>
              </li>
              <li>
                <a href="mailto:CVScoreai@outlook.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  {t.links.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-sm text-gray-500">{t.copyright}</p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>🇫🇷 France</span>
              <span>🇨🇭 Suisse</span>
              <span>🇪🇺 Europe</span>
            </div>
          </div>

          {/* AI Disclaimer - Discret */}
          <div className="text-center">
            <p className="text-xs text-gray-600">
              {language === 'fr'
                ? 'Analyse assistée par intelligence artificielle. Résultats à titre indicatif.'
                : 'AI-powered resume analysis. Results are provided for informational purposes only.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}