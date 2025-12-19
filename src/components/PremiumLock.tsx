import { Lock, Crown, ArrowRight, Shield, Zap } from 'lucide-react';

interface PremiumLockProps {
  language: 'fr' | 'en';
  onUpgrade: () => void;
  title?: string;
  compact?: boolean;
}

const content = {
  fr: {
    badge: 'Premium',
    title: 'Fonctionnalité Premium',
    description: 'Cette fonctionnalité est disponible avec l\'offre Premium.',
    cta: 'Débloquer Premium',
    security: 'Paiement sécurisé via Stripe',
    instant: 'Accès immédiat après paiement',
  },
  en: {
    badge: 'Premium',
    title: 'Premium Feature',
    description: 'This feature is available with the Premium plan.',
    cta: 'Unlock Premium',
    security: 'Secure payment via Stripe',
    instant: 'Instant access after payment',
  },
};

export function PremiumLock({ language, onUpgrade, title, compact = false }: PremiumLockProps) {
  const t = content[language];

  if (compact) {
    return (
      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
        <div className="flex items-center gap-2">
          <Lock className="text-blue-600" size={16} />
          <span className="text-sm text-gray-700">{title || t.title}</span>
        </div>
        <button
          onClick={onUpgrade}
          className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t.cta}
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
        <div className="max-w-md p-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-4">
            <Crown size={18} />
            <span className="text-sm uppercase tracking-wide">{t.badge}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl text-gray-900 mb-3">
            {title || t.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            {t.description}
          </p>

          {/* CTA Button */}
          <button
            onClick={onUpgrade}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-3 group mb-4"
          >
            <span>{t.cta}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust badges */}
          <div className="space-y-2 text-xs text-gray-500">
            <div className="flex items-center justify-center gap-2">
              <Shield size={14} />
              <span>{t.security}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap size={14} />
              <span>{t.instant}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
