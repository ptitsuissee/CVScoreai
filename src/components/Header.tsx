import { Menu, User, X, Crown, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  currentPage: string;
  setCurrentPage: (page: any) => void;
  isLoggedIn: boolean;
  onOpenLoginModal?: () => void;
  userEmail?: string;
}

const content = {
  fr: {
    analyze: 'Analyser',
    createCV: 'Créer un CV',
    pricing: 'Tarifs',
    login: 'Connexion',
    cta: 'Analyser mon CV',
    dashboard: 'Mon espace',
  },
  en: {
    analyze: 'Analyze',
    createCV: 'Create Resume',
    pricing: 'Pricing',
    login: 'Login',
    cta: 'Analyze my Resume',
    dashboard: 'My Dashboard',
  },
};

export function Header({ language, setLanguage, currentPage, setCurrentPage, isLoggedIn, onOpenLoginModal, userEmail }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[language];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex-shrink-0 text-2xl tracking-tight text-gray-900 hover:opacity-80 transition-opacity"
          >
            CVScore<span className="text-blue-600">.ai</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('creer-cv')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.createCV}
            </button>
            <button 
              onClick={() => handleNavClick('pricing')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.pricing}
            </button>
            
            {/* Connexion discrète - visible seulement si pas connecté */}
            {!isLoggedIn && onOpenLoginModal && (
              <button 
                onClick={onOpenLoginModal}
                className="text-gray-500 hover:text-gray-700 transition-colors text-sm flex items-center gap-2"
              >
                <User size={16} />
                {t.login}
              </button>
            )}
            
            {/* Dashboard si connecté */}
            {isLoggedIn && (
              <button 
                onClick={() => handleNavClick('user-dashboard')}
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
              >
                <User size={18} />
                <span>{t.dashboard}</span>
              </button>
            )}
          </nav>

          {/* CTA + Dashboard + Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dashboard Button - Super visible pour Premium */}
            {isLoggedIn && (
              <button 
                onClick={() => handleNavClick('dashboard')}
                className="px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:shadow-xl transition-all flex items-center gap-2 shadow-lg shadow-orange-500/30"
              >
                <Crown size={20} />
                <span className="font-medium">{t.dashboard}</span>
              </button>
            )}

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded transition-all ${
                  language === 'fr'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition-all ${
                  language === 'en'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => handleNavClick('home')}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t.cta}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {/* Connexion en mobile si pas connecté */}
              {!isLoggedIn && onOpenLoginModal && (
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLoginModal();
                  }}
                  className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  <User size={20} />
                  <span className="font-medium">{t.login}</span>
                </button>
              )}
              
              {/* Dashboard en premier pour utilisateurs Premium - super visible */}
              {isLoggedIn && (
                <button 
                  onClick={() => handleNavClick('dashboard')}
                  className="px-5 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Crown size={20} />
                  <span className="font-medium">{t.dashboard}</span>
                </button>
              )}
              
              <button 
                onClick={() => handleNavClick('creer-cv')}
                className="text-gray-600 hover:text-gray-900 text-left"
              >
                {t.createCV}
              </button>
              <button 
                onClick={() => handleNavClick('pricing')}
                className="text-gray-600 hover:text-gray-900 text-left"
              >
                {t.pricing}
              </button>
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-4 py-2 rounded ${
                    language === 'fr' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 rounded ${
                    language === 'en' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  EN
                </button>
              </div>
              <button
                onClick={() => handleNavClick('home')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700"
              >
                {t.cta}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}