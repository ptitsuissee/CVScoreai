import { TrendingUp, Target, BarChart3, Megaphone, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface AnalyseCVMarketingPageProps {
  language: 'fr' | 'en';
  onStartAnalysis: () => void;
}

const content = {
  fr: {
    // SEO H1
    h1: 'Analyse de CV marketing : améliore ton CV pour les métiers du marketing',
    intro: 'L\'analyse CV marketing vérifie si ton CV répond aux attentes spécifiques des recruteurs marketing. Mets en valeur tes campagnes, résultats mesurables et compétences digitales pour décrocher ton prochain poste en marketing.',
    
    // CTA principal
    cta: 'Analyser mon CV marketing',
    
    // Section 1
    whatTitle: 'Ce que les recruteurs marketing attendent',
    whatExpectations: [
      {
        icon: BarChart3,
        title: 'Résultats chiffrés',
        description: 'Les recruteurs marketing veulent voir des KPIs : taux de conversion, ROI, croissance d\'audience, leads générés, CA généré.',
      },
      {
        icon: Target,
        title: 'Campagnes concrètes',
        description: 'Décris les campagnes que tu as menées : canaux utilisés, budget géré, ciblage, stratégie déployée.',
      },
      {
        icon: Megaphone,
        title: 'Compétences digitales',
        description: 'SEO, SEA, social media, email marketing, automation, analytics : les outils et techniques que tu maîtrises.',
      },
      {
        icon: TrendingUp,
        title: 'Impact business',
        description: 'Montre comment ton travail a impacté le business : acquisition client, notoriété, engagement, ventes.',
      },
    ],
    
    // Section 2
    skillsTitle: 'Compétences marketing à mettre en avant',
    skillsCategories: [
      {
        category: 'Digital Marketing',
        skills: ['SEO / SEA', 'Google Ads', 'Social Media Ads', 'Marketing Automation', 'Email Marketing', 'Content Marketing'],
      },
      {
        category: 'Analytics & Data',
        skills: ['Google Analytics', 'Data Studio', 'A/B Testing', 'CRO', 'Tag Manager', 'KPI Tracking'],
      },
      {
        category: 'Outils & Plateformes',
        skills: ['HubSpot', 'Mailchimp', 'Hootsuite', 'Canva', 'WordPress', 'CRM (Salesforce, Pipedrive)'],
      },
      {
        category: 'Soft Skills',
        skills: ['Créativité', 'Analyse', 'Gestion de projet', 'Communication', 'Autonomie', 'Orienté résultats'],
      },
    ],
    
    // Section 3
    errorsTitle: 'Erreurs fréquentes sur un CV marketing',
    commonErrors: [
      {
        error: 'Aucun chiffre ni KPI',
        fix: 'Quantifie tout : "Augmenté le trafic de 45%" au lieu de "Augmenté le trafic".',
      },
      {
        error: 'Descriptions vagues',
        fix: 'Sois précis : "Gestion campagne Facebook Ads, budget 5K€/mois, CPL 12€" au lieu de "Gestion des réseaux sociaux".',
      },
      {
        error: 'Pas de contexte',
        fix: 'Donne le secteur, la taille d\'entreprise, le marché : "Startup B2B SaaS, 15 personnes, marché français".',
      },
      {
        error: 'Liste de tâches',
        fix: 'Montre l\'impact : "Créé et déployé stratégie SEO → +120% trafic organique en 6 mois".',
      },
      {
        error: 'CV trop créatif',
        fix: 'Le marketing aime la créativité, mais ton CV doit rester lisible ATS. Garde un format sobre.',
      },
      {
        error: 'Manque d\'outils techniques',
        fix: 'Liste les outils que tu maîtrises : Google Analytics, SEMrush, HubSpot, etc.',
      },
    ],
    
    // Exemples
    examplesTitle: 'Exemples de formulations pour un CV marketing',
    examples: [
      {
        bad: '❌ Gestion des réseaux sociaux',
        good: '✅ Gestion campagnes Instagram & LinkedIn, croissance +200% followers en 6 mois, engagement rate 4,2%',
      },
      {
        bad: '❌ Création de contenu',
        good: '✅ Création de 50+ articles SEO-optimisés, générant 15K visites/mois et 300 leads qualifiés',
      },
      {
        bad: '❌ Campagnes publicitaires',
        good: '✅ Pilotage Google Ads & Facebook Ads, budget 20K€/mois, ROAS 4,5x, acquisition 450 clients',
      },
    ],
    
    // FAQ SEO
    faqTitle: 'Questions fréquentes sur le CV marketing',
    faqs: [
      {
        question: 'Quelles compétences mettre sur un CV marketing ?',
        answer: 'Mets en avant : SEO/SEA, social media marketing, email marketing, analytics (Google Analytics), automation (HubSpot, Mailchimp), copywriting, gestion de projet. Adapte selon le poste : un poste "Content Marketing" valorise le SEO et le copywriting, un poste "Performance Marketing" valorise Google Ads et l\'analytics.',
      },
      {
        question: 'Comment montrer mes résultats marketing sur mon CV ?',
        answer: 'Utilise des KPIs marketing : taux de conversion, ROI/ROAS, croissance d\'audience, leads générés, coût par acquisition, trafic généré, engagement rate. Exemple : "Campagne emailing → 18% taux d\'ouverture, 450 leads, ROI 3,2x".',
      },
      {
        question: 'Dois-je avoir un CV créatif pour un poste marketing ?',
        answer: 'Non. Un CV sobre et structuré passe mieux les ATS. Garde ta créativité pour ton portfolio, tes projets ou ta lettre de motivation. Ton CV doit être lisible, clair, chiffré. La créativité se montre dans tes réalisations, pas dans le design du CV.',
      },
      {
        question: 'Combien de pages pour un CV marketing ?',
        answer: 'En Europe : 1 à 2 pages maximum. Si tu es junior (0-3 ans d\'expérience), 1 page suffit. Si tu es senior (5+ ans), 2 pages sont acceptables. Privilégie toujours la concision et les résultats plutôt que les descriptions longues.',
      },
    ],
  },
  en: {
    h1: 'Marketing Resume Analysis: Improve Your Resume for Marketing Careers',
    intro: 'Marketing resume analysis checks if your resume meets the specific expectations of marketing recruiters. Highlight your campaigns, measurable results, and digital skills to land your next marketing role.',
    
    cta: 'Analyze my Marketing Resume',
    
    whatTitle: 'What Marketing Recruiters Expect',
    whatExpectations: [
      {
        icon: BarChart3,
        title: 'Quantified Results',
        description: 'Marketing recruiters want to see KPIs: conversion rate, ROI, audience growth, leads generated, revenue driven.',
      },
      {
        icon: Target,
        title: 'Concrete Campaigns',
        description: 'Describe campaigns you\'ve run: channels used, budget managed, targeting, strategy deployed.',
      },
      {
        icon: Megaphone,
        title: 'Digital Skills',
        description: 'SEO, SEM, social media, email marketing, automation, analytics: the tools and techniques you master.',
      },
      {
        icon: TrendingUp,
        title: 'Business Impact',
        description: 'Show how your work impacted the business: customer acquisition, brand awareness, engagement, sales.',
      },
    ],
    
    skillsTitle: 'Marketing Skills to Highlight',
    skillsCategories: [
      {
        category: 'Digital Marketing',
        skills: ['SEO / SEM', 'Google Ads', 'Social Media Ads', 'Marketing Automation', 'Email Marketing', 'Content Marketing'],
      },
      {
        category: 'Analytics & Data',
        skills: ['Google Analytics', 'Data Studio', 'A/B Testing', 'CRO', 'Tag Manager', 'KPI Tracking'],
      },
      {
        category: 'Tools & Platforms',
        skills: ['HubSpot', 'Mailchimp', 'Hootsuite', 'Canva', 'WordPress', 'CRM (Salesforce, Pipedrive)'],
      },
      {
        category: 'Soft Skills',
        skills: ['Creativity', 'Analysis', 'Project Management', 'Communication', 'Autonomy', 'Results-Driven'],
      },
    ],
    
    errorsTitle: 'Common Mistakes on Marketing Resumes',
    commonErrors: [
      {
        error: 'No numbers or KPIs',
        fix: 'Quantify everything: "Increased traffic by 45%" instead of "Increased traffic".',
      },
      {
        error: 'Vague descriptions',
        fix: 'Be specific: "Managed Facebook Ads campaign, €5K/month budget, €12 CPL" instead of "Managed social media".',
      },
      {
        error: 'No context',
        fix: 'Give sector, company size, market: "B2B SaaS startup, 15 people, French market".',
      },
      {
        error: 'Task list',
        fix: 'Show impact: "Created and deployed SEO strategy → +120% organic traffic in 6 months".',
      },
      {
        error: 'Overly creative resume',
        fix: 'Marketing loves creativity, but your resume must be ATS-readable. Keep a sober format.',
      },
      {
        error: 'Lack of technical tools',
        fix: 'List tools you master: Google Analytics, SEMrush, HubSpot, etc.',
      },
    ],
    
    examplesTitle: 'Marketing Resume Wording Examples',
    examples: [
      {
        bad: '❌ Social media management',
        good: '✅ Managed Instagram & LinkedIn campaigns, +200% follower growth in 6 months, 4.2% engagement rate',
      },
      {
        bad: '❌ Content creation',
        good: '✅ Created 50+ SEO-optimized articles, generating 15K visits/month and 300 qualified leads',
      },
      {
        bad: '❌ Advertising campaigns',
        good: '✅ Managed Google Ads & Facebook Ads, €20K/month budget, 4.5x ROAS, acquired 450 customers',
      },
    ],
    
    faqTitle: 'Frequently Asked Questions about Marketing Resumes',
    faqs: [
      {
        question: 'What skills to include on a marketing resume?',
        answer: 'Highlight: SEO/SEM, social media marketing, email marketing, analytics (Google Analytics), automation (HubSpot, Mailchimp), copywriting, project management. Adapt to the role: a "Content Marketing" position values SEO and copywriting, a "Performance Marketing" position values Google Ads and analytics.',
      },
      {
        question: 'How to show my marketing results on my resume?',
        answer: 'Use marketing KPIs: conversion rate, ROI/ROAS, audience growth, leads generated, cost per acquisition, traffic generated, engagement rate. Example: "Email campaign → 18% open rate, 450 leads, 3.2x ROI".',
      },
      {
        question: 'Should I have a creative resume for a marketing position?',
        answer: 'No. A sober and structured resume passes ATS better. Save your creativity for your portfolio, projects, or cover letter. Your resume should be readable, clear, quantified. Creativity shows in your achievements, not in the resume design.',
      },
      {
        question: 'How many pages for a marketing resume?',
        answer: 'In Europe: 1 to 2 pages maximum. If you\'re junior (0-3 years experience), 1 page is enough. If you\'re senior (5+ years), 2 pages are acceptable. Always prioritize conciseness and results over long descriptions.',
      },
    ],
  },
};

export function AnalyseCVMarketingPage({ language, onStartAnalysis }: AnalyseCVMarketingPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero SEO */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
              <TrendingUp size={16} />
              <span className="text-sm">Marketing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              {t.h1}
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t.intro}
            </p>
            <button
              onClick={onStartAnalysis}
              className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20 inline-flex items-center gap-2"
            >
              {t.cta}
              <TrendingUp size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: Ce que les recruteurs attendent */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            {t.whatTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.whatExpectations.map((expectation, index) => (
              <div key={index} className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <expectation.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {expectation.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {expectation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Compétences à mettre en avant */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            {t.skillsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.skillsCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <h3 className="text-xl text-gray-900 mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Erreurs fréquentes */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            {t.errorsTitle}
          </h2>
          <div className="space-y-6">
            {t.commonErrors.map((item, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h3 className="text-lg text-gray-900 mb-2">
                  ❌ {item.error}
                </h3>
                <p className="text-gray-700">
                  <span className="text-green-700">✅ Solution :</span> {item.fix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemples de formulations */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            {t.examplesTitle}
          </h2>
          <div className="space-y-6">
            {t.examples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <p className="text-red-600 mb-2">{example.bad}</p>
                <p className="text-green-600">{example.good}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            {t.faqTitle}
          </h2>
          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
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
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-6">
            {language === 'fr' 
              ? 'Optimise ton CV marketing maintenant' 
              : 'Optimize your marketing resume now'}
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            {language === 'fr' 
              ? 'Analyse gratuite avec recommandations spécifiques marketing.' 
              : 'Free analysis with marketing-specific recommendations.'}
          </p>
          <button
            onClick={onStartAnalysis}
            className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:shadow-xl transition-all"
          >
            {t.cta}
          </button>
        </div>
      </section>
    </div>
  );
}
