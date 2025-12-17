import { Crown, ArrowRight, Check } from 'lucide-react';

interface PremiumTransitionSectionProps {
  language: 'fr' | 'en';
  onUpgradePremium: () => void;
}

const content = {
  fr: {
    badge: 'Premium',
    title: 'Envie d\'un feedback ligne par ligne et d\'une amélioration automatique de votre CV ?',
    features: [
      'Conseils détaillés pour chaque section',
      'Amélioration automatique du texte',
      'Export PDF sans filigrane',
      'Analyses illimitées',
    ],
    cta: 'Passer Premium',
    price: 'À partir de 6,99 €',
  },
  en: {
    badge: 'Premium',
    title: 'Want line-by-line feedback and automatic resume improvement?',
    features: [
      'Detailed feedback for each section',
      'Automatic text improvement',
      'PDF export without watermark',
      'Unlimited analyses',
    ],
    cta: 'Upgrade to Premium',
    price: 'From $6.99',
  },
};

export function PremiumTransitionSection({
  language,
  onUpgradePremium,
}: PremiumTransitionSectionProps) {
  const t = content[language];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-200">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left side - Content */}
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6">
                <Crown size={16} />
                <span className="text-sm">{t.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6 leading-tight">
                {t.title}
              </h2>

              <div className="space-y-4 mb-8">
                {t.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-green-600" size={14} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={onUpgradePremium}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
                >
                  {t.cta}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <div className="text-sm text-gray-600">
                  {t.price}
                </div>
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 flex items-center justify-center">
              <div className="space-y-4 w-full">
                {/* Mockup of premium features */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm">
                      {language === 'fr'
                        ? 'Analyse ligne par ligne'
                        : 'Line-by-line analysis'}
                    </span>
                  </div>
                  <div className="h-2 bg-white/20 rounded w-3/4"></div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white text-sm">
                      {language === 'fr'
                        ? 'Optimisation ATS avancée'
                        : 'Advanced ATS optimization'}
                    </span>
                  </div>
                  <div className="h-2 bg-white/20 rounded w-2/3"></div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white text-sm">
                      {language === 'fr'
                        ? 'Amélioration automatique'
                        : 'Automatic improvement'}
                    </span>
                  </div>
                  <div className="h-2 bg-white/20 rounded w-5/6"></div>
                </div>

                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm">
                    <Crown size={16} />
                    <span>Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
