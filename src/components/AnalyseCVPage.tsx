import { FileText, Zap, Shield, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface AnalyseCVPageProps {
  language: 'fr' | 'en';
  onStartAnalysis: () => void;
}

const content = {
  fr: {
    // SEO H1
    h1: 'Analyse de CV gratuite par intelligence artificielle',
    intro: 'Utilise notre outil d\'analyse de CV gratuite pour obtenir un score sur 100, des conseils personnalisés et améliorer ton CV. L\'analyse CV IA détecte les points faibles de ton CV et te donne des recommandations concrètes pour augmenter tes chances face aux recruteurs.',
    
    // CTA principal
    cta: 'Analyser mon CV gratuitement',
    
    // Section 1
    whyTitle: 'Pourquoi analyser son CV ?',
    whyReasons: [
      {
        title: 'Obtenir un score objectif',
        description: 'L\'analyse de CV te donne un score sur 100 basé sur des critères RH reconnus : structure, clarté, impact et compatibilité ATS.',
      },
      {
        title: 'Identifier les points faibles',
        description: 'L\'IA détecte automatiquement les erreurs courantes : manque de réalisations chiffrées, formulations vagues, problèmes de structure.',
      },
      {
        title: 'Augmenter tes chances',
        description: 'Un CV analysé et optimisé passe plus facilement les filtres ATS et attire davantage l\'attention des recruteurs.',
      },
    ],
    
    // Section 2
    whatTitle: 'Que vérifie l\'analyse CV IA ?',
    whatChecks: [
      {
        icon: FileText,
        title: 'Structure et lisibilité',
        description: 'Sections bien organisées, hiérarchie claire, informations essentielles présentes.',
      },
      {
        icon: Zap,
        title: 'Impact des réalisations',
        description: 'Présence de verbes d\'action, résultats quantifiables, compétences valorisées.',
      },
      {
        icon: Shield,
        title: 'Compatibilité ATS',
        description: 'Format lisible par les systèmes ATS, mots-clés pertinents, absence de tableaux ou graphiques.',
      },
      {
        icon: CheckCircle,
        title: 'Cohérence et clarté',
        description: 'Orthographe, grammaire, cohérence des dates, pertinence du parcours.',
      },
    ],
    
    // Section 3
    howTitle: 'Comment améliorer son CV après l\'analyse ?',
    howSteps: [
      {
        step: '1',
        title: 'Suis les recommandations prioritaires',
        description: 'L\'analyse CV gratuite te donne 3 à 5 actions prioritaires à réaliser en premier.',
      },
      {
        step: '2',
        title: 'Utilise l\'éditeur de CV',
        description: 'Modifie ton CV directement dans notre éditeur et vois les améliorations en temps réel.',
      },
      {
        step: '3',
        title: 'Télécharge ton CV optimisé',
        description: 'Exporte ton CV au format PDF professionnel, compatible ATS et sans watermark (Premium).',
      },
    ],
    
    // FAQ SEO
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        question: 'Comment analyser un CV gratuitement ?',
        answer: 'Il suffit de coller le texte de ton CV dans notre outil d\'analyse. En moins de 60 secondes, tu obtiens ton score, les points forts, les points faibles et des conseils personnalisés. Aucune inscription n\'est requise pour l\'analyse gratuite.',
      },
      {
        question: 'L\'analyse de CV est-elle fiable ?',
        answer: 'Oui. Notre analyse CV IA utilise des critères RH reconnus et s\'appuie sur des milliers de CV analysés. Elle détecte les mêmes points que vérifieraient des recruteurs : structure, impact, compatibilité ATS, clarté. Les conseils sont concrets et actionnables.',
      },
      {
        question: 'Puis-je analyser plusieurs CV ?',
        answer: 'Absolument. Tu peux analyser autant de CV que tu veux gratuitement. Chaque analyse est indépendante et te permet de comparer différentes versions de ton CV pour choisir la meilleure.',
      },
      {
        question: 'Quelle est la différence entre l\'analyse gratuite et Premium ?',
        answer: 'L\'analyse gratuite te donne le score global, les points prioritaires et un résumé. L\'analyse Premium débloque : conseils détaillés ligne par ligne, suggestions de reformulation IA, export PDF sans watermark, et historique complet de tes analyses.',
      },
    ],
  },
  en: {
    h1: 'Free Resume Analysis by Artificial Intelligence',
    intro: 'Use our free resume analysis tool to get a score out of 100, personalized advice, and improve your resume. AI resume analysis detects weaknesses in your resume and gives you concrete recommendations to increase your chances with recruiters.',
    
    cta: 'Analyze my Resume for Free',
    
    whyTitle: 'Why Analyze Your Resume?',
    whyReasons: [
      {
        title: 'Get an Objective Score',
        description: 'Resume analysis gives you a score out of 100 based on recognized HR criteria: structure, clarity, impact, and ATS compatibility.',
      },
      {
        title: 'Identify Weaknesses',
        description: 'AI automatically detects common errors: lack of quantified achievements, vague wording, structural issues.',
      },
      {
        title: 'Increase Your Chances',
        description: 'An analyzed and optimized resume passes ATS filters more easily and attracts more recruiter attention.',
      },
    ],
    
    whatTitle: 'What Does AI Resume Analysis Check?',
    whatChecks: [
      {
        icon: FileText,
        title: 'Structure & Readability',
        description: 'Well-organized sections, clear hierarchy, essential information present.',
      },
      {
        icon: Zap,
        title: 'Impact of Achievements',
        description: 'Presence of action verbs, quantifiable results, highlighted skills.',
      },
      {
        icon: Shield,
        title: 'ATS Compatibility',
        description: 'ATS-readable format, relevant keywords, no tables or graphics.',
      },
      {
        icon: CheckCircle,
        title: 'Consistency & Clarity',
        description: 'Spelling, grammar, date consistency, career path relevance.',
      },
    ],
    
    howTitle: 'How to Improve Your Resume After Analysis?',
    howSteps: [
      {
        step: '1',
        title: 'Follow Priority Recommendations',
        description: 'Free resume analysis gives you 3 to 5 priority actions to take first.',
      },
      {
        step: '2',
        title: 'Use the Resume Editor',
        description: 'Edit your resume directly in our editor and see improvements in real-time.',
      },
      {
        step: '3',
        title: 'Download Your Optimized Resume',
        description: 'Export your resume as a professional PDF, ATS-compatible and without watermark (Premium).',
      },
    ],
    
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How to analyze a resume for free?',
        answer: 'Simply paste your resume text into our analysis tool. In less than 60 seconds, you get your score, strengths, weaknesses, and personalized advice. No registration required for free analysis.',
      },
      {
        question: 'Is resume analysis reliable?',
        answer: 'Yes. Our AI resume analysis uses recognized HR criteria and is based on thousands of analyzed resumes. It detects the same points that recruiters would check: structure, impact, ATS compatibility, clarity. The advice is concrete and actionable.',
      },
      {
        question: 'Can I analyze multiple resumes?',
        answer: 'Absolutely. You can analyze as many resumes as you want for free. Each analysis is independent and allows you to compare different versions of your resume to choose the best one.',
      },
      {
        question: 'What is the difference between free and Premium analysis?',
        answer: 'Free analysis gives you the overall score, priority points, and a summary. Premium analysis unlocks: detailed line-by-line feedback, AI rephrasing suggestions, PDF export without watermark, and complete analysis history.',
      },
    ],
  },
};

export function AnalyseCVPage({ language, onStartAnalysis }: AnalyseCVPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero SEO */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              {t.h1}
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t.intro}
            </p>
            <button
              onClick={onStartAnalysis}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 inline-flex items-center gap-2"
            >
              {t.cta}
              <Zap size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: Pourquoi analyser son CV */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            {t.whyTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.whyReasons.map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Que vérifie l'analyse */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            {t.whatTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.whatChecks.map((check, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-300 transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <check.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {check.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {check.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Comment améliorer */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            {t.howTitle}
          </h2>
          <div className="space-y-6">
            {t.howSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            {t.faqTitle}
          </h2>
          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaqIndex === index ? (
                    <ChevronUp size={20} className="text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-6">
            {language === 'fr' 
              ? 'Prêt à analyser ton CV ?' 
              : 'Ready to analyze your resume?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {language === 'fr' 
              ? 'Obtiens ton score et des conseils personnalisés en moins de 60 secondes.' 
              : 'Get your score and personalized advice in under 60 seconds.'}
          </p>
          <button
            onClick={onStartAnalysis}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-xl transition-all"
          >
            {t.cta}
          </button>
        </div>
      </section>
    </div>
  );
}
