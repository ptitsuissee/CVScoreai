import { useState } from 'react';
import { CheckCircle, Lock, Crown, Zap, Mail, Download, Target, FileText, Shield, Sparkles, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileFirstExperienceProps {
  language: 'fr' | 'en';
  onNavigate: (page: string) => void;
}

type Screen = 'analysis' | 'result' | 'premium-lock' | 'payment-success';

interface AnalysisResult {
  overallScore: number;
  subscores: {
    clarity: number;
    impact: number;
    structure: number;
    ats: number;
  };
  summary: string;
}

const content = {
  fr: {
    // Navigation
    back: 'Retour',
    
    // Écran 1 - Analyse
    screen1: {
      title: 'Analyse de CV',
      subtitle: 'Obtiens ton score en 30 secondes',
      cvLabel: 'Contenu de ton CV',
      cvPlaceholder: 'Colle ton CV ici...\n\nExemple :\nDéveloppeur Full-Stack\n5 ans d\'expérience\n...',
      emailLabel: 'Email Premium (optionnel)',
      emailPlaceholder: 'ton@email.com',
      analyzeButton: 'Analyser mon CV',
      analyzing: 'Analyse en cours...',
    },
    
    // Écran 2 - Résultat
    screen2: {
      title: 'Résultat',
      overallScore: 'Score global',
      details: 'Détails',
      clarity: 'Clarté',
      impact: 'Impact',
      structure: 'Structure',
      ats: 'ATS',
      summaryTitle: 'Résumé',
      unlockMore: 'Voir l\'analyse complète',
    },
    
    // Écran 3 - Premium Lock
    screen3: {
      title: 'Fonctionnalité Premium',
      subtitle: 'Débloquer l\'analyse complète',
      features: [
        'Analyse ligne par ligne détaillée',
        'Optimisation ATS avancée',
        'Conseils personnalisés',
        'Export PDF professionnel',
      ],
      price: 'À partir de 9,99 €',
      cta: 'Débloquer Premium',
      backToFree: 'Rester en version gratuite',
    },
    
    // Écran 4 - Après paiement
    screen4: {
      title: 'Premium activé ! 🎉',
      subtitle: 'Comment accéder à tes fonctionnalités ?',
      instruction1: 'Reviens dans l\'outil',
      instruction2: 'Clique sur "Activer Premium"',
      instruction3: 'Entre l\'email de paiement',
      emailLabel: 'Email utilisé',
      cta: 'Retourner à l\'analyse',
    },
  },
  en: {
    // Navigation
    back: 'Back',
    
    // Écran 1 - Analyse
    screen1: {
      title: 'Resume Analysis',
      subtitle: 'Get your score in 30 seconds',
      cvLabel: 'Your resume content',
      cvPlaceholder: 'Paste your resume here...\n\nExample:\nFull-Stack Developer\n5 years experience\n...',
      emailLabel: 'Premium Email (optional)',
      emailPlaceholder: 'your@email.com',
      analyzeButton: 'Analyze my Resume',
      analyzing: 'Analyzing...',
    },
    
    // Écran 2 - Résultat
    screen2: {
      title: 'Result',
      overallScore: 'Overall score',
      details: 'Details',
      clarity: 'Clarity',
      impact: 'Impact',
      structure: 'Structure',
      ats: 'ATS',
      summaryTitle: 'Summary',
      unlockMore: 'View full analysis',
    },
    
    // Écran 3 - Premium Lock
    screen3: {
      title: 'Premium Feature',
      subtitle: 'Unlock full analysis',
      features: [
        'Detailed line-by-line analysis',
        'Advanced ATS optimization',
        'Personalized advice',
        'Professional PDF export',
      ],
      price: 'From $9.99',
      cta: 'Unlock Premium',
      backToFree: 'Stay in free version',
    },
    
    // Écran 4 - Après paiement
    screen4: {
      title: 'Premium activated! 🎉',
      subtitle: 'How to access your features?',
      instruction1: 'Return to the tool',
      instruction2: 'Click "Activate Premium"',
      instruction3: 'Enter payment email',
      emailLabel: 'Email used',
      cta: 'Return to analysis',
    },
  },
};

const countries = [
  { code: 'FR', name: 'France 🇫🇷' },
  { code: 'CH', name: 'Suisse 🇨🇭' },
  { code: 'EU', name: 'Europe 🇪🇺' },
];

export function MobileFirstExperience({ language, onNavigate }: MobileFirstExperienceProps) {
  const t = content[language];
  
  const [currentScreen, setCurrentScreen] = useState<Screen>('analysis');
  const [cvText, setCvText] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('FR');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const handleAnalyze = () => {
    if (!cvText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis: AnalysisResult = {
        overallScore: 74,
        subscores: {
          clarity: 78,
          impact: 70,
          structure: 76,
          ats: 72,
        },
        summary: language === 'fr'
          ? 'Votre CV présente une bonne structure. Les compétences sont bien listées. Points à améliorer : quantifier les réalisations et ajouter des mots-clés ATS.'
          : 'Your resume has a good structure. Skills are well listed. Areas to improve: quantify achievements and add ATS keywords.',
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
      setCurrentScreen('result');
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    return 'text-orange-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-50 border-green-300';
    if (score >= 60) return 'bg-blue-50 border-blue-300';
    return 'bg-orange-50 border-orange-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Mobile Header */}
      <div className="sticky top-0 z-10 bg-white border-b-2 border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between">
          {currentScreen !== 'analysis' && (
            <button
              onClick={() => {
                if (currentScreen === 'result') setCurrentScreen('analysis');
                else if (currentScreen === 'premium-lock') setCurrentScreen('result');
                else if (currentScreen === 'payment-success') setCurrentScreen('analysis');
              }}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <ArrowLeft size={20} />
              <span className="text-sm">{t.back}</span>
            </button>
          )}
          <div className="flex-1 text-center">
            <h1 className="text-xl text-gray-900">CVScore.ai</h1>
          </div>
          {currentScreen !== 'analysis' && <div className="w-16"></div>}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* ÉCRAN 1 - ANALYSE */}
        {currentScreen === 'analysis' && (
          <motion.div
            key="analysis"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-4 pb-24"
          >
            {/* Header */}
            <div className="text-center mb-6 pt-4">
              <h2 className="text-2xl text-gray-900 mb-2">{t.screen1.title}</h2>
              <p className="text-gray-600">{t.screen1.subtitle}</p>
            </div>

            {/* CV Input */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">{t.screen1.cvLabel}</label>
                <textarea
                  value={cvText}
                  onChange={(e) => setCvText(e.target.value)}
                  placeholder={t.screen1.cvPlaceholder}
                  rows={12}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-base"
                />
              </div>

              {/* Country Selector */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  {language === 'fr' ? 'Pays' : 'Country'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => setCountry(c.code)}
                      className={`py-3 px-2 rounded-xl border-2 transition-all text-sm ${
                        country === c.code
                          ? 'bg-blue-50 border-blue-600 text-blue-700'
                          : 'bg-white border-gray-300 text-gray-700'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email Premium */}
              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                <label className="block text-sm text-gray-900 mb-2 flex items-center gap-2">
                  <Crown size={16} className="text-purple-600" />
                  {t.screen1.emailLabel}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.screen1.emailPlaceholder}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-base"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* ÉCRAN 2 - RÉSULTAT */}
        {currentScreen === 'result' && analysis && (
          <motion.div
            key="result"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-4 pb-24"
          >
            {/* Score Principal */}
            <div className="text-center mb-6 pt-4">
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full border-4 ${getScoreBgColor(analysis.overallScore)} mb-4`}>
                <div className="text-center">
                  <div className={`text-5xl ${getScoreColor(analysis.overallScore)}`}>
                    {analysis.overallScore}
                  </div>
                  <div className="text-sm text-gray-600">/100</div>
                </div>
              </div>
              <h2 className="text-2xl text-gray-900 mb-2">{t.screen2.overallScore}</h2>
            </div>

            {/* Sous-scores */}
            <div className="mb-6">
              <h3 className="text-lg text-gray-900 mb-4">{t.screen2.details}</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(analysis.subscores).map(([key, value]) => {
                  const icons = {
                    clarity: Target,
                    impact: Sparkles,
                    structure: FileText,
                    ats: Shield,
                  };
                  const Icon = icons[key as keyof typeof icons];
                  const labels = {
                    clarity: t.screen2.clarity,
                    impact: t.screen2.impact,
                    structure: t.screen2.structure,
                    ats: t.screen2.ats,
                  };
                  
                  return (
                    <div key={key} className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={18} className="text-blue-600" />
                        <span className="text-sm text-gray-700">{labels[key as keyof typeof labels]}</span>
                      </div>
                      <div className={`text-3xl ${getScoreColor(value)}`}>{value}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Résumé */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
              <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
                <FileText size={18} className="text-blue-600" />
                {t.screen2.summaryTitle}
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">{analysis.summary}</p>
            </div>
          </motion.div>
        )}

        {/* ÉCRAN 3 - PREMIUM LOCK */}
        {currentScreen === 'premium-lock' && (
          <motion.div
            key="premium-lock"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-4 pb-24"
          >
            {/* Icon */}
            <div className="text-center pt-8 mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <Crown className="text-white" size={48} />
              </div>
              <h2 className="text-2xl text-gray-900 mb-2">{t.screen3.title}</h2>
              <p className="text-gray-600">{t.screen3.subtitle}</p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {t.screen3.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-4"
                >
                  <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <div className="text-3xl text-purple-700 mb-2">{t.screen3.price}</div>
              <p className="text-sm text-gray-600">
                {language === 'fr' ? 'Paiement unique ou mensuel' : 'One-time or monthly payment'}
              </p>
            </div>
          </motion.div>
        )}

        {/* ÉCRAN 4 - APRÈS PAIEMENT */}
        {currentScreen === 'payment-success' && (
          <motion.div
            key="payment-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-4 pb-24"
          >
            {/* Success Icon */}
            <div className="text-center pt-8 mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <CheckCircle className="text-white" size={48} />
              </div>
              <h2 className="text-2xl text-gray-900 mb-2">{t.screen4.title}</h2>
              <p className="text-gray-600">{t.screen4.subtitle}</p>
            </div>

            {/* Instructions */}
            <div className="space-y-3 mb-6">
              {[t.screen4.instruction1, t.screen4.instruction2, t.screen4.instruction3].map((instruction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4"
                >
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 pt-1">{instruction}</span>
                </motion.div>
              ))}
            </div>

            {/* Email Display */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 mb-6">
              <div className="text-sm text-gray-600 mb-2">{t.screen4.emailLabel}</div>
              <div className="flex items-center gap-2 text-gray-900">
                <Mail size={18} className="text-blue-600" />
                <span>{email || 'user@example.com'}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-2xl">
        {currentScreen === 'analysis' && (
          <button
            onClick={handleAnalyze}
            disabled={!cvText.trim() || isAnalyzing}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 text-lg"
          >
            {isAnalyzing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{t.screen1.analyzing}</span>
              </>
            ) : (
              <>
                <Zap size={22} />
                <span>{t.screen1.analyzeButton}</span>
              </>
            )}
          </button>
        )}

        {currentScreen === 'result' && (
          <button
            onClick={() => setCurrentScreen('premium-lock')}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 text-lg"
          >
            <Crown size={22} />
            <span>{t.screen2.unlockMore}</span>
            <ChevronRight size={22} />
          </button>
        )}

        {currentScreen === 'premium-lock' && (
          <div className="space-y-3">
            <button
              onClick={() => setCurrentScreen('payment-success')}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 text-lg"
            >
              <Crown size={22} />
              <span>{t.screen3.cta}</span>
            </button>
            <button
              onClick={() => setCurrentScreen('result')}
              className="w-full py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all text-base"
            >
              {t.screen3.backToFree}
            </button>
          </div>
        )}

        {currentScreen === 'payment-success' && (
          <button
            onClick={() => {
              setCurrentScreen('analysis');
              setCvText('');
            }}
            className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 text-lg"
          >
            <CheckCircle size={22} />
            <span>{t.screen4.cta}</span>
          </button>
        )}
      </div>
    </div>
  );
}
