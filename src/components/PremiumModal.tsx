import { X, Crown, Zap, Check, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'fr' | 'en';
  onSelectPlan: (planType: 'monthly' | 'oneTime') => void;
}

const content = {
  fr: {
    title: 'Choisis ton plan Premium',
    monthly: {
      name: 'Premium Mensuel',
      price: '6,99 €',
      period: '/ mois',
      badge: 'Recommandé',
      features: [
        'Analyses Premium illimitées',
        'Conseils détaillés ligne par ligne',
        'Export PDF sans filigrane',
      ],
      cta: 'Continuer (mensuel)',
      note: 'Annulable à tout moment',
    },
    oneTime: {
      name: 'Premium Paiement Unique',
      price: '12,99 €',
      period: 'une fois',
      features: [
        '3 analyses Premium',
        'Conseils détaillés',
        'Export PDF sans filigrane',
      ],
      cta: 'Continuer (paiement unique)',
      note: 'Pas d\'abonnement',
    },
    back: 'Retour',
    legal: 'Paiement géré par Stripe. CVScore.ai ne stocke aucune donnée bancaire.',
  },
  en: {
    title: 'Choose your Premium plan',
    monthly: {
      name: 'Premium Monthly',
      price: '$6.99',
      period: '/ month',
      badge: 'Recommended',
      features: [
        'Unlimited Premium analyses',
        'Line-by-line feedback',
        'PDF export without watermark',
      ],
      cta: 'Continue (monthly)',
      note: 'Cancel anytime',
    },
    oneTime: {
      name: 'Premium One-time',
      price: '$12.99',
      period: 'one-time',
      features: [
        '3 Premium analyses',
        'Detailed feedback',
        'PDF export without watermark',
      ],
      cta: 'Continue (one-time)',
      note: 'No subscription',
    },
    back: 'Back',
    legal: 'Payments are handled by Stripe. CVScore.ai does not store any banking information.',
  },
};

export function PremiumModal({ isOpen, onClose, language, onSelectPlan }: PremiumModalProps) {
  const t = content[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl my-8"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Crown className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl text-gray-900">{t.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="text-gray-600" size={24} />
                </button>
              </div>

              {/* Plans */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Monthly Plan */}
                  <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-600 p-8 shadow-lg">
                    {/* Badge */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm shadow-lg">
                      {t.monthly.badge}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                      <Zap className="text-white" size={28} />
                    </div>

                    {/* Plan name */}
                    <h3 className="text-xl text-gray-900 mb-2">{t.monthly.name}</h3>

                    {/* Price */}
                    <div className="mb-1">
                      <span className="text-4xl text-gray-900">{t.monthly.price}</span>
                      <span className="text-gray-600 ml-1">{t.monthly.period}</span>
                    </div>
                    <p className="text-sm text-green-600 mb-6">{t.monthly.note}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {t.monthly.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="text-green-600" size={14} />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => onSelectPlan('monthly')}
                      className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
                    >
                      {t.monthly.cta}
                    </button>
                  </div>

                  {/* One-time Plan */}
                  <div className="relative bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-blue-300 hover:shadow-lg transition-all">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                      <Crown className="text-gray-600" size={28} />
                    </div>

                    {/* Plan name */}
                    <h3 className="text-xl text-gray-900 mb-2">{t.oneTime.name}</h3>

                    {/* Price */}
                    <div className="mb-1">
                      <span className="text-4xl text-gray-900">{t.oneTime.price}</span>
                      <span className="text-gray-600 ml-1">{t.oneTime.period}</span>
                    </div>
                    <p className="text-sm text-blue-600 mb-6">{t.oneTime.note}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {t.oneTime.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="text-green-600" size={14} />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => onSelectPlan('oneTime')}
                      className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all"
                    >
                      {t.oneTime.cta}
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Shield size={16} />
                    <span>{t.legal}</span>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    ← {t.back}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}