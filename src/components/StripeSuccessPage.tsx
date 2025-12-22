import { CheckCircle, Mail, ArrowRight, Crown, Sparkles, FileText, Target, Shield, Download, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface StripeSuccessPageProps {
  language: 'fr' | 'en';
  onReturnToAnalysis: () => void;
  onViewPremiumFeatures?: () => void;
}

const content = {
  fr: {
    // Section principale
    title: 'Paiement confirmé 🎉',
    subtitle: 'Ton accès Premium est maintenant activé.',
    
    // Section Information clé
    infoTitle: 'Comment activer Premium ?',
    infoText1: 'L\'accès Premium est lié à l\'adresse email utilisée lors du paiement.',
    infoText2: 'Pour débloquer les fonctionnalités Premium, retourne dans l\'outil d\'analyse et clique sur "Activer Premium" avec le même email.',
    emailUsed: 'Email utilisé pour le paiement',
    
    // Boutons d'action
    primaryButton: 'Retourner à l\'analyse de CV',
    secondaryButton: 'Voir mes fonctionnalités Premium',
    
    // Ce qui est débloqué
    unlockedTitle: 'Ce qui est maintenant débloqué',
    features: [
      'Analyse détaillée ligne par ligne',
      'Optimisation ATS avancée',
      'Conseils personnalisés par métier',
      'Export PDF du CV',
    ],
    
    // Support
    supportTitle: 'Un problème ?',
    supportText: 'Contacte-nous à',
    supportEmail: 'CVScoreai@outlook.com',
    
    // Instructions
    stepsTitle: 'Étapes suivantes',
    step1: 'Retourne à l\'outil d\'analyse',
    step2: 'Clique sur "Activer Premium"',
    step3: 'Entre l\'email de paiement',
    step4: 'Profite de toutes les fonctionnalités !',
  },
  en: {
    // Section principale
    title: 'Payment confirmed 🎉',
    subtitle: 'Your Premium access is now activated.',
    
    // Section Information clé
    infoTitle: 'How to activate Premium?',
    infoText1: 'Premium access is linked to the email address used during payment.',
    infoText2: 'To unlock Premium features, return to the analysis tool and click "Activate Premium" with the same email.',
    emailUsed: 'Email used for payment',
    
    // Boutons d'action
    primaryButton: 'Return to Resume Analysis',
    secondaryButton: 'View my Premium features',
    
    // Ce qui est débloqué
    unlockedTitle: 'What\'s now unlocked',
    features: [
      'Line-by-line detailed analysis',
      'Advanced ATS optimization',
      'Personalized career advice',
      'PDF resume export',
    ],
    
    // Support
    supportTitle: 'Need help?',
    supportText: 'Contact us at',
    supportEmail: 'CVScoreai@outlook.com',
    
    // Instructions
    stepsTitle: 'Next steps',
    step1: 'Return to the analysis tool',
    step2: 'Click "Activate Premium"',
    step3: 'Enter your payment email',
    step4: 'Enjoy all features!',
  },
};

export function StripeSuccessPage({ language, onReturnToAnalysis, onViewPremiumFeatures }: StripeSuccessPageProps) {
  const t = content[language];

  // Simulated email (in real app, would come from Stripe session)
  const paymentEmail = 'user@example.com';

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-gray-50 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl border-2 border-green-200 p-8 sm:p-12"
        >
          {/* Header - Confirmation */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <CheckCircle className="text-white" size={48} />
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl text-gray-900 mb-3">{t.title}</h1>
            <p className="text-xl text-gray-600">{t.subtitle}</p>
          </div>

          {/* Section Information Clé - TRÈS IMPORTANTE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6 mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
                  {t.infoTitle}
                  <HelpCircle size={18} className="text-blue-600" />
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">{t.infoText1}</p>
                <p className="text-gray-700 mb-4 leading-relaxed">{t.infoText2}</p>
                
                {/* Email utilisé */}
                <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">{t.emailUsed}</div>
                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-blue-600" />
                    <span className="text-gray-900">{paymentEmail}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Étapes suivantes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="text-xl text-gray-900 mb-4">{t.stepsTitle}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { number: '1', text: t.step1, icon: ArrowRight },
                { number: '2', text: t.step2, icon: Crown },
                { number: '3', text: t.step3, icon: Mail },
                { number: '4', text: t.step4, icon: Sparkles },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800">{step.text}</p>
                      <Icon size={16} className="text-blue-600 mt-2" />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 mb-8"
          >
            <button
              onClick={onReturnToAnalysis}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 text-lg group"
            >
              <ArrowRight size={24} />
              <span>{t.primaryButton}</span>
              <Crown size={24} className="group-hover:rotate-12 transition-transform" />
            </button>
            
            {onViewPremiumFeatures && (
              <button
                onClick={onViewPremiumFeatures}
                className="w-full py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles size={20} />
                <span>{t.secondaryButton}</span>
              </button>
            )}
          </motion.div>

          {/* Ce qui est débloqué */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-8 border-2 border-purple-200"
          >
            <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
              <Crown className="text-yellow-500" size={24} />
              {t.unlockedTitle}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {t.features.map((feature, index) => {
                const icons = [FileText, Target, Shield, Download];
                const Icon = icons[index];
                return (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3 border-2 border-purple-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={20} />
                    </div>
                    <span className="text-gray-800 text-sm">{feature}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Support */}
          <div className="text-center pt-6 border-t-2 border-gray-200">
            <p className="text-gray-600 mb-2">{t.supportTitle}</p>
            <p className="text-gray-600">
              {t.supportText}{' '}
              <a
                href={`mailto:${t.supportEmail}`}
                className="text-blue-600 hover:text-blue-700 underline"
              >
                {t.supportEmail}
              </a>
            </p>
          </div>
        </motion.div>

        {/* Info supplémentaire */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md border-2 border-gray-200">
            <CheckCircle size={18} className="text-green-600" />
            <span className="text-sm text-gray-700">
              {language === 'fr' 
                ? '✓ Paiement sécurisé · ✓ Accès immédiat · ✓ Support réactif' 
                : '✓ Secure payment · ✓ Instant access · ✓ Fast support'}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
