import { FileText, BarChart3, Crown, Settings, LogOut, Plus, Clock, CheckCircle, Download } from 'lucide-react';

interface UserAccountDashboardProps {
  language: 'fr' | 'en';
  userEmail: string;
  isPremium: boolean;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

const content = {
  fr: {
    title: 'Mon espace',
    welcome: 'Bienvenue',
    
    // Status badges
    freeBadge: 'Compte gratuit',
    premiumBadge: 'Premium actif',
    
    // Sections
    myCVs: {
      title: 'Mes CV',
      empty: 'Aucun CV créé pour le moment',
      create: 'Créer un CV',
      items: [
        { name: 'CV Marketing Digital.pdf', date: '15 déc. 2024', status: 'completed' },
        { name: 'CV Développeur Web.pdf', date: '10 déc. 2024', status: 'draft' },
      ],
    },
    
    myAnalyses: {
      title: 'Mes analyses',
      empty: 'Aucune analyse effectuée',
      analyze: 'Analyser un CV',
      items: [
        { name: 'CV Marketing Digital', score: 78, date: '15 déc. 2024' },
        { name: 'CV Développeur Web', score: 65, date: '10 déc. 2024' },
        { name: 'CV Chef de Projet', score: 82, date: '5 déc. 2024' },
      ],
    },
    
    premiumStatus: {
      title: 'Statut Premium',
      freeMessage: 'Passe à Premium pour débloquer toutes les fonctionnalités',
      premiumMessage: 'Tu as accès à toutes les fonctionnalités Premium',
      upgradeButton: 'Passer à Premium',
      manageButton: 'Gérer mon abonnement',
      features: [
        'Analyses illimitées',
        'Feedback ligne par ligne',
        'Export PDF sans filigrane',
        'Optimisation ATS avancée',
      ],
    },
    
    // Actions
    settings: 'Paramètres',
    logout: 'Déconnexion',
    
    // Data info (Airtable)
    dataInfo: 'Tes CV et analyses sont sauvegardés dans ton espace personnel et restent accessibles tant que ton compte est actif.',
    
    // CV item actions
    edit: 'Modifier',
    download: 'Télécharger',
    delete: 'Supprimer',
    
    // Analysis item actions
    viewAnalysis: 'Voir l\'analyse',
    
    // Status
    draft: 'Brouillon',
    completed: 'Terminé',
  },
  en: {
    title: 'My Account',
    welcome: 'Welcome',
    
    freeBadge: 'Free Account',
    premiumBadge: 'Premium Active',
    
    myCVs: {
      title: 'My Resumes',
      empty: 'No resumes created yet',
      create: 'Create Resume',
      items: [
        { name: 'Digital Marketing Resume.pdf', date: 'Dec 15, 2024', status: 'completed' },
        { name: 'Web Developer Resume.pdf', date: 'Dec 10, 2024', status: 'draft' },
      ],
    },
    
    myAnalyses: {
      title: 'My Analyses',
      empty: 'No analyses performed',
      analyze: 'Analyze Resume',
      items: [
        { name: 'Digital Marketing Resume', score: 78, date: 'Dec 15, 2024' },
        { name: 'Web Developer Resume', score: 65, date: 'Dec 10, 2024' },
        { name: 'Project Manager Resume', score: 82, date: 'Dec 5, 2024' },
      ],
    },
    
    premiumStatus: {
      title: 'Premium Status',
      freeMessage: 'Upgrade to Premium to unlock all features',
      premiumMessage: 'You have access to all Premium features',
      upgradeButton: 'Upgrade to Premium',
      manageButton: 'Manage Subscription',
      features: [
        'Unlimited analyses',
        'Line-by-line feedback',
        'PDF export without watermark',
        'Advanced ATS optimization',
      ],
    },
    
    settings: 'Settings',
    logout: 'Logout',
    
    dataInfo: 'Your resumes and analyses are saved in your personal space and remain accessible as long as your account is active.',
    
    edit: 'Edit',
    download: 'Download',
    delete: 'Delete',
    
    viewAnalysis: 'View Analysis',
    
    draft: 'Draft',
    completed: 'Completed',
  },
};

export function UserAccountDashboard({ language, userEmail, isPremium, onNavigate, onLogout }: UserAccountDashboardProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-gray-900 mb-2">{t.title}</h1>
              <p className="text-gray-600">
                {t.welcome}, <span className="text-gray-900">{userEmail}</span>
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Status Badge */}
              {isPremium ? (
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full">
                  <Crown size={18} />
                  <span className="text-sm">{t.premiumBadge}</span>
                </div>
              ) : (
                <div className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm">
                  {t.freeBadge}
                </div>
              )}
              
              {/* Logout */}
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">{t.logout}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Data Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 mb-8">
          <p className="text-sm text-blue-800 text-center">{t.dataInfo}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Mes CV + Mes Analyses */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mes CV */}
            <section className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-gray-900 flex items-center gap-2">
                  <FileText size={24} />
                  {t.myCVs.title}
                </h2>
                <button
                  onClick={() => onNavigate('creer-cv')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus size={18} />
                  <span className="hidden sm:inline">{t.myCVs.create}</span>
                </button>
              </div>

              <div className="space-y-3">
                {t.myCVs.items.map((cv, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-gray-900">{cv.name}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            <Clock size={14} />
                            {cv.date}
                          </p>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${
                            cv.status === 'completed' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {cv.status === 'completed' ? t.completed : t.draft}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <Download size={18} />
                      </button>
                      <button className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors">
                        {t.edit}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Mes Analyses */}
            <section className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-gray-900 flex items-center gap-2">
                  <BarChart3 size={24} />
                  {t.myAnalyses.title}
                </h2>
                <button
                  onClick={() => onNavigate('home')}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Plus size={18} />
                  <span className="hidden sm:inline">{t.myAnalyses.analyze}</span>
                </button>
              </div>

              <div className="space-y-3">
                {t.myAnalyses.items.map((analysis, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        analysis.score >= 80 
                          ? 'bg-green-100' 
                          : analysis.score >= 60 
                          ? 'bg-yellow-100' 
                          : 'bg-red-100'
                      }`}>
                        <span className={`text-xl ${
                          analysis.score >= 80 
                            ? 'text-green-700' 
                            : analysis.score >= 60 
                            ? 'text-yellow-700' 
                            : 'text-red-700'
                        }`}>
                          {analysis.score}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-gray-900">{analysis.name}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Clock size={14} />
                          {analysis.date}
                        </p>
                      </div>
                    </div>
                    <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors">
                      {t.viewAnalysis}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Premium Status */}
          <div className="lg:col-span-1">
            <section className={`rounded-xl border-2 p-6 sticky top-8 ${
              isPremium 
                ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300' 
                : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center gap-2 mb-4">
                {isPremium && <Crown size={24} className="text-yellow-600" />}
                <h2 className="text-xl text-gray-900">{t.premiumStatus.title}</h2>
              </div>

              <p className={`text-sm mb-6 ${isPremium ? 'text-gray-700' : 'text-gray-600'}`}>
                {isPremium ? t.premiumStatus.premiumMessage : t.premiumStatus.freeMessage}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {t.premiumStatus.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle size={18} className={isPremium ? 'text-green-600' : 'text-gray-400'} />
                    <span className={`text-sm ${isPremium ? 'text-gray-700' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {isPremium ? (
                <button
                  onClick={() => onNavigate('pricing')}
                  className="w-full px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Settings size={18} />
                  {t.premiumStatus.manageButton}
                </button>
              ) : (
                <button
                  onClick={() => onNavigate('pricing')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Crown size={18} />
                  {t.premiumStatus.upgradeButton}
                </button>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}