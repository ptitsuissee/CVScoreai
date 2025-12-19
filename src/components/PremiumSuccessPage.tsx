import { Crown, CheckCircle, Sparkles, ArrowRight, Shield, Zap, FileText, Target, Mail } from 'lucide-react';

interface PremiumSuccessPageProps {
  language: 'fr' | 'en';
  onAccessAnalysis: () => void;
}

const content = {
  fr: {
    title: 'Accès Premium activé',
    emoji: '🎉',
    subtitle: 'Merci pour ton achat.',
    description: 'Toutes les fonctionnalités Premium sont maintenant disponibles.',
    badge: 'Premium actif',
    features: {
      title: 'Fonctionnalités débloquées',
      items: [
        {
          icon: FileText,
          title: 'Feedback ligne par ligne',
          description: 'Analyse détaillée de chaque section',
        },
        {
          icon: Target,
          title: 'Optimisation ATS',
          description: 'Passe les systèmes automatisés',
        },
        {
          icon: Sparkles,
          title: 'Suggestions de reformulation',
          description: 'Améliore ton texte immédiatement',
        },
        {
          icon: Zap,
          title: 'Export PDF',
          description: 'Télécharge ton rapport complet',
        },
      ],
    },
    nextSteps: {
      title: 'Que faire maintenant ?',
      step1: 'Retourne sur la page d\'accueil',
      step2: 'Lance une nouvelle analyse de CV',
      step3: 'Accède à toutes les fonctionnalités Premium',
    },
    cta: 'Accéder à mon analyse complète',
    trust: 'Paiement sécurisé via Stripe · Support disponible',
    support: {
      title: 'Besoin d\'aide ?',
      description: 'Notre équipe est là pour toi.',
      email: 'support@cvscore.ai',
    },
  },
  en: {
    title: 'Premium access activated',
    emoji: '🎉',
    subtitle: 'Thank you for your purchase.',
    description: 'All Premium features are now available.',
    badge: 'Premium active',
    features: {
      title: 'Unlocked features',
      items: [
        {
          icon: FileText,
          title: 'Line-by-line feedback',
          description: 'Detailed analysis of every section',
        },
        {
          icon: Target,
          title: 'ATS optimization',
          description: 'Pass automated systems',
        },
        {
          icon: Sparkles,
          title: 'Rewriting suggestions',
          description: 'Improve your text immediately',
        },
        {
          icon: Zap,
          title: 'PDF export',
          description: 'Download your complete report',
        },
      ],
    },
    nextSteps: {
      title: 'What to do now?',
      step1: 'Return to the homepage',
      step2: 'Start a new resume analysis',
      step3: 'Access all Premium features',
    },
    cta: 'Access full analysis',
    trust: 'Secure payment via Stripe · Support available',
    support: {
      title: 'Need help?',
      description: 'Our team is here for you.',
      email: 'support@cvscore.ai',
    },
  },
};

export function PremiumSuccessPage({ language, onAccessAnalysis }: PremiumSuccessPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Animation */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl mb-6 animate-pulse">
            <CheckCircle className="text-white" size={48} />
          </div>

          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-3">
            {t.title} {t.emoji}
          </h1>
          <p className="text-xl text-gray-700 mb-2">{t.subtitle}</p>
          <p className="text-lg text-gray-600">{t.description}</p>
        </div>

        {/* Premium Badge */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-2xl p-8 shadow-2xl mb-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
              <Crown className="text-gray-900" size={28} />
            </div>
            <div>
              <div className="text-sm text-blue-200 uppercase tracking-wide">Status</div>
              <div className="text-2xl">{t.badge}</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="border-t border-white/20 pt-6">
            <h3 className="text-xl mb-4">{t.features.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {t.features.items.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all"
                  >
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
          <h3 className="text-2xl text-gray-900 mb-6 flex items-center gap-3">
            <Sparkles className="text-purple-600" size={28} />
            {t.nextSteps.title}
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                1
              </div>
              <p className="text-gray-700 pt-1">{t.nextSteps.step1}</p>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                2
              </div>
              <p className="text-gray-700 pt-1">{t.nextSteps.step2}</p>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                3
              </div>
              <p className="text-gray-700 pt-1">{t.nextSteps.step3}</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onAccessAnalysis}
          className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all text-lg flex items-center justify-center gap-3 group shadow-lg mb-8"
        >
          <Sparkles size={22} />
          <span>{t.cta}</span>
          <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Support */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border-2 border-gray-200 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="text-blue-600" size={24} />
            </div>
            <div>
              <h4 className="text-lg text-gray-900 mb-1">{t.support.title}</h4>
              <p className="text-gray-600 mb-2">{t.support.description}</p>
              <a
                href={`mailto:${t.support.email}`}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                {t.support.email}
              </a>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <Shield size={16} className="text-green-600" />
            {t.trust}
          </p>
        </div>

        {/* Confetti background effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fade-in opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${Math.random() * 16 + 12}px`,
              }}
            >
              {['🎉', '✨', '⭐', '💫', '🎊'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
