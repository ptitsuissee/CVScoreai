import { Check, X, Crown } from 'lucide-react';

interface FreeVsPremiumSectionProps {
  language: 'fr' | 'en';
  onUpgradePremium: () => void;
}

const content = {
  fr: {
    title: 'Gratuit vs Premium',
    subtitle: 'Choisissez l\'offre qui correspond à vos besoins',
    free: {
      title: 'Gratuit',
      badge: 'Toujours disponible',
      features: [
        { text: 'Score global sur 100', included: true },
        { text: 'Résumé des forces et faiblesses', included: true },
        { text: 'Aperçu des conseils prioritaires', included: true },
        { text: 'Création et modification de CV', included: true },
        { text: 'Export PDF sans watermark', included: false },
        { text: 'Analyse ATS avancée', included: false },
        { text: 'Conseils détaillés ligne par ligne', included: false },
        { text: 'Historique des analyses', included: false },
      ],
      cta: 'Commencer gratuitement',
    },
    premium: {
      title: 'Premium',
      badge: 'Le plus populaire',
      features: [
        { text: 'Tout du plan Gratuit', included: true },
        { text: 'Export PDF sans watermark', included: true },
        { text: 'CV et exports illimités', included: true },
        { text: 'Analyse ATS avancée', included: true },
        { text: 'Conseils détaillés ligne par ligne', included: true },
        { text: 'Suggestions de reformulation IA', included: true },
        { text: 'Historique complet des analyses', included: true },
        { text: 'Support prioritaire', included: true },
      ],
      cta: 'Passer à Premium',
      price: 'À partir de 9,99€/mois',
    },
  },
  en: {
    title: 'Free vs Premium',
    subtitle: 'Choose the plan that fits your needs',
    free: {
      title: 'Free',
      badge: 'Always available',
      features: [
        { text: 'Overall score out of 100', included: true },
        { text: 'Summary of strengths & weaknesses', included: true },
        { text: 'Preview of priority advice', included: true },
        { text: 'Create and edit resumes', included: true },
        { text: 'PDF export without watermark', included: false },
        { text: 'Advanced ATS analysis', included: false },
        { text: 'Detailed line-by-line feedback', included: false },
        { text: 'Analysis history', included: false },
      ],
      cta: 'Start for Free',
    },
    premium: {
      title: 'Premium',
      badge: 'Most popular',
      features: [
        { text: 'Everything in Free', included: true },
        { text: 'PDF export without watermark', included: true },
        { text: 'Unlimited resumes & exports', included: true },
        { text: 'Advanced ATS analysis', included: true },
        { text: 'Detailed line-by-line feedback', included: true },
        { text: 'AI rephrasing suggestions', included: true },
        { text: 'Complete analysis history', included: true },
        { text: 'Priority support', included: true },
      ],
      cta: 'Upgrade to Premium',
      price: 'Starting at €9.99/month',
    },
  },
};

export function FreeVsPremiumSection({ language, onUpgradePremium }: FreeVsPremiumSectionProps) {
  const t = content[language];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl text-gray-900">{t.free.title}</h3>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  {t.free.badge}
                </span>
              </div>
              <p className="text-3xl text-gray-900 mb-1">0€</p>
              <p className="text-sm text-gray-500">{language === 'fr' ? 'Toujours gratuit' : 'Forever free'}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {t.free.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X size={20} className="text-gray-300 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#analyze"
              className="block w-full px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-all text-center"
            >
              {t.free.cta}
            </a>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl border-2 border-blue-600 p-8 shadow-2xl relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 bg-yellow-400 text-gray-900 text-sm rounded-full flex items-center gap-1">
                <Crown size={14} />
                <span>{t.premium.badge}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl text-white mb-2">{t.premium.title}</h3>
              <p className="text-3xl text-white mb-1">9,99€</p>
              <p className="text-sm text-blue-100">{t.premium.price}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {t.premium.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{feature.text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onUpgradePremium}
              className="block w-full px-6 py-3 bg-white text-blue-600 rounded-lg hover:shadow-xl transition-all text-center"
            >
              {t.premium.cta}
            </button>
          </div>
        </div>

        {/* Trust Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            {language === 'fr' 
              ? 'Sans engagement · Annulation à tout moment · Paiement sécurisé' 
              : 'No commitment · Cancel anytime · Secure payment'}
          </p>
        </div>
      </div>
    </section>
  );
}
