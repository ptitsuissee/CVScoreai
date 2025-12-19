import { useState } from 'react';
import { Check, Shield, CreditCard } from 'lucide-react';
import { StripeBuyButton } from './StripeBuyButton';

interface PricingPageStripeProps {
  language: 'fr' | 'en';
  onNavigate: (page: string) => void;
}

const STRIPE_PUBLISHABLE_KEY = 'pk_live_51Sf24f77bQKrFJdSfpWgumq1fr63EhrnfoOdgmNZq2yLCwmIXsFPLXIGEHeB08xXUB039SsSp5PQEXXsQVyhXTac00B7neYR92';

const content = {
  fr: {
    title: 'Tarifs simples et transparents',
    subtitle: 'Choisissez l\'offre qui vous convient',
    currency: {
      eur: 'EUR (€)',
      chf: 'CHF',
    },
    plans: {
      free: {
        name: 'Gratuit',
        price: '0',
        period: 'Toujours gratuit',
        features: [
          'Analyse de base du CV',
          'Score global sur 100',
          '2 notes détaillées',
          '2 conseils d\'amélioration',
        ],
        cta: 'Commencer gratuitement',
      },
      monthlyEur: {
        name: 'Premium Mensuel',
        price: '9,99',
        currency: '€',
        period: '/ mois',
        features: [
          'Analyses illimitées',
          'Feedback ligne par ligne',
          'Optimisation ATS avancée',
          'Réécriture automatique',
          'Export PDF sans filigrane',
          'Support prioritaire',
        ],
      },
      monthlyCHF: {
        name: 'Premium Mensuel',
        price: '9,90',
        currency: 'CHF',
        period: '/ mois',
        features: [
          'Analyses illimitées',
          'Feedback ligne par ligne',
          'Optimisation ATS avancée',
          'Réécriture automatique',
          'Export PDF sans filigrane',
          'Support prioritaire',
        ],
      },
      onetimeEur: {
        name: 'Premium – Paiement unique',
        price: '12,99',
        currency: '€',
        period: 'une fois',
        features: [
          '3 analyses complètes',
          'Feedback ligne par ligne',
          'Optimisation ATS avancée',
          'Réécriture automatique',
          'Export PDF sans filigrane',
          'Valable 30 jours',
        ],
      },
      onetimeCHF: {
        name: 'Premium – Paiement unique',
        price: '12,90',
        currency: 'CHF',
        period: 'une fois',
        features: [
          '3 analyses complètes',
          'Feedback ligne par ligne',
          'Optimisation ATS avancée',
          'Réécriture automatique',
          'Export PDF sans filigrane',
          'Valable 30 jours',
        ],
      },
    },
    security: 'Paiement géré par Stripe. CVScore.ai ne stocke aucune donnée bancaire.',
    guarantee: {
      title: 'Garantie 100% sécurisé',
      items: [
        'Paiements traités par Stripe',
        'Résultats immédiats',
        'Annulation à tout moment',
      ],
    },
  },
  en: {
    title: 'Simple and transparent pricing',
    subtitle: 'Choose the plan that fits your needs',
    currency: {
      eur: 'EUR (€)',
      chf: 'CHF',
    },
    plans: {
      free: {
        name: 'Free',
        price: '0',
        period: 'Forever free',
        features: [
          'Basic CV analysis',
          'Overall score out of 100',
          '2 detailed scores',
          '2 improvement tips',
        ],
        cta: 'Start for free',
      },
      monthlyEur: {
        name: 'Premium Monthly',
        price: '9.99',
        currency: '€',
        period: '/ month',
        features: [
          'Unlimited analyses',
          'Line-by-line feedback',
          'Advanced ATS optimization',
          'Automatic rewriting',
          'PDF export without watermark',
          'Priority support',
        ],
      },
      monthlyCHF: {
        name: 'Premium Monthly',
        price: '9.90',
        currency: 'CHF',
        period: '/ month',
        features: [
          'Unlimited analyses',
          'Line-by-line feedback',
          'Advanced ATS optimization',
          'Automatic rewriting',
          'PDF export without watermark',
          'Priority support',
        ],
      },
      onetimeEur: {
        name: 'Premium – One-time',
        price: '12.99',
        currency: '€',
        period: 'once',
        features: [
          '3 complete analyses',
          'Line-by-line feedback',
          'Advanced ATS optimization',
          'Automatic rewriting',
          'PDF export without watermark',
          'Valid for 30 days',
        ],
      },
      onetimeCHF: {
        name: 'Premium – One-time',
        price: '12.90',
        currency: 'CHF',
        period: 'once',
        features: [
          '3 complete analyses',
          'Line-by-line feedback',
          'Advanced ATS optimization',
          'Automatic rewriting',
          'PDF export without watermark',
          'Valid for 30 days',
        ],
      },
    },
    security: 'Payments handled by Stripe. CVScore.ai does not store any banking data.',
    guarantee: {
      title: '100% Secure Guarantee',
      items: [
        'Payments processed by Stripe',
        'Instant results',
        'Cancel anytime',
      ],
    },
  },
};

export function PricingPageStripe({ language, onNavigate }: PricingPageStripeProps) {
  const [currency, setCurrency] = useState<'EUR' | 'CHF'>('EUR');
  const t = content[language];

  const isEUR = currency === 'EUR';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            {t.subtitle}
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-xl p-1.5 shadow-sm">
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-6 py-2.5 rounded-lg transition-all ${
                isEUR
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.currency.eur}
            </button>
            <button
              onClick={() => setCurrency('CHF')}
              className={`px-6 py-2.5 rounded-lg transition-all ${
                !isEUR
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.currency.chf}
            </button>
          </div>
        </div>

        {/* Pricing Cards - EUR */}
        {isEUR && (
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl text-gray-900 mb-2">{t.plans.free.name}</h3>
              <div className="mb-6">
                <span className="text-5xl text-gray-900">{t.plans.free.price}€</span>
              </div>
              <p className="text-gray-600 mb-6">{t.plans.free.period}</p>

              <ul className="space-y-4 mb-8">
                {t.plans.free.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => {
                    document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                {t.plans.free.cta}
              </button>
            </div>

            {/* Premium Monthly EUR */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-2xl border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm">
                ⭐ {language === 'fr' ? 'Populaire' : 'Popular'}
              </div>

              <h3 className="text-2xl text-white mb-2">{t.plans.monthlyEur.name}</h3>
              <div className="mb-6">
                <span className="text-5xl text-white">{t.plans.monthlyEur.price}</span>
                <span className="text-2xl text-blue-100">{t.plans.monthlyEur.currency}</span>
                <span className="text-lg text-blue-100 ml-1">{t.plans.monthlyEur.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {t.plans.monthlyEur.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-blue-100 flex-shrink-0 mt-1" size={20} />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Stripe Buy Button - Monthly EUR */}
              <div className="bg-white rounded-lg p-1">
                <StripeBuyButton
                  buyButtonId="buy_btn_1SfTws77bQKrFJdS0ogFrAFI"
                  publishableKey={STRIPE_PUBLISHABLE_KEY}
                />
              </div>

              <p className="text-xs text-blue-100 mt-4 text-center">{t.security}</p>
            </div>

            {/* One-time EUR */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl text-gray-900 mb-2">{t.plans.onetimeEur.name}</h3>
              <div className="mb-6">
                <span className="text-5xl text-gray-900">{t.plans.onetimeEur.price}</span>
                <span className="text-2xl text-gray-600">{t.plans.onetimeEur.currency}</span>
              </div>
              <p className="text-gray-600 mb-6">{t.plans.onetimeEur.period}</p>

              <ul className="space-y-4 mb-8">
                {t.plans.onetimeEur.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Stripe Buy Button - One-time EUR */}
              <StripeBuyButton
                buyButtonId="buy_btn_1SfTzF77bQKrFJdSaUXtXwN2"
                publishableKey={STRIPE_PUBLISHABLE_KEY}
              />

              <p className="text-xs text-gray-500 mt-4 text-center">{t.security}</p>
            </div>
          </div>
        )}

        {/* Pricing Cards - CHF */}
        {!isEUR && (
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl text-gray-900 mb-2">{t.plans.free.name}</h3>
              <div className="mb-6">
                <span className="text-5xl text-gray-900">{t.plans.free.price}</span>
                <span className="text-2xl text-gray-600 ml-1">CHF</span>
              </div>
              <p className="text-gray-600 mb-6">{t.plans.free.period}</p>

              <ul className="space-y-4 mb-8">
                {t.plans.free.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => {
                    document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                {t.plans.free.cta}
              </button>
            </div>

            {/* Premium Monthly CHF */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-2xl border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm">
                ⭐ {language === 'fr' ? 'Populaire' : 'Popular'}
              </div>

              <h3 className="text-2xl text-white mb-2">{t.plans.monthlyCHF.name}</h3>
              <div className="mb-6">
                <span className="text-5xl text-white">{t.plans.monthlyCHF.price}</span>
                <span className="text-2xl text-blue-100 ml-1">{t.plans.monthlyCHF.currency}</span>
                <span className="text-lg text-blue-100 ml-1">{t.plans.monthlyCHF.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {t.plans.monthlyCHF.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-blue-100 flex-shrink-0 mt-1" size={20} />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Stripe Buy Button - Monthly CHF */}
              <div className="bg-white rounded-lg p-1">
                <StripeBuyButton
                  buyButtonId="buy_btn_1SfTyH77bQKrFJdSow1KqVSM"
                  publishableKey={STRIPE_PUBLISHABLE_KEY}
                />
              </div>

              <p className="text-xs text-blue-100 mt-4 text-center">{t.security}</p>
            </div>

            {/* One-time CHF */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl text-gray-900 mb-2">{t.plans.onetimeCHF.name}</h3>
              <div className="mb-6">
                <span className="text-5xl text-gray-900">{t.plans.onetimeCHF.price}</span>
                <span className="text-2xl text-gray-600 ml-1">{t.plans.onetimeCHF.currency}</span>
              </div>
              <p className="text-gray-600 mb-6">{t.plans.onetimeCHF.period}</p>

              <ul className="space-y-4 mb-8">
                {t.plans.onetimeCHF.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Stripe Buy Button - One-time CHF */}
              <StripeBuyButton
                buyButtonId="buy_btn_1SfU0977bQKrFJdSpqt5l8Ht"
                publishableKey={STRIPE_PUBLISHABLE_KEY}
              />

              <p className="text-xs text-gray-500 mt-4 text-center">{t.security}</p>
            </div>
          </div>
        )}

        {/* Guarantee Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Shield className="text-blue-600" size={32} />
            <h2 className="text-2xl sm:text-3xl text-gray-900">{t.guarantee.title}</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {t.guarantee.items.map((item, index) => {
              const icons = [CreditCard, Check, Shield];
              const Icon = icons[index];
              return (
                <div key={index} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
