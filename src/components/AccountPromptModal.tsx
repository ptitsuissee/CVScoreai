import { X, Save, History, Crown } from 'lucide-react';

interface AccountPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'fr' | 'en';
  variant: 'save' | 'history' | 'payment';
  onCreateAccount: () => void;
}

const content = {
  fr: {
    save: {
      title: 'Sauvegarder ton travail ?',
      message: 'Crée un compte gratuit pour sauvegarder ton CV et le retrouver plus tard.',
      icon: '💾',
    },
    history: {
      title: 'Accède à ton historique',
      message: 'Accède à ton historique et à ton tableau de bord en créant un compte.',
      icon: '📊',
    },
    payment: {
      title: 'Finalise ton achat',
      message: 'Ton accès Premium sera lié à ton email.',
      icon: '👑',
    },
    createAccount: 'Créer un compte',
    continueWithout: 'Continuer sans compte',
    benefits: {
      save: [
        'Sauvegarde automatique de tes CV',
        'Accès depuis n\'importe quel appareil',
        'Historique de toutes tes modifications',
      ],
      history: [
        'Historique complet de tes analyses',
        'Accès rapide à tous tes CV',
        'Dashboard personnalisé',
      ],
      payment: [
        'Gestion simplifiée de ton abonnement',
        'Accès immédiat à toutes les fonctionnalités Premium',
        'Historique de tes paiements',
      ],
    },
    reassurance: 'Gratuit • Sans engagement • Email uniquement',
  },
  en: {
    save: {
      title: 'Save your work?',
      message: 'Create a free account to save your resume and access it later.',
      icon: '💾',
    },
    history: {
      title: 'Access your history',
      message: 'Access your history and dashboard by creating an account.',
      icon: '📊',
    },
    payment: {
      title: 'Complete your purchase',
      message: 'Your Premium access will be linked to your email.',
      icon: '👑',
    },
    createAccount: 'Create Account',
    continueWithout: 'Continue without account',
    benefits: {
      save: [
        'Auto-save your resumes',
        'Access from any device',
        'History of all modifications',
      ],
      history: [
        'Complete analysis history',
        'Quick access to all your resumes',
        'Personalized dashboard',
      ],
      payment: [
        'Simplified subscription management',
        'Immediate access to all Premium features',
        'Payment history',
      ],
    },
    reassurance: 'Free • No commitment • Email only',
  },
};

export function AccountPromptModal({ isOpen, onClose, language, variant, onCreateAccount }: AccountPromptModalProps) {
  if (!isOpen) return null;

  const t = content[language];
  const variantContent = t[variant];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 px-8 py-8 text-center border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="text-5xl mb-4">{variantContent.icon}</div>
          <h2 className="text-2xl text-gray-900 mb-2">{variantContent.title}</h2>
          <p className="text-gray-600">{variantContent.message}</p>
        </div>

        {/* Benefits */}
        <div className="px-8 py-6">
          <ul className="space-y-3 mb-6">
            {t.benefits[variant].map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Reassurance */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-6">
            <p className="text-sm text-blue-800 text-center">{t.reassurance}</p>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={onCreateAccount}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              {t.createAccount}
            </button>
            <button
              onClick={onClose}
              className="w-full px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.continueWithout}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
