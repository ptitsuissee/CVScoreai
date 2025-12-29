import { Mail, Shield, FileText } from 'lucide-react';

interface FooterProps {
  language: 'fr' | 'en';
  setCurrentPage?: (page: string) => void;
}

const content = {
  fr: {
    product: 'Produit',
    analyze: 'Analyser',
    createCV: 'Créer un CV',
    pricing: 'Tarifs',
    legal: 'Légal',
    privacy: 'Confidentialité',
    terms: 'Mentions légales',
    contact: 'Contact',
    email: 'CVScoreai@outlook.com',
    aiDisclaimer: 'Analyse assistée par intelligence artificielle. Résultats à titre indicatif.',
    copyright: '© 2025 CVScore.ai. Tous droits réservés.',
  },
  en: {
    product: 'Product',
    analyze: 'Analyze',
    createCV: 'Create Resume',
    pricing: 'Pricing',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Legal Notice',
    contact: 'Contact',
    email: 'CVScoreai@outlook.com',
    aiDisclaimer: 'AI-assisted analysis. Results are for informational purposes only.',
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
        {/* Logo */}
        <div className="mb-12">
          <div className="text-2xl text-white mb-2">
            CVScore<span className="text-blue-400">.ai</span>
          </div>
        </div>

        {/* 3 Columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Product */}
          <div>
            <h3 className="text-white mb-4">{t.product}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.analyze}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('creer-cv')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.createCV}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('pricing')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.pricing}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h3 className="text-white mb-4">{t.legal}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => handleNavClick('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.privacy}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('legal')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.terms}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white mb-4">{t.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="mailto:CVScoreai@outlook.com" 
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  {t.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-sm text-gray-500">{t.copyright}</p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>🇫🇷 France</span>
              <span>🇨🇭 Suisse</span>
              <span>🇪🇺 Europe</span>
            </div>
          </div>

          {/* AI Disclaimer - Sous-footer discret */}
          <div className="text-center">
            <p className="text-xs text-gray-600">
              {t.aiDisclaimer}
            </p>
            {/* SEO discret */}
            <p className="text-xs text-gray-500 mt-2">
              {language === 'fr' 
                ? 'Analyse de CV par intelligence artificielle · Création et optimisation de CV · Compatible ATS · Europe'
                : 'AI-powered resume analysis · Resume creation and optimization · ATS compatible · Europe'}
            </p>
            {/* RGPD Footer */}
            <p className="text-xs text-gray-500 mt-3 border-t border-gray-200 pt-3">
              {language === 'fr' 
                ? 'Données hébergées de manière sécurisée.\nConforme au RGPD et aux standards européens de protection des données.'
                : 'Data securely hosted.\nCompliant with GDPR and European data protection standards.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}