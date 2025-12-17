import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'fr' | 'en';
  currentPage: string;
  setCurrentPage: (page: any) => void;
  isLoggedIn: boolean;
}

const content = {
  fr: {
    nav: {
      home: 'Accueil',
      pricing: 'Tarifs',
      examples: 'Exemples',
      dashboard: 'Dashboard',
      contact: 'Contact',
    },
    cta: 'Analyser mon CV',
  },
  en: {
    nav: {
      home: 'Home',
      pricing: 'Pricing',
      examples: 'Examples',
      dashboard: 'Dashboard',
      contact: 'Contact',
    },
    cta: 'Analyze my resume',
  },
};

export function MobileMenu({
  isOpen,
  onClose,
  language,
  currentPage,
  setCurrentPage,
  isLoggedIn,
}: MobileMenuProps) {
  const t = content[language];

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl text-gray-900">CVScore.ai</h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto py-6">
                <div className="space-y-2 px-4">
                  <button
                    onClick={() => handleNavigation('home')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      currentPage === 'home'
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {t.nav.home}
                  </button>

                  <button
                    onClick={() => handleNavigation('pricing')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      currentPage === 'pricing'
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {t.nav.pricing}
                  </button>

                  <button
                    onClick={() => handleNavigation('examples')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      currentPage === 'examples'
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {t.nav.examples}
                  </button>

                  {isLoggedIn && (
                    <button
                      onClick={() => handleNavigation('dashboard')}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        currentPage === 'dashboard'
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {t.nav.dashboard}
                    </button>
                  )}

                  <a
                    href="mailto:CVScoreai@outlook.com"
                    className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {t.nav.contact}
                  </a>
                </div>
              </nav>

              {/* CTA */}
              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    handleNavigation('home');
                    setTimeout(() => {
                      document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                  className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  {t.cta}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
