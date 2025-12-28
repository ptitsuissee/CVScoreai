import { useState } from 'react';
import { X, Mail, Sparkles, CheckCircle } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'fr' | 'en';
  onSuccess: (email: string) => void;
}

const content = {
  fr: {
    title: 'Connexion / Inscription',
    subtitle: 'Entre ton email pour continuer',
    emailLabel: 'Adresse email',
    emailPlaceholder: 'ton.email@exemple.com',
    magicLinkInfo: 'Un lien de connexion sécurisé te sera envoyé par email.',
    continueButton: 'Continuer',
    successTitle: 'Email envoyé !',
    successMessage: 'Vérifie ta boîte mail pour te connecter à ton compte.',
    successSubMessage: 'Le lien est valide pendant 15 minutes.',
    closeButton: 'Fermer',
    benefits: [
      'Pas de mot de passe à retenir',
      'Connexion rapide et sécurisée',
      'Fonctionne sur tous tes appareils',
    ],
    privacy: '🔒 Ton email ne sera jamais partagé.',
  },
  en: {
    title: 'Login / Sign Up',
    subtitle: 'Enter your email to continue',
    emailLabel: 'Email address',
    emailPlaceholder: 'your.email@example.com',
    magicLinkInfo: 'A secure login link will be sent to your email.',
    continueButton: 'Continue',
    successTitle: 'Email sent!',
    successMessage: 'Check your inbox to connect to your account.',
    successSubMessage: 'The link is valid for 15 minutes.',
    closeButton: 'Close',
    benefits: [
      'No password to remember',
      'Fast and secure login',
      'Works on all your devices',
    ],
    privacy: '🔒 Your email will never be shared.',
  },
};

export function AuthModal({ isOpen, onClose, language, onSuccess }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  if (!isOpen) return null;

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);

    // Simulate sending magic link
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setEmailSent(true);

    // Notify parent
    setTimeout(() => {
      onSuccess(email);
    }, 2000);
  };

  const handleClose = () => {
    setEmail('');
    setEmailSent(false);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 px-8 py-8 text-center">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            {emailSent ? (
              <CheckCircle size={32} className="text-white" />
            ) : (
              <Mail size={32} className="text-white" />
            )}
          </div>
          <h2 className="text-2xl text-white mb-2">
            {emailSent ? t.successTitle : t.title}
          </h2>
          <p className="text-blue-100">
            {emailSent ? t.successMessage : t.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {!emailSent ? (
            <>
              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">{t.emailLabel}</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                  />
                </div>

                {/* Magic Link Info */}
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <Sparkles size={16} className="flex-shrink-0 mt-0.5 text-purple-600" />
                  <p>{t.magicLinkInfo}</p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!email || !email.includes('@') || isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{language === 'fr' ? 'Envoi...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <span>{t.continueButton}</span>
                  )}
                </button>
              </form>

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                {t.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Privacy */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                <p className="text-xs text-gray-600 text-center">{t.privacy}</p>
              </div>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={40} className="text-green-600" />
                </div>
                <p className="text-gray-700 mb-2">{t.successSubMessage}</p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
              >
                {t.closeButton}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
