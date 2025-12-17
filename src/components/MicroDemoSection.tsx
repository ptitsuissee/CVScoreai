import { Check, Crown, ArrowRight } from 'lucide-react';

interface MicroDemoSectionProps {
  language: 'fr' | 'en';
  onUpgradePremium: () => void;
}

const content = {
  fr: {
    score: {
      title: 'Score Global',
      value: '72',
      outOf: '/ 100',
    },
    subscores: [
      { name: 'Clarté', value: 85, color: 'blue' },
      { name: 'Impact', value: 65, color: 'purple' },
      { name: 'Structure', value: 90, color: 'green' },
      { name: 'ATS', value: 70, color: 'orange' },
    ],
    suggestions: [
      'Ajoutez des réalisations quantifiables',
      'Optimisez pour les systèmes ATS',
    ],
    premium: {
      badge: 'Premium',
      title: 'Débloquez l\'analyse complète',
      description: 'Feedback ligne par ligne et amélioration automatique disponibles avec Premium',
      cta: 'Débloquer l\'analyse complète',
    },
  },
  en: {
    score: {
      title: 'Overall Score',
      value: '72',
      outOf: '/ 100',
    },
    subscores: [
      { name: 'Clarity', value: 85, color: 'blue' },
      { name: 'Impact', value: 65, color: 'purple' },
      { name: 'Structure', value: 90, color: 'green' },
      { name: 'ATS', value: 70, color: 'orange' },
    ],
    suggestions: [
      'Add quantifiable achievements',
      'Optimize for ATS systems',
    ],
    premium: {
      badge: 'Premium',
      title: 'Unlock full analysis',
      description: 'Advanced feedback available with Premium',
      cta: 'Unlock full analysis',
    },
  },
};

const colorMap = {
  blue: 'bg-blue-600',
  purple: 'bg-purple-600',
  green: 'bg-green-600',
  orange: 'bg-orange-600',
};

export function MicroDemoSection({ language, onUpgradePremium }: MicroDemoSectionProps) {
  const t = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Demo Card */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 shadow-xl p-8">
          {/* Score Display */}
          <div className="text-center mb-8">
            <div className="inline-flex items-baseline gap-2">
              <span className="text-6xl sm:text-7xl text-blue-600">{t.score.value}</span>
              <span className="text-2xl text-gray-400">{t.score.outOf}</span>
            </div>
            <p className="text-gray-600 mt-2">{t.score.title}</p>
          </div>

          {/* Sub-scores Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {t.subscores.map((subscore, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-700">{subscore.name}</span>
                  <span className="text-sm text-gray-900">{subscore.value}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${colorMap[subscore.color as keyof typeof colorMap]} rounded-full transition-all`}
                    style={{ width: `${subscore.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
            <div className="space-y-3">
              {t.suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-700">{suggestion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium CTA */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Crown className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg text-gray-900">{t.premium.title}</h3>
                  <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                    {t.premium.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{t.premium.description}</p>
              </div>
            </div>

            <button
              onClick={onUpgradePremium}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              {t.premium.cta}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
