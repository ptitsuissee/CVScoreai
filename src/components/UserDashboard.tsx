import { useState } from 'react';
import { Crown, FileText, BarChart3, Settings, LogOut, Plus, Edit, Download, Eye, Trash2, Lock } from 'lucide-react';

interface UserDashboardProps {
  language: 'fr' | 'en';
  userEmail: string;
  isPremium: boolean;
  onLogout: () => void;
  onCreateCV: () => void;
  onUpgradePremium: () => void;
  onManageSubscription?: () => void;
}

const content = {
  fr: {
    greeting: 'Bonjour',
    free: 'Gratuit',
    premium: 'Premium actif',
    logout: 'Déconnexion',
    myCVs: 'Mes CV',
    myAnalyses: 'Mes analyses',
    mySubscription: 'Mon abonnement',
    createCV: 'Créer un nouveau CV',
    noCVs: 'Aucun CV créé pour le moment',
    noCVsSubtext: 'Crée ton premier CV professionnel en quelques minutes',
    startCreating: 'Commencer',
    resume: 'Reprendre',
    edit: 'Modifier',
    download: 'Télécharger',
    view: 'Voir',
    delete: 'Supprimer',
    locked: 'Verrouillé',
    lastModified: 'Modifié le',
    created: 'Créé le',
    noAnalyses: 'Aucune analyse effectuée',
    noAnalysesSubtext: 'Tes analyses de CV apparaîtront ici',
    analyzeCV: 'Analyser un CV',
    score: 'Score',
    targetJob: 'Poste visé',
    subscriptionStatus: 'Statut de ton abonnement',
    freeAccountFeatures: [
      'Création de CV illimitée',
      'Modification et édition',
      'Analyse gratuite du CV',
      'Aperçu en temps réel',
    ],
    premiumFeatures: [
      'Exports PDF illimités',
      'Analyses Premium détaillées',
      'Suggestions IA avancées',
      'Support prioritaire',
    ],
    upgradeToPremium: 'Passer au Premium',
    manageSubscription: 'Gérer mon abonnement',
    cancelledAt: 'Annulé - Actif jusqu\'au',
    renewsAt: 'Renouvellement le',
  },
  en: {
    greeting: 'Hello',
    free: 'Free',
    premium: 'Premium Active',
    logout: 'Logout',
    myCVs: 'My Resumes',
    myAnalyses: 'My Analyses',
    mySubscription: 'My Subscription',
    createCV: 'Create New Resume',
    noCVs: 'No resumes created yet',
    noCVsSubtext: 'Create your first professional resume in minutes',
    startCreating: 'Get Started',
    resume: 'Resume',
    edit: 'Edit',
    download: 'Download',
    view: 'View',
    delete: 'Delete',
    locked: 'Locked',
    lastModified: 'Modified',
    created: 'Created',
    noAnalyses: 'No analyses performed',
    noAnalysesSubtext: 'Your CV analyses will appear here',
    analyzeCV: 'Analyze Resume',
    score: 'Score',
    targetJob: 'Target Job',
    subscriptionStatus: 'Your subscription status',
    freeAccountFeatures: [
      'Unlimited CV creation',
      'Edit and modify',
      'Free CV analysis',
      'Real-time preview',
    ],
    premiumFeatures: [
      'Unlimited PDF exports',
      'Detailed Premium analyses',
      'Advanced AI suggestions',
      'Priority support',
    ],
    upgradeToPremium: 'Upgrade to Premium',
    manageSubscription: 'Manage Subscription',
    cancelledAt: 'Cancelled - Active until',
    renewsAt: 'Renews on',
  },
};

// Mock data
const mockCVs = [
  {
    id: 1,
    name: 'CV Marketing Manager',
    lastModified: '2024-12-28',
    created: '2024-12-20',
  },
  {
    id: 2,
    name: 'CV Data Analyst',
    lastModified: '2024-12-25',
    created: '2024-12-18',
  },
];

const mockAnalyses = [
  {
    id: 1,
    targetJob: 'Marketing Manager',
    score: 78,
    date: '2024-12-28',
    country: 'FR',
  },
  {
    id: 2,
    targetJob: 'Data Analyst',
    score: 85,
    date: '2024-12-25',
    country: 'CH',
  },
];

export function UserDashboard({ 
  language, 
  userEmail, 
  isPremium, 
  onLogout, 
  onCreateCV,
  onUpgradePremium,
  onManageSubscription,
}: UserDashboardProps) {
  const t = content[language];
  const [activeTab, setActiveTab] = useState<'cvs' | 'analyses' | 'subscription'>('cvs');

  // Extract first name from email
  const userName = userEmail.split('@')[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl text-gray-900">
                {t.greeting}, {userName} 👋
              </h1>
              <p className="text-sm text-gray-600 mt-1">{userEmail}</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Premium Badge */}
              <div className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                isPremium 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {isPremium && <Crown size={18} />}
                <span className="text-sm">{isPremium ? t.premium : t.free}</span>
              </div>
              {/* Logout */}
              <button
                onClick={onLogout}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title={t.logout}
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('cvs')}
              className={`pb-4 px-2 flex items-center gap-2 transition-all border-b-2 ${
                activeTab === 'cvs'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText size={20} />
              <span>{t.myCVs}</span>
            </button>
            <button
              onClick={() => setActiveTab('analyses')}
              className={`pb-4 px-2 flex items-center gap-2 transition-all border-b-2 ${
                activeTab === 'analyses'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <BarChart3 size={20} />
              <span>{t.myAnalyses}</span>
            </button>
            <button
              onClick={() => setActiveTab('subscription')}
              className={`pb-4 px-2 flex items-center gap-2 transition-all border-b-2 ${
                activeTab === 'subscription'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Settings size={20} />
              <span>{t.mySubscription}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* My CVs Tab */}
        {activeTab === 'cvs' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900">{t.myCVs}</h2>
              <button
                onClick={onCreateCV}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                <Plus size={20} />
                <span>{t.createCV}</span>
              </button>
            </div>

            {mockCVs.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mockCVs.map((cv) => (
                  <div key={cv.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText size={24} className="text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg text-gray-900 mb-2">{cv.name}</h3>
                    <p className="text-xs text-gray-500 mb-4">
                      {t.lastModified} {cv.lastModified}
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all text-sm flex items-center justify-center gap-1">
                        <Edit size={16} />
                        <span>{t.edit}</span>
                      </button>
                      {isPremium ? (
                        <button className="flex-1 px-3 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all text-sm flex items-center justify-center gap-1">
                          <Download size={16} />
                          <span>{t.download}</span>
                        </button>
                      ) : (
                        <button 
                          onClick={onUpgradePremium}
                          className="flex-1 px-3 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed text-sm flex items-center justify-center gap-1"
                        >
                          <Lock size={16} />
                          <span>{t.locked}</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText size={40} className="text-gray-400" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{t.noCVs}</h3>
                <p className="text-gray-600 mb-6">{t.noCVsSubtext}</p>
                <button
                  onClick={onCreateCV}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg"
                >
                  {t.startCreating}
                </button>
              </div>
            )}
          </div>
        )}

        {/* My Analyses Tab */}
        {activeTab === 'analyses' && (
          <div>
            <h2 className="text-xl text-gray-900 mb-6">{t.myAnalyses}</h2>

            {mockAnalyses.length > 0 ? (
              <div className="space-y-4">
                {mockAnalyses.map((analysis) => (
                  <div key={analysis.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl text-blue-600">{analysis.score}</span>
                        </div>
                        <div>
                          <h3 className="text-lg text-gray-900 mb-1">{analysis.targetJob}</h3>
                          <p className="text-sm text-gray-500">
                            {analysis.date} • {analysis.country}
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all text-sm">
                        {t.view}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 size={40} className="text-gray-400" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{t.noAnalyses}</h3>
                <p className="text-gray-600 mb-6">{t.noAnalysesSubtext}</p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg">
                  {t.analyzeCV}
                </button>
              </div>
            )}
          </div>
        )}

        {/* My Subscription Tab */}
        {activeTab === 'subscription' && (
          <div>
            <h2 className="text-xl text-gray-900 mb-6">{t.mySubscription}</h2>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Current Plan */}
              <div className={`rounded-xl border-2 p-8 ${
                isPremium 
                  ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-300'
                  : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  {isPremium && <Crown size={28} className="text-orange-600" />}
                  <h3 className="text-2xl text-gray-900">
                    {isPremium ? t.premium : t.free}
                  </h3>
                </div>

                {isPremium ? (
                  <>
                    <div className="space-y-3 mb-6">
                      {t.premiumFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-700">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {onManageSubscription && (
                      <button
                        onClick={onManageSubscription}
                        className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all"
                      >
                        {t.manageSubscription}
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <div className="space-y-3 mb-6">
                      {t.freeAccountFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-700">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={onUpgradePremium}
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all shadow-lg"
                    >
                      {t.upgradeToPremium}
                    </button>
                  </>
                )}
              </div>

              {/* Premium Benefits (if not premium) */}
              {!isPremium && (
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 p-8">
                  <h3 className="text-xl text-gray-900 mb-6">
                    {language === 'fr' ? 'Pourquoi passer Premium ?' : 'Why upgrade to Premium?'}
                  </h3>
                  <div className="space-y-4">
                    {t.premiumFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
