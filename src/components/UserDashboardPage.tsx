import { useState } from 'react';
import { Crown, Lock, CheckCircle, FileText, Target, Shield, Download, Calendar, TrendingUp, Mail, Sparkles, BarChart3, ExternalLink, Plus } from 'lucide-react';
import { motion } from 'motion/react';

interface UserDashboardPageProps {
  language: 'fr' | 'en';
  isPremium: boolean;
  onNavigate: (page: string) => void;
  analysisHistory?: AnalysisHistoryItem[];
}

interface AnalysisHistoryItem {
  id: number;
  date: string;
  jobTitle: string;
  score: number;
  country: string;
}

const content = {
  fr: {
    // Header
    title: 'Dashboard',
    statusFree: 'Mode gratuit 🔒',
    statusPremium: 'Premium actif ✅',
    
    // Résumé rapide
    quickSummary: 'Résumé rapide',
    overallScore: 'Score global',
    lastAnalysis: 'Dernière analyse',
    targetJob: 'Métier ciblé',
    country: 'Pays',
    noAnalysis: 'Aucune analyse effectuée',
    startAnalysis: 'Commencer une analyse',
    
    // Mes analyses
    myAnalyses: 'Mes analyses',
    analysisCount: 'analyses effectuées',
    viewDetails: 'Voir détails',
    exportPDF: 'Exporter PDF',
    limitedHistory: 'Historique limité en version gratuite',
    unlimitedHistory: 'Historique illimité',
    
    // Fonctionnalités Premium
    premiumFeatures: 'Fonctionnalités Premium',
    premiumLocked: 'Premium uniquement',
    upgradePremium: 'Passer en Premium',
    features: {
      lineByLine: {
        title: 'Analyse ligne par ligne',
        description: 'Feedback détaillé sur chaque section de ton CV',
      },
      atsOptimization: {
        title: 'Optimisation ATS',
        description: 'Améliore ta compatibilité avec les systèmes de recrutement',
      },
      pdfExport: {
        title: 'Export PDF',
        description: 'Télécharge tes analyses en format professionnel',
      },
      unlimitedAnalyses: {
        title: 'Analyses illimitées',
        description: 'Analyse autant de CV que tu veux',
      },
    },
    
    // Stats (Premium)
    stats: {
      title: 'Statistiques',
      totalAnalyses: 'Analyses totales',
      averageScore: 'Score moyen',
      improvement: 'Amélioration',
    },
    
    // Support
    support: 'Besoin d\'aide ?',
    supportEmail: 'CVScoreai@outlook.com',
    
    // Actions
    newAnalysis: 'Nouvelle analyse',
  },
  en: {
    // Header
    title: 'Dashboard',
    statusFree: 'Free mode 🔒',
    statusPremium: 'Premium active ✅',
    
    // Résumé rapide
    quickSummary: 'Quick summary',
    overallScore: 'Overall score',
    lastAnalysis: 'Last analysis',
    targetJob: 'Target job',
    country: 'Country',
    noAnalysis: 'No analysis performed',
    startAnalysis: 'Start analysis',
    
    // Mes analyses
    myAnalyses: 'My analyses',
    analysisCount: 'analyses performed',
    viewDetails: 'View details',
    exportPDF: 'Export PDF',
    limitedHistory: 'Limited history in free version',
    unlimitedHistory: 'Unlimited history',
    
    // Fonctionnalités Premium
    premiumFeatures: 'Premium features',
    premiumLocked: 'Premium only',
    upgradePremium: 'Upgrade to Premium',
    features: {
      lineByLine: {
        title: 'Line-by-line analysis',
        description: 'Detailed feedback on every section of your resume',
      },
      atsOptimization: {
        title: 'ATS optimization',
        description: 'Improve your compatibility with recruitment systems',
      },
      pdfExport: {
        title: 'PDF export',
        description: 'Download your analyses in professional format',
      },
      unlimitedAnalyses: {
        title: 'Unlimited analyses',
        description: 'Analyze as many resumes as you want',
      },
    },
    
    // Stats (Premium)
    stats: {
      title: 'Statistics',
      totalAnalyses: 'Total analyses',
      averageScore: 'Average score',
      improvement: 'Improvement',
    },
    
    // Support
    support: 'Need help?',
    supportEmail: 'CVScoreai@outlook.com',
    
    // Actions
    newAnalysis: 'New analysis',
  },
};

// Mock data
const mockAnalysisHistory: AnalysisHistoryItem[] = [
  { id: 1, date: '2024-12-20', jobTitle: 'Développeur Full-Stack', score: 78, country: 'FR' },
  { id: 2, date: '2024-12-18', jobTitle: 'Product Manager', score: 72, country: 'FR' },
  { id: 3, date: '2024-12-15', jobTitle: 'Data Scientist', score: 85, country: 'CH' },
  { id: 4, date: '2024-12-10', jobTitle: 'UX Designer', score: 68, country: 'FR' },
];

export function UserDashboardPage({ language, isPremium, onNavigate, analysisHistory = mockAnalysisHistory }: UserDashboardPageProps) {
  const t = content[language];
  const [selectedAnalysis, setSelectedAnalysis] = useState<number | null>(null);

  // Limit history to 2 items for free users
  const displayedHistory = isPremium ? analysisHistory : analysisHistory.slice(0, 2);
  
  const latestAnalysis = analysisHistory[0];
  
  // Calculate stats for premium users
  const totalAnalyses = analysisHistory.length;
  const averageScore = analysisHistory.length > 0
    ? Math.round(analysisHistory.reduce((sum, a) => sum + a.score, 0) / analysisHistory.length)
    : 0;
  const improvement = analysisHistory.length > 1
    ? analysisHistory[0].score - analysisHistory[analysisHistory.length - 1].score
    : 0;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    return 'text-orange-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-50 border-green-200';
    if (score >= 60) return 'bg-blue-50 border-blue-200';
    return 'bg-orange-50 border-orange-200';
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl text-gray-900 mb-2">{t.title}</h1>
            <div className="flex items-center gap-2">
              {isPremium ? (
                <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full border-2 border-green-300">
                  <CheckCircle size={18} />
                  <span className="text-sm">{t.statusPremium}</span>
                  <Crown size={18} className="text-yellow-500" />
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full border-2 border-gray-300">
                  <Lock size={18} />
                  <span className="text-sm">{t.statusFree}</span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all flex items-center gap-2"
          >
            <Plus size={20} />
            <span>{t.newAnalysis}</span>
          </button>
        </div>

        {/* Stats Cards (Premium only) */}
        {isPremium && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid sm:grid-cols-3 gap-4 mb-8"
          >
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <BarChart3 className="text-blue-600" size={24} />
                <TrendingUp className="text-green-600" size={20} />
              </div>
              <div className="text-3xl text-gray-900 mb-1">{totalAnalyses}</div>
              <div className="text-sm text-gray-600">{t.stats.totalAnalyses}</div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <Target className="text-purple-600" size={24} />
              </div>
              <div className="text-3xl text-gray-900 mb-1">{averageScore}</div>
              <div className="text-sm text-gray-600">{t.stats.averageScore}</div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <Sparkles className="text-yellow-600" size={24} />
              </div>
              <div className={`text-3xl mb-1 ${improvement >= 0 ? 'text-green-600' : 'text-orange-600'}`}>
                {improvement >= 0 ? '+' : ''}{improvement}
              </div>
              <div className="text-sm text-gray-600">{t.stats.improvement}</div>
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Résumé rapide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg"
            >
              <h2 className="text-2xl text-gray-900 mb-6 flex items-center gap-2">
                <FileText size={24} className="text-blue-600" />
                {t.quickSummary}
              </h2>

              {latestAnalysis ? (
                <div className="space-y-6">
                  {/* Score */}
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-28 h-28 rounded-full border-4 ${getScoreBgColor(latestAnalysis.score)}`}>
                      <div className="text-center">
                        <div className={`text-4xl ${getScoreColor(latestAnalysis.score)}`}>
                          {latestAnalysis.score}
                        </div>
                        <div className="text-sm text-gray-600">/100</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-3">{t.overallScore}</p>
                  </div>

                  {/* Details */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                      <div className="text-sm text-gray-600 mb-1">{t.targetJob}</div>
                      <div className="text-gray-900">{latestAnalysis.jobTitle}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                      <div className="text-sm text-gray-600 mb-1">{t.lastAnalysis}</div>
                      <div className="text-gray-900 flex items-center gap-2">
                        <Calendar size={16} />
                        {formatDate(latestAnalysis.date)}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                      <div className="text-sm text-gray-600 mb-1">{t.country}</div>
                      <div className="text-gray-900">{latestAnalysis.country}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText size={64} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">{t.noAnalysis}</p>
                  <button
                    onClick={() => onNavigate('home')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                  >
                    {t.startAnalysis}
                  </button>
                </div>
              )}
            </motion.div>

            {/* Mes analyses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-gray-900 flex items-center gap-2">
                  <BarChart3 size={24} className="text-purple-600" />
                  {t.myAnalyses}
                </h2>
                <span className="text-sm text-gray-600">
                  {displayedHistory.length} {t.analysisCount}
                </span>
              </div>

              <div className="space-y-4">
                {displayedHistory.map((analysis, index) => (
                  <motion.div
                    key={analysis.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-all"
                  >
                    <div className="flex-1">
                      <div className="text-gray-900 mb-1">{analysis.jobTitle}</div>
                      <div className="text-sm text-gray-600 flex items-center gap-2">
                        <Calendar size={14} />
                        {formatDate(analysis.date)}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className={`text-2xl ${getScoreColor(analysis.score)}`}>
                        {analysis.score}
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="p-2 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                          <ExternalLink size={18} className="text-gray-600" />
                        </button>
                        {isPremium && (
                          <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
                            <Download size={18} />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {!isPremium && analysisHistory.length > 2 && (
                <div className="mt-4 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg text-center">
                  <p className="text-sm text-blue-900 mb-3">{t.limitedHistory}</p>
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all inline-flex items-center gap-2 text-sm"
                  >
                    <Crown size={16} />
                    <span>{t.upgradePremium}</span>
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar - Fonctionnalités Premium */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border-2 border-purple-200 p-6 shadow-lg"
            >
              <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
                <Crown className="text-yellow-500" size={24} />
                {t.premiumFeatures}
              </h3>

              <div className="space-y-4">
                {Object.entries(t.features).map(([key, feature], index) => {
                  const icons = {
                    lineByLine: FileText,
                    atsOptimization: Target,
                    pdfExport: Download,
                    unlimitedAnalyses: Sparkles,
                  };
                  const Icon = icons[key as keyof typeof icons];

                  return (
                    <div
                      key={key}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        isPremium
                          ? 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 hover:border-purple-300'
                          : 'bg-gray-50 border-gray-200 opacity-60'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isPremium ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gray-300'
                        }`}>
                          <Icon className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900 mb-1 flex items-center gap-2">
                            {feature.title}
                            {!isPremium && <Lock size={14} className="text-gray-500" />}
                          </div>
                          <p className="text-xs text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {!isPremium && (
                <button
                  onClick={() => onNavigate('pricing')}
                  className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Crown size={20} />
                  <span>{t.upgradePremium}</span>
                </button>
              )}
            </motion.div>

            {/* Support */}
            <div className="bg-gray-50 rounded-xl border-2 border-gray-200 p-6">
              <h4 className="text-sm text-gray-900 mb-2 flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                {t.support}
              </h4>
              <a
                href={`mailto:${t.supportEmail}`}
                className="text-sm text-blue-600 hover:text-blue-700 underline"
              >
                {t.supportEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
