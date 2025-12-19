import { useState, useEffect } from 'react';
import { Sparkles, FileText, Target, Zap, CheckCircle, AlertCircle, TrendingUp, Shield, Crown, ArrowRight, Download, Lock, Star, ChevronRight, Check } from 'lucide-react';

interface FreemiumAnalysisWidgetProps {
  language?: 'fr' | 'en';
  onUpgradePremium?: () => void;
  embedded?: boolean;
  isPremium?: boolean;
  onPremiumActivated?: () => void;
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
  priorities: string[];
  tips: string[];
  premiumSections?: {
    lineByLine: Array<{ line: string; feedback: string; type: 'error' | 'warning' | 'success' }>;
    atsDetailed: Array<{ title: string; description: string; status: 'good' | 'warning' | 'error' }>;
    improvements: Array<{ original: string; improved: string; reason: string }>;
  };
}

const content = {
  fr: {
    header: {
      title: 'Analyse de CV par IA',
      subtitle: 'Score instantané et recommandations adaptées au marché européen',
      premiumBadge: 'Premium actif',
    },
    form: {
      language: 'Langue',
      country: 'Pays ciblé',
      position: 'Poste visé (optionnel)',
      positionPlaceholder: 'Ex: Développeur Full-Stack Senior',
      cvText: 'Ton CV',
      cvPlaceholder: 'Colle ton CV ici (texte brut, PDF non requis)\n\nExemple :\nJean Dupont\nDéveloppeur Full-Stack\n5 ans d\'expérience...',
      analyzeButton: 'Analyser mon CV',
      analyzingButton: 'Analyse en cours',
      analyzing: 'Analyse de votre CV',
    },
    results: {
      overallScore: 'Score global',
      subscores: {
        clarity: 'Clarté',
        impact: 'Impact',
        structure: 'Structure',
        ats: 'Compatibilité ATS',
      },
      summary: 'Résumé de l\'analyse',
      priorities: 'Priorités à corriger',
      tips: 'Conseils gratuits',
      lineByLine: 'Feedback ligne par ligne',
      atsDetailed: 'Optimisation ATS détaillée',
      improvements: 'Suggestions de reformulation',
      exportPDF: 'Export PDF professionnel',
      newAnalysis: 'Nouvelle analyse',
      downloadPDF: 'Télécharger le rapport PDF',
      locked: 'Verrouillé',
      premiumOnly: 'Premium uniquement',
    },
    conversion: {
      afterScore: 'Améliore ton score en quelques minutes',
      moreInterviews: 'Les candidats Premium obtiennent plus d\'entretiens',
      fastAnalysis: 'Analyse complète en moins de 60 secondes',
    },
    premium: {
      badge: 'Premium',
      lockedTitle: 'Analyse Premium verrouillée',
      lockedDescription: 'Accède à une analyse complète, détaillée et optimisée pour les ATS.',
      features: [
        'Feedback ligne par ligne',
        'Optimisation ATS avancée',
        'Export PDF professionnel',
        'Suggestions de reformulation',
      ],
      cta: 'Débloquer Premium',
      trust: 'Paiement sécurisé · Accès immédiat',
      monthly: 'Premium Mensuel',
      monthlyPrice: '9,99 €',
      monthlyPeriod: '/ mois',
      monthlyBadge: 'Sans engagement',
      oneTime: 'Paiement unique',
      oneTimePrice: '12,99 €',
      oneTimePeriod: 'à vie',
      oneTimeBadge: 'Recommandé',
      unlimitedAnalyses: 'Analyses illimitées',
    },
    exportModal: {
      title: 'Exporter votre analyse CV',
      language: 'Langue',
      reportType: 'Type de rapport',
      standard: 'Standard',
      detailed: 'Détaillé (recommandé)',
      download: 'Télécharger le PDF',
      premiumRequired: 'Disponible avec Premium',
    },
    paymentSuccess: {
      title: 'Paiement confirmé 🎉',
      description: 'Ton accès Premium est maintenant actif.',
      cta: 'Accéder à mon analyse Premium',
    },
  },
  en: {
    header: {
      title: 'AI Resume Analysis',
      subtitle: 'Instant score and feedback tailored to the European job market',
      premiumBadge: 'Premium active',
    },
    form: {
      language: 'Language',
      country: 'Target country',
      position: 'Target position (optional)',
      positionPlaceholder: 'E.g: Senior Full-Stack Developer',
      cvText: 'Your resume',
      cvPlaceholder: 'Paste your resume here (plain text, no PDF required)\n\nExample:\nJohn Doe\nFull-Stack Developer\n5 years of experience...',
      analyzeButton: 'Analyze my resume',
      analyzingButton: 'Analyzing',
      analyzing: 'Analyzing your resume',
    },
    results: {
      overallScore: 'Overall score',
      subscores: {
        clarity: 'Clarity',
        impact: 'Impact',
        structure: 'Structure',
        ats: 'ATS Compatibility',
      },
      summary: 'Analysis summary',
      priorities: 'Improvement priorities',
      tips: 'Free tips',
      lineByLine: 'Line-by-line feedback',
      atsDetailed: 'Detailed ATS optimization',
      improvements: 'Rewriting suggestions',
      exportPDF: 'Professional PDF export',
      newAnalysis: 'New analysis',
      downloadPDF: 'Download PDF report',
      locked: 'Locked',
      premiumOnly: 'Premium only',
    },
    conversion: {
      afterScore: 'Improve your score in minutes',
      moreInterviews: 'Premium candidates get more interviews',
      fastAnalysis: 'Complete analysis in under 60 seconds',
    },
    premium: {
      badge: 'Premium',
      lockedTitle: 'Premium analysis locked',
      lockedDescription: 'Access a complete, detailed analysis optimized for ATS.',
      features: [
        'Line-by-line feedback',
        'Advanced ATS optimization',
        'Professional PDF export',
        'Rewriting suggestions',
      ],
      cta: 'Unlock Premium',
      trust: 'Secure payment · Instant access',
      monthly: 'Monthly Premium',
      monthlyPrice: '€9.99',
      monthlyPeriod: '/ month',
      monthlyBadge: 'No commitment',
      oneTime: 'One-time payment',
      oneTimePrice: '€12.99',
      oneTimePeriod: 'lifetime',
      oneTimeBadge: 'Recommended',
      unlimitedAnalyses: 'Unlimited analyses',
    },
    exportModal: {
      title: 'Export your CV analysis',
      language: 'Language',
      reportType: 'Report type',
      standard: 'Standard',
      detailed: 'Detailed (recommended)',
      download: 'Download PDF',
      premiumRequired: 'Available with Premium',
    },
    paymentSuccess: {
      title: 'Payment successful 🎉',
      description: 'Your Premium access is now active.',
      cta: 'Access my Premium analysis',
    },
  },
};

const languages = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
];

const countries = [
  { code: 'CH', label: 'Suisse / Switzerland' },
  { code: 'FR', label: 'France' },
  { code: 'DE', label: 'Deutschland' },
  { code: 'IT', label: 'Italia' },
  { code: 'ES', label: 'España' },
  { code: 'EU', label: 'Europe (général)' },
];

function getScoreColor(score: number): string {
  if (score >= 75) return 'text-green-600';
  if (score >= 50) return 'text-orange-600';
  return 'text-red-600';
}

function getScoreGradient(score: number): string {
  if (score >= 75) return 'from-green-500 to-emerald-600';
  if (score >= 50) return 'from-orange-500 to-amber-600';
  return 'from-red-500 to-rose-600';
}

function AnimatedCircularScore({ score, size = 'large' }: { score: number; size?: 'small' | 'large' }) {
  const [displayScore, setDisplayScore] = useState(0);
  const radius = size === 'large' ? 70 : 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayScore / 100) * circumference;

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayScore((prev) => {
        if (prev >= score) {
          clearInterval(interval);
          return score;
        }
        return prev + 1;
      });
    }, 15);
    return () => clearInterval(interval);
  }, [score]);

  const sizeClasses = size === 'large' ? 'w-48 h-48' : 'w-28 h-28';
  const textSize = size === 'large' ? 'text-5xl' : 'text-3xl';

  return (
    <div className={`${sizeClasses} relative`}>
      <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 160 160">
        <defs>
          <linearGradient id={`gradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={score >= 75 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444'} />
            <stop offset="100%" stopColor={score >= 75 ? '#059669' : score >= 50 ? '#D97706' : '#DC2626'} />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="12" />
        <circle
          cx="80" cy="80" r={radius} fill="none"
          stroke={`url(#gradient-${size})`}
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`${textSize} font-bold ${getScoreColor(displayScore)}`}>{displayScore}</span>
        <span className="text-sm text-gray-500">/100</span>
      </div>
    </div>
  );
}

function LockedSection({ title, language, onUpgrade }: { title: string; language: 'fr' | 'en'; onUpgrade: () => void }) {
  const t = content[language];
  
  return (
    <div className="relative rounded-xl overflow-hidden border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white">
      {/* Blurred preview */}
      <div className="p-6 opacity-30 blur-sm select-none pointer-events-none">
        <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
          <FileText size={20} />
          {title}
        </h3>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-300 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Lock overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm">
        <div className="text-center max-w-xs p-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <Lock className="text-white" size={28} />
          </div>
          <h4 className="text-lg text-gray-900 mb-2">{title}</h4>
          <p className="text-sm text-gray-600 mb-4">{t.results.premiumOnly}</p>
          <button
            onClick={onUpgrade}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-sm group"
          >
            <span>{t.premium.cta}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function FreemiumAnalysisWidget({ 
  language = 'fr', 
  onUpgradePremium, 
  embedded = false,
  isPremium = false,
  onPremiumActivated,
}: FreemiumAnalysisWidgetProps) {
  const [selectedLang, setSelectedLang] = useState('fr');
  const [selectedCountry, setSelectedCountry] = useState('CH');
  const [position, setPosition] = useState('');
  const [cvText, setCvText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showPremiumCard, setShowPremiumCard] = useState(false);
  const [animateScore, setAnimateScore] = useState(false);

  const t = content[language];

  const handleAnalyze = async () => {
    if (!cvText.trim()) return;

    setIsAnalyzing(true);
    setResult(null);
    setAnimateScore(false);

    setTimeout(() => {
      const mockResult: AnalysisResult = {
        overallScore: 72,
        subscores: {
          clarity: 78,
          impact: 65,
          structure: 82,
          ats: 64,
        },
        summary:
          language === 'fr'
            ? 'Votre CV présente une bonne structure globale avec des sections claires. Cependant, l\'impact de vos expériences pourrait être renforcé avec des chiffres concrets et des résultats quantifiables.'
            : 'Your resume has a good overall structure with clear sections. However, the impact of your experiences could be strengthened with concrete numbers and quantifiable results.',
        priorities:
          language === 'fr'
            ? [
                'Ajouter des chiffres concrets dans vos réalisations',
                'Optimiser les mots-clés pour les systèmes ATS',
                'Renforcer la section compétences',
              ]
            : [
                'Add concrete numbers to your achievements',
                'Optimize keywords for ATS systems',
                'Strengthen the skills section',
              ],
        tips:
          language === 'fr'
            ? [
                'Utilisez des verbes d\'action pour commencer chaque bullet point',
                'Adaptez votre CV pour chaque offre d\'emploi ciblée',
              ]
            : [
                'Use action verbs to start each bullet point',
                'Tailor your resume for each targeted job offer',
              ],
        premiumSections: {
          lineByLine: [
            { line: 'Ligne 1', feedback: 'Manque de chiffres concrets', type: 'warning' },
            { line: 'Ligne 3', feedback: 'Verbe passif à remplacer', type: 'error' },
            { line: 'Ligne 7', feedback: 'Trop générique, soyez spécifique', type: 'warning' },
          ],
          atsDetailed: [
            { title: 'Format', description: 'Évitez les tableaux et graphiques', status: 'warning' },
            { title: 'Mots-clés', description: 'Utilisez des mots-clés du secteur', status: 'error' },
            { title: 'Structure', description: 'Format simple et scannable', status: 'good' },
          ],
          improvements: [
            { 
              original: 'Responsable du développement',
              improved: 'Développement et livraison de 15+ fonctionnalités',
              reason: 'Plus spécifique et quantifiable',
            },
          ],
        },
      };

      setResult(mockResult);
      setIsAnalyzing(false);
      setTimeout(() => setAnimateScore(true), 100);
      
      // Show premium card after 2 seconds
      setTimeout(() => setShowPremiumCard(true), 2000);
    }, 2500);
  };

  const handleNewAnalysis = () => {
    setResult(null);
    setCvText('');
    setPosition('');
    setShowPremiumCard(false);
    setAnimateScore(false);
  };

  const handleUpgrade = () => {
    if (onUpgradePremium) {
      onUpgradePremium();
    } else {
      setShowPremiumCard(true);
    }
  };

  const handleExportPDF = () => {
    if (!isPremium) {
      handleUpgrade();
      return;
    }
    setShowExportModal(true);
  };

  return (
    <div className={`${embedded ? 'max-w-5xl mx-auto p-4' : 'w-full'}`}>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-8 text-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Sparkles size={24} />
                </div>
                <h2 className="text-3xl sm:text-4xl">{t.header.title}</h2>
              </div>
              <p className="text-blue-100 text-lg">{t.header.subtitle}</p>
            </div>
            {isPremium && (
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm">
                <Crown size={16} />
                <span>{t.header.premiumBadge}</span>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {!result ? (
            /* Form */
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-3">{t.form.language}</label>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setSelectedLang(lang.code)}
                        className={`px-5 py-2.5 rounded-xl text-sm transition-all ${
                          selectedLang === lang.code
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-3">{t.form.country}</label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-3">{t.form.position}</label>
                <input
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder={t.form.positionPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-3">{t.form.cvText}</label>
                <textarea
                  value={cvText}
                  onChange={(e) => setCvText(e.target.value)}
                  placeholder={t.form.cvPlaceholder}
                  rows={14}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all resize-none"
                />
                <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                  <span>{cvText.length} {language === 'fr' ? 'caractères' : 'characters'}</span>
                  {cvText.length > 500 && (
                    <span className="text-green-600 flex items-center gap-1">
                      <CheckCircle size={14} />
                      Longueur optimale
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={handleAnalyze}
                disabled={!cvText.trim() || isAnalyzing}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 text-lg group"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t.form.analyzingButton}</span>
                  </>
                ) : (
                  <>
                    <Zap size={22} />
                    <span>{t.form.analyzeButton}</span>
                    <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-200 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-blue-600" />
                  <span>100% gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-blue-600" />
                  <span>Résultat en 60s</span>
                </div>
              </div>
            </div>
          ) : (
            /* Results */
            <div className="space-y-8">
              {/* Overall Score with animation */}
              <div className="flex flex-col items-center py-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200">
                {animateScore && <AnimatedCircularScore score={result.overallScore} size="large" />}
                <p className="mt-6 text-xl text-gray-700">{t.results.overallScore}</p>
              </div>

              {/* Conversion CTA #1 */}
              {!isPremium && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-5 flex items-center justify-between text-white shadow-lg animate-fade-in">
                  <div className="flex items-center gap-3">
                    <Star className="text-yellow-400" size={24} />
                    <span>{t.conversion.afterScore}</span>
                  </div>
                  <button
                    onClick={handleUpgrade}
                    className="px-5 py-2.5 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-all flex items-center gap-2 group"
                  >
                    <span>{t.premium.cta}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {/* Subscores */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(result.subscores).map(([key, score]) => {
                  const icons = { clarity: FileText, impact: Target, structure: TrendingUp, ats: CheckCircle };
                  const Icon = icons[key as keyof typeof icons];

                  return (
                    <div
                      key={key}
                      className="p-5 rounded-xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${getScoreGradient(score)} rounded-lg flex items-center justify-center shadow-md`}>
                          <Icon className="text-white" size={20} />
                        </div>
                        <span className="text-sm text-gray-700">
                          {t.results.subscores[key as keyof typeof t.results.subscores]}
                        </span>
                      </div>
                      <AnimatedCircularScore score={score} size="small" />
                    </div>
                  );
                })}
              </div>

              {/* Summary */}
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="flex items-center gap-2 text-lg text-gray-900 mb-4">
                  <Sparkles className="text-blue-600" size={22} />
                  {t.results.summary}
                </h3>
                <p className="text-gray-700 leading-relaxed">{result.summary}</p>
              </div>

              {/* Priorities */}
              <div>
                <h3 className="flex items-center gap-2 text-lg text-gray-900 mb-4">
                  <AlertCircle className="text-orange-600" size={22} />
                  {t.results.priorities}
                </h3>
                <ol className="space-y-3">
                  {result.priorities.map((priority, index) => (
                    <li key={index} className="flex gap-4 p-5 bg-orange-50 border-2 border-orange-200 rounded-xl hover:shadow-md transition-all">
                      <span className="flex-shrink-0 w-7 h-7 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 flex-1">{priority}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Free Tips */}
              <div>
                <h3 className="flex items-center gap-2 text-lg text-gray-900 mb-4">
                  <CheckCircle className="text-green-600" size={22} />
                  {t.results.tips}
                </h3>
                <ul className="space-y-3">
                  {result.tips.slice(0, 2).map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 p-5 bg-green-50 border-2 border-green-200 rounded-xl hover:shadow-md transition-all">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Premium Locked Sections */}
              {!isPremium && (
                <div className="space-y-6">
                  <LockedSection title={t.results.lineByLine} language={language} onUpgrade={handleUpgrade} />
                  <LockedSection title={t.results.atsDetailed} language={language} onUpgrade={handleUpgrade} />
                  <LockedSection title={t.results.improvements} language={language} onUpgrade={handleUpgrade} />
                  
                  {/* Export PDF - Locked */}
                  <button
                    onClick={handleExportPDF}
                    className="w-full p-6 rounded-xl border-2 border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden group"
                  >
                    <Lock size={20} />
                    <span>{t.results.exportPDF}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              )}

              {/* Premium Unlocked Sections */}
              {isPremium && result.premiumSections && (
                <div className="space-y-6">
                  {/* Line by Line */}
                  <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                    <h3 className="flex items-center gap-2 text-lg text-gray-900 mb-4">
                      <FileText className="text-blue-600" size={22} />
                      {t.results.lineByLine}
                    </h3>
                    <ul className="space-y-3">
                      {result.premiumSections.lineByLine.map((item, index) => (
                        <li key={index} className={`p-4 rounded-lg border-2 ${
                          item.type === 'error' ? 'bg-red-50 border-red-200' :
                          item.type === 'warning' ? 'bg-orange-50 border-orange-200' :
                          'bg-green-50 border-green-200'
                        }`}>
                          <div className="font-medium text-gray-900 mb-1">{item.line}</div>
                          <div className="text-sm text-gray-700">{item.feedback}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Export PDF - Active */}
                  <button
                    onClick={handleExportPDF}
                    className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 text-lg group"
                  >
                    <Download size={22} />
                    <span>{t.results.downloadPDF}</span>
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {/* Premium Card */}
              {!isPremium && showPremiumCard && (
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-2xl p-8 text-white shadow-2xl animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Crown className="text-yellow-400" size={28} />
                    </div>
                    <div>
                      <div className="text-sm text-blue-200 uppercase tracking-wide">{t.premium.badge}</div>
                      <h3 className="text-2xl">{t.premium.lockedTitle}</h3>
                    </div>
                  </div>

                  <p className="text-blue-100 mb-6 text-lg">{t.premium.lockedDescription}</p>

                  <ul className="space-y-3 mb-8">
                    {t.premium.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="text-green-400 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {/* Monthly Plan */}
                    <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all cursor-pointer">
                      <div className="text-xs text-blue-200 mb-2">{t.premium.monthly}</div>
                      <div className="text-3xl mb-1">{t.premium.monthlyPrice}</div>
                      <div className="text-sm text-blue-200 mb-3">{t.premium.monthlyPeriod}</div>
                      <div className="text-xs bg-white/20 inline-block px-3 py-1 rounded-full">{t.premium.monthlyBadge}</div>
                    </div>

                    {/* One-time Plan */}
                    <div className="bg-yellow-400 text-gray-900 rounded-xl p-5 shadow-lg relative overflow-hidden cursor-pointer hover:shadow-xl transition-all">
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">{t.premium.oneTimeBadge}</div>
                      <div className="text-xs text-gray-700 mb-2">{t.premium.oneTime}</div>
                      <div className="text-3xl font-bold mb-1">{t.premium.oneTimePrice}</div>
                      <div className="text-sm text-gray-700 mb-3">{t.premium.oneTimePeriod}</div>
                      <div className="text-xs bg-black/10 inline-block px-3 py-1 rounded-full">{t.premium.unlimitedAnalyses}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleUpgrade}
                    className="w-full py-4 bg-white text-blue-700 rounded-xl hover:bg-blue-50 transition-all text-lg flex items-center justify-center gap-3 group shadow-lg"
                  >
                    <span>{t.premium.cta}</span>
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="text-center text-sm text-blue-200 mt-4">{t.premium.trust}</div>
                </div>
              )}

              {/* New Analysis */}
              <button
                onClick={handleNewAnalysis}
                className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all"
              >
                {t.results.newAnalysis}
              </button>
            </div>
          )}
        </div>

        {/* Footer disclaimer */}
        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
            <Shield size={14} />
            {language === 'fr' 
              ? 'Analyse assistée par intelligence artificielle – Résultats indicatifs'
              : 'AI-powered analysis – Results are for informational purposes'}
          </p>
        </div>
      </div>

      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8">
            <h3 className="text-2xl text-gray-900 mb-6">{t.exportModal.title}</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">{t.exportModal.language}</label>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg">FR</button>
                  <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg">EN</button>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">{t.exportModal.reportType}</label>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg">{t.exportModal.standard}</button>
                  <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg">{t.exportModal.detailed}</button>
                </div>
              </div>

              <button
                onClick={() => {
                  alert('PDF téléchargé ! (Simulation)');
                  setShowExportModal(false);
                }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-3"
              >
                <Download size={20} />
                <span>{t.exportModal.download}</span>
              </button>

              <button
                onClick={() => setShowExportModal(false)}
                className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
