import { Check, Crown, Sparkles, Shield, Lock, CheckCircle, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingPageEmailProps {
  language: 'fr' | 'en';
  onNavigate: (page: string) => void;
}

const content = {
  fr: {
    title: 'Tarifs',
    subtitle: 'Choisis la formule qui te correspond',
    
    // Carte Gratuit
    free: {
      badge: null,
      title: 'Gratuit',
      price: '0 €',
      priceNote: 'Pour toujours',
      features: [
        'Score global du CV',
        'Résumé rapide',
        'Aperçu des points forts/faibles',
        '4 sous-scores détaillés',
      ],
      cta: 'Analyser gratuitement',
      description: 'Parfait pour un premier aperçu',
    },
    
    // Carte Premium
    premium: {
      badge: 'Le plus populaire',
      title: 'Premium',
      price: 'À partir de 9,99 €',
      priceNote: 'Paiement unique ou mensuel',
      features: [
        'Analyse complète ligne par ligne',
        'Optimisation ATS avancée',
        'Conseils personnalisés par métier',
        'Export PDF professionnel',
        'Support prioritaire',
        'Analyses illimitées',
      ],
      cta: 'Débloquer Premium',
      description: 'Pour maximiser tes chances',
    },
    
    // Section Rassurance
    reassurance: {
      title: 'Pourquoi nous faire confiance ?',
      items: [
        { icon: Shield, text: 'Paiement sécurisé via Stripe' },
        { icon: CheckCircle, text: 'Accès immédiat après paiement' },
        { icon: Lock, text: 'Pas d\'abonnement caché' },
        { icon: Mail, text: 'Activation simple par email' },
      ],
    },
    
    // Mini FAQ
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          question: 'L\'accès est-il immédiat ?',
          answer: 'Oui ! Dès que ton paiement est confirmé, tu reçois un email et tu peux activer Premium avec ton adresse email.',
        },
        {
          question: 'Comment activer Premium ?',
          answer: 'Après le paiement, retourne dans l\'outil et clique sur "Activer Premium" avec l\'email utilisé lors du paiement.',
        },
        {
          question: 'Puis-je utiliser Premium sur plusieurs CV ?',
          answer: 'Oui ! L\'accès Premium est illimité en nombre d\'analyses et de CV.',
        },
        {
          question: 'Que se passe-t-il si j\'oublie mon email ?',
          answer: 'Contacte-nous à CVScoreai@outlook.com avec ton email de paiement, nous t\'aiderons.',
        },
      ],
    },
  },
  en: {
    title: 'Pricing',
    subtitle: 'Choose the plan that fits your needs',
    
    // Carte Gratuit
    free: {
      badge: null,
      title: 'Free',
      price: '$0',
      priceNote: 'Forever',
      features: [
        'Overall CV score',
        'Quick summary',
        'Strengths/weaknesses overview',
        '4 detailed sub-scores',
      ],
      cta: 'Analyze for free',
      description: 'Perfect for a first overview',
    },
    
    // Carte Premium
    premium: {
      badge: 'Most popular',
      title: 'Premium',
      price: 'From $9.99',
      priceNote: 'One-time or monthly payment',
      features: [
        'Line-by-line complete analysis',
        'Advanced ATS optimization',
        'Personalized career advice',
        'Professional PDF export',
        'Priority support',
        'Unlimited analyses',
      ],
      cta: 'Unlock Premium',
      description: 'To maximize your chances',
    },
    
    // Section Rassurance
    reassurance: {
      title: 'Why trust us?',
      items: [
        { icon: Shield, text: 'Secure payment via Stripe' },
        { icon: CheckCircle, text: 'Instant access after payment' },
        { icon: Lock, text: 'No hidden subscriptions' },
        { icon: Mail, text: 'Simple email activation' },
      ],
    },
    
    // Mini FAQ
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Is access instant?',
          answer: 'Yes! As soon as your payment is confirmed, you receive an email and can activate Premium with your email address.',
        },
        {
          question: 'How do I activate Premium?',
          answer: 'After payment, return to the tool and click "Activate Premium" with the email used during payment.',
        },
        {
          question: 'Can I use Premium on multiple resumes?',
          answer: 'Yes! Premium access is unlimited in number of analyses and resumes.',
        },
        {
          question: 'What if I forget my email?',
          answer: 'Contact us at CVScoreai@outlook.com with your payment email, we\'ll help you.',
        },
      ],
    },
  },
};

export function PricingPageEmail({ language, onNavigate }: PricingPageEmailProps) {
  const t = content[language];

  const renderPricingCard = (
    plan: 'free' | 'premium',
    badge: string | null,
    title: string,
    price: string,
    priceNote: string,
    features: string[],
    cta: string,
    description: string,
    isPremium: boolean
  ) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: plan === 'free' ? 0.2 : 0.3 }}
        className={`relative bg-white rounded-2xl shadow-xl p-8 ${
          isPremium 
            ? 'border-4 border-purple-400 transform scale-105' 
            : 'border-2 border-gray-300'
        }`}
      >
        {/* Badge */}
        {badge && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full text-sm shadow-lg flex items-center gap-2">
              <Crown size={16} />
              <span>{badge}</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
            isPremium 
              ? 'bg-gradient-to-br from-purple-600 to-blue-600' 
              : 'bg-gray-100'
          }`}>
            {isPremium ? (
              <Crown className="text-white" size={32} />
            ) : (
              <Sparkles className="text-gray-600" size={32} />
            )}
          </div>
          
          <h3 className="text-2xl text-gray-900 mb-2">{title}</h3>
          <div className={`text-4xl mb-1 ${isPremium ? 'text-purple-700' : 'text-gray-900'}`}>
            {price}
          </div>
          <p className="text-sm text-gray-600 mb-4">{priceNote}</p>
          <p className="text-sm text-gray-500 italic">{description}</p>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                isPremium 
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600' 
                  : 'bg-green-100'
              }`}>
                <Check className={isPremium ? 'text-white' : 'text-green-600'} size={16} />
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => onNavigate(plan === 'free' ? 'home' : 'email-widget')}
          className={`w-full py-4 rounded-xl transition-all text-lg flex items-center justify-center gap-2 ${
            isPremium
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-2xl shadow-lg'
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          {isPremium && <Crown size={20} />}
          <span>{cta}</span>
        </button>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl text-gray-900 mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {renderPricingCard(
            'free',
            t.free.badge,
            t.free.title,
            t.free.price,
            t.free.priceNote,
            t.free.features,
            t.free.cta,
            t.free.description,
            false
          )}
          
          {renderPricingCard(
            'premium',
            t.premium.badge,
            t.premium.title,
            t.premium.price,
            t.premium.priceNote,
            t.premium.features,
            t.premium.cta,
            t.premium.description,
            true
          )}
        </div>

        {/* Section Rassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8 mb-12"
        >
          <h2 className="text-2xl text-gray-900 text-center mb-8">{t.reassurance.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.reassurance.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 shadow-md border-2 border-blue-200">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Mini FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg"
        >
          <h2 className="text-2xl text-gray-900 text-center mb-8">{t.faq.title}</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {t.faq.items.map((item, index) => (
              <div key={index} className="border-b-2 border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="text-lg text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-6">{item.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl mb-4">
              {language === 'fr' 
                ? '🚀 Prêt à transformer ton CV ?' 
                : '🚀 Ready to transform your resume?'}
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              {language === 'fr'
                ? 'Rejoins des centaines d\'utilisateurs qui ont amélioré leurs candidatures'
                : 'Join hundreds of users who improved their applications'}
            </p>
            <button
              onClick={() => onNavigate('email-widget')}
              className="px-8 py-4 bg-white text-purple-700 rounded-xl hover:bg-gray-100 transition-all text-lg inline-flex items-center gap-3 shadow-xl group"
            >
              <Crown size={24} />
              <span>{language === 'fr' ? 'Débloquer Premium maintenant' : 'Unlock Premium now'}</span>
              <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
