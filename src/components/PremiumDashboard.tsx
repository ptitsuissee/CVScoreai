import {
  Crown,
  FileText,
  Sparkles,
  CheckCircle,
  Download,
  BarChart3,
  Mail,
  ArrowRight,
} from 'lucide-react';

interface PremiumDashboardProps {
  language: 'fr' | 'en';
  onStartAnalysis: () => void;
}

const content = {
  fr: {
    welcome: {
      title: 'Bienvenue sur CVScore.ai Premium 🎉',
      subtitle: 'Vos outils d\'analyse complète de CV sont maintenant débloqués.',
    },
    plan: {
      title: 'Votre plan',
      name: 'Premium',
      status: 'Actif',
      type: 'Mensuel',
      manage: 'Gérer le plan (bientôt)',
    },
    mainAction: {
      title: 'Analyser un CV',
      description: 'Collez votre CV et obtenez un feedback complet assisté par IA.',
      cta: 'Démarrer une analyse Premium',
    },
    features: {
      title: 'Fonctionnalités Premium débloquées',
      list: [
        {
          icon: Sparkles,
          title: 'Feedback ligne par ligne',
          description: 'Conseils détaillés pour chaque section',
        },
        {
          icon: CheckCircle,
          title: 'Optimisation ATS',
          description: 'Maximisez la compatibilité avec les logiciels de tri',
        },
        {
          icon: FileText,
          title: 'Réécriture de CV',
          description: 'Amélioration automatique du texte',
        },
        {
          icon: Download,
          title: 'Export PDF sans filigrane',
          description: 'Téléchargez vos analyses en haute qualité',
        },
      ],
    },
    history: {
      title: 'Analyses précédentes',
      empty: 'Vous n\'avez pas encore analysé de CV.',
      cta: 'Démarrer votre première analyse',
    },
    help: {
      title: 'Besoin d\'aide ?',
      description: 'Contactez-nous à tout moment',
      email: 'CVScoreai@outlook.com',
    },
  },
  en: {
    welcome: {
      title: 'Welcome to CVScore.ai Premium 🎉',
      subtitle: 'Your full resume analysis tools are now unlocked.',
    },
    plan: {
      title: 'Your plan',
      name: 'Premium',
      status: 'Active',
      type: 'Monthly',
      manage: 'Manage plan (coming soon)',
    },
    mainAction: {
      title: 'Analyze a resume',
      description: 'Paste your resume and get full AI-powered feedback.',
      cta: 'Start Premium analysis',
    },
    features: {
      title: 'Premium features unlocked',
      list: [
        {
          icon: Sparkles,
          title: 'Line-by-line feedback',
          description: 'Detailed advice for each section',
        },
        {
          icon: CheckCircle,
          title: 'ATS optimization',
          description: 'Maximize compatibility with screening systems',
        },
        {
          icon: FileText,
          title: 'Resume rewriting',
          description: 'Automatic text improvement',
        },
        {
          icon: Download,
          title: 'PDF export (no watermark)',
          description: 'Download your analyses in high quality',
        },
      ],
    },
    history: {
      title: 'Previous analyses',
      empty: 'You haven\'t analyzed any resumes yet.',
      cta: 'Start your first analysis',
    },
    help: {
      title: 'Need help?',
      description: 'Contact us anytime',
      email: 'CVScoreai@outlook.com',
    },
  },
};

export function PremiumDashboard({ language, onStartAnalysis }: PremiumDashboardProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 mb-8 text-white shadow-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl mb-3">{t.welcome.title}</h1>
              <p className="text-lg text-blue-100 max-w-2xl">{t.welcome.subtitle}</p>
            </div>
            <div className="hidden sm:block w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Crown className="text-white" size={32} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Actions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Plan Status */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl text-gray-900 mb-4">{t.plan.title}</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Crown className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-lg text-gray-900">{t.plan.name}</div>
                    <div className="text-sm text-gray-600">{t.plan.type}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {t.plan.status}
                  </span>
                  <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                    {t.plan.manage}
                  </button>
                </div>
              </div>
            </div>

            {/* Main Action - Analyze Resume */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl text-gray-900 mb-2">{t.mainAction.title}</h2>
                  <p className="text-gray-600">{t.mainAction.description}</p>
                </div>
              </div>

              <button
                onClick={onStartAnalysis}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 text-lg group"
              >
                {t.mainAction.cta}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            {/* History Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl text-gray-900">{t.history.title}</h2>
                <BarChart3 className="text-gray-400" size={24} />
              </div>

              {/* Empty State */}
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-gray-400" size={28} />
                </div>
                <p className="text-gray-600 mb-6">{t.history.empty}</p>
                <button
                  onClick={onStartAnalysis}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t.history.cta}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Features & Help */}
          <div className="space-y-8">
            {/* Premium Features */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl text-gray-900 mb-6">{t.features.title}</h2>

              <div className="space-y-4">
                {t.features.list.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Help & Support */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">{t.help.title}</h3>
                  <p className="text-sm text-gray-600">{t.help.description}</p>
                </div>
              </div>

              <a
                href={`mailto:${t.help.email}`}
                className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow transition-all text-sm text-gray-700 text-center"
              >
                {t.help.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
