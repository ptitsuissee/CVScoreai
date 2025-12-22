import { useState } from 'react';
import { Crown, Mail, CheckCircle, AlertCircle, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PremiumOnboardingProps {
  language: 'fr' | 'en';
  isPremium: boolean;
  onActivatePremium: () => void;
  onContactSupport?: () => void;
  compact?: boolean;
}

type OnboardingState = 'free' | 'guide' | 'active' | 'error';

const content = {
  fr: {
    // État Gratuit
    freeState: {
      text: 'Tu utilises actuellement la version gratuite.',
      cta: 'Débloquer les fonctionnalités Premium',
    },
    
    // État Guide (après clic)
    guideState: {
      title: 'Comment activer Premium ?',
      steps: [
        { number: '1', text: 'Effectue le paiement Premium' },
        { number: '2', text: 'Reviens dans l\'outil' },
        { number: '3', text: 'Entre l\'email du paiement et clique Activer Premium' },
      ],
      goToPricing: 'Aller vers le paiement',
      cancel: 'Annuler',
    },
    
    // État Actif
    activeState: {
      badge: 'Premium actif ✅',
      text: 'Toutes les fonctionnalités sont maintenant disponibles.',
    },
    
    // État Erreur
    errorState: {
      title: 'Aucun accès Premium trouvé pour cet email.',
      text: 'Vérifie que tu utilises le même email que lors du paiement Stripe.',
      contactSupport: 'Contacter le support',
      tryAgain: 'Réessayer',
    },
  },
  en: {
    // État Gratuit
    freeState: {
      text: 'You are currently using the free version.',
      cta: 'Unlock Premium features',
    },
    
    // État Guide (après clic)
    guideState: {
      title: 'How to activate Premium?',
      steps: [
        { number: '1', text: 'Complete Premium payment' },
        { number: '2', text: 'Return to the tool' },
        { number: '3', text: 'Enter payment email and click Activate Premium' },
      ],
      goToPricing: 'Go to payment',
      cancel: 'Cancel',
    },
    
    // État Actif
    activeState: {
      badge: 'Premium active ✅',
      text: 'All features are now available.',
    },
    
    // État Erreur
    errorState: {
      title: 'No Premium access found for this email.',
      text: 'Make sure you use the same email as your Stripe payment.',
      contactSupport: 'Contact support',
      tryAgain: 'Try again',
    },
  },
};

export function PremiumOnboarding({
  language,
  isPremium,
  onActivatePremium,
  onContactSupport,
  compact = false,
}: PremiumOnboardingProps) {
  const t = content[language];
  const [state, setState] = useState<OnboardingState>(isPremium ? 'active' : 'free');
  const [showError, setShowError] = useState(false);

  // État 1 - Utilisateur Gratuit
  if (state === 'free' && !isPremium) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${compact ? 'p-3' : 'p-4'} bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="text-white" size={20} />
            </div>
            <p className={`text-gray-700 ${compact ? 'text-sm' : 'text-base'}`}>
              {t.freeState.text}
            </p>
          </div>
          <button
            onClick={() => setState('guide')}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap text-sm"
          >
            <Crown size={16} />
            <span>{compact ? language === 'fr' ? 'Premium' : 'Premium' : t.freeState.cta}</span>
          </button>
        </div>
      </motion.div>
    );
  }

  // État 2 - Guide d'activation
  if (state === 'guide' && !isPremium) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setState('free')}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl text-gray-900 mb-2">{t.guideState.title}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
              </div>
              <button
                onClick={() => setState('free')}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {t.guideState.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    {step.number}
                  </div>
                  <p className="text-gray-800 flex-1 pt-2">{step.text}</p>
                  {index === t.guideState.steps.length - 1 && (
                    <ChevronRight className="text-purple-600 flex-shrink-0 mt-2" size={20} />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  setState('free');
                  onActivatePremium();
                }}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Crown size={20} />
                <span>{t.guideState.goToPricing}</span>
              </button>
              <button
                onClick={() => setState('free')}
                className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all"
              >
                {t.guideState.cancel}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // État 3 - Premium Actif
  if ((state === 'active' || isPremium) && !showError) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${compact ? 'p-3' : 'p-4'} bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
            <CheckCircle className="text-white" size={20} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className={`${compact ? 'text-sm' : 'text-base'} text-green-700`}>
                {t.activeState.badge}
              </span>
              <Crown size={16} className="text-yellow-500" />
            </div>
            <p className={`text-gray-600 ${compact ? 'text-xs' : 'text-sm'}`}>
              {t.activeState.text}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // État 4 - Erreur
  if (showError) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-xl"
      >
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
            <AlertCircle className="text-red-600" size={20} />
          </div>
          <div className="flex-1">
            <h4 className="text-gray-900 mb-1">{t.errorState.title}</h4>
            <p className="text-sm text-gray-600">{t.errorState.text}</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => setShowError(false)}
            className="flex-1 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all text-sm"
          >
            {t.errorState.tryAgain}
          </button>
          {onContactSupport && (
            <button
              onClick={onContactSupport}
              className="flex-1 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm"
            >
              {t.errorState.contactSupport}
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  return null;
}
