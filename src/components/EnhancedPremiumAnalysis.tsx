import { Lock, Crown, CheckCircle, Download, TrendingUp, Target, Sparkles, FileText, AlertCircle, ArrowRight, Zap, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface EnhancedPremiumAnalysisProps {
  language: 'fr' | 'en';
  isPremium: boolean;
  cvScore: number;
  onUpgrade: () => void;
}

interface FeedbackSection {
  strengths: string[];
  improvements: string[];
  priorities: string[];
}

interface ATSAnalysis {
  atsScore: number;
  missingKeywords: string[];
  keywordsToReinforce: string[];
  concreteAdvice: string[];
}

interface BeforeAfter {
  currentScore: number;
  potentialScore: number;
  improvements: string[];
}

const content = {
  fr: {
    // Section Premium Lock
    premiumLock: {
      title: 'Analyse Premium — Améliore réellement ton CV',
      modalTitle: 'Fonctionnalité Premium 🔒',
      modalText: 'Débloque une analyse détaillée, compréhensible et actionnable.',
      ctaButton: 'Débloquer Premium',
      reassurance: 'Accès immédiat · Paiement sécurisé',
    },
    
    // Section 1: Feedback structuré
    feedback: {
      title: 'Feedback détaillé sur ton CV',
      subtitle: 'Analyse complète et actionnable',
      strengths: {
        title: '✅ Points forts',
        items: [
          'Structure claire et logique des sections',
          'Expériences bien décrites avec résultats chiffrés',
          'Compétences techniques pertinentes pour le poste',
          'Format professionnel et épuré',
        ],
      },
      improvements: {
        title: '🔧 Points à améliorer',
        items: [
          'Manque de verbes d\'action en début de phrase (ex: "Géré", "Développé", "Optimisé")',
          'Certaines descriptions sont trop générales et manquent de précision',
          'Section "Compétences" pourrait être mieux organisée par catégories',
          'Absence de mots-clés ATS importants pour le secteur ciblé',
        ],
      },
      priorities: {
        title: '🎯 Priorités',
        subtitle: 'Commence par ces 3 actions',
        items: [
          {
            number: 1,
            action: 'Ajoute des verbes d\'action forts',
            detail: 'Commence chaque point par un verbe impactant (Développé, Piloté, Optimisé, Créé)',
          },
          {
            number: 2,
            action: 'Quantifie tes résultats',
            detail: 'Ajoute des chiffres concrets : budget géré, pourcentage d\'augmentation, nombre de projets',
          },
          {
            number: 3,
            action: 'Intègre les mots-clés ATS',
            detail: 'Ajoute les termes spécifiques au poste (voir section ATS ci-dessous)',
          },
        ],
      },
    },
    
    // Section 2: ATS
    ats: {
      title: 'Compatibilité ATS avancée',
      subtitle: 'Optimise ton CV pour les systèmes de recrutement automatisés',
      scoreLabel: 'Score ATS',
      missing: {
        title: 'Mots-clés manquants',
        items: [
          'Gestion de projet',
          'Leadership d\'équipe',
          'Analyse de données',
          'Reporting',
        ],
      },
      reinforce: {
        title: 'Mots-clés à renforcer',
        items: [
          'Collaboration inter-équipes',
          'Méthodologie Agile',
          'Outils de productivité',
        ],
      },
      advice: {
        title: 'Conseils concrets',
        items: [
          {
            icon: '➕',
            text: 'Ajoute "Gestion de projet" dans ta section Compétences',
          },
          {
            icon: '✏️',
            text: 'Reformule "travail en équipe" en "Leadership d\'équipe multi-fonctionnelle"',
          },
          {
            icon: '🔄',
            text: 'Intègre "méthodologie Agile" dans tes descriptions d\'expérience',
          },
        ],
      },
    },
    
    // Section 3: Avant/Après
    beforeAfter: {
      title: 'Potentiel d\'amélioration',
      subtitle: 'En appliquant ces conseils, ton CV pourrait atteindre ce niveau',
      current: 'Score actuel',
      potential: 'Score potentiel',
      improvements: {
        title: 'Améliorations clés',
        items: [
          'Ajout de verbes d\'action impactants',
          'Quantification des résultats',
          'Optimisation des mots-clés ATS',
          'Restructuration de la section Compétences',
        ],
      },
    },
    
    // Section 4: Export PDF
    pdfExport: {
      title: 'Exporter mon analyse',
      subtitle: 'Télécharge un rapport complet en PDF',
      includes: 'Ce PDF contient :',
      content: [
        'Score global et sous-scores',
        'Résumé de l\'analyse',
        'Feedback structuré (points forts, améliorations, priorités)',
        'Conseils ATS détaillés',
        'Comparaison avant/après',
      ],
      button: 'Télécharger en PDF',
      preview: 'Aperçu du PDF',
    },
  },
  en: {
    // Section Premium Lock
    premiumLock: {
      title: 'Premium Analysis — Actually improve your resume',
      modalTitle: 'Premium Feature 🔒',
      modalText: 'Unlock detailed, understandable and actionable analysis.',
      ctaButton: 'Unlock Premium',
      reassurance: 'Immediate access · Secure payment',
    },
    
    // Section 1: Feedback structuré
    feedback: {
      title: 'Detailed feedback on your resume',
      subtitle: 'Complete and actionable analysis',
      strengths: {
        title: '✅ Strengths',
        items: [
          'Clear and logical structure of sections',
          'Well-described experiences with quantified results',
          'Relevant technical skills for the position',
          'Professional and clean format',
        ],
      },
      improvements: {
        title: '🔧 Areas to improve',
        items: [
          'Lack of action verbs at the beginning of sentences (e.g., "Managed", "Developed", "Optimized")',
          'Some descriptions are too general and lack precision',
          '"Skills" section could be better organized by categories',
          'Missing important ATS keywords for the target sector',
        ],
      },
      priorities: {
        title: '🎯 Priorities',
        subtitle: 'Start with these 3 actions',
        items: [
          {
            number: 1,
            action: 'Add strong action verbs',
            detail: 'Start each bullet point with an impactful verb (Developed, Led, Optimized, Created)',
          },
          {
            number: 2,
            action: 'Quantify your results',
            detail: 'Add concrete numbers: budget managed, percentage increase, number of projects',
          },
          {
            number: 3,
            action: 'Integrate ATS keywords',
            detail: 'Add job-specific terms (see ATS section below)',
          },
        ],
      },
    },
    
    // Section 2: ATS
    ats: {
      title: 'Advanced ATS compatibility',
      subtitle: 'Optimize your resume for automated recruitment systems',
      scoreLabel: 'ATS Score',
      missing: {
        title: 'Missing keywords',
        items: [
          'Project management',
          'Team leadership',
          'Data analysis',
          'Reporting',
        ],
      },
      reinforce: {
        title: 'Keywords to reinforce',
        items: [
          'Cross-team collaboration',
          'Agile methodology',
          'Productivity tools',
        ],
      },
      advice: {
        title: 'Concrete advice',
        items: [
          {
            icon: '➕',
            text: 'Add "Project management" to your Skills section',
          },
          {
            icon: '✏️',
            text: 'Rephrase "teamwork" as "Multi-functional team leadership"',
          },
          {
            icon: '🔄',
            text: 'Integrate "Agile methodology" into your experience descriptions',
          },
        ],
      },
    },
    
    // Section 3: Avant/Après
    beforeAfter: {
      title: 'Improvement potential',
      subtitle: 'By applying these tips, your resume could reach this level',
      current: 'Current score',
      potential: 'Potential score',
      improvements: {
        title: 'Key improvements',
        items: [
          'Adding impactful action verbs',
          'Quantifying results',
          'Optimizing ATS keywords',
          'Restructuring the Skills section',
        ],
      },
    },
    
    // Section 4: Export PDF
    pdfExport: {
      title: 'Export my analysis',
      subtitle: 'Download a complete PDF report',
      includes: 'This PDF contains:',
      content: [
        'Overall score and sub-scores',
        'Analysis summary',
        'Structured feedback (strengths, improvements, priorities)',
        'Detailed ATS advice',
        'Before/after comparison',
      ],
      button: 'Download as PDF',
      preview: 'PDF preview',
    },
  },
};

export function EnhancedPremiumAnalysis({ language, isPremium, cvScore, onUpgrade }: EnhancedPremiumAnalysisProps) {
  const t = content[language];
  const [isExporting, setIsExporting] = useState(false);

  // Mock data - in real app, this would come from API
  const potentialScore = Math.min(cvScore + 18, 95);
  const atsScore = 68;

  const handleExportPDF = () => {
    setIsExporting(true);
    // Simulate PDF generation
    setTimeout(() => {
      setIsExporting(false);
      // In real app, trigger PDF download
    }, 2000);
  };

  // Premium Lock Overlay
  if (!isPremium) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-3">{t.premiumLock.title}</h2>
          </div>

          {/* Blurred Preview */}
          <div className="relative">
            {/* Blurred content */}
            <div className="filter blur-sm select-none pointer-events-none">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <div className="h-40 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <div className="h-40 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Premium Modal Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl border-4 border-purple-400 p-8 shadow-2xl max-w-md w-full mx-4"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Crown className="text-white" size={40} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl text-gray-900 mb-4">{t.premiumLock.modalTitle}</h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {t.premiumLock.modalText}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={onUpgrade}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-2xl transition-all text-lg flex items-center justify-center gap-3 mb-4"
                  >
                    <Crown size={24} />
                    <span>{t.premiumLock.ctaButton}</span>
                    <ArrowRight size={24} />
                  </button>

                  {/* Reassurance */}
                  <p className="text-sm text-gray-500">{t.premiumLock.reassurance}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Premium Content (unlocked)
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-6 py-3 rounded-full border-2 border-orange-300">
            <Crown size={20} />
            <span className="text-sm">Premium Analysis Active</span>
            <Sparkles size={20} />
          </div>
        </div>

        {/* SECTION 1: FEEDBACK STRUCTURÉ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-3">{t.feedback.title}</h2>
            <p className="text-xl text-gray-600">{t.feedback.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Points forts */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-300 p-6 shadow-lg">
              <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="text-green-600" size={24} />
                {t.feedback.strengths.title}
              </h3>
              <ul className="space-y-3">
                {t.feedback.strengths.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Points à améliorer */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-300 p-6 shadow-lg">
              <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="text-blue-600" size={24} />
                {t.feedback.improvements.title}
              </h3>
              <ul className="space-y-3">
                {t.feedback.improvements.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <ArrowRight size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Priorités */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-300 p-8 shadow-xl">
            <h3 className="text-2xl text-gray-900 mb-2 flex items-center gap-2">
              <Target className="text-purple-600" size={28} />
              {t.feedback.priorities.title}
            </h3>
            <p className="text-gray-600 mb-6">{t.feedback.priorities.subtitle}</p>
            
            <div className="space-y-4">
              {t.feedback.priorities.items.map((priority, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white rounded-xl border-2 border-purple-200 p-6 hover:border-purple-400 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xl flex-shrink-0">
                      {priority.number}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg text-gray-900 mb-2">{priority.action}</h4>
                      <p className="text-gray-600">{priority.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: ATS ANALYSIS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl text-gray-900 mb-2 flex items-center gap-2">
                  <Shield className="text-blue-600" size={32} />
                  {t.ats.title}
                </h2>
                <p className="text-gray-600">{t.ats.subtitle}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-blue-600 mb-1">{atsScore}</div>
                <div className="text-sm text-gray-600">{t.ats.scoreLabel}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Missing keywords */}
              <div className="bg-red-50 rounded-xl border-2 border-red-200 p-6">
                <h3 className="text-lg text-gray-900 mb-4">{t.ats.missing.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.ats.missing.items.map((keyword, index) => (
                    <span key={index} className="px-3 py-1 bg-white border-2 border-red-300 text-red-700 rounded-lg text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Keywords to reinforce */}
              <div className="bg-yellow-50 rounded-xl border-2 border-yellow-200 p-6">
                <h3 className="text-lg text-gray-900 mb-4">{t.ats.reinforce.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.ats.reinforce.items.map((keyword, index) => (
                    <span key={index} className="px-3 py-1 bg-white border-2 border-yellow-300 text-yellow-700 rounded-lg text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Concrete advice */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 p-6">
              <h3 className="text-lg text-gray-900 mb-4">{t.ats.advice.title}</h3>
              <div className="space-y-3">
                {t.ats.advice.items.map((advice, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-2xl flex-shrink-0">{advice.icon}</span>
                    <span>{advice.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 3: BEFORE/AFTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl text-gray-900 mb-3 flex items-center justify-center gap-2">
              <TrendingUp className="text-green-600" size={32} />
              {t.beforeAfter.title}
            </h2>
            <p className="text-lg text-gray-600">{t.beforeAfter.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            {/* Current Score */}
            <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 text-center shadow-lg">
              <div className="text-sm text-gray-600 mb-3">{t.beforeAfter.current}</div>
              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-5xl text-gray-700">{cvScore}</div>
              </div>
            </div>

            {/* Potential Score */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-4 border-green-400 p-8 text-center shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm">
                  +{potentialScore - cvScore} points
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-3">{t.beforeAfter.potential}</div>
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 border-4 border-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="text-5xl text-white">{potentialScore}</div>
              </div>
            </div>
          </div>

          {/* Improvements list */}
          <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
            <h3 className="text-lg text-gray-900 mb-4">{t.beforeAfter.improvements.title}</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {t.beforeAfter.improvements.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <Zap size={18} className="text-yellow-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* SECTION 4: PDF EXPORT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl mb-3 flex items-center gap-2">
                <FileText size={32} />
                {t.pdfExport.title}
              </h2>
              <p className="text-blue-100 mb-6">{t.pdfExport.subtitle}</p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                <div className="text-sm mb-3">{t.pdfExport.includes}</div>
                <ul className="space-y-2">
                  {t.pdfExport.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-blue-100">
                      <CheckCircle size={18} className="text-green-300 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handleExportPDF}
                disabled={isExporting}
                className="px-8 py-4 bg-white text-purple-700 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isExporting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-purple-700 border-t-transparent rounded-full animate-spin" />
                    <span>{language === 'fr' ? 'Génération...' : 'Generating...'}</span>
                  </>
                ) : (
                  <>
                    <Download size={24} />
                    <span>{t.pdfExport.button}</span>
                  </>
                )}
              </button>
            </div>

            {/* Right: PDF Preview */}
            <div className="bg-white rounded-xl p-6 shadow-2xl">
              <div className="text-sm text-gray-600 mb-3 text-center">{t.pdfExport.preview}</div>
              <div className="aspect-[1/1.4] bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg border-2 border-gray-300 p-4 overflow-hidden">
                <div className="space-y-3">
                  <div className="h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded"></div>
                  <div className="h-20 bg-white rounded border-2 border-gray-200"></div>
                  <div className="h-16 bg-white rounded border-2 border-gray-200"></div>
                  <div className="h-16 bg-white rounded border-2 border-gray-200"></div>
                  <div className="text-xs text-center text-gray-500 mt-4">CVScore.ai</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
