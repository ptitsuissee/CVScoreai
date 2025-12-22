import { CheckCircle, Zap, Shield, FileText, Crown, TrendingUp, Target, Search, ArrowRight, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface SEOPillarPageProps {
  language: 'fr' | 'en';
  onStartAnalysis: () => void;
  onUpgradePremium: () => void;
}

const content = {
  fr: {
    // SEO Meta
    title: 'Analyse de CV par IA : évalue et améliore ton CV gratuitement',
    
    // Hero Section
    hero: {
      h1: 'Analyse de CV par IA : évalue et améliore ton CV gratuitement',
      intro: 'L\'analyse de CV par intelligence artificielle permet d\'obtenir un diagnostic objectif et immédiat sur la qualité de ton CV. En Europe, plus de 75% des grandes entreprises utilisent des logiciels ATS (Applicant Tracking Systems) qui filtrent les candidatures. Notre outil analyse ton CV selon les critères des recruteurs européens et t\'aide à optimiser tes chances de décrocher un entretien.',
    },

    // Outil Section
    tool: {
      title: 'Analyse ton CV maintenant',
      subtitle: 'Colle ton CV ci-dessous pour obtenir un score et des recommandations personnalisées.',
      ctaButton: 'Analyser mon CV gratuitement',
      noCreditCard: 'Sans inscription · Résultat en 30 secondes',
    },

    // Section Pourquoi
    whyAnalyze: {
      h2: 'Pourquoi analyser son CV ?',
      intro: 'Le processus de recrutement a radicalement changé ces dernières années. Comprendre comment ton CV est évalué est devenu essentiel.',
      points: [
        {
          title: 'Le tri automatique des candidatures',
          text: 'Les recruteurs reçoivent des centaines de CV pour chaque offre. Les logiciels ATS effectuent un premier tri automatique basé sur des mots-clés, la structure et le format. Un CV non optimisé peut être écarté avant même d\'être lu par un humain.',
        },
        {
          title: 'Les erreurs fréquentes de CV',
          text: 'Manque de verbes d\'action, descriptions trop vagues, absence de résultats chiffrés, mise en page complexe, mots-clés manquants : ces erreurs sont courantes et faciles à corriger une fois identifiées.',
        },
        {
          title: 'Un diagnostic objectif',
          text: 'Il est difficile de juger son propre CV. Une analyse IA fournit un regard neutre et identifie les points faibles que tu pourrais ne pas voir. C\'est un retour immédiat et gratuit, disponible 24/7.',
        },
        {
          title: 'Adapté au marché européen',
          text: 'Les attentes varient selon les pays. Un CV efficace en France ne l\'est pas forcément en Allemagne ou en Suisse. Notre analyse prend en compte les spécificités européennes et les standards locaux.',
        },
      ],
    },

    // Section Que vérifie
    whatChecks: {
      h2: 'Que vérifie l\'analyse CV ?',
      intro: 'Notre IA examine ton CV selon 5 critères essentiels utilisés par les recruteurs européens.',
      criteria: [
        {
          icon: FileText,
          title: 'Clarté',
          description: 'Structure logique, sections bien définies, informations faciles à trouver. Un recruteur doit comprendre ton profil en 6 secondes.',
        },
        {
          icon: Target,
          title: 'Structure',
          description: 'Organisation cohérente des sections, hiérarchie visuelle, équilibre entre expériences et compétences.',
        },
        {
          icon: TrendingUp,
          title: 'Impact',
          description: 'Utilisation de verbes d\'action, présence de résultats chiffrés, démonstration de ton impact dans tes missions précédentes.',
        },
        {
          icon: Shield,
          title: 'Compatibilité ATS',
          description: 'Format lisible par les logiciels de recrutement, présence des mots-clés métier, structure compatible avec les systèmes ATS.',
        },
        {
          icon: Search,
          title: 'Mots-clés métier',
          description: 'Présence des termes spécifiques à ton secteur, compétences techniques mentionnées, langage professionnel adapté.',
        },
      ],
    },

    // Section Gratuit vs Premium
    comparison: {
      h2: 'Gratuit vs Premium',
      intro: 'CVScore.ai propose deux niveaux d\'analyse selon tes besoins.',
      free: {
        title: 'Analyse Gratuite',
        price: '0€',
        description: 'Parfait pour un premier diagnostic',
        features: [
          'Score global sur 100',
          'Sous-scores détaillés (Clarté, Impact, Structure, ATS)',
          'Résumé des points forts et faibles',
          'Conseils généraux d\'amélioration',
          'Analyses illimitées',
        ],
      },
      premium: {
        title: 'Analyse Premium',
        price: '9€',
        badge: 'Recommandé',
        description: 'Pour une optimisation complète',
        features: [
          'Tout de l\'analyse gratuite',
          'Feedback ligne par ligne sur ton CV',
          'Analyse ATS avancée avec mots-clés manquants',
          'Conseils personnalisés par métier et pays',
          'Comparaison avant/après (score potentiel)',
          'Export PDF professionnel',
          'Priorité email support',
        ],
      },
    },

    // FAQ
    faq: {
      h2: 'Questions fréquentes',
      questions: [
        {
          q: 'L\'analyse par IA est-elle fiable ?',
          a: 'Notre IA est entraînée sur des milliers de CV et utilise les critères des recruteurs européens. Elle fournit un diagnostic objectif et cohérent. Cependant, l\'analyse IA ne remplace pas l\'avis d\'un expert humain : elle t\'aide à identifier rapidement les points à améliorer.',
        },
        {
          q: 'Mes données sont-elles confidentielles ?',
          a: 'Oui, absolument. Ton CV est analysé de manière anonyme et n\'est jamais stocké sur nos serveurs. Nous ne collectons aucune information personnelle. L\'analyse est effectuée en temps réel et les données sont supprimées immédiatement après.',
        },
        {
          q: 'L\'outil fonctionne-t-il pour tous les métiers ?',
          a: 'Oui. Notre IA analyse la structure, la clarté et l\'impact de ton CV, quel que soit ton secteur. Elle identifie les mots-clés génériques et vérifie la compatibilité ATS. Pour une analyse métier spécifique (marketing, tech, finance, etc.), l\'analyse Premium est recommandée.',
        },
        {
          q: 'Combien d\'analyses puis-je faire ?',
          a: 'Les analyses gratuites sont illimitées. Tu peux analyser plusieurs versions de ton CV, tester différentes formulations, ou analyser des CV pour différents postes. Aucune limite, aucune inscription requise.',
        },
        {
          q: 'En combien de temps reçois-je les résultats ?',
          a: 'L\'analyse est instantanée. Dès que tu colles ton CV et cliques sur "Analyser", les résultats s\'affichent en moins de 30 secondes. L\'analyse Premium prend environ 60 secondes pour un rapport plus détaillé.',
        },
      ],
    },

    // Footer disclaimer
    disclaimer: {
      text: '💡 Analyse assistée par intelligence artificielle. Résultats fournis à titre indicatif.',
    },
  },

  en: {
    // SEO Meta
    title: 'AI Resume Analysis: Evaluate and improve your resume for free',
    
    // Hero Section
    hero: {
      h1: 'AI Resume Analysis: Evaluate and improve your resume for free',
      intro: 'AI resume analysis provides an objective and immediate diagnosis of your resume quality. In Europe, over 75% of large companies use ATS (Applicant Tracking Systems) that filter applications. Our tool analyzes your resume according to European recruiters\' criteria and helps you optimize your chances of landing an interview.',
    },

    // Outil Section
    tool: {
      title: 'Analyze your resume now',
      subtitle: 'Paste your resume below to get a score and personalized recommendations.',
      ctaButton: 'Analyze my resume for free',
      noCreditCard: 'No registration · Results in 30 seconds',
    },

    // Section Pourquoi
    whyAnalyze: {
      h2: 'Why analyze your resume?',
      intro: 'The recruitment process has radically changed in recent years. Understanding how your resume is evaluated has become essential.',
      points: [
        {
          title: 'Automatic application filtering',
          text: 'Recruiters receive hundreds of resumes for each job posting. ATS software performs initial automatic filtering based on keywords, structure and format. A non-optimized resume can be discarded before being read by a human.',
        },
        {
          title: 'Common resume mistakes',
          text: 'Lack of action verbs, too vague descriptions, absence of quantified results, complex layout, missing keywords: these mistakes are common and easy to fix once identified.',
        },
        {
          title: 'An objective diagnosis',
          text: 'It\'s difficult to judge your own resume. AI analysis provides a neutral perspective and identifies weaknesses you might not see. It\'s immediate and free feedback, available 24/7.',
        },
        {
          title: 'Adapted to the European market',
          text: 'Expectations vary by country. An effective resume in France may not be in Germany or Switzerland. Our analysis takes into account European specificities and local standards.',
        },
      ],
    },

    // Section Que vérifie
    whatChecks: {
      h2: 'What does the resume analysis check?',
      intro: 'Our AI examines your resume according to 5 essential criteria used by European recruiters.',
      criteria: [
        {
          icon: FileText,
          title: 'Clarity',
          description: 'Logical structure, well-defined sections, easy-to-find information. A recruiter should understand your profile in 6 seconds.',
        },
        {
          icon: Target,
          title: 'Structure',
          description: 'Coherent section organization, visual hierarchy, balance between experiences and skills.',
        },
        {
          icon: TrendingUp,
          title: 'Impact',
          description: 'Use of action verbs, presence of quantified results, demonstration of your impact in previous roles.',
        },
        {
          icon: Shield,
          title: 'ATS Compatibility',
          description: 'Format readable by recruitment software, presence of industry keywords, structure compatible with ATS systems.',
        },
        {
          icon: Search,
          title: 'Industry Keywords',
          description: 'Presence of sector-specific terms, mentioned technical skills, appropriate professional language.',
        },
      ],
    },

    // Section Gratuit vs Premium
    comparison: {
      h2: 'Free vs Premium',
      intro: 'CVScore.ai offers two levels of analysis according to your needs.',
      free: {
        title: 'Free Analysis',
        price: '€0',
        description: 'Perfect for an initial diagnosis',
        features: [
          'Overall score out of 100',
          'Detailed sub-scores (Clarity, Impact, Structure, ATS)',
          'Summary of strengths and weaknesses',
          'General improvement advice',
          'Unlimited analyses',
        ],
      },
      premium: {
        title: 'Premium Analysis',
        price: '€9',
        badge: 'Recommended',
        description: 'For complete optimization',
        features: [
          'Everything from free analysis',
          'Line-by-line feedback on your resume',
          'Advanced ATS analysis with missing keywords',
          'Personalized advice by job and country',
          'Before/after comparison (potential score)',
          'Professional PDF export',
          'Priority email support',
        ],
      },
    },

    // FAQ
    faq: {
      h2: 'Frequently asked questions',
      questions: [
        {
          q: 'Is AI analysis reliable?',
          a: 'Our AI is trained on thousands of resumes and uses European recruiters\' criteria. It provides an objective and consistent diagnosis. However, AI analysis doesn\'t replace expert human advice: it helps you quickly identify areas for improvement.',
        },
        {
          q: 'Is my data confidential?',
          a: 'Yes, absolutely. Your resume is analyzed anonymously and never stored on our servers. We don\'t collect any personal information. Analysis is performed in real-time and data is deleted immediately after.',
        },
        {
          q: 'Does the tool work for all professions?',
          a: 'Yes. Our AI analyzes your resume\'s structure, clarity and impact, regardless of your sector. It identifies generic keywords and checks ATS compatibility. For job-specific analysis (marketing, tech, finance, etc.), Premium analysis is recommended.',
        },
        {
          q: 'How many analyses can I do?',
          a: 'Free analyses are unlimited. You can analyze multiple versions of your resume, test different wordings, or analyze resumes for different positions. No limit, no registration required.',
        },
        {
          q: 'How quickly do I receive results?',
          a: 'Analysis is instant. As soon as you paste your resume and click "Analyze", results appear in less than 30 seconds. Premium analysis takes about 60 seconds for a more detailed report.',
        },
      ],
    },

    // Footer disclaimer
    disclaimer: {
      text: '💡 Analysis assisted by artificial intelligence. Results provided for informational purposes.',
    },
  },
};

export function SEOPillarPage({ language, onStartAnalysis, onUpgradePremium }: SEOPillarPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              {t.hero.h1}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {t.hero.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool Section */}
      <section id="analyze-tool" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-4">{t.tool.title}</h2>
            <p className="text-xl text-blue-100 mb-6">{t.tool.subtitle}</p>
            
            <button
              onClick={onStartAnalysis}
              className="px-8 py-4 bg-white text-purple-700 rounded-xl hover:bg-gray-100 transition-all inline-flex items-center gap-3 text-lg shadow-xl"
            >
              <Zap size={24} />
              <span>{t.tool.ctaButton}</span>
              <ArrowRight size={24} />
            </button>
            
            <p className="text-sm text-blue-100 mt-4">{t.tool.noCreditCard}</p>
          </motion.div>
        </div>
      </section>

      {/* Why Analyze Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.whyAnalyze.h2}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.whyAnalyze.intro}</p>
            
            <div className="space-y-6">
              {t.whyAnalyze.points.map((point, index) => (
                <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle size={24} className="text-blue-600 flex-shrink-0" />
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-8">{point.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Checks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4 text-center">{t.whatChecks.h2}</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">{t.whatChecks.intro}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.whatChecks.criteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-blue-200 p-6 hover:border-blue-400 transition-all"
                >
                  <criterion.icon size={32} className="text-blue-600 mb-4" />
                  <h3 className="text-lg text-gray-900 mb-3">{criterion.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{criterion.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4 text-center">{t.comparison.h2}</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">{t.comparison.intro}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Free Plan */}
              <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 shadow-lg">
                <h3 className="text-2xl text-gray-900 mb-2">{t.comparison.free.title}</h3>
                <div className="text-4xl text-blue-600 mb-2">{t.comparison.free.price}</div>
                <p className="text-gray-600 mb-6">{t.comparison.free.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {t.comparison.free.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={onStartAnalysis}
                  className="w-full py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-all"
                >
                  {language === 'fr' ? 'Commencer gratuitement' : 'Start for free'}
                </button>
              </div>

              {/* Premium Plan */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border-4 border-purple-400 p-8 shadow-2xl relative">
                {t.comparison.premium.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm flex items-center gap-2">
                      <Crown size={16} />
                      {t.comparison.premium.badge}
                    </div>
                  </div>
                )}
                
                <h3 className="text-2xl text-gray-900 mb-2">{t.comparison.premium.title}</h3>
                <div className="text-4xl text-purple-600 mb-2">{t.comparison.premium.price}</div>
                <p className="text-gray-600 mb-6">{t.comparison.premium.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {t.comparison.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={onUpgradePremium}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Crown size={20} />
                  {language === 'fr' ? 'Passer Premium' : 'Upgrade to Premium'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-12 text-center">{t.faq.h2}</h2>
            
            <div className="space-y-6">
              {t.faq.questions.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition-all">
                  <h3 className="text-lg text-gray-900 mb-3 flex items-start gap-2">
                    <HelpCircle size={24} className="text-blue-600 flex-shrink-0" />
                    <span>{item.q}</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-8">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">{t.disclaimer.text}</p>
        </div>
      </section>
    </div>
  );
}
