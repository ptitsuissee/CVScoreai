import { useState } from 'react';
import { Sparkles, Lock, CheckCircle, Mail, Zap, Target, FileText, Shield, Crown, Download, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PremiumOnboarding } from './PremiumOnboarding';

interface EmailPremiumWidgetProps {
  language: 'fr' | 'en';
  onNavigateToPricing?: () => void;
}

interface AnalysisResult {
  overallScore: number;
  subscores: {
    clarity: number;
    impact: number;
    structure: number;
    ats: number;
  };
  summary: string;
  premiumFeedback?: string[];
  atsAdvice?: string[];
}

const content = {
  fr: {
    // Section 1 - Inputs
    languageLabel: 'Langue',
    jobLabel: 'Intitulé de poste',
    jobPlaceholder: 'Ex: Développeur Full-Stack',
    countryLabel: 'Pays',
    cvLabel: 'Contenu du CV',
    cvPlaceholder: 'Collez le contenu de votre CV ici...',
    
    // Section 2 - Premium Email
    emailLabel: 'Email Premium (optionnel)',
    emailPlaceholder: 'Email utilisé pour le paiement Premium',
    activatePremium: 'Activer Premium',
    statusFree: 'Mode gratuit 🔒',
    statusPremium: 'Premium actif ✅',
    emailHelp: 'Utilisez l\'email employé lors du paiement Stripe.',
    emailVerifying: 'Vérification...',
    emailInvalid: 'Email non trouvé ou non Premium',
    emailValid: 'Email Premium vérifié !',
    
    // Section 3 - Main Button
    analyzeButton: 'Analyser mon CV',
    analyzing: 'Analyse en cours...',
    
    // Section 4 - Results
    resultsTitle: 'Résultat de l\'analyse',
    overallScore: 'Score global',
    subscoresTitle: 'Détails',
    clarity: 'Clarté',
    impact: 'Impact',
    structure: 'Structure',
    ats: 'Compatibilité ATS',
    summaryTitle: 'Résumé',
    
    // Section 5 - Premium Content
    premiumTitle: 'Analyse Premium',
    premiumLocked: 'Fonctionnalité Premium 🔒',
    premiumMessage: 'Débloquez l\'analyse détaillée, l\'optimisation ATS avancée et l\'export PDF.',
    unlockPremium: 'Débloquer Premium',
    securePayment: 'Paiement sécurisé · Accès immédiat',
    feedbackTitle: 'Feedback ligne par ligne',
    atsAdviceTitle: 'Conseils ATS avancés',
    exportPDF: 'Exporter en PDF',
    premiumPlaceholder: 'Contenu Premium débloqué ! Analyse approfondie disponible...',
  },
  en: {
    // Section 1 - Inputs
    languageLabel: 'Language',
    jobLabel: 'Job title',
    jobPlaceholder: 'Ex: Full-Stack Developer',
    countryLabel: 'Country',
    cvLabel: 'Resume content',
    cvPlaceholder: 'Paste your resume content here...',
    
    // Section 2 - Premium Email
    emailLabel: 'Premium Email (optional)',
    emailPlaceholder: 'Email used for Premium payment',
    activatePremium: 'Activate Premium',
    statusFree: 'Free mode 🔒',
    statusPremium: 'Premium active ✅',
    emailHelp: 'Use the email from your Stripe payment.',
    emailVerifying: 'Verifying...',
    emailInvalid: 'Email not found or not Premium',
    emailValid: 'Premium email verified!',
    
    // Section 3 - Main Button
    analyzeButton: 'Analyze my Resume',
    analyzing: 'Analyzing...',
    
    // Section 4 - Results
    resultsTitle: 'Analysis Result',
    overallScore: 'Overall Score',
    subscoresTitle: 'Details',
    clarity: 'Clarity',
    impact: 'Impact',
    structure: 'Structure',
    ats: 'ATS Compatibility',
    summaryTitle: 'Summary',
    
    // Section 5 - Premium Content
    premiumTitle: 'Premium Analysis',
    premiumLocked: 'Premium Feature 🔒',
    premiumMessage: 'Unlock detailed analysis, advanced ATS optimization and PDF export.',
    unlockPremium: 'Unlock Premium',
    securePayment: 'Secure payment · Instant access',
    feedbackTitle: 'Line-by-line feedback',
    atsAdviceTitle: 'Advanced ATS advice',
    exportPDF: 'Export to PDF',
    premiumPlaceholder: 'Premium content unlocked! Deep analysis available...',
  },
};

const countries = [
  { code: 'FR', name: 'France' },
  { code: 'CH', name: 'Switzerland / Suisse' },
  { code: 'DE', name: 'Germany / Allemagne' },
  { code: 'IT', name: 'Italy / Italie' },
  { code: 'ES', name: 'Spain / Espagne' },
  { code: 'EU', name: 'European Union / UE' },
];

export function EmailPremiumWidget({ language, onNavigateToPricing }: EmailPremiumWidgetProps) {
  const t = content[language];
  
  // Form state
  const [selectedLanguage, setSelectedLanguage] = useState<'fr' | 'en'>(language);
  const [jobTitle, setJobTitle] = useState('');
  const [country, setCountry] = useState('FR');
  const [cvText, setCvText] = useState('');
  
  // Premium state
  const [email, setEmail] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'valid' | 'invalid'>('idle');
  
  // Analysis state
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const handleVerifyEmail = async () => {
    if (!email.trim()) return;
    
    setIsVerifying(true);
    setEmailStatus('idle');
    
    // Simulate API call to verify Premium email
    setTimeout(() => {
      // Mock verification: accept emails containing "premium" or specific test emails
      const isPremiumEmail = email.toLowerCase().includes('premium') || 
                            email === 'test@premium.com' ||
                            email === 'user@cvscore.ai';
      
      if (isPremiumEmail) {
        setIsPremium(true);
        setEmailStatus('valid');
      } else {
        setIsPremium(false);
        setEmailStatus('invalid');
      }
      
      setIsVerifying(false);
    }, 1500);
  };

  const handleAnalyze = async () => {
    if (!cvText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis: AnalysisResult = {
        overallScore: 72,
        subscores: {
          clarity: 78,
          impact: 68,
          structure: 75,
          ats: 67,
        },
        summary: language === 'fr'
          ? 'Votre CV présente une bonne structure générale. Les compétences sont clairement listées. Quelques points à améliorer : les réalisations pourraient être plus quantifiées, et certains mots-clés ATS sont manquants.'
          : 'Your resume has a good overall structure. Skills are clearly listed. Areas for improvement: achievements could be more quantified, and some ATS keywords are missing.',
        premiumFeedback: isPremium ? [
          'Introduction: Manque de mot-clé "Senior" pour correspondre au poste visé',
          'Expérience #1: Ajouter des métriques quantifiables (ex: "+30% de performance")',
          'Compétences: Inclure "React 18" au lieu de "React" pour meilleur matching ATS',
        ] : undefined,
        atsAdvice: isPremium ? [
          'Ajouter des mots-clés spécifiques du poste dans les 3 premières lignes',
          'Utiliser la nomenclature exacte du poste (ex: "Full-Stack Developer" pas "Dev Full-Stack")',
          'Inclure une section "Certifications" même si vide pour améliorer le parsing',
        ] : undefined,
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
      
      // Scroll to results
      setTimeout(() => {
        document.getElementById('analysis-results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 2000);
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-6 sm:p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-2">
              {language === 'fr' ? 'Analyseur de CV' : 'Resume Analyzer'}
            </h2>
            <p className="text-gray-600">
              {language === 'fr' 
                ? 'Obtenez un score instantané et des conseils personnalisés' 
                : 'Get an instant score and personalized advice'}
            </p>
          </div>

          {/* SECTION 1 - User Inputs */}
          <div className="space-y-6 mb-8">
            {/* Language Selector */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">{t.languageLabel}</label>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedLanguage('fr')}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                    selectedLanguage === 'fr'
                      ? 'bg-blue-50 border-blue-600 text-blue-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  🇫🇷 Français
                </button>
                <button
                  onClick={() => setSelectedLanguage('en')}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                    selectedLanguage === 'en'
                      ? 'bg-blue-50 border-blue-600 text-blue-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  🇬🇧 English
                </button>
              </div>
            </div>

            {/* Job Title */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">{t.jobLabel}</label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder={t.jobPlaceholder}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">{t.countryLabel}</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* CV Text */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">{t.cvLabel}</label>
              <textarea
                value={cvText}
                onChange={(e) => setCvText(e.target.value)}
                placeholder={t.cvPlaceholder}
                rows={10}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all"
              />
            </div>
          </div>

          {/* SECTION 2 - Premium Email Verification */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <Mail className="text-purple-600 mt-1 flex-shrink-0" size={20} />
              <div className="flex-1">
                <label className="block text-sm text-gray-900 mb-2">{t.emailLabel}</label>
                <p className="text-xs text-gray-600 mb-3">{t.emailHelp}</p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailStatus('idle');
                    }}
                    placeholder={t.emailPlaceholder}
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    disabled={isPremium}
                  />
                  
                  {!isPremium && (
                    <button
                      onClick={handleVerifyEmail}
                      disabled={!email.trim() || isVerifying}
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      {isVerifying ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{t.emailVerifying}</span>
                        </>
                      ) : (
                        <>
                          <Crown size={18} />
                          <span>{t.activatePremium}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Status Indicator */}
                <div className="mt-3 flex items-center gap-2">
                  {isPremium ? (
                    <div className="flex items-center gap-2 text-green-700 bg-green-100 px-3 py-1.5 rounded-full text-sm">
                      <CheckCircle size={16} />
                      <span>{t.statusPremium}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full text-sm">
                      <Lock size={16} />
                      <span>{t.statusFree}</span>
                    </div>
                  )}
                  
                  {emailStatus === 'valid' && (
                    <span className="text-sm text-green-600">{t.emailValid}</span>
                  )}
                  {emailStatus === 'invalid' && (
                    <span className="text-sm text-red-600">{t.emailInvalid}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3 - Main Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={!cvText.trim() || isAnalyzing}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 text-lg shadow-md"
          >
            {isAnalyzing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{t.analyzing}</span>
              </>
            ) : (
              <>
                <Zap size={22} />
                <span>{t.analyzeButton}</span>
              </>
            )}
          </button>

          {/* SECTION 4 - Analysis Results */}
          <AnimatePresence>
            {analysis && (
              <motion.div
                id="analysis-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8 space-y-6"
              >
                {/* Overall Score */}
                <div className="text-center">
                  <h3 className="text-xl text-gray-900 mb-4">{t.resultsTitle}</h3>
                  <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full border-4 ${getScoreBgColor(analysis.overallScore)}`}>
                    <div className="text-center">
                      <div className={`text-4xl ${getScoreColor(analysis.overallScore)}`}>
                        {analysis.overallScore}
                      </div>
                      <div className="text-sm text-gray-600">/100</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3">{t.overallScore}</p>
                </div>

                {/* Subscores */}
                <div>
                  <h4 className="text-lg text-gray-900 mb-4">{t.subscoresTitle}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(analysis.subscores).map(([key, value]) => {
                      const icons = {
                        clarity: Target,
                        impact: Sparkles,
                        structure: FileText,
                        ats: Shield,
                      };
                      const Icon = icons[key as keyof typeof icons];
                      const labels = {
                        clarity: t.clarity,
                        impact: t.impact,
                        structure: t.structure,
                        ats: t.ats,
                      };
                      
                      return (
                        <div key={key} className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon size={18} className="text-blue-600" />
                            <span className="text-sm text-gray-700">{labels[key as keyof typeof labels]}</span>
                          </div>
                          <div className={`text-2xl ${getScoreColor(value)}`}>{value}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <FileText size={20} className="text-blue-600" />
                    {t.summaryTitle}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{analysis.summary}</p>
                </div>

                {/* SECTION 5 - Premium Content */}
                <div className="relative">
                  <div className={`${!isPremium ? 'filter blur-sm pointer-events-none select-none' : ''}`}>
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6">
                      <h3 className="text-2xl text-gray-900 mb-6 flex items-center gap-3">
                        <Crown className="text-yellow-500" size={28} />
                        {t.premiumTitle}
                      </h3>

                      {/* Line-by-line Feedback */}
                      <div className="mb-6">
                        <h4 className="text-lg text-gray-900 mb-3">{t.feedbackTitle}</h4>
                        <div className="space-y-3">
                          {(isPremium ? analysis.premiumFeedback : ['Lorem ipsum...', 'Dolor sit amet...', 'Consectetur...']).map((feedback, index) => (
                            <div key={index} className="bg-white rounded-lg p-4 border-2 border-purple-200">
                              <p className="text-gray-700">{feedback}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* ATS Advice */}
                      <div className="mb-6">
                        <h4 className="text-lg text-gray-900 mb-3">{t.atsAdviceTitle}</h4>
                        <div className="space-y-3">
                          {(isPremium ? analysis.atsAdvice : ['Lorem ipsum...', 'Dolor sit...', 'Amet consectetur...']).map((advice, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border-2 border-blue-200">
                              <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                              <p className="text-gray-700">{advice}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Export PDF Button */}
                      {isPremium && (
                        <button className="w-full py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-3">
                          <Download size={20} />
                          {t.exportPDF}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Premium Overlay (Free Mode) */}
                  {!isPremium && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border-2 border-purple-300 p-8 max-w-md mx-4 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Lock className="text-white" size={32} />
                        </div>
                        
                        <h3 className="text-2xl text-gray-900 mb-3">{t.premiumLocked}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{t.premiumMessage}</p>
                        
                        <button
                          onClick={onNavigateToPricing}
                          className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 mb-3"
                        >
                          <Crown size={20} />
                          <span>{t.unlockPremium}</span>
                        </button>
                        
                        <p className="text-xs text-gray-500">{t.securePayment}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Info Card */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-center">
          <p className="text-sm text-blue-900">
            {language === 'fr'
              ? '💡 Astuce : Utilisez l\'email de votre paiement Stripe pour activer automatiquement Premium'
              : '💡 Tip: Use your Stripe payment email to automatically activate Premium'}
          </p>
        </div>
      </div>
    </div>
  );
}