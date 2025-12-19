import { useState } from 'react';
import { FreemiumAnalysisWidget } from './FreemiumAnalysisWidget';
import { Crown, Lock, Unlock, Check } from 'lucide-react';

interface FreemiumWidgetPageProps {
  language: 'fr' | 'en';
  onNavigate: (page: string) => void;
}

const content = {
  fr: {
    title: 'Widget Analyse CV — Version Freemium',
    subtitle: 'Testez l\'expérience freemium optimisée pour la conversion',
    toggleFree: 'Mode Gratuit',
    togglePremium: 'Mode Premium',
    currentMode: 'Mode actuel',
    features: {
      free: {
        title: 'Fonctionnalités gratuites',
        items: [
          'Score global animé',
          '4 sous-scores détaillés',
          'Résumé de l\'analyse IA',
          '3 priorités à corriger',
          '2 conseils gratuits',
        ],
      },
      premium: {
        title: 'Fonctionnalités Premium',
        items: [
          'Feedback ligne par ligne',
          'Optimisation ATS détaillée',
          'Suggestions de reformulation',
          'Export PDF professionnel',
          'Analyses illimitées',
        ],
      },
    },
    conversionPoints: {
      title: 'Points de conversion',
      items: [
        'CTA après affichage du score',
        'Sections Premium verrouillées (blur + overlay)',
        'Carte Premium animée en fin d\'analyse',
        'Messages micro-copy optimisés',
        'Pricing intégré avec 2 plans',
      ],
    },
  },
  en: {
    title: 'CV Analysis Widget — Freemium Version',
    subtitle: 'Test the freemium experience optimized for conversion',
    toggleFree: 'Free Mode',
    togglePremium: 'Premium Mode',
    currentMode: 'Current mode',
    features: {
      free: {
        title: 'Free features',
        items: [
          'Animated overall score',
          '4 detailed subscores',
          'AI analysis summary',
          '3 improvement priorities',
          '2 free tips',
        ],
      },
      premium: {
        title: 'Premium features',
        items: [
          'Line-by-line feedback',
          'Detailed ATS optimization',
          'Rewriting suggestions',
          'Professional PDF export',
          'Unlimited analyses',
        ],
      },
    },
    conversionPoints: {
      title: 'Conversion points',
      items: [
        'CTA after score display',
        'Premium sections locked (blur + overlay)',
        'Animated Premium card at end of analysis',
        'Optimized micro-copy messages',
        'Integrated pricing with 2 plans',
      ],
    },
  },
};

export function FreemiumWidgetPage({ language, onNavigate }: FreemiumWidgetPageProps) {
  const [isPremium, setIsPremium] = useState(false);
  const t = content[language];

  const handleUpgrade = () => {
    onNavigate('pricing');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-4">{t.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{t.subtitle}</p>

          {/* Mode Toggle */}
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl p-2 shadow-xl border-2 border-gray-200">
            <button
              onClick={() => setIsPremium(false)}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl transition-all ${
                !isPremium
                  ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Lock size={20} />
              <span className="font-medium">{t.toggleFree}</span>
            </button>
            <button
              onClick={() => setIsPremium(true)}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl transition-all ${
                isPremium
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Crown size={20} />
              <span className="font-medium">{t.togglePremium}</span>
            </button>
          </div>

          {/* Current Mode Badge */}
          <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 border-2 border-blue-200 text-blue-700 px-6 py-3 rounded-full">
            {isPremium ? <Unlock size={18} /> : <Lock size={18} />}
            <span className="text-sm">
              {t.currentMode}: <strong>{isPremium ? 'Premium' : 'Gratuit'}</strong>
            </span>
          </div>
        </div>

        {/* Widget */}
        <div className="mb-12">
          <FreemiumAnalysisWidget
            language={language}
            onUpgradePremium={handleUpgrade}
            embedded={false}
            isPremium={isPremium}
          />
        </div>

        {/* Feature Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Free Features */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <Lock className="text-gray-600" size={24} />
              </div>
              <h3 className="text-2xl text-gray-900">{t.features.free.title}</h3>
            </div>
            <ul className="space-y-3">
              {t.features.free.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <Check className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Features */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-xl text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Crown className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-2xl">{t.features.premium.title}</h3>
            </div>
            <ul className="space-y-3">
              {t.features.premium.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Conversion Points */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl text-gray-900 mb-6">{t.conversionPoints.title}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.conversionPoints.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-orange-200">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 p-8 bg-blue-600 text-white rounded-2xl shadow-xl">
          <h3 className="text-2xl mb-4">
            {isPremium ? '🎉 ' : '🔒 '}
            {isPremium
              ? language === 'fr'
                ? 'Mode Premium activé'
                : 'Premium mode enabled'
              : language === 'fr'
              ? 'Mode Gratuit actif'
              : 'Free mode active'}
          </h3>
          <p className="text-blue-100 leading-relaxed">
            {isPremium
              ? language === 'fr'
                ? 'Vous avez accès à toutes les fonctionnalités : feedback ligne par ligne, optimisation ATS détaillée, suggestions de reformulation, et export PDF professionnel. Les sections Premium sont complètement débloquées.'
                : 'You have access to all features: line-by-line feedback, detailed ATS optimization, rewriting suggestions, and professional PDF export. Premium sections are fully unlocked.'
              : language === 'fr'
              ? 'Vous voyez la version gratuite avec : score global animé, 4 sous-scores, résumé IA, priorités et 2 conseils. Les sections Premium sont verrouillées avec un effet blur élégant et des overlays conversion-optimisés.'
              : 'You see the free version with: animated overall score, 4 subscores, AI summary, priorities and 2 tips. Premium sections are locked with elegant blur effect and conversion-optimized overlays.'}
          </p>
        </div>
      </div>
    </div>
  );
}
