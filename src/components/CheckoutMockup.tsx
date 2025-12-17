import { Shield, CreditCard, Lock, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface CheckoutMockupProps {
  language: 'fr' | 'en';
  planType: 'monthly' | 'oneTime';
  onBack: () => void;
  onComplete?: () => void;
}

const content = {
  fr: {
    title: 'Paiement sécurisé',
    subtitle: 'Cette page est un aperçu. Le paiement Stripe sera ajouté prochainement.',
    orderSummary: 'Résumé de la commande',
    monthly: {
      name: 'CVScore.ai Premium — Mensuel',
      price: '6,99 €',
      period: '/ mois',
      note: 'Facturation mensuelle, annulable à tout moment',
    },
    oneTime: {
      name: 'CVScore.ai Premium — Paiement unique',
      price: '12,99 €',
      period: 'paiement unique',
      note: '3 analyses Premium, valable 90 jours',
    },
    total: 'Total',
    securePayment: 'Paiement sécurisé par Stripe',
    noDataStored: 'Aucune donnée bancaire stockée par CVScore.ai',
    stripeCheckout: 'Checkout Stripe',
    placeholder: 'Ce composant sera remplacé par le vrai Stripe Checkout',
    payButton: 'Payer avec Stripe (bientôt)',
    back: 'Retour',
    processing: 'Traitement sécurisé...',
  },
  en: {
    title: 'Secure payment',
    subtitle: 'This is a preview page. Stripe payment will be added soon.',
    orderSummary: 'Order summary',
    monthly: {
      name: 'CVScore.ai Premium — Monthly',
      price: '$6.99',
      period: '/ month',
      note: 'Monthly billing, cancel anytime',
    },
    oneTime: {
      name: 'CVScore.ai Premium — One-time',
      price: '$12.99',
      period: 'one-time payment',
      note: '3 Premium analyses, valid for 90 days',
    },
    total: 'Total',
    securePayment: 'Secure payment by Stripe',
    noDataStored: 'No banking data stored by CVScore.ai',
    stripeCheckout: 'Stripe Checkout',
    placeholder: 'This component will be replaced by real Stripe Checkout',
    payButton: 'Pay with Stripe (coming soon)',
    back: 'Back',
    processing: 'Secure processing...',
  },
};

export function CheckoutMockup({ language, planType, onBack, onComplete }: CheckoutMockupProps) {
  const t = content[language];
  const plan = t[planType];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          {t.back}
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Shield size={18} />
            <span className="text-sm">{t.securePayment}</span>
          </div>
          <h1 className="text-3xl text-gray-900 mb-2">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-8">
              <h2 className="text-lg text-gray-900 mb-4">{t.orderSummary}</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div>
                  <div className="text-gray-900 mb-1">{plan.name}</div>
                  <div className="text-sm text-gray-600">{plan.note}</div>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-gray-600">{plan.period}</span>
                  <span className="text-2xl text-gray-900">{plan.price}</span>
                </div>
              </div>

              <div className="flex items-baseline justify-between mb-6">
                <span className="text-lg text-gray-900">{t.total}</span>
                <span className="text-3xl text-gray-900">{plan.price}</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Lock size={14} />
                <span>{t.noDataStored}</span>
              </div>
            </div>
          </div>

          {/* Stripe Checkout Mockup */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border-2 border-blue-200 p-8 shadow-xl"
            >
              {/* Stripe Branding */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <CreditCard className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900">{t.stripeCheckout}</h3>
                  <p className="text-sm text-gray-500">Powered by Stripe</p>
                </div>
              </div>

              {/* Placeholder Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="text-blue-900 mb-2">
                      {language === 'fr' ? 'Aperçu du paiement' : 'Payment preview'}
                    </h4>
                    <p className="text-sm text-blue-700">{t.placeholder}</p>
                  </div>
                </div>
              </div>

              {/* Mockup Stripe Form */}
              <div className="space-y-4 mb-8 opacity-50 pointer-events-none">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                    disabled
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    {language === 'fr' ? 'Informations de carte' : 'Card information'}
                  </label>
                  <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      className="w-full px-4 py-3 border-b border-gray-300 bg-gray-50"
                      disabled
                    />
                    <div className="grid grid-cols-2">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="px-4 py-3 border-r border-gray-300 bg-gray-50"
                        disabled
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="px-4 py-3 bg-gray-50"
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    {language === 'fr' ? 'Nom sur la carte' : 'Cardholder name'}
                  </label>
                  <input
                    type="text"
                    placeholder="Nom Prénom"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                    disabled
                  />
                </div>
              </div>

              {/* Pay Button (disabled for now) */}
              <button
                onClick={() => {
                  if (onComplete) {
                    alert(
                      language === 'fr'
                        ? '🎉 Simulation : Paiement réussi !\n\nLe vrai paiement Stripe sera ajouté prochainement.'
                        : '🎉 Simulation: Payment successful!\n\nReal Stripe payment will be added soon.'
                    );
                    onComplete();
                  }
                }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg flex items-center justify-center gap-2 text-lg"
              >
                <Lock size={20} />
                {t.payButton}
              </button>

              {/* Security badges */}
              <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Shield size={14} />
                  <span>SSL</span>
                </div>
                <div className="flex items-center gap-1">
                  <Lock size={14} />
                  <span>PCI DSS</span>
                </div>
                <div className="flex items-center gap-1">
                  <CreditCard size={14} />
                  <span>Stripe</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}