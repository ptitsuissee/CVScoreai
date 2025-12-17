import { Crown, Lock } from 'lucide-react';

interface PremiumButtonProps {
  language: 'fr' | 'en';
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const content = {
  fr: {
    unlock: 'Débloquer Premium',
    unlockShort: 'Débloquer',
    upgradePremium: 'Passer Premium',
    securePayment: 'Paiement sécurisé via Stripe (bientôt disponible)',
  },
  en: {
    unlock: 'Unlock Premium',
    unlockShort: 'Unlock',
    upgradePremium: 'Upgrade to Premium',
    securePayment: 'Secure payment via Stripe (coming soon)',
  },
};

export function PremiumButton({
  language,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: PremiumButtonProps) {
  const t = content[language];

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-600/30',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={onClick}
        className={`
          group relative
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          rounded-xl
          transition-all
          duration-200
          flex items-center gap-2
          font-medium
          ${className}
        `}
      >
        <Crown className="group-hover:scale-110 transition-transform" size={20} />
        <span>{t.unlock}</span>
        <Lock size={16} className="opacity-70" />
      </button>
      
      <p className="text-xs text-gray-500 text-center max-w-xs">
        {t.securePayment}
      </p>
      
      {/* Design placeholder label - visible only in dev */}
      {process.env.NODE_ENV === 'development' && (
        <div className="text-xs text-orange-600 border border-orange-300 bg-orange-50 px-2 py-1 rounded">
          (À remplacer par Stripe Payment Link)
        </div>
      )}
    </div>
  );
}
