import { Shield, CheckCircle, Zap, AlertTriangle, FileText, Search, Target, ArrowRight, HelpCircle, Crown } from 'lucide-react';
import { motion } from 'motion/react';

interface SEOATSPageProps {
  language: 'fr' | 'en';
  onStartAnalysis: () => void;
  onUpgradePremium: () => void;
}

const content = {
  fr: {
    title: 'Analyse CV ATS : optimise ton CV pour les logiciels de recrutement',
    
    hero: {
      h1: 'Analyse CV ATS : optimise ton CV pour les logiciels de recrutement',
      intro: 'Plus de 75% des grandes entreprises européennes utilisent des ATS (Applicant Tracking Systems) pour filtrer les candidatures. Ces logiciels analysent automatiquement ton CV avant qu\'un recruteur humain ne le lise. Un CV non optimisé pour les ATS peut être éliminé en quelques secondes, même si ton profil est parfait pour le poste. Notre analyse vérifie la compatibilité de ton CV avec ces systèmes et t\'aide à maximiser tes chances de passer ce premier filtre.',
    },

    tool: {
      title: 'Vérifie la compatibilité ATS de ton CV',
      subtitle: 'Analyse gratuite et immédiate pour savoir si ton CV passe les filtres automatiques',
      ctaButton: 'Tester mon CV ATS',
      noCreditCard: 'Sans inscription · Résultat en 30 secondes',
    },

    whatIsATS: {
      h2: 'Qu\'est-ce qu\'un ATS et pourquoi c\'est important ?',
      intro: 'Comprendre les ATS est essentiel pour réussir ta recherche d\'emploi en 2024.',
      points: [
        {
          icon: Shield,
          title: 'Un logiciel de tri automatique',
          text: 'L\'ATS (Applicant Tracking System) est un logiciel utilisé par les entreprises pour gérer des centaines de candidatures. Il analyse automatiquement les CV selon des critères prédéfinis : mots-clés, format, structure, compétences.',
        },
        {
          icon: AlertTriangle,
          title: 'Pourquoi tant de CV sont rejetés',
          text: 'Études montrent que 75% des CV sont rejetés par les ATS avant d\'atteindre un recruteur humain. Raisons principales : format illisible, mots-clés manquants, structure trop complexe, informations mal organisées.',
        },
        {
          icon: Target,
          title: 'Comment l\'analyse t\'aide',
          text: 'Notre outil identifie les problèmes de compatibilité ATS : format, mots-clés manquants, structure inadaptée, sections mal nommées. Tu obtiens des conseils concrets pour corriger chaque problème.',
        },
      ],
    },

    whatATSChecks: {
      h2: 'Ce que l\'ATS vérifie dans ton CV',
      intro: 'Les logiciels ATS analysent ton CV selon plusieurs critères techniques. Voici ce qu\'ils recherchent.',
      checks: [
        {
          icon: Search,
          title: 'Mots-clés',
          description: 'L\'ATS compare ton CV à l\'offre d\'emploi et recherche des mots-clés spécifiques : compétences techniques, outils, certifications, termes métier. Un manque de correspondance = CV rejeté.',
          tips: [
            'Reprends les termes exacts de l\'offre d\'emploi',
            'Utilise les noms complets ET les acronymes (ex: "Search Engine Optimization (SEO)")',
            'Inclus les compétences techniques dans une section dédiée',
          ],
        },
        {
          icon: FileText,
          title: 'Structure',
          description: 'L\'ATS doit pouvoir identifier clairement chaque section : expériences, formation, compétences, contact. Une structure trop originale ou complexe peut le perdre.',
          tips: [
            'Utilise des titres de section standards (Expérience, Formation, Compétences)',
            'Évite les tableaux, colonnes multiples, graphiques',
            'Garde une structure chronologique simple',
          ],
        },
        {
          icon: FileText,
          title: 'Lisibilité du format',
          description: 'Les ATS préfèrent les formats simples : .docx ou PDF texte. Les PDF image, les designs complexes, ou les formats inhabituels sont souvent illisibles.',
          tips: [
            'Privilégie le format .docx ou PDF texte simple',
            'Évite les images, les en-têtes/pieds de page complexes',
            'Utilise une police standard (Arial, Calibri, Times)',
          ],
        },
        {
          icon: Target,
          title: 'Dates et cohérence',
          description: 'L\'ATS vérifie la cohérence des dates, l\'absence de trous dans le parcours, la logique de progression. Des incohérences peuvent déclencher des alertes.',
          tips: [
            'Formate les dates de manière cohérente (ex: "Jan 2020 - Déc 2022")',
            'Explique les périodes sans emploi si nécessaire',
            'Vérifie qu\'il n\'y a pas d\'erreurs de chronologie',
          ],
        },
      ],
    },

    comparison: {
      h2: 'Analyse ATS : Gratuit vs Premium',
      intro: 'Deux niveaux d\'analyse selon tes besoins d\'optimisation ATS.',
      free: {
        title: 'Analyse ATS Gratuite',
        price: '0€',
        features: [
          'Score de compatibilité ATS sur 100',
          'Vérification du format (lisible ou non)',
          'Détection des problèmes de structure',
          'Liste des sections manquantes',
          'Conseils généraux d\'optimisation',
        ],
      },
      premium: {
        title: 'Analyse ATS Premium',
        price: '9€',
        badge: 'Optimisation complète',
        features: [
          'Tout de l\'analyse gratuite',
          'Liste complète des mots-clés manquants',
          'Mots-clés à renforcer selon le poste ciblé',
          'Suggestions de reformulation par section',
          'Comparaison avant/après optimisation',
          'Export PDF avec rapport ATS détaillé',
        ],
      },
    },

    faq: {
      h2: 'Questions fréquentes sur l\'ATS',
      questions: [
        {
          q: 'Mon CV passe-t-il les ATS ?',
          a: 'C\'est exactement ce que notre outil vérifie. Il analyse ton format, ta structure, et tes mots-clés pour te dire si ton CV est compatible ATS. Si ce n\'est pas le cas, tu reçois des conseils concrets pour corriger les problèmes.',
        },
        {
          q: 'Les recruteurs lisent-ils vraiment tous les CV ?',
          a: 'Non. Dans les grandes entreprises, l\'ATS fait un premier tri automatique. Seuls les CV qui passent ce filtre (souvent 20-30%) sont lus par un humain. C\'est pourquoi l\'optimisation ATS est devenue essentielle.',
        },
        {
          q: 'L\'ATS est-il utilisé en Europe ?',
          a: 'Oui, massivement. Les grands groupes européens (en France, Suisse, Allemagne, UK, etc.) utilisent tous des ATS : Workday, Taleo, SAP SuccessFactors, Greenhouse. Les PME utilisent de plus en plus des solutions simples comme Lever ou Recruitee.',
        },
        {
          q: 'Faut-il sacrifier le design pour l\'ATS ?',
          a: 'Non, mais il faut trouver un équilibre. Un CV sobre et épuré peut être à la fois lisible par l\'ATS et agréable pour un humain. Évite simplement les éléments trop complexes : graphiques, colonnes multiples, images décoratives.',
        },
        {
          q: 'Un bon score ATS garantit-il un entretien ?',
          a: 'Non. Le score ATS te permet de passer le premier filtre automatique, mais ensuite un recruteur humain lit ton CV. Il faut donc à la fois optimiser pour l\'ATS ET pour la lecture humaine : clarté, impact, résultats concrets.',
        },
      ],
    },

    disclaimer: {
      text: '💡 Analyse basée sur les critères ATS les plus courants en Europe. Chaque logiciel peut avoir des spécificités.',
    },
  },

  en: {
    title: 'ATS Resume Analysis: Optimize your resume for recruitment software',
    
    hero: {
      h1: 'ATS Resume Analysis: Optimize your resume for recruitment software',
      intro: 'Over 75% of large European companies use ATS (Applicant Tracking Systems) to filter applications. These software automatically analyze your resume before a human recruiter reads it. A resume not optimized for ATS can be eliminated in seconds, even if your profile is perfect for the position. Our analysis checks your resume\'s compatibility with these systems and helps you maximize your chances of passing this first filter.',
    },

    tool: {
      title: 'Check your resume\'s ATS compatibility',
      subtitle: 'Free and immediate analysis to know if your resume passes automatic filters',
      ctaButton: 'Test my ATS resume',
      noCreditCard: 'No registration · Results in 30 seconds',
    },

    whatIsATS: {
      h2: 'What is an ATS and why is it important?',
      intro: 'Understanding ATS is essential for a successful job search in 2024.',
      points: [
        {
          icon: Shield,
          title: 'Automatic filtering software',
          text: 'ATS (Applicant Tracking System) is software used by companies to manage hundreds of applications. It automatically analyzes resumes according to predefined criteria: keywords, format, structure, skills.',
        },
        {
          icon: AlertTriangle,
          title: 'Why so many resumes are rejected',
          text: 'Studies show that 75% of resumes are rejected by ATS before reaching a human recruiter. Main reasons: unreadable format, missing keywords, too complex structure, poorly organized information.',
        },
        {
          icon: Target,
          title: 'How the analysis helps you',
          text: 'Our tool identifies ATS compatibility issues: format, missing keywords, unsuitable structure, poorly named sections. You get concrete advice to fix each problem.',
        },
      ],
    },

    whatATSChecks: {
      h2: 'What the ATS checks in your resume',
      intro: 'ATS software analyzes your resume according to several technical criteria. Here\'s what they look for.',
      checks: [
        {
          icon: Search,
          title: 'Keywords',
          description: 'The ATS compares your resume to the job posting and looks for specific keywords: technical skills, tools, certifications, industry terms. Lack of match = rejected resume.',
          tips: [
            'Use exact terms from the job posting',
            'Use full names AND acronyms (e.g., "Search Engine Optimization (SEO)")',
            'Include technical skills in a dedicated section',
          ],
        },
        {
          icon: FileText,
          title: 'Structure',
          description: 'The ATS must be able to clearly identify each section: experience, education, skills, contact. A too original or complex structure can confuse it.',
          tips: [
            'Use standard section titles (Experience, Education, Skills)',
            'Avoid tables, multiple columns, graphics',
            'Keep a simple chronological structure',
          ],
        },
        {
          icon: FileText,
          title: 'Format readability',
          description: 'ATS prefer simple formats: .docx or text PDF. Image PDFs, complex designs, or unusual formats are often unreadable.',
          tips: [
            'Prefer .docx or simple text PDF format',
            'Avoid images, complex headers/footers',
            'Use standard font (Arial, Calibri, Times)',
          ],
        },
        {
          icon: Target,
          title: 'Dates and consistency',
          description: 'The ATS checks date consistency, absence of gaps in career path, logical progression. Inconsistencies can trigger alerts.',
          tips: [
            'Format dates consistently (e.g., "Jan 2020 - Dec 2022")',
            'Explain employment gaps if necessary',
            'Check for no chronology errors',
          ],
        },
      ],
    },

    comparison: {
      h2: 'ATS Analysis: Free vs Premium',
      intro: 'Two levels of analysis according to your ATS optimization needs.',
      free: {
        title: 'Free ATS Analysis',
        price: '€0',
        features: [
          'ATS compatibility score out of 100',
          'Format verification (readable or not)',
          'Structure problem detection',
          'List of missing sections',
          'General optimization advice',
        ],
      },
      premium: {
        title: 'Premium ATS Analysis',
        price: '€9',
        badge: 'Complete optimization',
        features: [
          'Everything from free analysis',
          'Complete list of missing keywords',
          'Keywords to reinforce according to target position',
          'Reformulation suggestions by section',
          'Before/after optimization comparison',
          'PDF export with detailed ATS report',
        ],
      },
    },

    faq: {
      h2: 'Frequently asked questions about ATS',
      questions: [
        {
          q: 'Does my resume pass ATS?',
          a: 'That\'s exactly what our tool checks. It analyzes your format, structure, and keywords to tell you if your resume is ATS-compatible. If not, you receive concrete advice to fix the issues.',
        },
        {
          q: 'Do recruiters really read all resumes?',
          a: 'No. In large companies, ATS does initial automatic filtering. Only resumes that pass this filter (often 20-30%) are read by a human. That\'s why ATS optimization has become essential.',
        },
        {
          q: 'Is ATS used in Europe?',
          a: 'Yes, massively. Large European groups (in France, Switzerland, Germany, UK, etc.) all use ATS: Workday, Taleo, SAP SuccessFactors, Greenhouse. SMEs increasingly use simple solutions like Lever or Recruitee.',
        },
        {
          q: 'Should I sacrifice design for ATS?',
          a: 'No, but you need to find a balance. A sober and clean resume can be both ATS-readable and pleasant for a human. Just avoid overly complex elements: graphics, multiple columns, decorative images.',
        },
        {
          q: 'Does a good ATS score guarantee an interview?',
          a: 'No. The ATS score lets you pass the first automatic filter, but then a human recruiter reads your resume. So you need to optimize for both ATS AND human reading: clarity, impact, concrete results.',
        },
      ],
    },

    disclaimer: {
      text: '💡 Analysis based on the most common ATS criteria in Europe. Each software may have specificities.',
    },
  },
};

export function SEOATSPage({ language, onStartAnalysis, onUpgradePremium }: SEOATSPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
              <Shield size={20} />
              <span className="text-sm">ATS Optimization</span>
            </div>
            
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
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-4">{t.tool.title}</h2>
            <p className="text-xl text-purple-100 mb-6">{t.tool.subtitle}</p>
            
            <button
              onClick={onStartAnalysis}
              className="px-8 py-4 bg-white text-purple-700 rounded-xl hover:bg-gray-100 transition-all inline-flex items-center gap-3 text-lg shadow-xl"
            >
              <Shield size={24} />
              <span>{t.tool.ctaButton}</span>
              <ArrowRight size={24} />
            </button>
            
            <p className="text-sm text-purple-100 mt-4">{t.tool.noCreditCard}</p>
          </motion.div>
        </div>
      </section>

      {/* What is ATS Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.whatIsATS.h2}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.whatIsATS.intro}</p>
            
            <div className="space-y-6">
              {t.whatIsATS.points.map((point, index) => (
                <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <point.icon size={24} className="text-purple-600 flex-shrink-0" />
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-8">{point.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What ATS Checks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.whatATSChecks.h2}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.whatATSChecks.intro}</p>
            
            <div className="space-y-8">
              {t.whatATSChecks.checks.map((check, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <check.icon size={32} className="text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl text-gray-900 mb-2">{check.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{check.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-purple-200 p-4 ml-12">
                    <div className="text-sm text-purple-700 mb-2">
                      💡 {language === 'fr' ? 'Conseils :' : 'Tips:'}
                    </div>
                    <ul className="space-y-2">
                      {check.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-purple-600">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4 text-center">{t.comparison.h2}</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">{t.comparison.intro}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Free */}
              <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 shadow-lg">
                <h3 className="text-2xl text-gray-900 mb-2">{t.comparison.free.title}</h3>
                <div className="text-4xl text-purple-600 mb-6">{t.comparison.free.price}</div>
                
                <ul className="space-y-3 mb-6">
                  {t.comparison.free.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={onStartAnalysis}
                  className="w-full py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-all"
                >
                  {language === 'fr' ? 'Analyser gratuitement' : 'Analyze for free'}
                </button>
              </div>

              {/* Premium */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-4 border-purple-400 p-8 shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm flex items-center gap-2">
                    <Crown size={16} />
                    {t.comparison.premium.badge}
                  </div>
                </div>
                
                <h3 className="text-2xl text-gray-900 mb-2">{t.comparison.premium.title}</h3>
                <div className="text-4xl text-purple-600 mb-6">{t.comparison.premium.price}</div>
                
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
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
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
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-12 text-center">{t.faq.h2}</h2>
            
            <div className="space-y-6">
              {t.faq.questions.map((item, index) => (
                <div key={index} className="bg-purple-50 rounded-xl border-2 border-purple-200 p-6 hover:border-purple-300 transition-all">
                  <h3 className="text-lg text-gray-900 mb-3 flex items-start gap-2">
                    <HelpCircle size={24} className="text-purple-600 flex-shrink-0" />
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
