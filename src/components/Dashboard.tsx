import { 
  FileText, 
  TrendingUp, 
  Calendar, 
  Download, 
  BarChart3,
  Target,
  Crown,
  Plus,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardProps {
  language: 'fr' | 'en';
  analysisHistory: any[];
  onNewAnalysis: () => void;
}

const content = {
  fr: {
    title: 'Tableau de Bord',
    welcome: 'Bienvenue',
    premium: 'Premium',
    newAnalysis: 'Nouvelle Analyse',
    stats: {
      totalAnalyses: 'Analyses Totales',
      averageScore: 'Score Moyen',
      improvement: 'Progression',
      lastAnalysis: 'Dernière Analyse',
    },
    recentAnalyses: 'Analyses Récentes',
    viewDetails: 'Voir les détails',
    download: 'Télécharger',
    noAnalyses: 'Aucune analyse pour le moment',
    startFirst: 'Commencez votre première analyse pour suivre votre progression',
    progressTitle: 'Votre Progression',
    scoreEvolution: 'Évolution du Score',
    tips: 'Conseils Personnalisés',
    tipItems: [
      {
        title: 'Mettez à jour régulièrement',
        description: 'Analysez votre CV après chaque modification majeure',
      },
      {
        title: 'Visez 85+',
        description: 'Un score supérieur à 85 maximise vos chances d\'être remarqué',
      },
      {
        title: 'Personnalisez par poste',
        description: 'Adaptez votre CV pour chaque candidature importante',
      },
    ],
  },
  en: {
    title: 'Dashboard',
    welcome: 'Welcome',
    premium: 'Premium',
    newAnalysis: 'New Analysis',
    stats: {
      totalAnalyses: 'Total Analyses',
      averageScore: 'Average Score',
      improvement: 'Improvement',
      lastAnalysis: 'Last Analysis',
    },
    recentAnalyses: 'Recent Analyses',
    viewDetails: 'View details',
    download: 'Download',
    noAnalyses: 'No analyses yet',
    startFirst: 'Start your first analysis to track your progress',
    progressTitle: 'Your Progress',
    scoreEvolution: 'Score Evolution',
    tips: 'Personalized Tips',
    tipItems: [
      {
        title: 'Update regularly',
        description: 'Analyze your resume after each major modification',
      },
      {
        title: 'Aim for 85+',
        description: 'A score above 85 maximizes your chances of being noticed',
      },
      {
        title: 'Customize per position',
        description: 'Adapt your resume for each important application',
      },
    ],
  },
};

export function Dashboard({ language, analysisHistory, onNewAnalysis }: DashboardProps) {
  const t = content[language];

  // Calculate stats
  const totalAnalyses = analysisHistory.length;
  const averageScore = totalAnalyses > 0
    ? Math.round(analysisHistory.reduce((acc, curr) => acc + curr.score, 0) / totalAnalyses)
    : 0;
  const improvement = totalAnalyses >= 2
    ? analysisHistory[0].score - analysisHistory[analysisHistory.length - 1].score
    : 0;

  // Mock data for chart
  const chartData = totalAnalyses > 0
    ? analysisHistory.slice(0, 5).reverse()
    : [
        { score: 45, date: '2024-01-01' },
        { score: 58, date: '2024-01-08' },
        { score: 72, date: '2024-01-15' },
        { score: 85, date: '2024-01-22' },
        { score: 89, date: '2024-01-29' },
      ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl text-gray-900">{t.title}</h1>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full">
                <Crown size={16} />
                <span className="text-sm">{t.premium}</span>
              </div>
            </div>
            <p className="text-lg text-gray-600">
              {t.welcome} 👋
            </p>
          </div>
          <button
            onClick={onNewAnalysis}
            className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            <Plus size={20} />
            {t.newAnalysis}
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="text-blue-600" size={24} />
              </div>
              <span className="text-3xl text-gray-900">{totalAnalyses}</span>
            </div>
            <p className="text-gray-600">{t.stats.totalAnalyses}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Award className="text-purple-600" size={24} />
              </div>
              <span className="text-3xl text-gray-900">{averageScore}</span>
            </div>
            <p className="text-gray-600">{t.stats.averageScore}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-green-600" size={24} />
              </div>
              <span className={`text-3xl ${improvement >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {improvement >= 0 ? '+' : ''}{improvement}
              </span>
            </div>
            <p className="text-gray-600">{t.stats.improvement}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="text-orange-600" size={24} />
              </div>
              <span className="text-lg text-gray-900">
                {totalAnalyses > 0
                  ? new Date(analysisHistory[0].date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')
                  : '-'}
              </span>
            </div>
            <p className="text-gray-600">{t.stats.lastAnalysis}</p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Analyses History */}
          <div className="lg:col-span-2 space-y-8">
            {/* Score Evolution Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="text-blue-600" size={24} />
                <h2 className="text-xl text-gray-900">{t.scoreEvolution}</h2>
              </div>

              {/* Simple Bar Chart */}
              <div className="space-y-4">
                {chartData.map((data, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        {new Date(data.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="text-sm text-gray-900">{data.score}/100</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${data.score}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Analyses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
            >
              <h2 className="text-xl text-gray-900 mb-6">{t.recentAnalyses}</h2>

              {analysisHistory.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="text-gray-400" size={32} />
                  </div>
                  <p className="text-gray-600 mb-2">{t.noAnalyses}</p>
                  <p className="text-sm text-gray-500">{t.startFirst}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {analysisHistory.map((analysis) => (
                    <div
                      key={analysis.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-lg text-blue-600">{analysis.score}</span>
                        </div>
                        <div>
                          <p className="text-gray-900">{analysis.targetJob}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(analysis.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                          <Download size={18} />
                        </button>
                        <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          {t.viewDetails}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column - Tips */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 sticky top-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-blue-600" size={24} />
                <h2 className="text-xl text-gray-900">{t.tips}</h2>
              </div>

              <div className="space-y-4">
                {t.tipItems.map((tip, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h3 className="text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </div>
                ))}
              </div>

              {/* Premium Badge */}
              <div className="mt-6 pt-6 border-t border-blue-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Crown className="text-blue-600" size={16} />
                  <span>{language === 'fr' ? 'Membre Premium' : 'Premium Member'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
