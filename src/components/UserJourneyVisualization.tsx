import { Home, Upload, Sparkles, Eye, Lock, CreditCard, Crown, CheckCircle, ArrowRight, MousePointerClick } from 'lucide-react';

interface UserJourneyVisualizationProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Parcours Utilisateur CVScore.ai',
    subtitle: 'Visualisation complète du flux Gratuit → Premium',
    freeJourney: {
      title: '🆓 Parcours Gratuit',
      steps: [
        {
          icon: Home,
          title: '1. Arrivée Homepage',
          description: 'Découverte via SEO, pub ou bouche-à-oreille',
          features: ['Hero SEO-optimisé', 'Trust badges', 'Onboarding modal'],
          color: 'blue',
        },
        {
          icon: Upload,
          title: '2. Coller le CV',
          description: 'Formulaire simple : CV + poste cible + pays',
          features: ['Sans inscription', 'Gratuit', 'Résultat en < 60s'],
          color: 'purple',
        },
        {
          icon: Sparkles,
          title: '3. Analyse IA',
          description: 'Score instantané + 4 sous-scores',
          features: ['Score global /100', 'Clarté, Impact, Structure, ATS', 'Conseils généraux'],
          color: 'green',
        },
        {
          icon: Eye,
          title: '4. Résultats gratuits',
          description: 'Sections visibles + Premium 🔒 (blur)',
          features: ['Scores visibles', 'Sections Premium floutées', '5 moments upsell'],
          color: 'orange',
        },
      ],
    },
    premiumJourney: {
      title: '👑 Parcours Premium',
      steps: [
        {
          icon: Lock,
          title: '5. Clic "Débloquer Premium"',
          description: 'Depuis widget ou CTA',
          features: ['5 points stratégiques', 'Modal Premium', 'Redirection /pricing'],
          color: 'purple',
        },
        {
          icon: CreditCard,
          title: '6. Page Pricing',
          description: 'Choix plan + Stripe Checkout',
          features: ['Mensuel 9,99€', 'À vie 12,99€', 'Support EUR/CHF'],
          color: 'blue',
        },
        {
          icon: CheckCircle,
          title: '7. Paiement Stripe',
          description: 'Checkout sécurisé',
          features: ['Carte bancaire', 'Paiement instantané', 'Webhook serveur'],
          color: 'green',
        },
        {
          icon: Crown,
          title: '8. Activation Premium',
          description: 'Page /premium-success',
          features: ['Badge Premium actif', 'Confetti animation', 'CTA accès complet'],
          color: 'yellow',
        },
        {
          icon: Sparkles,
          title: '9. Widget débloqué',
          description: 'Toutes sections accessibles',
          features: ['Feedback ligne/ligne', 'Optimisation ATS', 'Export PDF'],
          color: 'purple',
        },
      ],
    },
    upsellMoments: {
      title: '💡 5 Moments d\'Upsell Stratégiques',
      items: [
        '1️⃣ Après affichage score global (modal Premium)',
        '2️⃣ Section "Feedback détaillé" (overlay + CTA)',
        '3️⃣ Section "Optimisation ATS" (overlay + CTA)',
        '4️⃣ Section "Suggestions reformulation" (overlay + CTA)',
        '5️⃣ Bouton "Export PDF" (tooltip Premium)',
      ],
    },
    conversionTips: {
      title: '🎯 Optimisations Conversion',
      items: [
        '✅ Onboarding première visite (3 étapes)',
        '✅ Hero SEO avec H1 optimisé + trust badges',
        '✅ FAQ enrichie (6 questions conversion)',
        '✅ Sections Premium visibles mais floutées',
        '✅ 5 points d\'upsell stratégiques',
        '✅ Stripe Buy Buttons (paiement 1-clic)',
        '✅ Page /premium-success immédiate',
        '✅ Activation automatique (localStorage)',
      ],
    },
  },
  en: {
    title: 'CVScore.ai User Journey',
    subtitle: 'Complete visualization of Free → Premium flow',
    freeJourney: {
      title: '🆓 Free Journey',
      steps: [
        {
          icon: Home,
          title: '1. Homepage arrival',
          description: 'Discovery via SEO, ads, or word-of-mouth',
          features: ['SEO-optimized Hero', 'Trust badges', 'Onboarding modal'],
          color: 'blue',
        },
        {
          icon: Upload,
          title: '2. Paste resume',
          description: 'Simple form: CV + target job + country',
          features: ['No signup', 'Free', 'Result in < 60s'],
          color: 'purple',
        },
        {
          icon: Sparkles,
          title: '3. AI analysis',
          description: 'Instant score + 4 sub-scores',
          features: ['Overall score /100', 'Clarity, Impact, Structure, ATS', 'General advice'],
          color: 'green',
        },
        {
          icon: Eye,
          title: '4. Free results',
          description: 'Visible sections + Premium 🔒 (blur)',
          features: ['Scores visible', 'Premium sections blurred', '5 upsell moments'],
          color: 'orange',
        },
      ],
    },
    premiumJourney: {
      title: '👑 Premium Journey',
      steps: [
        {
          icon: Lock,
          title: '5. Click "Unlock Premium"',
          description: 'From widget or CTA',
          features: ['5 strategic points', 'Premium modal', 'Redirect /pricing'],
          color: 'purple',
        },
        {
          icon: CreditCard,
          title: '6. Pricing page',
          description: 'Plan choice + Stripe Checkout',
          features: ['Monthly €9.99', 'Lifetime €12.99', 'EUR/CHF support'],
          color: 'blue',
        },
        {
          icon: CheckCircle,
          title: '7. Stripe payment',
          description: 'Secure checkout',
          features: ['Credit card', 'Instant payment', 'Server webhook'],
          color: 'green',
        },
        {
          icon: Crown,
          title: '8. Premium activation',
          description: '/premium-success page',
          features: ['Premium badge active', 'Confetti animation', 'Full access CTA'],
          color: 'yellow',
        },
        {
          icon: Sparkles,
          title: '9. Widget unlocked',
          description: 'All sections accessible',
          features: ['Line-by-line feedback', 'ATS optimization', 'PDF export'],
          color: 'purple',
        },
      ],
    },
    upsellMoments: {
      title: '💡 5 Strategic Upsell Moments',
      items: [
        '1️⃣ After overall score display (Premium modal)',
        '2️⃣ "Detailed feedback" section (overlay + CTA)',
        '3️⃣ "ATS optimization" section (overlay + CTA)',
        '4️⃣ "Rewriting suggestions" section (overlay + CTA)',
        '5️⃣ "Export PDF" button (Premium tooltip)',
      ],
    },
    conversionTips: {
      title: '🎯 Conversion Optimizations',
      items: [
        '✅ First visit onboarding (3 steps)',
        '✅ SEO Hero with optimized H1 + trust badges',
        '✅ Enriched FAQ (6 conversion questions)',
        '✅ Premium sections visible but blurred',
        '✅ 5 strategic upsell points',
        '✅ Stripe Buy Buttons (1-click payment)',
        '✅ Immediate /premium-success page',
        '✅ Automatic activation (localStorage)',
      ],
    },
  },
};

export function UserJourneyVisualization({ language }: UserJourneyVisualizationProps) {
  const t = content[language];

  const renderStep = (step: any, index: number, isLastStep: boolean) => {
    const Icon = step.icon;
    
    const colorClasses = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'bg-blue-600 text-white',
        text: 'text-blue-700',
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'bg-purple-600 text-white',
        text: 'text-purple-700',
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'bg-green-600 text-white',
        text: 'text-green-700',
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'bg-orange-600 text-white',
        text: 'text-orange-700',
      },
      yellow: {
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        icon: 'bg-yellow-500 text-gray-900',
        text: 'text-yellow-700',
      },
    };

    const colors = colorClasses[step.color as keyof typeof colorClasses];

    return (
      <div className="relative">
        <div className={`${colors.bg} border-2 ${colors.border} rounded-xl p-6 hover:shadow-lg transition-all`}>
          <div className="flex items-start gap-4 mb-4">
            <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
              <Icon size={28} />
            </div>
            <div className="flex-1">
              <h4 className={`text-lg ${colors.text} mb-1`}>{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            {step.features.map((feature: string, fIndex: number) => (
              <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow connector */}
        {!isLastStep && (
          <div className="flex justify-center my-4">
            <ArrowRight className="text-gray-400" size={32} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Free Journey */}
        <div className="mb-12">
          <h2 className="text-3xl text-gray-900 mb-6">{t.freeJourney.title}</h2>
          <div className="space-y-0">
            {t.freeJourney.steps.map((step, index) => 
              renderStep(step, index, index === t.freeJourney.steps.length - 1)
            )}
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center gap-4 my-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm shadow-lg">
            {language === 'fr' ? 'Upgrade Premium ✨' : 'Premium Upgrade ✨'}
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>

        {/* Premium Journey */}
        <div className="mb-12">
          <h2 className="text-3xl text-gray-900 mb-6">{t.premiumJourney.title}</h2>
          <div className="space-y-0">
            {t.premiumJourney.steps.map((step, index) => 
              renderStep(step, index, index === t.premiumJourney.steps.length - 1)
            )}
          </div>
        </div>

        {/* Upsell moments */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200 p-8">
            <h3 className="text-2xl text-gray-900 mb-6 flex items-center gap-2">
              <MousePointerClick className="text-purple-600" size={28} />
              {t.upsellMoments.title}
            </h3>
            <div className="space-y-3">
              {t.upsellMoments.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-700">
                  <div className="mt-1">{item.split(' ')[0]}</div>
                  <div>{item.substring(item.indexOf(' ') + 1)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 p-8">
            <h3 className="text-2xl text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle className="text-green-600" size={28} />
              {t.conversionTips.title}
            </h3>
            <div className="space-y-3">
              {t.conversionTips.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                  <div className="mt-0.5">{item.split(' ')[0]}</div>
                  <div>{item.substring(item.indexOf(' ') + 1)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary card */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-2xl p-8 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">🎯</div>
          <h3 className="text-2xl mb-3">
            {language === 'fr' ? 'Parcours optimisé pour la conversion' : 'Conversion-optimized journey'}
          </h3>
          <p className="text-blue-100 mb-6">
            {language === 'fr'
              ? '13 étapes du premier clic au Premium actif'
              : '13 steps from first click to active Premium'}
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-1">4</div>
              <div className="text-sm text-blue-200">{language === 'fr' ? 'Étapes gratuites' : 'Free steps'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-1">5</div>
              <div className="text-sm text-blue-200">{language === 'fr' ? 'Étapes Premium' : 'Premium steps'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-1">5</div>
              <div className="text-sm text-blue-200">{language === 'fr' ? 'Points upsell' : 'Upsell points'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
