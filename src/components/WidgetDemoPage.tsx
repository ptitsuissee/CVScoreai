import { useState } from 'react';
import { CVAnalysisWidgetPremium } from './CVAnalysisWidgetPremium';
import { Lock, Unlock } from 'lucide-react';

interface WidgetDemoPageProps {
  language: 'fr' | 'en';
  onNavigate: (page: string) => void;
}

const content = {
  fr: {
    title: 'Widget d\'Analyse CV — Démo',
    subtitle: 'Testez les versions gratuite et Premium du widget',
    toggleFree: 'Mode Gratuit',
    togglePremium: 'Mode Premium',
    description: 'Utilisez le toggle ci-dessus pour voir la différence entre les versions gratuite et Premium.',
  },
  en: {
    title: 'CV Analysis Widget — Demo',
    subtitle: 'Test the free and Premium versions of the widget',
    toggleFree: 'Free Mode',
    togglePremium: 'Premium Mode',
    description: 'Use the toggle above to see the difference between free and Premium versions.',
  },
};

export function WidgetDemoPage({ language, onNavigate }: WidgetDemoPageProps) {
  const [isPremium, setIsPremium] = useState(false);
  const t = content[language];

  const handleUpgrade = () => {
    onNavigate('pricing');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-4">{t.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{t.subtitle}</p>

          {/* Premium Toggle */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setIsPremium(false)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                !isPremium
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Lock size={18} />
              <span>{t.toggleFree}</span>
            </button>
            <button
              onClick={() => setIsPremium(true)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                isPremium
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Unlock size={18} />
              <span>{t.togglePremium}</span>
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">{t.description}</p>
        </div>

        {/* Widget */}
        <CVAnalysisWidgetPremium
          language={language}
          onUpgradePremium={handleUpgrade}
          embedded={false}
          isPremium={isPremium}
        />

        {/* Info Box */}
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
          <h3 className="text-lg text-gray-900 mb-3">
            {isPremium
              ? language === 'fr'
                ? '🎉 Mode Premium activé'
                : '🎉 Premium mode enabled'
              : language === 'fr'
              ? '🔒 Mode Gratuit'
              : '🔒 Free mode'}
          </h3>
          <p className="text-sm text-gray-700">
            {isPremium
              ? language === 'fr'
                ? 'Vous avez accès à toutes les fonctionnalités : feedback ligne par ligne, optimisation ATS détaillée, amélioration automatique, et export PDF.'
                : 'You have access to all features: line-by-line feedback, detailed ATS optimization, automatic improvement, and PDF export.'
              : language === 'fr'
              ? 'Vous voyez la version gratuite avec : score global, résumé, 2 conseils. Les sections Premium sont bloquées avec un overlay élégant.'
              : 'You see the free version with: overall score, summary, 2 tips. Premium sections are locked with an elegant overlay.'}
          </p>
        </div>
      </div>
    </div>
  );
}
