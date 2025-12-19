import { useState } from 'react';
import { Sparkles, FileText, Target, Zap, CheckCircle, AlertCircle, TrendingUp, Shield, Crown, ArrowRight, Download, Lock, Star } from 'lucide-react';
import { PremiumLock } from './PremiumLock';
import { ExportPDFModal } from './ExportPDFModal';
import { PricingCardCompact } from './PricingCardCompact';

interface CVAnalysisWidgetPremiumProps {
  language?: 'fr' | 'en';
  onUpgradePremium?: () => void;
  embedded?: boolean;
  isPremium?: boolean;
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
    lineByLine: string[];
    atsDetailed: string[];
    improvements: string[];
  };
}

const content = {
  fr: {
    header: {
      title: 'Analyse de CV par IA',
      subtitle: 'Score instantané et recommandations adaptées au marché européen',
    },
    form: {
      language: 'Langue',
      country: 'Pays ciblé',
      position: 'Poste visé (optionnel)',
      positionPlaceholder: 'Ex: Développeur Full-Stack Senior',
      cvText: 'Ton CV',
      cvPlaceholder: 'Colle ton CV ici (texte brut, PDF non requis)\n\nExemple :\nJean Dupont\nDéveloppeur Full-Stack\n5 ans d\'expérience...',
      analyzeButton: 'Analyser mon CV',
      analyzingButton: 'Analyse en cours…',
    },
    results: {
      overallScore: 'Score global',
      afterScore: 'Améliore ton score en quelques minutes',
      subscores: {
        clarity: 'Clarté',
        impact: 'Impact',
        structure: 'Structure',
        ats: 'Compatibilité ATS',
      },
      summary: 'Résumé de l\'analyse',
      priorities: 'Priorités à corriger',
      tips: 'Conseils concrets',
      tipsFree: '2 conseils généraux',
      lineByLine: 'Feedback ligne par ligne',
      atsDetailed: 'Optimisation ATS détaillée',
      improvements: 'Amélioration automatique du CV',
      exportPDF: 'Export PDF',
      newAnalysis: 'Nouvelle analyse',
      downloadPDF: 'Télécharger le rapport PDF',
    },
    conversionCopy: {
      betterScore: 'Améliore ton score en quelques minutes',
      moreInterviews: 'Les candidats Premium obtiennent plus d\'entretiens',
      fastAnalysis: 'Analyse complète en moins de 60 secondes',
    },
    premium: {
      badge: 'Premium',
      title: 'Débloque l\'analyse détaillée ligne par ligne',
      features: [
        'Feedback ligne par ligne',
        'Optimisation ATS avancée',
        'Réécriture automatique',
        'Export PDF sans filigrane',
      ],
      cta: 'Passer Premium',
    },
    disclaimer: 'Analyse assistée par intelligence artificielle. Résultats fournis à titre indicatif.',
  },
  en: {
    header: {
      title: 'AI Resume Analysis',
      subtitle: 'Instant score and feedback tailored to the European job market',
    },
    form: {
      language: 'Language',
      country: 'Target country',
      position: 'Target position (optional)',
      positionPlaceholder: 'E.g: Senior Full-Stack Developer',
      cvText: 'Your resume',
      cvPlaceholder: 'Paste your resume here (plain text, no PDF required)\n\nExample:\nJohn Doe\nFull-Stack Developer\n5 years of experience...',
      analyzeButton: 'Analyze my resume',
      analyzingButton: 'Analyzing…',
    },
    results: {
      overallScore: 'Overall score',
      afterScore: 'Improve your score in minutes',
      subscores: {
        clarity: 'Clarity',
        impact: 'Impact',
        structure: 'Structure',
        ats: 'ATS Compatibility',
      },
      summary: 'Analysis summary',
      priorities: 'Improvement priorities',
      tips: 'Actionable tips',
      tipsFree: '2 general tips',
      lineByLine: 'Line-by-line feedback',
      atsDetailed: 'Detailed ATS optimization',
      improvements: 'Automatic CV improvement',
      exportPDF: 'PDF Export',
      newAnalysis: 'New analysis',
      downloadPDF: 'Download PDF report',
    },
    conversionCopy: {
      betterScore: 'Improve your score in minutes',
      moreInterviews: 'Premium candidates get more interviews',
      fastAnalysis: 'Complete analysis in under 60 seconds',
    },
    premium: {
      badge: 'Premium',
      title: 'Unlock detailed line-by-line analysis',
      features: [
        'Line-by-line feedback',
        'Advanced ATS optimization',
        'Automatic rewriting',
        'PDF export without watermark',
      ],
      cta: 'Go Premium',
    },
    disclaimer: 'AI-powered analysis. Results are provided for informational purposes only.',
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

function getScoreBgColor(score: number): string {
  if (score >= 75) return 'bg-green-50 border-green-200';
  if (score >= 50) return 'bg-orange-50 border-orange-200';
  return 'bg-red-50 border-red-200';
}

function CircularScore({ score, size = 'large' }: { score: number; size?: 'small' | 'large' }) {
  const radius = size === 'large' ? 60 : 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const sizeClasses = size === 'large' ? 'w-40 h-40' : 'w-24 h-24';
  const textSize = size === 'large' ? 'text-4xl' : 'text-2xl';

  return (
    <div className={`${sizeClasses} relative`}>
      <svg className="transform -rotate-90" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="8" />
        <circle
          cx="70" cy="70" r={radius} fill="none"
          stroke={score >= 75 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444'}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`${textSize} ${getScoreColor(score)}`}>{score}</span>
      </div>
    </div>
  );
}

export function CVAnalysisWidgetPremium({ 
  language = 'fr', 
  onUpgradePremium, 
  embedded = false,
  isPremium = false 
}: CVAnalysisWidgetPremiumProps) {
  const [selectedLang, setSelectedLang] = useState('fr');
  const [selectedCountry, setSelectedCountry] = useState('CH');
  const [position, setPosition] = useState('');
  const [cvText, setCvText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const t = content[language];

  const handleAnalyze = async () => {
    if (!cvText.trim()) return;

    setIsAnalyzing(true);

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
                'Ajouter des chiffres concrets dans vos réalisations (ex: +30% de productivité)',
                'Optimiser les mots-clés pour les systèmes ATS',
                'Renforcer la section compétences',
              ]
            : [
                'Add concrete numbers to your achievements (e.g: +30% productivity)',
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
            'Ligne 1 : Manque de chiffres concrets',
            'Ligne 3 : Verbe passif à remplacer',
            'Ligne 7 : Trop générique, soyez spécifique',
          ],
          atsDetailed: [
            'Évitez les tableaux et graphiques',
            'Utilisez des mots-clés du secteur',
            'Format simple et scannable',
          ],
          improvements: [
            'Suggestion de réécriture ligne 1...',
            'Suggestion de réécriture ligne 3...',
          ],
        },
      };

      setResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleNewAnalysis = () => {
    setResult(null);
    setCvText('');
    setPosition('');
  };

  const handleUpgrade = () => {
    if (onUpgradePremium) {
      onUpgradePremium();
    } else {
      setShowPricing(true);
    }
  };

  const handleSelectPlan = (plan: 'monthly' | 'lifetime') => {
    console.log('Selected plan:', plan);
    if (onUpgradePremium) {
      onUpgradePremium();
    }
  };

  return (
    <div className={`${embedded ? 'max-w-4xl mx-auto p-4' : 'w-full'}`}>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-8 pb-6 border-b border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="text-blue-600" size={24} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl text-gray-900 mb-2">{t.header.title}</h2>
            <p className="text-gray-600">{t.header.subtitle}</p>
          </div>
        </div>

        {!result ? (
          /* Form */
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">{t.form.language}</label>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLang(lang.code)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        selectedLang === lang.code
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">{t.form.country}</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
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
              <label className="block text-sm text-gray-700 mb-2">{t.form.position}</label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder={t.form.positionPlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">{t.form.cvText}</label>
              <textarea
                value={cvText}
                onChange={(e) => setCvText(e.target.value)}
                placeholder={t.form.cvPlaceholder}
                rows={12}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
              />
              <div className="mt-2 text-xs text-gray-500 text-right">
                {cvText.length} {language === 'fr' ? 'caractères' : 'characters'}
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!cvText.trim() || isAnalyzing}
              className="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{t.form.analyzingButton}</span>
                </>
              ) : (
                <>
                  <Zap size={20} />
                  <span>{t.form.analyzeButton}</span>
                </>
              )}
            </button>
          </div>
        ) : (
          /* Results */
          <div className="space-y-8">
            {/* Overall Score */}
            <div className="flex flex-col items-center py-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
              <CircularScore score={result.overallScore} size="large" />
              <p className="mt-4 text-lg text-gray-700">{t.results.overallScore}</p>
            </div>

            {/* Conversion CTA after score */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Star className="text-blue-600" size={20} />
                <span className="text-sm text-gray-700">{t.conversionCopy.betterScore}</span>
              </div>
              <button
                onClick={handleUpgrade}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.premium.cta}
              </button>
            </div>

            {/* Subscores */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(result.subscores).map(([key, score]) => {
                const icons = { clarity: FileText, impact: Target, structure: TrendingUp, ats: CheckCircle };
                const Icon = icons[key as keyof typeof icons];

                return (
                  <div key={key} className={`p-4 rounded-xl border-2 ${getScoreBgColor(score)}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 ${getScoreBgColor(score)} rounded-lg flex items-center justify-center`}>
                        <Icon className={getScoreColor(score)} size={20} />
                      </div>
                      <span className="text-sm text-gray-700">
                        {t.results.subscores[key as keyof typeof t.results.subscores]}
                      </span>
                    </div>
                    <CircularScore score={score} size="small" />
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="flex items-center gap-2 text-lg text-gray-900 mb-3">
                <Sparkles className="text-blue-600" size={20} />
                {t.results.summary}
              </h3>
              <p className="text-gray-700 leading-relaxed">{result.summary}</p>
            </div>

            {/* Priorities */}
            <div>
              <h3 className="flex items-center gap-2 text-lg text-gray-900 mb-4">
                <AlertCircle className="text-orange-600" size={20} />
                {t.results.priorities}
              </h3>
              <ol className="space-y-3">
                {result.priorities.map((priority, index) => (
                  <li key={index} className="flex gap-3 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{priority}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tips (Limited to 2 for free users) */}
            <div>
              <h3 className="flex items-center gap-2 text-lg text-gray-900 mb-4">
                <CheckCircle className="text-green-600" size={20} />
                {isPremium ? t.results.tips : t.results.tipsFree}
              </h3>
              <ul className="space-y-3">
                {result.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Sections (Locked for free users) */}
            {!isPremium && (
              <>
                {/* Line-by-line Feedback - Locked */}
                <div className="relative min-h-[200px]">
                  <div className="opacity-30 blur-sm pointer-events-none">
                    <h3 className="text-lg text-gray-900 mb-4">{t.results.lineByLine}</h3>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="h-4 bg-gray-300 rounded w-3/4" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <PremiumLock language={language} onUpgrade={handleUpgrade} title={t.results.lineByLine} />
                </div>

                {/* ATS Detailed - Locked */}
                <div className="relative min-h-[200px]">
                  <div className="opacity-30 blur-sm pointer-events-none">
                    <h3 className="text-lg text-gray-900 mb-4">{t.results.atsDetailed}</h3>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                          <div className="h-4 bg-gray-300 rounded w-2/3" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <PremiumLock language={language} onUpgrade={handleUpgrade} title={t.results.atsDetailed} />
                </div>

                {/* Auto Improvements - Locked */}
                <div className="relative min-h-[200px]">
                  <div className="opacity-30 blur-sm pointer-events-none">
                    <h3 className="text-lg text-gray-900 mb-4">{t.results.improvements}</h3>
                    <div className="space-y-3">
                      {[1, 2].map((i) => (
                        <div key={i} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                          <div className="h-4 bg-gray-300 rounded w-5/6" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <PremiumLock language={language} onUpgrade={handleUpgrade} title={t.results.improvements} />
                </div>
              </>
            )}

            {/* Premium Sections (Unlocked for premium users) */}
            {isPremium && result.premiumSections && (
              <>
                <div>
                  <h3 className="flex items-center gap-2 text-lg text-gray-900 mb-4">
                    <FileText className="text-blue-600" size={20} />
                    {t.results.lineByLine}
                  </h3>
                  <ul className="space-y-3">
                    {result.premiumSections.lineByLine.map((item, index) => (
                      <li key={index} className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-lg text-gray-900 mb-4">
                    <Target className="text-purple-600" size={20} />
                    {t.results.atsDetailed}
                  </h3>
                  <ul className="space-y-3">
                    {result.premiumSections.atsDetailed.map((item, index) => (
                      <li key={index} className="p-4 bg-purple-50 border border-purple-200 rounded-lg text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-lg text-gray-900 mb-4">
                    <Zap className="text-green-600" size={20} />
                    {t.results.improvements}
                  </h3>
                  <ul className="space-y-3">
                    {result.premiumSections.improvements.map((item, index) => (
                      <li key={index} className="p-4 bg-green-50 border border-green-200 rounded-lg text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Export PDF Button */}
            <div>
              <button
                onClick={() => setShowExportModal(true)}
                disabled={!isPremium}
                className={`w-full py-4 rounded-xl transition-all flex items-center justify-center gap-3 ${
                  isPremium
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Download size={20} />
                <span>{t.results.downloadPDF}</span>
                {!isPremium && <Lock size={16} />}
              </button>
              {!isPremium && (
                <p className="text-xs text-gray-500 text-center mt-2">
                  {language === 'fr' ? 'Disponible avec Premium' : 'Available with Premium'}
                </p>
              )}
            </div>

            {/* Pricing Card (show for free users) */}
            {!isPremium && showPricing && (
              <PricingCardCompact language={language} onSelectPlan={handleSelectPlan} />
            )}

            {/* Premium Upsell (if not showing pricing card) */}
            {!isPremium && !showPricing && (
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="text-yellow-400" size={24} />
                  <span className="text-sm text-yellow-400 uppercase tracking-wide">{t.premium.badge}</span>
                </div>

                <h3 className="text-2xl text-white mb-4">{t.premium.title}</h3>

                <ul className="space-y-3 mb-6">
                  {t.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-white">
                      <CheckCircle className="text-green-400" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowPricing(true)}
                  className="w-full py-4 bg-white text-blue-700 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  <span>{t.premium.cta}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* New Analysis Button */}
            <button
              onClick={handleNewAnalysis}
              className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
            >
              {t.results.newAnalysis}
            </button>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
            <Shield size={14} />
            {t.disclaimer}
          </p>
        </div>
      </div>

      {/* Export PDF Modal */}
      <ExportPDFModal
        language={language}
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        isPremium={isPremium}
        onUpgrade={handleUpgrade}
      />
    </div>
  );
}
