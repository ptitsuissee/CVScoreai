import {
  Lock,
  Sparkles,
  CheckCircle,
  FileText,
  Download,
  ArrowRight,
  Mail,
  Crown,
} from 'lucide-react';

interface FreeDashboardProps {
  language: 'fr' | 'en';
  analysis: {
    overall_score: number;
    summary: string;
    clarity_score?: number;
    structure_score?: number;
  };
  onUpgradePremium: () => void;
  onNewAnalysis: () => void;
}

const content = {
  fr: {
    welcome: {
      title: 'Bienvenue sur CVScore.ai',
      subtitle: 'Voici le résumé de votre analyse de CV.',
    },
    result: {
      badge: 'Analyse gratuite',
      summary: 'Votre résultat',
    },
    subscores: {
      title: 'Notes détaillées',
      clarity: 'Clarté',
      structure: 'Structure',
      impact: 'Impact',
      ats: 'Compatibilité ATS',
      locked: 'Débloqué avec Premium',
    },
    tips: {
      title: 'Conseils d\'amélioration prioritaires',
      available: [
        'Ajoutez des réalisations quantifiables',
        'Utilisez des verbes d\'action forts',
      ],
      locked: 'Débloquez les recommandations complètes avec Premium',
    },
    premium: {
      badge: 'Premium',
      title: 'Débloquez l\'analyse Premium complète',
      features: [
        'Feedback ligne par ligne',
        'Optimisation ATS avancée',
        'Réécriture automatique du CV',
        'Export PDF sans filigrane',
      ],
      cta: 'Passer à Premium',
      price: 'À partir de 6,99 €',
    },
    actions: {
      newAnalysis: 'Analyser un autre CV',
      limit: 'Utilisateurs gratuits : analyses limitées par jour',
    },
    help: {
      title: 'Besoin d\'aide ?',
      email: 'CVScoreai@outlook.com',
    },
  },
  en: {
    welcome: {
      title: 'Welcome to CVScore.ai',
      subtitle: 'Here is your resume analysis summary.',
    },
    result: {
      badge: 'Free analysis',
      summary: 'Your result',
    },
    subscores: {
      title: 'Detailed scores',
      clarity: 'Clarity',
      structure: 'Structure',
      impact: 'Impact',
      ats: 'ATS Compatibility',
      locked: 'Unlocked with Premium',
    },
    tips: {
      title: 'Top improvement tips',
      available: [
        'Add quantifiable achievements',
        'Use strong action verbs',
      ],
      locked: 'Unlock full recommendations with Premium',
    },
    premium: {
      badge: 'Premium',
      title: 'Unlock full Premium analysis',
      features: [
        'Line-by-line feedback',
        'ATS optimization',
        'Resume rewriting',
        'PDF export',
      ],
      cta: 'Upgrade to Premium',
      price: 'From $6.99',
    },
    actions: {
      newAnalysis: 'Analyze another resume',
      limit: 'Free users are limited per day',
    },
    help: {
      title: 'Need help?',
      email: 'CVScoreai@outlook.com',
    },
  },
};

export function FreeDashboard({
  language,
  analysis,
  onUpgradePremium,
  onNewAnalysis,
}: FreeDashboardProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl text-gray-900 mb-3">{t.welcome.title}</h1>
          <p className="text-base sm:text-lg text-gray-600">{t.welcome.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Results */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Main Result Card */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 sm:p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl text-gray-900">{t.result.summary}</h2>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm">
                  {t.result.badge}
                </span>
              </div>

              {/* Score Display */}
              <div className="text-center mb-6 sm:mb-8 py-6 sm:py-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="inline-flex items-baseline gap-2 sm:gap-3">
                  <span className="text-6xl sm:text-7xl text-blue-600">
                    {analysis.overall_score}
                  </span>
                  <span className="text-2xl sm:text-3xl text-gray-400">/ 100</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-gray-700 text-center text-sm sm:text-base">{analysis.summary}</p>
            </div>

            {/* Sub-scores */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl text-gray-900 mb-4 sm:mb-6">{t.subscores.title}</h3>

              <div className="space-y-4">
                {/* Clarity - Unlocked */}
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-900">{t.subscores.clarity}</span>
                  </div>
                  <span className="text-green-700">
                    {analysis.clarity_score || 85}%
                  </span>
                </div>

                {/* Structure - Unlocked */}
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-900">{t.subscores.structure}</span>
                  </div>
                  <span className="text-green-700">
                    {analysis.structure_score || 90}%
                  </span>
                </div>

                {/* Impact - Locked */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 opacity-60">
                  <div className="flex items-center gap-3">
                    <Lock className="text-gray-400" size={20} />
                    <span className="text-gray-600">{t.subscores.impact}</span>
                  </div>
                  <span className="text-xs text-gray-500">{t.subscores.locked}</span>
                </div>

                {/* ATS - Locked */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 opacity-60">
                  <div className="flex items-center gap-3">
                    <Lock className="text-gray-400" size={20} />
                    <span className="text-gray-600">{t.subscores.ats}</span>
                  </div>
                  <span className="text-xs text-gray-500">{t.subscores.locked}</span>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl text-gray-900 mb-4 sm:mb-6">{t.tips.title}</h3>

              <div className="space-y-3 sm:space-y-4">
                {/* Available tips */}
                {t.tips.available.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-blue-50 rounded-lg">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{tip}</span>
                  </div>
                ))}

                {/* Locked tips */}
                <div className="relative">
                  <div className="p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 blur-sm opacity-50">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200 flex items-center gap-2">
                      <Lock className="text-gray-600" size={16} />
                      <span className="text-sm text-gray-700">{t.tips.locked}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New Analysis Button */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <button
                onClick={onNewAnalysis}
                className="w-full py-3 sm:py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                {t.actions.newAnalysis}
                <ArrowRight size={18} />
              </button>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 text-center">
                {t.actions.limit}
              </p>
            </div>
          </div>

          {/* Right Column - Premium Upsell */}
          <div className="space-y-6 sm:space-y-8">
            {/* Premium Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white shadow-2xl sticky top-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4 sm:mb-6">
                <Crown size={16} />
                <span className="text-xs sm:text-sm">{t.premium.badge}</span>
              </div>

              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6">{t.premium.title}</h3>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {t.premium.features.map((feature, index) => {
                  const icons = [Sparkles, CheckCircle, FileText, Download];
                  const Icon = icons[index];
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={16} />
                      </div>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={onUpgradePremium}
                className="w-full py-3 sm:py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center gap-2 mb-3 sm:mb-4"
              >
                <span>{t.premium.cta}</span>
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-sm text-blue-100">{t.premium.price}</p>
            </div>

            {/* Help Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg text-gray-900 mb-1">{t.help.title}</h3>
                </div>
              </div>

              <a
                href={`mailto:${t.help.email}`}
                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow transition-all text-sm text-gray-700 text-center"
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
