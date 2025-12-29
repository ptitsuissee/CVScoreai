import { Shield, AlertCircle, CheckCircle, XCircle, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface AnalyseCVATSPageProps {
  language: 'fr' | 'en';
  onStartAnalysis: () => void;
}

const content = {
  fr: {
    // SEO H1
    h1: 'Analyse CV ATS : vérifie si ton CV passe les filtres recruteurs',
    intro: 'L\'analyse CV ATS détecte si ton CV est compatible avec les systèmes de filtrage automatique utilisés par 75% des entreprises. Optimise la compatibilité ATS de ton CV et augmente tes chances d\'arriver jusqu\'au recruteur.',
    
    // CTA principal
    cta: 'Vérifier la compatibilité ATS de mon CV',
    
    // Section 1
    whatTitle: 'Qu\'est-ce qu\'un ATS ?',
    whatIntro: 'ATS signifie Applicant Tracking System (système de suivi des candidatures). C\'est un logiciel que 75% des grandes entreprises utilisent pour filtrer automatiquement les CV avant qu\'un humain ne les lise.',
    whatPoints: [
      {
        title: 'Filtrage automatique',
        description: 'L\'ATS scanne ton CV et lui attribue un score basé sur des mots-clés, la structure et le format.',
      },
      {
        title: 'Rejet invisible',
        description: 'Si ton CV n\'est pas compatible ATS, il est rejeté automatiquement sans qu\'un recruteur ne le voie jamais.',
      },
      {
        title: 'Optimisation nécessaire',
        description: 'Un CV optimisé ATS doit avoir un format simple, des mots-clés pertinents et une structure claire.',
      },
    ],
    
    // Section 2
    whyTitle: 'Pourquoi les ATS rejettent des CV ?',
    whyReasons: [
      {
        icon: XCircle,
        title: 'Format incompatible',
        description: 'Tableaux, colonnes, images, en-têtes/pieds de page complexes : l\'ATS ne peut pas lire ces éléments.',
        color: 'red',
      },
      {
        icon: XCircle,
        title: 'Mots-clés manquants',
        description: 'Si ton CV ne contient pas les mots-clés de l\'offre d\'emploi, l\'ATS le classe en bas de pile.',
        color: 'red',
      },
      {
        icon: XCircle,
        title: 'Sections mal nommées',
        description: 'L\'ATS cherche "Expérience", "Formation", "Compétences". Si tu utilises des noms créatifs, il ne les trouve pas.',
        color: 'red',
      },
      {
        icon: XCircle,
        title: 'Polices non standards',
        description: 'Les polices fantaisie, symboles Unicode et caractères spéciaux perturbent la lecture ATS.',
        color: 'red',
      },
    ],
    
    // Section 3
    howTitle: 'Comment rendre son CV compatible ATS ?',
    howChecklist: [
      {
        icon: CheckCircle,
        title: 'Utilise un format simple',
        description: 'PDF classique ou Word (.docx), une seule colonne, sans tableaux ni images.',
        color: 'green',
      },
      {
        icon: CheckCircle,
        title: 'Nomme correctement les sections',
        description: 'Utilise des titres standards : "Expérience professionnelle", "Formation", "Compétences".',
        color: 'green',
      },
      {
        icon: CheckCircle,
        title: 'Intègre les mots-clés de l\'offre',
        description: 'Reprends les compétences et termes techniques de l\'annonce dans ton CV.',
        color: 'green',
      },
      {
        icon: CheckCircle,
        title: 'Évite les éléments graphiques',
        description: 'Pas de graphiques, barres de compétences visuelles, photos (sauf si demandé).',
        color: 'green',
      },
      {
        icon: CheckCircle,
        title: 'Utilise des polices standards',
        description: 'Arial, Calibri, Times New Roman. Évite les polices fantaisie.',
        color: 'green',
      },
      {
        icon: CheckCircle,
        title: 'Structure chronologique claire',
        description: 'Liste tes expériences de la plus récente à la plus ancienne avec des dates claires.',
        color: 'green',
      },
    ],
    
    // FAQ SEO
    faqTitle: 'Questions fréquentes sur l\'ATS',
    faqs: [
      {
        question: 'Comment savoir si mon CV passe les ATS ?',
        answer: 'Utilise notre outil d\'analyse CV ATS gratuit. Il scanne ton CV exactement comme le ferait un ATS et te dit quels éléments posent problème : format, mots-clés, structure. Tu obtiens un score de compatibilité ATS et des recommandations précises.',
      },
      {
        question: 'Les ATS lisent-ils les PDF ?',
        answer: 'Oui, les ATS modernes lisent les PDF, à condition qu\'ils soient générés depuis un logiciel (Word, Google Docs, LaTeX) et non scannés. Évite les PDF avec tableaux complexes, colonnes multiples ou images.',
      },
      {
        question: 'Dois-je mettre une photo sur mon CV pour l\'ATS ?',
        answer: 'Non. Les ATS européens ignorent les photos (et c\'est souvent déconseillé pour éviter les biais). Si l\'annonce ne demande pas explicitement de photo, ne mets pas de photo sur ton CV.',
      },
      {
        question: 'L\'ATS analyse-t-il la mise en forme (gras, italique) ?',
        answer: 'Les ATS modernes reconnaissent le gras et l\'italique, mais ne t\'en sers pas pour structurer l\'information. Utilise plutôt des titres de sections clairs et des puces pour lister les éléments.',
      },
    ],
  },
  en: {
    h1: 'ATS Resume Analysis: Check if Your Resume Passes Recruiter Filters',
    intro: 'ATS resume analysis detects if your resume is compatible with automatic filtering systems used by 75% of companies. Optimize your resume\'s ATS compatibility and increase your chances of reaching the recruiter.',
    
    cta: 'Check my Resume\'s ATS Compatibility',
    
    whatTitle: 'What is an ATS?',
    whatIntro: 'ATS stands for Applicant Tracking System. It\'s software that 75% of large companies use to automatically filter resumes before a human reads them.',
    whatPoints: [
      {
        title: 'Automatic Filtering',
        description: 'The ATS scans your resume and assigns it a score based on keywords, structure, and format.',
      },
      {
        title: 'Invisible Rejection',
        description: 'If your resume isn\'t ATS-compatible, it\'s automatically rejected without a recruiter ever seeing it.',
      },
      {
        title: 'Optimization Needed',
        description: 'An ATS-optimized resume must have a simple format, relevant keywords, and clear structure.',
      },
    ],
    
    whyTitle: 'Why Do ATS Systems Reject Resumes?',
    whyReasons: [
      {
        icon: XCircle,
        title: 'Incompatible Format',
        description: 'Tables, columns, images, complex headers/footers: the ATS can\'t read these elements.',
        color: 'red',
      },
      {
        icon: XCircle,
        title: 'Missing Keywords',
        description: 'If your resume doesn\'t contain keywords from the job posting, the ATS ranks it low.',
        color: 'red',
      },
      {
        icon: XCircle,
        title: 'Poorly Named Sections',
        description: 'The ATS looks for "Experience", "Education", "Skills". If you use creative names, it won\'t find them.',
        color: 'red',
      },
      {
        icon: XCircle,
        title: 'Non-Standard Fonts',
        description: 'Fancy fonts, Unicode symbols, and special characters disrupt ATS reading.',
        color: 'red',
      },
    ],
    
    howTitle: 'How to Make Your Resume ATS-Compatible?',
    howChecklist: [
      {
        icon: CheckCircle,
        title: 'Use a Simple Format',
        description: 'Classic PDF or Word (.docx), single column, no tables or images.',
        color: 'green',
      },
      {
        icon: CheckCircle,
        title: 'Name Sections Correctly',
        description: 'Use standard titles: "Professional Experience", "Education", "Skills".',
        color: 'green',
      },
      {
        icon: CheckCircle,
        title: 'Include Keywords from the Job Posting',
        description: 'Include skills and technical terms from the job ad in your resume.',
        color: 'green',
      },
      {
        icon: CheckCircle,
        title: 'Avoid Graphic Elements',
        description: 'No charts, visual skill bars, photos (unless requested).',
        color: 'green',
      },
      {
        icon: CheckCircle,
        title: 'Use Standard Fonts',
        description: 'Arial, Calibri, Times New Roman. Avoid fancy fonts.',
        color: 'green',
      },
      {
        icon: CheckCircle,
        title: 'Clear Chronological Structure',
        description: 'List your experiences from most recent to oldest with clear dates.',
        color: 'green',
      },
    ],
    
    faqTitle: 'Frequently Asked Questions about ATS',
    faqs: [
      {
        question: 'How do I know if my resume passes ATS?',
        answer: 'Use our free ATS resume analysis tool. It scans your resume exactly as an ATS would and tells you which elements are problematic: format, keywords, structure. You get an ATS compatibility score and precise recommendations.',
      },
      {
        question: 'Do ATS systems read PDFs?',
        answer: 'Yes, modern ATS systems read PDFs, as long as they\'re generated from software (Word, Google Docs, LaTeX) and not scanned. Avoid PDFs with complex tables, multiple columns, or images.',
      },
      {
        question: 'Should I include a photo on my resume for ATS?',
        answer: 'No. European ATS systems ignore photos (and it\'s often discouraged to avoid bias). If the job posting doesn\'t explicitly ask for a photo, don\'t include one on your resume.',
      },
      {
        question: 'Does ATS analyze formatting (bold, italic)?',
        answer: 'Modern ATS systems recognize bold and italic, but don\'t use them to structure information. Instead, use clear section titles and bullets to list items.',
      },
    ],
  },
};

export function AnalyseCVATSPage({ language, onStartAnalysis }: AnalyseCVATSPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero SEO */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6">
              <Shield size={16} />
              <span className="text-sm">ATS Compatibility</span>
            </div>
            <h1 className="text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              {t.h1}
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t.intro}
            </p>
            <button
              onClick={onStartAnalysis}
              className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 inline-flex items-center gap-2"
            >
              {t.cta}
              <Shield size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: Qu'est-ce qu'un ATS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-6 text-center">
            {t.whatTitle}
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            {t.whatIntro}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.whatPoints.map((point, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="text-xl text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Pourquoi les ATS rejettent */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            {t.whyTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.whyReasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon size={20} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Comment rendre compatible */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            {t.howTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.howChecklist.map((item, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
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
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-6">
            {language === 'fr' 
              ? 'Vérifie la compatibilité ATS de ton CV' 
              : 'Check your resume\'s ATS compatibility'}
          </h2>
          <p className="text-xl text-green-100 mb-8">
            {language === 'fr' 
              ? 'Analyse gratuite en moins de 60 secondes. Recommandations concrètes.' 
              : 'Free analysis in under 60 seconds. Concrete recommendations.'}
          </p>
          <button
            onClick={onStartAnalysis}
            className="px-8 py-4 bg-white text-green-600 rounded-lg hover:shadow-xl transition-all"
          >
            {t.cta}
          </button>
        </div>
      </section>
    </div>
  );
}
