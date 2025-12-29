import { X, Save, Sparkles, Mail, Lock, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface SignupPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'fr' | 'en';
  variant?: 'save' | 'history' | 'payment';
  onSuccess?: (email: string) => void;
  onOpenLogin?: () => void;
}

const content = {
  fr: {
    title: 'Créer un compte gratuit',
    message: 'Créer un compte te permet de sauvegarder tes CV, analyses et accès Premium.',
    emailLabel: 'Email',
    emailPlaceholder: 'ton.email@exemple.com',
    passwordLabel: 'Mot de passe',
    passwordPlaceholder: 'Au moins 8 caractères',
    passwordHint: 'Choisis un mot de passe sécurisé. Il est stocké de manière chiffrée.',
    confirmPasswordLabel: 'Confirmer le mot de passe',
    confirmPasswordPlaceholder: 'Retape ton mot de passe',
    createAccount: 'Créer mon compte',
    continueWithout: 'Continuer sans compte',
    reassurance: 'Gratuit · Sans engagement · Données sécurisées',
    rgpdText: 'En créant un compte, tu acceptes notre politique de confidentialité.\nTes données ne sont jamais revendues.',
    alreadyHaveAccount: 'Déjà un compte ?',
    loginLink: 'Se connecter',
    passwordMismatch: 'Les mots de passe ne correspondent pas',
    passwordTooShort: 'Le mot de passe doit contenir au moins 8 caractères',
    successMessage: 'Tous tes CV et analyses sont sauvegardés dans ton espace personnel.',
  },
  en: {
    title: 'Create a free account',
    message: 'Create an account to save your resumes, analyses, and Premium access.',
    emailLabel: 'Email',
    emailPlaceholder: 'your.email@example.com',
    passwordLabel: 'Password',
    passwordPlaceholder: 'At least 8 characters',
    passwordHint: 'Choose a secure password. It is stored in encrypted form.',
    confirmPasswordLabel: 'Confirm password',
    confirmPasswordPlaceholder: 'Retype your password',
    createAccount: 'Create Account',
    continueWithout: 'Continue without account',
    reassurance: 'Free · No commitment · Secure data',
    rgpdText: 'By creating an account, you agree to our privacy policy.\nYour data is never sold.',
    alreadyHaveAccount: 'Already have an account?',
    loginLink: 'Sign in',
    passwordMismatch: 'Passwords do not match',
    passwordTooShort: 'Password must be at least 8 characters',
    successMessage: 'All your resumes and analyses are saved in your personal space.',
  },
};

export function SignupPromptModal({ isOpen, onClose, language, variant, onSuccess, onOpenLogin }: SignupPromptModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  if (!isOpen) return null;

  const t = content[language];

  const handleCreateClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setError('');

    // Validation
    if (password.length < 8) {
      setError(t.passwordTooShort);
      return;
    }

    if (password !== confirmPassword) {
      setError(t.passwordMismatch);
      return;
    }

    setIsSubmitting(true);

    // Simulate account creation (replace with real API call)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    if (onSuccess) onSuccess(email);
    handleClose();
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    setShowForm(false);
    setIsSubmitting(false);
    onClose();
  };

  const handleLoginClick = () => {
    handleClose();
    if (onOpenLogin) onOpenLogin();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
        {!showForm ? (
          <>
            {/* Prompt Header */}
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 px-8 py-8 text-center border-b border-gray-200">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Save size={32} className="text-blue-600" />
              </div>
              <h2 className="text-2xl text-gray-900 mb-2">{t.title}</h2>
              <p className="text-gray-600">{t.message}</p>
            </div>

            {/* Prompt Benefits */}
            <div className="px-8 py-6">
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-6">
                <p className="text-sm text-green-800 flex items-start gap-2">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                  {t.successMessage}
                </p>
              </div>

              {/* Reassurance */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-6">
                <p className="text-sm text-blue-800 text-center flex items-center justify-center gap-2">
                  <Sparkles size={16} />
                  {t.reassurance}
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={handleCreateClick}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                >
                  {t.createAccount}
                </button>
                <button
                  onClick={handleClose}
                  className="w-full px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t.continueWithout}
                </button>
              </div>

              {/* Already have account */}
              {onOpenLogin && (
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">
                    {t.alreadyHaveAccount}{' '}
                    <button
                      onClick={handleLoginClick}
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      {t.loginLink}
                    </button>
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Signup Form */}
            <div className="relative px-8 py-6 border-b border-gray-200">
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-2xl text-gray-900 mb-2">{t.title}</h2>
            </div>

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
                  <p className="text-sm text-gray-500 mt-1">{t.passwordHint}</p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">{t.confirmPasswordLabel}</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder={t.confirmPasswordPlaceholder}
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!email || !password || !confirmPassword || isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{language === 'fr' ? 'Création...' : 'Creating...'}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.createAccount}</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
                
                {/* RGPD Text */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                  <p className="text-xs text-gray-600 text-center leading-relaxed whitespace-pre-line">
                    {t.rgpdText}
                  </p>
                </div>
              </form>

              {/* Reassurance */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-6">
                <p className="text-sm text-blue-800 text-center">{t.reassurance}</p>
              </div>

              {/* Already have account */}
              {onOpenLogin && (
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    {t.alreadyHaveAccount}{' '}
                    <button
                      onClick={handleLoginClick}
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      {t.loginLink}
                    </button>
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}