import { Check, X, Lock, Crown, Sparkles, Zap, FileText, Target, BarChart3, Download } from 'lucide-react';

interface FreemiumComparisonVisualProps {
  language: 'fr' | 'en';
  onUpgradePremium?: () => void;
}

const content = {
  fr: {
    title: 'Gratuit vs Premium',
    subtitle: 'Débloquez tout le potentiel de votre CV',
    free: {
      title: 'Version Gratuite',
      price: '0€',
      cta: 'Essayer gratuitement',
      features: [
        { label: 'Score global sur 100', included: true, icon: BarChart3 },
        { label: '4 scores détaillés', included: true, icon: Target },
        { label: 'Analyse basique', included: true, icon: FileText },
        { label: 'Conseils généraux', included: true, icon: Sparkles },
        { label: 'Feedback ligne par ligne', included: false, icon: FileText },
        { label: 'Optimisation ATS', included: false, icon: Target },
        { label: 'Suggestions reformulation', included: false, icon: Zap },
        { label: 'Export PDF rapport', included: false, icon: Download },
      ],
    },
    premium: {
      title: 'Version Premium',
      price: '12,99€',
      priceNote: 'Paiement unique à vie',
      cta: 'Débloquer Premium',
      badge: 'Recommandé',
      features: [
        { label: 'Score global sur 100', included: true, icon: BarChart3 },
        { label: '4 scores détaillés', included: true, icon: Target },
        { label: 'Analyse basique', included: true, icon: FileText },
        { label: 'Conseils généraux', included: true, icon: Sparkles },
        { label: 'Feedback ligne par ligne', included: true, icon: FileText, premium: true },
        { label: 'Optimisation ATS', included: true, icon: Target, premium: true },
        { label: 'Suggestions reformulation', included: true, icon: Zap, premium: true },
        { label: 'Export PDF rapport', included: true, icon: Download, premium: true },
      ],
    },
    savings: 'Économisez 7€ vs mensuel',
  },
  en: {
    title: 'Free vs Premium',
    subtitle: 'Unlock your resume\'s full potential',
    free: {
      title: 'Free Version',
      price: '$0',
      cta: 'Try for free',
      features: [
        { label: 'Overall score out of 100', included: true, icon: BarChart3 },
        { label: '4 detailed scores', included: true, icon: Target },
        { label: 'Basic analysis', included: true, icon: FileText },
        { label: 'General advice', included: true, icon: Sparkles },
        { label: 'Line-by-line feedback', included: false, icon: FileText },
        { label: 'ATS optimization', included: false, icon: Target },
        { label: 'Rewriting suggestions', included: false, icon: Zap },
        { label: 'PDF report export', included: false, icon: Download },
      ],
    },
    premium: {
      title: 'Premium Version',
      price: '$12.99',
      priceNote: 'One-time payment, lifetime access',
      cta: 'Unlock Premium',
      badge: 'Recommended',
      features: [
        { label: 'Overall score out of 100', included: true, icon: BarChart3 },
        { label: '4 detailed scores', included: true, icon: Target },
        { label: 'Basic analysis', included: true, icon: FileText },
        { label: 'General advice', included: true, icon: Sparkles },
        { label: 'Line-by-line feedback', included: true, icon: FileText, premium: true },
        { label: 'ATS optimization', included: true, icon: Target, premium: true },
        { label: 'Rewriting suggestions', included: true, icon: Zap, premium: true },
        { label: 'PDF report export', included: true, icon: Download, premium: true },
      ],
    },
    savings: 'Save $7 vs monthly',
  },
};

export function FreemiumComparisonVisual({ language, onUpgradePremium }: FreemiumComparisonVisualProps) {
  const t = content[language];

  const renderFeature = (feature: any, isPremiumPlan: boolean) => {
    const Icon = feature.icon;
    const isIncluded = feature.included;
    const isPremiumFeature = feature.premium;

    return (
      <div
        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
          isIncluded
            ? isPremiumFeature
              ? 'bg-gradient-to-r from-purple-50 to-blue-50'
              : 'bg-gray-50'
            : 'bg-gray-50 opacity-50'
        }`}
      >
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
            isIncluded
              ? isPremiumFeature
                ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white'
                : 'bg-green-100 text-green-600'
              : 'bg-gray-200 text-gray-400'
          }`}
        >
          {isIncluded ? <Check size={20} /> : <X size={20} />}
        </div>
        <div className="flex-1 flex items-center gap-2">
          <Icon size={18} className={isIncluded ? 'text-gray-700' : 'text-gray-400'} />
          <span className={`${isIncluded ? 'text-gray-900' : 'text-gray-500'}`}>{feature.label}</span>
          {isPremiumFeature && (
            <Crown size={16} className="text-yellow-500" />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Free plan */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 hover:shadow-xl transition-all">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-gray-600" size={32} />
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">{t.free.title}</h3>
              <div className="text-4xl text-gray-900 mb-1">{t.free.price}</div>
              <div className="text-sm text-gray-600 mb-6">
                {language === 'fr' ? 'Pour toujours' : 'Forever'}
              </div>
              <button
                className="w-full py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {t.free.cta}
              </button>
            </div>

            {/* Features */}
            <div className="space-y-2">
              {t.free.features.map((feature, index) => (
                <div key={index}>{renderFeature(feature, false)}</div>
              ))}
            </div>
          </div>

          {/* Premium plan */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-2xl border-2 border-purple-400 p-8 shadow-2xl relative hover:scale-105 transition-all">
            {/* Recommended badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full text-sm shadow-lg flex items-center gap-2">
                <Crown size={16} />
                <span>{t.premium.badge}</span>
              </div>
            </div>

            <div className="text-center mb-8 text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="text-yellow-300" size={32} />
              </div>
              <h3 className="text-2xl mb-2">{t.premium.title}</h3>
              <div className="text-4xl mb-1">{t.premium.price}</div>
              <div className="text-sm text-blue-200 mb-2">{t.premium.priceNote}</div>
              <div className="inline-block px-3 py-1 bg-green-400 text-gray-900 rounded-full text-xs mb-6">
                {t.savings}
              </div>
              <button
                onClick={onUpgradePremium}
                className="w-full py-3 bg-white text-purple-700 rounded-xl hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <Sparkles size={20} />
                <span>{t.premium.cta}</span>
                <Crown size={20} className="group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-2">
              {t.premium.features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="flex items-center gap-3 p-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        feature.premium
                          ? 'bg-gradient-to-br from-yellow-400 to-orange-400 text-gray-900'
                          : 'bg-white/20 text-white'
                      }`}
                    >
                      <Check size={20} />
                    </div>
                    <div className="flex-1 flex items-center gap-2 text-white">
                      {React.createElement(feature.icon, { size: 18 })}
                      <span>{feature.label}</span>
                      {feature.premium && (
                        <Sparkles size={16} className="text-yellow-300" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8 text-center">
          <h3 className="text-2xl text-gray-900 mb-3">
            {language === 'fr'
              ? '🚀 Prêt à maximiser vos chances ?'
              : '🚀 Ready to maximize your chances?'}
          </h3>
          <p className="text-gray-700 mb-6">
            {language === 'fr'
              ? 'Déverrouillez toutes les fonctionnalités Premium et transformez votre CV en outil de réussite.'
              : 'Unlock all Premium features and transform your resume into a success tool.'}
          </p>
          <button
            onClick={onUpgradePremium}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all text-lg inline-flex items-center gap-3 group"
          >
            <Crown size={24} />
            <span>{language === 'fr' ? 'Passer à Premium maintenant' : 'Upgrade to Premium now'}</span>
            <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
