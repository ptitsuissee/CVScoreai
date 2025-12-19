import { Crown, CheckCircle, Sparkles, ArrowRight, Shield, Zap, FileText, Target } from 'lucide-react';

interface PremiumActivationPageProps {
  language: 'fr' | 'en';
  onContinue: () => void;
  planType?: 'monthly' | 'oneTime';
}

const content = {
  fr: {
    title: 'Paiement confirmé',
    subtitle: 'Merci pour ton achat.',
    description: 'Ton accès Premium est maintenant actif.',
    activatedOn: 'Activé le',
    plan: {
      monthly: 'Premium Mensuel',
      oneTime: 'Premium à vie',
    },
    features: {
      title: 'Fonctionnalités débloquées',
      items: [
        {
          icon: FileText,
          title: 'Feedback ligne par ligne',
          description: 'Analyse détaillée de chaque section de ton CV',
        },
        {
          icon: Target,
          title: 'Optimisation ATS avancée',
          description: 'Recommandations pour passer les systèmes automatisés',
        },
        {
          icon: Sparkles,
          title: 'Suggestions de reformulation',
          description: 'Propositions d\'amélioration concrètes',
        },
        {
          icon: Zap,
          title: 'Export PDF professionnel',
          description: 'Télécharge ton rapport complet',
        },
      ],
    },
    cta: 'Accéder à mon analyse Premium',
    trust: 'Paiement sécurisé via Stripe · Accès immédiat · Support disponible',
    nextSteps: {
      title: 'Prochaines étapes',
      step1: {
        title: 'Analyse ton CV',
        description: 'Retourne sur la page d\'accueil et lance une nouvelle analyse',
      },
      step2: {
        title: 'Consulte le rapport détaillé',
        description: 'Accède à toutes les fonctionnalités Premium',
      },
      step3: {
        title: 'Optimise et postule',
        description: 'Améliore ton CV et augmente tes chances d\'entretien',
      },
    },
  },
  en: {
    title: 'Payment successful',
    subtitle: 'Thank you for your purchase.',
    description: 'Your Premium access is now active.',
    activatedOn: 'Activated on',
    plan: {
      monthly: 'Monthly Premium',
      oneTime: 'Lifetime Premium',
    },
    features: {
      title: 'Unlocked features',
      items: [
        {
          icon: FileText,
          title: 'Line-by-line feedback',
          description: 'Detailed analysis of every section of your resume',
        },
        {
          icon: Target,
          title: 'Advanced ATS optimization',
          description: 'Recommendations to pass automated systems',
        },
        {
          icon: Sparkles,
          title: 'Rewriting suggestions',
          description: 'Concrete improvement proposals',
        },
        {
          icon: Zap,
          title: 'Professional PDF export',
          description: 'Download your complete report',
        },
      ],
    },
    cta: 'Access my Premium analysis',
    trust: 'Secure payment via Stripe · Instant access · Support available',
    nextSteps: {
      title: 'Next steps',
      step1: {
        title: 'Analyze your resume',
        description: 'Return to the homepage and start a new analysis',
      },
      step2: {
        title: 'View detailed report',
        description: 'Access all Premium features',
      },
      step3: {
        title: 'Optimize and apply',
        description: 'Improve your resume and increase your interview chances',
      },
    },
  },
};

export function PremiumActivationPage({ language, onContinue, planType = 'oneTime' }: PremiumActivationPageProps) {
  const t = content[language];
  const today = new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          {/* Animated success icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl mb-6 animate-pulse-glow">
            <CheckCircle className="text-white" size={48} />
          </div>

          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            {t.title} 🎉
          </h1>
          <p className="text-xl text-gray-700 mb-2">{t.subtitle}</p>
          <p className="text-lg text-gray-600">{t.description}</p>
        </div>

        {/* Premium Badge */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-2xl p-8 shadow-2xl mb-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                <Crown className="text-gray-900" size={28} />
              </div>
              <div>
                <div className="text-sm text-blue-200 uppercase tracking-wide">Premium</div>
                <div className="text-2xl">{t.plan[planType]}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-200">{t.activatedOn}</div>
              <div className="text-lg">{today}</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="border-t border-white/20 pt-6">
            <h3 className="text-xl mb-4">{t.features.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {t.features.items.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="font-medium mb-1">{feature.title}</div>
                      <div className="text-sm text-blue-100">{feature.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8 mb-8">
          <h3 className="text-2xl text-gray-900 mb-6">{t.nextSteps.title}</h3>
          <div className="space-y-4">
            {[t.nextSteps.step1, t.nextSteps.step2, t.nextSteps.step3].map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  {index + 1}
                </div>
                <div>
                  <div className="text-lg text-gray-900 mb-1">{step.title}</div>
                  <div className="text-gray-600">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onContinue}
          className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all text-lg flex items-center justify-center gap-3 group shadow-lg mb-6"
        >
          <Sparkles size={22} />
          <span>{t.cta}</span>
          <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Trust badges */}
        <div className="text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <Shield size={16} className="text-green-600" />
            {t.trust}
          </p>
        </div>

        {/* Confetti effect mockup */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fade-in"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            >
              {['🎉', '✨', '🎊', '⭐', '💫'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}