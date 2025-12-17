import { Check, X, Sparkles, Crown, Shield, Clock, Users, CreditCard } from 'lucide-react';
import { useState } from 'react';

interface PricingPageProps {
  language: 'fr' | 'en';
  onPurchase: () => void;
  onOpenPremiumModal?: () => void;
}

const content = {
  fr: {
    title: 'Tarifs simples et transparents',
    subtitle: 'Choisis l\'offre qui t\'aide à améliorer ton CV et obtenir plus d\'entretiens.',
    plans: [
      {
        name: 'Gratuit',
        price: '0 €',
        description: 'Pour tester rapidement ton CV',
        cta: 'Tester gratuitement',
        features: [
          'Analyse de CV basique',
          'Note globale sur 100',
          'Conseils généraux',
          'Standards européens',
        ],
        icon: Sparkles,
      },
      {
        name: 'Premium',
        price: 'À partir de 6,99 €',
        badge: 'Recommandé',
        description: 'Pour maximiser tes chances d\'entretien',
        cta: 'Débloquer Premium',
        features: [
          'Analyse complète et détaillée',
          'Sous-notes (clarté, impact, structure, ATS)',
          'Conseils personnalisés',
          'Optimisation ATS avancée',
          'Amélioration automatique du CV',
          'Export PDF sans filigrane',
        ],
        icon: Crown,
        popular: true,
        comingSoon: false,
      },
    ],
    comparison: {
      title: 'Comparaison détaillée',
      features: [
        { name: 'Analyse de CV basique', free: true, premium: true },
        { name: 'Note globale sur 100', free: true, premium: true },
        { name: 'Standards européens', free: true, premium: true },
        { name: 'Sous-notes détaillées', free: false, premium: true },
        { name: 'Conseils personnalisés avancés', free: false, premium: true },
        { name: 'Recommandations par poste', free: false, premium: true },
        { name: 'Optimisation ATS avancée', free: false, premium: true },
        { name: 'Amélioration automatique CV', free: false, premium: true },
      ],
    },
    reassurance: {
      title: 'Pourquoi choisir CVScore.ai',
      items: [
        {
          icon: Shield,
          title: 'Paiement sécurisé via Stripe',
          description: 'Transactions protégées et chiffrées',
        },
        {
          icon: Clock,
          title: 'Résultats immédiats',
          description: 'Analyse instantanée, conseils directement applicables',
        },
        {
          icon: Users,
          title: 'Pour tous les profils',
          description: 'Étudiants, professionnels, tous niveaux d\'expérience',
        },
        {
          icon: CreditCard,
          title: 'Aucun engagement caché',
          description: 'Transparence totale sur les tarifs et conditions',
        },
      ],
    },
    faq: {
      title: 'Questions sur les tarifs',
      items: [
        {
          question: 'Le plan gratuit est-il limité ?',
          answer: 'Oui, il offre une analyse basique pour tester le service.',
        },
        {
          question: 'Puis-je passer au Premium plus tard ?',
          answer: 'Oui, tu peux débloquer l\'analyse Premium à tout moment.',
        },
        {
          question: 'Y a-t-il un abonnement ?',
          answer: 'Non. Le paiement Premium est sans engagement.',
        },
      ],
    },
    free: 'Gratuit',
    premium: 'Premium',
  },
  en: {
    title: 'Simple, transparent pricing',
    subtitle: 'Choose the plan that helps you improve your resume and get more interviews.',
    plans: [
      {
        name: 'Free',
        price: '$0',
        description: 'Try the resume analysis for free',
        cta: 'Analyze for free',
        features: [
          'Basic resume analysis',
          'Overall score out of 100',
          'General improvement tips',
          'European standards',
        ],
        icon: Sparkles,
      },
      {
        name: 'Premium',
        price: 'From $6.99',
        badge: 'Recommended',
        description: 'Maximize your interview chances',
        cta: 'Unlock Premium',
        features: [
          'Full, detailed analysis',
          'Sub-scores (clarity, impact, structure, ATS)',
          'Personalized recommendations',
          'Advanced ATS optimization',
          'Automatic resume improvement',
          'PDF export without watermark',
        ],
        icon: Crown,
        popular: true,
        comingSoon: false,
      },
    ],
    comparison: {
      title: 'Detailed comparison',
      features: [
        { name: 'Basic resume analysis', free: true, premium: true },
        { name: 'Overall score out of 100', free: true, premium: true },
        { name: 'European standards', free: true, premium: true },
        { name: 'Detailed sub-scores', free: false, premium: true },
        { name: 'Advanced personalized advice', free: false, premium: true },
        { name: 'Position-specific recommendations', free: false, premium: true },
        { name: 'Advanced ATS optimization', free: false, premium: true },
        { name: 'Automatic resume improvement', free: false, premium: true },
      ],
    },
    reassurance: {
      title: 'Why choose CVScore.ai',
      items: [
        {
          icon: Shield,
          title: 'Secure payment via Stripe',
          description: 'Protected and encrypted transactions',
        },
        {
          icon: Clock,
          title: 'Immediate results',
          description: 'Instant analysis, directly actionable advice',
        },
        {
          icon: Users,
          title: 'For all profiles',
          description: 'Students, professionals, all experience levels',
        },
        {
          icon: CreditCard,
          title: 'No hidden commitment',
          description: 'Full transparency on pricing and conditions',
        },
      ],
    },
    faq: {
      title: 'Pricing questions',
      items: [
        {
          question: 'Is the free plan limited?',
          answer: 'Yes, it offers a basic analysis to test the service.',
        },
        {
          question: 'Can I upgrade to Premium later?',
          answer: 'Yes, you can unlock Premium analysis at any time.',
        },
        {
          question: 'Is there a subscription?',
          answer: 'No. Premium payment is commitment-free.',
        },
      ],
    },
    free: 'Free',
    premium: 'Premium',
  },
};

export function PricingPage({ language, onPurchase, onOpenPremiumModal }: PricingPageProps) {
  const t = content[language];

  const handleSelectPlan = (planName: string) => {
    if (planName === 'Gratuit' || planName === 'Free') {
      window.location.hash = '#analyze';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // Premium - will be connected to Stripe later
    if (onOpenPremiumModal) {
      onOpenPremiumModal();
    } else {
      alert(
        language === 'fr'
          ? '💳 Paiement Stripe bientôt disponible. Pour l\'instant, profitez de la version gratuite !'
          : '💳 Stripe payment coming soon. For now, enjoy the free version!'
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {t.plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl border-2 p-8 transition-all hover:shadow-2xl ${
                    plan.popular
                      ? 'border-blue-600 shadow-xl transform md:-translate-y-4'
                      : 'border-gray-200'
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm shadow-lg">
                      {plan.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      plan.popular ? 'bg-blue-100' : 'bg-gray-100'
                    }`}
                  >
                    <Icon
                      className={plan.popular ? 'text-blue-600' : 'text-gray-600'}
                      size={32}
                    />
                  </div>

                  {/* Plan Info */}
                  <h2 className="text-2xl text-gray-900 mb-2">{plan.name}</h2>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-4xl text-gray-900 mb-1">{plan.price}</div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSelectPlan(plan.name)}
                    className={`w-full py-4 px-6 rounded-xl transition-all mb-8 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  {plan.comingSoon === false && plan.popular && (
                    <div className="mb-6 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-sm text-yellow-800 text-center">
                        {language === 'fr'
                          ? '💳 Paiement Stripe prochainement disponible'
                          : '💳 Stripe payment coming soon'}
                      </p>
                    </div>
                  )}

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-green-600" size={14} />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-12">{t.comparison.title}</h2>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 border-b border-gray-200">
              <div className="text-gray-600"></div>
              <div className="text-center">
                <div className="text-gray-900">{t.free}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-900">{t.premium}</div>
              </div>
            </div>

            {/* Table Rows */}
            {t.comparison.features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="text-gray-700">{feature.name}</div>
                <div className="flex justify-center">
                  {feature.free ? (
                    <Check className="text-green-600" size={20} />
                  ) : (
                    <X className="text-gray-300" size={20} />
                  )}
                </div>
                <div className="flex justify-center">
                  {feature.premium ? (
                    <Check className="text-green-600" size={20} />
                  ) : (
                    <X className="text-gray-300" size={20} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reassurance Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-12">
            {t.reassurance.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.reassurance.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Pricing */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-12">{t.faq.title}</h2>

          <div className="space-y-6">
            {t.faq.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <h3 className="text-lg text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            {language === 'fr'
              ? 'Prêt à améliorer ton CV ?'
              : 'Ready to improve your resume?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {language === 'fr'
              ? 'Commence gratuitement dès maintenant'
              : 'Start free right now'}
          </p>
          <button
            onClick={() => {
              window.location.hash = '#analyze';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-all shadow-2xl text-lg"
          >
            {language === 'fr' ? 'Analyser mon CV gratuitement' : 'Analyze my resume for free'}
          </button>
        </div>
      </div>
    </div>
  );
}