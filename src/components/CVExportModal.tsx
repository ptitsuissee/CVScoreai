import { X, Crown, Download, Check, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CVExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'fr' | 'en';
  onSelectPlan: (plan: 'oneTime' | 'monthly') => void;
}

const content = {
  fr: {
    title: 'Télécharger votre CV',
    subtitle: 'Choisissez l\'offre qui correspond à vos besoins',
    oneTime: {
      title: 'Export unique',
      price: '12,99 €',
      period: 'Paiement unique',
      badge: 'Le plus populaire',
      features: [
        '1 export PDF haute qualité',
        'CV sans watermark',
        'Analyse Premium incluse',
        'Accès immédiat',
        'Format ATS-friendly',
      ],
      cta: 'Télécharger mon CV (1 fois)',
    },
    monthly: {
      title: 'Abonnement mensuel',
      price: '9,99 €',
      period: 'par mois',
      badge: 'Meilleure valeur',
      features: [
        'CV illimités',
        'Exports PDF illimités',
        'Accès IA complet',
        'Modifications illimitées',
        'Analyses Premium illimitées',
        'Support prioritaire',
        'Annulation à tout moment',
      ],
      cta: 'Accès illimité',
    },
    comparison: {
      title: 'Pourquoi Premium ?',
      free: 'Gratuit',
      premium: 'Premium',
      items: [
        { feature: 'Créer et modifier le CV', free: true, premium: true },
        { feature: 'Aperçu en temps réel', free: true, premium: true },
        { feature: 'Suggestions IA (limitées)', free: true, premium: false },
        { feature: 'Export PDF sans watermark', free: false, premium: true },
        { feature: 'Analyses Premium', free: false, premium: true },
        { feature: 'IA illimitée', free: false, premium: true },
        { feature: 'Templates supplémentaires', free: false, premium: true },
      ],
    },
    guarantee: '✓ Paiement sécurisé • Garantie satisfait ou remboursé 30 jours',
    close: 'Fermer',
  },
  en: {
    title: 'Download your Resume',
    subtitle: 'Choose the plan that fits your needs',
    oneTime: {
      title: 'One-time Export',
      price: '€12.99',
      period: 'One-time payment',
      badge: 'Most popular',
      features: [
        '1 high-quality PDF export',
        'Resume without watermark',
        'Premium analysis included',
        'Immediate access',
        'ATS-friendly format',
      ],
      cta: 'Download my resume (once)',
    },
    monthly: {
      title: 'Monthly Subscription',
      price: '€9.99',
      period: 'per month',
      badge: 'Best value',
      features: [
        'Unlimited resumes',
        'Unlimited PDF exports',
        'Full AI access',
        'Unlimited modifications',
        'Unlimited Premium analyses',
        'Priority support',
        'Cancel anytime',
      ],
      cta: 'Unlimited access',
    },
    comparison: {
      title: 'Why Premium?',
      free: 'Free',
      premium: 'Premium',
      items: [
        { feature: 'Create and edit resume', free: true, premium: true },
        { feature: 'Live preview', free: true, premium: true },
        { feature: 'AI suggestions (limited)', free: true, premium: false },
        { feature: 'PDF export without watermark', free: false, premium: true },
        { feature: 'Premium analyses', free: false, premium: true },
        { feature: 'Unlimited AI', free: false, premium: true },
        { feature: 'Additional templates', free: false, premium: true },
      ],
    },
    guarantee: '✓ Secure payment • 30-day money-back guarantee',
    close: 'Close',
  },
};

export function CVExportModal({ isOpen, onClose, language, onSelectPlan }: CVExportModalProps) {
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full my-8">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl text-gray-900 mb-1">{t.title}</h2>
                    <p className="text-gray-600">{t.subtitle}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Plans */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* One-time Plan */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-300 p-6 relative"
                  >
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                        <Sparkles size={14} />
                        {t.oneTime.badge}
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <h3 className="text-xl text-gray-900 mb-2">{t.oneTime.title}</h3>
                      <div className="text-4xl text-blue-600 mb-1">{t.oneTime.price}</div>
                      <p className="text-sm text-gray-600">{t.oneTime.period}</p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {t.oneTime.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => onSelectPlan('oneTime')}
                      className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={20} />
                      {t.oneTime.cta}
                    </button>
                  </motion.div>

                  {/* Monthly Plan */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-4 border-orange-400 p-6 relative"
                  >
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                        <Crown size={14} />
                        {t.monthly.badge}
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <h3 className="text-xl text-gray-900 mb-2">{t.monthly.title}</h3>
                      <div className="text-4xl text-orange-600 mb-1">{t.monthly.price}</div>
                      <p className="text-sm text-gray-600">{t.monthly.period}</p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {t.monthly.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => onSelectPlan('monthly')}
                      className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Zap size={20} />
                      {t.monthly.cta}
                    </button>
                  </motion.div>
                </div>

                {/* Comparison Table */}
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h3 className="text-lg text-gray-900 mb-4 text-center">{t.comparison.title}</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-300">
                          <th className="text-left py-3 px-4 text-sm text-gray-700">Feature</th>
                          <th className="text-center py-3 px-4 text-sm text-gray-700">{t.comparison.free}</th>
                          <th className="text-center py-3 px-4 text-sm text-orange-600">{t.comparison.premium}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {t.comparison.items.map((item, index) => (
                          <tr key={index} className="border-b border-gray-200">
                            <td className="py-3 px-4 text-sm text-gray-700">{item.feature}</td>
                            <td className="text-center py-3 px-4">
                              {item.free ? (
                                <Check size={18} className="text-green-600 mx-auto" />
                              ) : (
                                <X size={18} className="text-red-400 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-3 px-4">
                              {item.premium ? (
                                <Check size={18} className="text-green-600 mx-auto" />
                              ) : (
                                <X size={18} className="text-red-400 mx-auto" />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="mt-6 text-center text-sm text-gray-600">
                  {t.guarantee}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
