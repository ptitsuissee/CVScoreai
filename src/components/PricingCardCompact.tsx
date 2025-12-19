import { Check, Crown, Zap, Shield } from 'lucide-react';

interface PricingCardCompactProps {
  language: 'fr' | 'en';
  onSelectPlan: (plan: 'monthly' | 'lifetime') => void;
}

const content = {
  fr: {
    title: 'Débloquez toutes les fonctionnalités',
    monthly: {
      name: 'Premium Mensuel',
      price: '9,99 €',
      period: '/ mois',
      badge: 'Flexible',
    },
    lifetime: {
      name: 'Paiement Unique',
      price: '12,99 €',
      period: 'à vie',
      badge: 'Populaire',
    },
    features: [
      'Analyses illimitées',
      'Export PDF professionnel',
      'Optimisation ATS avancée',
      'Réécriture automatique',
    ],
    trust: {
      instant: 'Accès immédiat',
      noCommitment: 'Sans engagement',
      secure: 'Paiement sécurisé',
    },
    cta: 'Choisir ce plan',
  },
  en: {
    title: 'Unlock all features',
    monthly: {
      name: 'Monthly Premium',
      price: '€9.99',
      period: '/ month',
      badge: 'Flexible',
    },
    lifetime: {
      name: 'One-Time Payment',
      price: '€12.99',
      period: 'lifetime',
      badge: 'Popular',
    },
    features: [
      'Unlimited analyses',
      'Professional PDF export',
      'Advanced ATS optimization',
      'Automatic rewriting',
    ],
    trust: {
      instant: 'Instant access',
      noCommitment: 'No commitment',
      secure: 'Secure payment',
    },
    cta: 'Choose this plan',
  },
};

export function PricingCardCompact({ language, onSelectPlan }: PricingCardCompactProps) {
  const t = content[language];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Crown className="text-white" size={20} />
        </div>
        <h3 className="text-xl text-gray-900">{t.title}</h3>
      </div>

      {/* Plans */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {/* Monthly Plan */}
        <div className="relative bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-blue-500 transition-all cursor-pointer group">
          <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            {t.monthly.badge}
          </div>
          <div className="mb-3">
            <div className="text-sm text-gray-600 mb-1">{t.monthly.name}</div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl text-gray-900">{t.monthly.price}</span>
              <span className="text-sm text-gray-500">{t.monthly.period}</span>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan('monthly')}
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            {t.cta}
          </button>
        </div>

        {/* Lifetime Plan */}
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-4 text-white cursor-pointer group shadow-lg">
          <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded-full">
            {t.lifetime.badge}
          </div>
          <div className="mb-3">
            <div className="text-sm text-blue-100 mb-1">{t.lifetime.name}</div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl">{t.lifetime.price}</span>
              <span className="text-sm text-blue-100">{t.lifetime.period}</span>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan('lifetime')}
            className="w-full py-2 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors text-sm"
          >
            {t.cta}
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-2 mb-6">
        {t.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
            <Check className="text-green-600 flex-shrink-0" size={16} />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Trust badges */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
          <Zap size={14} className="text-blue-600" />
          <span>{t.trust.instant}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
          <Shield size={14} className="text-blue-600" />
          <span>{t.trust.secure}</span>
        </div>
      </div>

      {/* Stripe logo */}
      <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-center gap-2 text-xs text-gray-500">
        <Shield size={12} />
        <span>Powered by Stripe</span>
      </div>
    </div>
  );
}
