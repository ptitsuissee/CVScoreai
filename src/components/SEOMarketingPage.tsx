import { TrendingUp, CheckCircle, Zap, Target, BarChart, Users, ArrowRight, HelpCircle, Crown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface SEOMarketingPageProps {
  language: 'fr' | 'en';
  onStartAnalysis: () => void;
  onUpgradePremium: () => void;
}

const content = {
  fr: {
    title: 'Analyse CV Marketing : améliore ton CV pour les métiers du marketing',
    
    hero: {
      h1: 'Analyse CV Marketing : améliore ton CV pour les métiers du marketing',
      intro: 'Le secteur du marketing est extrêmement compétitif en Europe. Les recruteurs marketing recherchent des profils orientés résultats, capables de prouver leur impact par des chiffres concrets. Qu\'il s\'agisse de marketing digital, brand management, growth marketing ou communication, ton CV doit démontrer ta capacité à générer du ROI, piloter des campagnes et analyser des données. Notre IA analyse ton CV selon les critères spécifiques des recruteurs marketing européens.',
    },

    tool: {
      title: 'Analyse ton CV Marketing',
      subtitle: 'Vérifie si ton CV marketing se démarque de la concurrence',
      ctaButton: 'Analyser mon CV marketing',
      noCreditCard: 'Sans inscription · Résultat en 30 secondes',
    },

    expectations: {
      h2: 'Ce que les recruteurs marketing recherchent',
      intro: 'Le marketing évolue rapidement. Les attentes des recruteurs sont précises.',
      points: [
        {
          icon: BarChart,
          title: 'Des résultats chiffrés',
          text: 'Les recruteurs veulent voir des KPI concrets : taux de conversion, ROI des campagnes, croissance du trafic, nombre de leads générés, budget géré. Un CV marketing sans chiffres est un CV invisible.',
        },
        {
          icon: Target,
          title: 'Une maîtrise des outils',
          text: 'Google Analytics, SEMrush, HubSpot, Mailchimp, Meta Ads Manager, LinkedIn Campaign Manager, Canva, Figma... Les outils évoluent vite. Mentionne ceux que tu maîtrises réellement, avec ton niveau d\'expertise.',
        },
        {
          icon: TrendingUp,
          title: 'Une orientation data',
          text: 'Le marketing moderne est data-driven. Les recruteurs cherchent des profils capables d\'analyser des données, de comprendre les métriques, d\'optimiser les performances, et de prendre des décisions basées sur des insights.',
        },
        {
          icon: Users,
          title: 'Des soft skills marketing',
          text: 'Créativité, communication, gestion de projet, travail d\'équipe, autonomie, capacité d\'adaptation. Ces compétences doivent être démontrées par des exemples concrets, pas juste listées.',
        },
      ],
    },

    whatChecks: {
      h2: 'Ce que l\'analyse vérifie pour le marketing',
      intro: 'Notre IA examine ton CV selon 4 critères essentiels aux métiers du marketing.',
      checks: [
        {
          title: 'Compétences clés du marketing',
          description: 'Présence et qualité des compétences marketing essentielles',
          items: [
            'Marketing digital : SEO, SEA, Social Ads, Content Marketing',
            'Analytics : Google Analytics, Data Studio, tracking, A/B testing',
            'Automation : HubSpot, Mailchimp, marketing automation',
            'Communication : rédaction, storytelling, brand voice',
            'Gestion de projet : campagnes, budget, timeline, coordination',
          ],
        },
        {
          title: 'Impact des expériences',
          description: 'Démonstration de ton impact sur les résultats business',
          items: [
            'Utilisation de verbes d\'action forts (Piloté, Développé, Optimisé, Créé)',
            'Présence de KPI et résultats chiffrés (+30% trafic, 50K€ budget, 1000 leads)',
            'Description claire du contexte, actions, et résultats (méthode CAR)',
            'Cohérence entre le poste et les réalisations présentées',
          ],
        },
        {
          title: 'Mots-clés marketing',
          description: 'Présence des termes techniques recherchés par les ATS',
          items: [
            'Termes métier : inbound marketing, lead generation, funnel, attribution',
            'Canaux : SEO, SEA, email marketing, social media, content marketing',
            'Outils : Google Ads, Meta Business Suite, Analytics, CRM',
            'Méthodologies : growth hacking, marketing automation, ABM',
          ],
        },
        {
          title: 'Structure du CV marketing',
          description: 'Organisation et lisibilité adaptées aux recruteurs marketing',
          items: [
            'Sections claires : Expérience, Compétences, Formation, Réalisations',
            'Hiérarchie visuelle : titres, sous-titres, bullet points',
            'Concision : 1 page pour junior, max 2 pages pour senior',
            'Portfolio ou lien LinkedIn professionnel mentionné',
          ],
        },
      ],
    },

    tips: {
      h2: 'Conseils CV marketing',
      intro: 'Exemples concrets pour renforcer ton CV marketing.',
      examples: [
        {
          bad: '❌ Responsable des réseaux sociaux de l\'entreprise',
          good: '✅ Piloté la stratégie social media (LinkedIn, Instagram) : +150% d\'engagement en 6 mois, 10K nouveaux followers',
        },
        {
          bad: '❌ Gestion des campagnes Google Ads',
          good: '✅ Optimisé 15 campagnes Google Ads (budget 50K€/mois) : réduction CPA de 40%, génération de 2000 leads qualifiés',
        },
        {
          bad: '❌ Création de contenu marketing',
          good: '✅ Créé et publié 50+ articles SEO : croissance du trafic organique de +200% (de 10K à 30K visiteurs/mois)',
        },
        {
          bad: '❌ Analyse des performances marketing',
          good: '✅ Analysé les performances de 20+ campagnes via Google Analytics : identifié 3 axes d\'optimisation générant +25% de ROI',
        },
      ],
    },

    comparison: {
      h2: 'Analyse CV Marketing : Gratuit vs Premium',
      intro: 'Deux niveaux d\'analyse pour les profils marketing.',
      free: {
        title: 'Analyse Gratuite',
        price: '0€',
        features: [
          'Score global adapté au marketing',
          'Vérification des compétences marketing de base',
          'Détection des résultats chiffrés',
          'Analyse de la structure',
          'Conseils généraux',
        ],
      },
      premium: {
        title: 'Analyse Premium Marketing',
        price: '9€',
        badge: 'Pour se démarquer',
        features: [
          'Tout de l\'analyse gratuite',
          'Mots-clés marketing manquants par spécialité (digital, brand, growth)',
          'Feedback détaillé sur chaque expérience',
          'Conseils d\'optimisation par canal marketing',
          'Benchmarking avec profils marketing similaires',
          'Export PDF rapport marketing complet',
        ],
      },
    },

    faq: {
      h2: 'Questions fréquentes - CV Marketing',
      questions: [
        {
          q: 'Dois-je mentionner tous les outils marketing que je connais ?',
          a: 'Non, concentre-toi sur les outils pertinents pour le poste visé et ceux que tu maîtrises vraiment. Mieux vaut 5 outils bien maîtrisés que 20 outils à peine utilisés. Privilégie les outils demandés dans l\'offre d\'emploi.',
        },
        {
          q: 'Comment valoriser mon expérience en marketing digital ?',
          a: 'Chiffre tout ce qui est mesurable : taux de conversion, ROI, croissance du trafic, nombre de leads, engagement social media, taux d\'ouverture email. Utilise la méthode CAR : Contexte, Action, Résultat.',
        },
        {
          q: 'Faut-il un CV différent pour chaque spécialité marketing ?',
          a: 'Idéalement oui. Un CV pour du SEO ne met pas en avant les mêmes compétences qu\'un CV pour du brand management. Adapte ton CV à chaque candidature en mettant en avant les expériences et compétences les plus pertinentes.',
        },
        {
          q: 'Dois-je inclure un portfolio dans mon CV marketing ?',
          a: 'Oui, c\'est fortement recommandé. Ajoute un lien vers ton portfolio (Notion, Behance, site perso) ou vers des campagnes que tu as pilotées. Les recruteurs marketing apprécient de voir des exemples concrets de ton travail.',
        },
        {
          q: 'Les certifications marketing sont-elles importantes ?',
          a: 'Oui, surtout en marketing digital. Les certifications Google (Ads, Analytics), HubSpot, Meta Blueprint, ou LinkedIn Marketing sont très valorisées. Crée une section dédiée si tu en as plusieurs.',
        },
      ],
    },

    disclaimer: {
      text: '💡 Analyse basée sur les critères des recruteurs marketing en Europe. Adapte toujours ton CV au poste visé.',
    },
  },

  en: {
    title: 'Marketing Resume Analysis: Improve your marketing resume',
    
    hero: {
      h1: 'Marketing Resume Analysis: Improve your marketing resume',
      intro: 'The marketing sector is extremely competitive in Europe. Marketing recruiters seek results-oriented profiles, capable of proving their impact with concrete numbers. Whether digital marketing, brand management, growth marketing or communication, your resume must demonstrate your ability to generate ROI, manage campaigns and analyze data. Our AI analyzes your resume according to specific criteria of European marketing recruiters.',
    },

    tool: {
      title: 'Analyze your Marketing resume',
      subtitle: 'Check if your marketing resume stands out from the competition',
      ctaButton: 'Analyze my marketing resume',
      noCreditCard: 'No registration · Results in 30 seconds',
    },

    expectations: {
      h2: 'What marketing recruiters look for',
      intro: 'Marketing evolves rapidly. Recruiters\' expectations are precise.',
      points: [
        {
          icon: BarChart,
          title: 'Quantified results',
          text: 'Recruiters want to see concrete KPIs: conversion rate, campaign ROI, traffic growth, leads generated, budget managed. A marketing resume without numbers is an invisible resume.',
        },
        {
          icon: Target,
          title: 'Tool proficiency',
          text: 'Google Analytics, SEMrush, HubSpot, Mailchimp, Meta Ads Manager, LinkedIn Campaign Manager, Canva, Figma... Tools evolve quickly. Mention those you truly master, with your expertise level.',
        },
        {
          icon: TrendingUp,
          title: 'Data orientation',
          text: 'Modern marketing is data-driven. Recruiters seek profiles capable of analyzing data, understanding metrics, optimizing performance, and making decisions based on insights.',
        },
        {
          icon: Users,
          title: 'Marketing soft skills',
          text: 'Creativity, communication, project management, teamwork, autonomy, adaptability. These skills must be demonstrated through concrete examples, not just listed.',
        },
      ],
    },

    whatChecks: {
      h2: 'What the analysis checks for marketing',
      intro: 'Our AI examines your resume according to 4 essential marketing criteria.',
      checks: [
        {
          title: 'Key marketing skills',
          description: 'Presence and quality of essential marketing skills',
          items: [
            'Digital marketing: SEO, SEA, Social Ads, Content Marketing',
            'Analytics: Google Analytics, Data Studio, tracking, A/B testing',
            'Automation: HubSpot, Mailchimp, marketing automation',
            'Communication: writing, storytelling, brand voice',
            'Project management: campaigns, budget, timeline, coordination',
          ],
        },
        {
          title: 'Experience impact',
          description: 'Demonstration of your impact on business results',
          items: [
            'Use of strong action verbs (Led, Developed, Optimized, Created)',
            'Presence of KPIs and quantified results (+30% traffic, €50K budget, 1000 leads)',
            'Clear description of context, actions, and results (CAR method)',
            'Consistency between position and presented achievements',
          ],
        },
        {
          title: 'Marketing keywords',
          description: 'Presence of technical terms searched by ATS',
          items: [
            'Industry terms: inbound marketing, lead generation, funnel, attribution',
            'Channels: SEO, SEA, email marketing, social media, content marketing',
            'Tools: Google Ads, Meta Business Suite, Analytics, CRM',
            'Methodologies: growth hacking, marketing automation, ABM',
          ],
        },
        {
          title: 'Marketing resume structure',
          description: 'Organization and readability adapted to marketing recruiters',
          items: [
            'Clear sections: Experience, Skills, Education, Achievements',
            'Visual hierarchy: titles, subtitles, bullet points',
            'Conciseness: 1 page for junior, max 2 pages for senior',
            'Portfolio or professional LinkedIn link mentioned',
          ],
        },
      ],
    },

    tips: {
      h2: 'Marketing resume tips',
      intro: 'Concrete examples to strengthen your marketing resume.',
      examples: [
        {
          bad: '❌ Responsible for company social media',
          good: '✅ Led social media strategy (LinkedIn, Instagram): +150% engagement in 6 months, 10K new followers',
        },
        {
          bad: '❌ Managed Google Ads campaigns',
          good: '✅ Optimized 15 Google Ads campaigns (€50K/month budget): 40% CPA reduction, 2000 qualified leads generated',
        },
        {
          bad: '❌ Created marketing content',
          good: '✅ Created and published 50+ SEO articles: +200% organic traffic growth (from 10K to 30K visitors/month)',
        },
        {
          bad: '❌ Analyzed marketing performance',
          good: '✅ Analyzed 20+ campaign performance via Google Analytics: identified 3 optimization axes generating +25% ROI',
        },
      ],
    },

    comparison: {
      h2: 'Marketing Resume Analysis: Free vs Premium',
      intro: 'Two levels of analysis for marketing profiles.',
      free: {
        title: 'Free Analysis',
        price: '€0',
        features: [
          'Overall score adapted to marketing',
          'Basic marketing skills verification',
          'Quantified results detection',
          'Structure analysis',
          'General advice',
        ],
      },
      premium: {
        title: 'Premium Marketing Analysis',
        price: '€9',
        badge: 'To stand out',
        features: [
          'Everything from free analysis',
          'Missing marketing keywords by specialty (digital, brand, growth)',
          'Detailed feedback on each experience',
          'Optimization advice by marketing channel',
          'Benchmarking with similar marketing profiles',
          'PDF export complete marketing report',
        ],
      },
    },

    faq: {
      h2: 'Frequently asked questions - Marketing resume',
      questions: [
        {
          q: 'Should I mention all marketing tools I know?',
          a: 'No, focus on tools relevant to the target position and those you truly master. Better to have 5 well-mastered tools than 20 barely used tools. Prioritize tools requested in the job posting.',
        },
        {
          q: 'How to showcase my digital marketing experience?',
          a: 'Quantify everything measurable: conversion rate, ROI, traffic growth, leads number, social media engagement, email open rate. Use the CAR method: Context, Action, Result.',
        },
        {
          q: 'Do I need a different resume for each marketing specialty?',
          a: 'Ideally yes. An SEO resume doesn\'t highlight the same skills as a brand management resume. Adapt your resume to each application by highlighting the most relevant experiences and skills.',
        },
        {
          q: 'Should I include a portfolio in my marketing resume?',
          a: 'Yes, it\'s highly recommended. Add a link to your portfolio (Notion, Behance, personal website) or campaigns you\'ve led. Marketing recruiters appreciate seeing concrete examples of your work.',
        },
        {
          q: 'Are marketing certifications important?',
          a: 'Yes, especially in digital marketing. Google certifications (Ads, Analytics), HubSpot, Meta Blueprint, or LinkedIn Marketing are highly valued. Create a dedicated section if you have several.',
        },
      ],
    },

    disclaimer: {
      text: '💡 Analysis based on marketing recruiters\' criteria in Europe. Always adapt your resume to the target position.',
    },
  },
};

export function SEOMarketingPage({ language, onStartAnalysis, onUpgradePremium }: SEOMarketingPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
              <Sparkles size={20} />
              <span className="text-sm">Marketing</span>
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
            className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-4">{t.tool.title}</h2>
            <p className="text-xl text-orange-100 mb-6">{t.tool.subtitle}</p>
            
            <button
              onClick={onStartAnalysis}
              className="px-8 py-4 bg-white text-orange-700 rounded-xl hover:bg-gray-100 transition-all inline-flex items-center gap-3 text-lg shadow-xl"
            >
              <TrendingUp size={24} />
              <span>{t.tool.ctaButton}</span>
              <ArrowRight size={24} />
            </button>
            
            <p className="text-sm text-orange-100 mt-4">{t.tool.noCreditCard}</p>
          </motion.div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.expectations.h2}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.expectations.intro}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {t.expectations.points.map((point, index) => (
                <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md hover:border-orange-300 transition-all">
                  <point.icon size={32} className="text-orange-600 mb-4" />
                  <h3 className="text-lg text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Checks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.whatChecks.h2}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.whatChecks.intro}</p>
            
            <div className="space-y-6">
              {t.whatChecks.checks.map((check, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200 p-6">
                  <h3 className="text-xl text-gray-900 mb-2">{check.title}</h3>
                  <p className="text-gray-600 mb-4">{check.description}</p>
                  
                  <ul className="space-y-2">
                    {check.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.tips.h2}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.tips.intro}</p>
            
            <div className="space-y-4">
              {t.tips.examples.map((example, index) => (
                <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <div className="text-red-600 mb-2">{example.bad}</div>
                  <div className="text-green-600">{example.good}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4 text-center">{t.comparison.h2}</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">{t.comparison.intro}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Free */}
              <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 shadow-lg">
                <h3 className="text-2xl text-gray-900 mb-2">{t.comparison.free.title}</h3>
                <div className="text-4xl text-orange-600 mb-6">{t.comparison.free.price}</div>
                
                <ul className="space-y-3 mb-6">
                  {t.comparison.free.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
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
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-4 border-orange-400 p-8 shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full text-sm flex items-center gap-2">
                    <Crown size={16} />
                    {t.comparison.premium.badge}
                  </div>
                </div>
                
                <h3 className="text-2xl text-gray-900 mb-2">{t.comparison.premium.title}</h3>
                <div className="text-4xl text-orange-600 mb-6">{t.comparison.premium.price}</div>
                
                <ul className="space-y-3 mb-6">
                  {t.comparison.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={onUpgradePremium}
                  className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
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
                <div key={index} className="bg-orange-50 rounded-xl border-2 border-orange-200 p-6 hover:border-orange-300 transition-all">
                  <h3 className="text-lg text-gray-900 mb-3 flex items-start gap-2">
                    <HelpCircle size={24} className="text-orange-600 flex-shrink-0" />
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
