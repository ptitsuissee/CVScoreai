import { useState } from 'react';
import { X, Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'fr' | 'en';
  onSuccess: (email: string) => void;
  onOpenSignup?: () => void;
}

const content = {
  fr: {
    title: 'Connexion sécurisée',
    subtitle: 'Accède à ton espace personnel en toute sécurité.',
    emailLabel: 'Email',
    emailPlaceholder: 'ton.email@exemple.com',
    passwordLabel: 'Mot de passe',
    passwordPlaceholder: '••••••••',
    submitButton: 'Se connecter',
    forgotPassword: 'Mot de passe oublié ?',
    securityText: 'Tes données sont protégées et utilisées uniquement pour te fournir le service.',
    noAccount: 'Pas encore de compte ?',
    signupLink: 'Créer un compte',
    error: 'Email ou mot de passe incorrect',
  },
  en: {
    title: 'Secure login',
    subtitle: 'Access your personal dashboard securely.',
    emailLabel: 'Email',
    emailPlaceholder: 'your.email@example.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••',
    submitButton: 'Sign in',
    forgotPassword: 'Forgot password?',
    securityText: 'Your data is protected and used only to provide the service.',
    noAccount: 'Don\'t have an account?',
    signupLink: 'Create account',
    error: 'Incorrect email or password',
  },
};

export function LoginModal({ isOpen, onClose, language, onSuccess, onOpenSignup }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@') || !password) return;

    setIsSubmitting(true);
    setError('');

    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock validation (replace with real auth)
    if (password.length < 6) {
      setError(t.error);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    onSuccess(email);
    handleClose();
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setError('');
    setIsSubmitting(false);
    onClose();
  };

  const handleSignupClick = () => {
    handleClose();
    if (onOpenSignup) onOpenSignup();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="relative px-8 py-6 border-b border-gray-200">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
          
          <h2 className="text-2xl text-gray-900 mb-2">{t.title}</h2>
          <p className="text-sm text-gray-500">{t.subtitle}</p>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">{t.emailLabel}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  required
                  disabled={isSubmitting}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">{t.passwordLabel}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  required
                  disabled={isSubmitting}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 transition-all"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 flex items-start gap-2">
                <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-700 underline"
              >
                {t.forgotPassword}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!email || !email.includes('@') || !password || isSubmitting}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{language === 'fr' ? 'Connexion...' : 'Signing in...'}</span>
                </>
              ) : (
                <>
                  <span>{t.submitButton}</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Reassurance */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-6">
            <p className="text-sm text-blue-800 text-center">{t.securityText}</p>
          </div>

          {/* No account link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {t.noAccount}{' '}
              <button
                onClick={handleSignupClick}
                className="text-blue-600 hover:text-blue-700 underline"
              >
                {t.signupLink}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}