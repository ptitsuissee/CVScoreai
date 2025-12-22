import { ArrowRight, CheckCircle, Zap, Shield, Globe, Languages, FileText, Target, Download, Sparkles, Crown } from 'lucide-react';
import { motion } from 'motion/react';

interface SEOLandingPageProps {
  language: 'fr' | 'en';
  onNavigate: (page: string) => void;
}

const content = {
  fr: {
    // Hero
    hero: {
      title: 'Analyse ton CV avec l\'IA et améliore tes chances d\'entretien',
      subtitle: 'Score instantané · Optimisation ATS · Compatible Europe',
      cta: 'Analyser mon CV gratuitement',
      trustBadge: '2000+ CV analysés',
    },
    
    // Comment ça marche
    howItWorks: {
      title: 'Comment ça marche ?',
      subtitle: '3 étapes simples pour améliorer ton CV',
      steps: [
        {
          number: '1',
          title: 'Colle ton CV',
          description: 'Copie-colle le contenu de ton CV dans l\'outil',
        },
        {
          number: '2',
          title: 'L\'IA analyse',
          description: 'Notre IA évalue clarté, impact, structure et compatibilité ATS',
        },
        {
          number: '3',
          title: 'Reçois ton score et des conseils',
          description: 'Obtiens un score sur 100 et des recommandations concrètes',
        },
      ],
    },
    
    // Avantages
    benefits: {
      title: 'Pourquoi utiliser CVScore.ai ?',
      items: [
        {
          title: 'Analyse rapide',
          description: 'Résultat en moins de 30 secondes',
          icon: Zap,
        },
        {
          title: 'Compatible ATS',
          description: 'Optimise ton CV pour les systèmes de recrutement automatisés',
          icon: Shield,
        },
        {
          title: 'Adapté aux recruteurs européens',
          description: 'Conçu pour les standards de recrutement français, suisses et européens',
          icon: Globe,
        },
        {
          title: 'Disponible en plusieurs langues',
          description: 'Interface en français et anglais',
          icon: Languages,
        },
      ],
    },
    
    // Gratuit vs Premium
    comparison: {
      title: 'Gratuit vs Premium',
      subtitle: 'Choisis la formule qui te correspond',
      free: {
        title: 'Gratuit',
        price: '0 €',
        features: [
          'Score global sur 100',
          '4 sous-scores détaillés',
          'Résumé rapide',
          'Conseils généraux',
        ],
      },
      premium: {
        title: 'Premium',
        price: 'À partir de 9,99 €',
        features: [
          'Analyse ligne par ligne',
          'Optimisation ATS avancée',
          'Conseils personnalisés',
          'Export PDF professionnel',
          'Analyses illimitées',
        ],
      },
      cta: 'Essayer Premium',
    },
    
    // FAQ SEO
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          question: 'L\'analyse est-elle fiable ?',
          answer: 'Oui. Notre IA est entraînée sur des milliers de CV validés par des recruteurs européens. Elle évalue la clarté, l\'impact, la structure et la compatibilité ATS selon les standards actuels.',
        },
        {
          question: 'L\'IA remplace-t-elle un recruteur ?',
          answer: 'Non. CVScore.ai est un outil d\'aide à la préparation. Il t\'aide à optimiser ton CV avant de le soumettre, mais ne remplace pas l\'évaluation humaine d\'un recruteur.',
        },
        {
          question: 'Puis-je utiliser plusieurs CV ?',
          answer: 'Oui ! En version gratuite, tu peux analyser autant de CV que tu veux. En Premium, tu bénéficies d\'un historique illimité et d\'exports PDF.',
        },
        {
          question: 'Mes données sont-elles protégées ?',
          answer: 'Absolument. Nous ne stockons pas le contenu de ton CV de manière permanente. Les analyses sont temporaires et tes données ne sont jamais revendues.',
        },
        {
          question: 'L\'outil fonctionne-t-il pour tous les secteurs ?',
          answer: 'Oui. CVScore.ai analyse les CV de tous secteurs : tech, marketing, finance, santé, éducation, etc. Les conseils sont adaptés au métier ciblé.',
        },
      ],
    },
    
    // Confiance
    trust: {
      title: 'Une plateforme de confiance',
      items: [
        'Paiement sécurisé via Stripe',
        'Données non revendues',
        'Analyse IA transparente',
        'Support réactif',
      ],
    },
    
    // CTA Final
    finalCTA: {
      title: 'Prêt à améliorer ton CV ?',
      subtitle: 'Commence gratuitement et découvre ton score',
      cta: 'Analyser mon CV maintenant',
    },
  },
  en: {
    // Hero
    hero: {
      title: 'Analyze your resume with AI and improve your interview chances',
      subtitle: 'Instant score · ATS optimization · Europe-compatible',
      cta: 'Analyze my resume for free',
      trustBadge: '2000+ resumes analyzed',
    },
    
    // Comment ça marche
    howItWorks: {
      title: 'How does it work?',
      subtitle: '3 simple steps to improve your resume',
      steps: [
        {
          number: '1',
          title: 'Paste your resume',
          description: 'Copy-paste your resume content into the tool',
        },
        {
          number: '2',
          title: 'AI analyzes',
          description: 'Our AI evaluates clarity, impact, structure and ATS compatibility',
        },
        {
          number: '3',
          title: 'Receive your score and advice',
          description: 'Get a score out of 100 and concrete recommendations',
        },
      ],
    },
    
    // Avantages
    benefits: {
      title: 'Why use CVScore.ai?',
      items: [
        {
          title: 'Fast analysis',
          description: 'Results in less than 30 seconds',
          icon: Zap,
        },
        {
          title: 'ATS compatible',
          description: 'Optimize your resume for automated recruitment systems',
          icon: Shield,
        },
        {
          title: 'Adapted to European recruiters',
          description: 'Designed for French, Swiss and European recruitment standards',
          icon: Globe,
        },
        {
          title: 'Available in multiple languages',
          description: 'Interface in French and English',
          icon: Languages,
        },
      ],
    },
    
    // Gratuit vs Premium
    comparison: {
      title: 'Free vs Premium',
      subtitle: 'Choose the plan that fits your needs',
      free: {
        title: 'Free',
        price: '$0',
        features: [
          'Overall score out of 100',
          '4 detailed sub-scores',
          'Quick summary',
          'General advice',
        ],
      },
      premium: {
        title: 'Premium',
        price: 'From $9.99',
        features: [
          'Line-by-line analysis',
          'Advanced ATS optimization',
          'Personalized advice',
          'Professional PDF export',
          'Unlimited analyses',
        ],
      },
      cta: 'Try Premium',
    },
    
    // FAQ SEO
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Is the analysis reliable?',
          answer: 'Yes. Our AI is trained on thousands of resumes validated by European recruiters. It evaluates clarity, impact, structure and ATS compatibility according to current standards.',
        },
        {
          question: 'Does AI replace a recruiter?',
          answer: 'No. CVScore.ai is a preparation tool. It helps you optimize your resume before submitting it, but does not replace the human evaluation of a recruiter.',
        },
        {
          question: 'Can I use multiple resumes?',
          answer: 'Yes! In free version, you can analyze as many resumes as you want. In Premium, you get unlimited history and PDF exports.',
        },
        {
          question: 'Is my data protected?',
          answer: 'Absolutely. We do not permanently store your resume content. Analyses are temporary and your data is never resold.',
        },
        {
          question: 'Does the tool work for all sectors?',
          answer: 'Yes. CVScore.ai analyzes resumes from all sectors: tech, marketing, finance, health, education, etc. Advice is adapted to the target job.',
        },
      ],
    },
    
    // Confiance
    trust: {
      title: 'A trusted platform',
      items: [
        'Secure payment via Stripe',
        'Data not resold',
        'Transparent AI analysis',
        'Responsive support',
      ],
    },
    
    // CTA Final
    finalCTA: {
      title: 'Ready to improve your resume?',
      subtitle: 'Start for free and discover your score',
      cta: 'Analyze my resume now',
    },
  },
};

export function SEOLandingPage({ language, onNavigate }: SEOLandingPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 via-purple-50 to-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm mb-8 border-2 border-green-200">
              <CheckCircle size={16} />
              <span>{t.hero.trustBadge}</span>
            </div>

            {/* Main Title (H1 for SEO) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              {t.hero.subtitle}
            </p>

            {/* CTA Principal */}
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all text-lg inline-flex items-center gap-3 group"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.howItWorks.title}</h2>
            <p className="text-xl text-gray-600">{t.howItWorks.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-xl">
                  {step.number}
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.benefits.title}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gratuit vs Premium */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.comparison.title}</h2>
            <p className="text-xl text-gray-600">{t.comparison.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 border-gray-300 p-8 shadow-lg"
            >
              <h3 className="text-2xl text-gray-900 mb-2">{t.comparison.free.title}</h3>
              <div className="text-4xl text-gray-900 mb-6">{t.comparison.free.price}</div>
              <ul className="space-y-3 mb-8">
                {t.comparison.free.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('home')}
                className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all"
              >
                {t.hero.cta}
              </button>
            </motion.div>

            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border-4 border-purple-400 p-8 shadow-2xl relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1 rounded-full text-sm flex items-center gap-1">
                  <Crown size={14} />
                  <span>Premium</span>
                </div>
              </div>
              
              <h3 className="text-2xl text-gray-900 mb-2">{t.comparison.premium.title}</h3>
              <div className="text-4xl text-purple-700 mb-6">{t.comparison.premium.price}</div>
              <ul className="space-y-3 mb-8">
                {t.comparison.premium.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('pricing')}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Crown size={20} />
                <span>{t.comparison.cta}</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.faq.title}</h2>
          </motion.div>

          <div className="space-y-6">
            {t.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md"
              >
                <h3 className="text-xl text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-6">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Confiance */}
      <section className="py-16 bg-blue-50 border-y-2 border-blue-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl text-gray-900 mb-8">{t.trust.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.trust.items.map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-2 bg-white rounded-lg px-4 py-3 border-2 border-blue-200">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-4">{t.finalCTA.title}</h2>
            <p className="text-xl text-blue-100 mb-8">{t.finalCTA.subtitle}</p>
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-4 bg-white text-purple-700 rounded-xl hover:bg-gray-100 transition-all text-lg inline-flex items-center gap-3 shadow-2xl group"
            >
              <Sparkles size={24} />
              <span>{t.finalCTA.cta}</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
