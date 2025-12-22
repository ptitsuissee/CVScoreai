import { SEOTemplatePage } from './SEOTemplatePage';

interface SEOMarketingSuisseProps {
  language: 'fr' | 'en';
  onStartAnalysis: () => void;
}

const content = {
  fr: {
    title: 'Analyse CV Marketing Suisse | CVScore.ai',
    h1: 'Analyse ton CV Marketing pour le marché suisse 🇨🇭',
    introduction: 'Le marché suisse du marketing recherche des profils bilingues (FR/DE/EN) avec une forte orientation data et ROI. Notre IA analyse ton CV selon les critères spécifiques des recruteurs suisses et t\'aide à optimiser tes chances.',
    whyUseful: {
      title: 'Pourquoi cette analyse est spécialement utile pour le marché suisse',
      points: [
        'Vérifie la présence de compétences multilingues (français, allemand, anglais)',
        'Évalue la structure selon les standards suisses (sobre, précis, factuel)',
        'Identifie les mots-clés ATS utilisés par les entreprises suisses du secteur marketing',
        'Compare ton CV aux attentes salariales et formats locaux',
      ],
    },
    faq: [
      {
        question: 'Mon CV doit-il être bilingue pour le marché suisse ?',
        answer: 'Ce n\'est pas obligatoire, mais fortement recommandé. Beaucoup d\'entreprises suisses opèrent dans plusieurs langues. L\'outil CVScore.ai vérifie si ton CV mentionne clairement tes compétences linguistiques.',
      },
      {
        question: 'Quelles compétences marketing sont les plus recherchées en Suisse ?',
        answer: 'Les recruteurs suisses privilégient : marketing digital, analyse de données (Google Analytics, etc.), gestion de campagnes multicanales, et maîtrise des outils de marketing automation. Notre analyse identifie si ces compétences sont présentes et bien mises en valeur.',
      },
      {
        question: 'Le format de CV suisse est-il différent du format français ?',
        answer: 'Oui, légèrement. Le CV suisse est généralement plus sobre, sans photo obligatoire, et met l\'accent sur les résultats chiffrés. CVScore.ai t\'aide à adapter ton CV à ces standards.',
      },
    ],
  },
  en: {
    title: 'Marketing Resume Analysis Switzerland | CVScore.ai',
    h1: 'Analyze your Marketing resume for the Swiss market 🇨🇭',
    introduction: 'The Swiss marketing market seeks bilingual profiles (FR/DE/EN) with a strong focus on data and ROI. Our AI analyzes your resume according to Swiss recruiters\' specific criteria and helps you optimize your chances.',
    whyUseful: {
      title: 'Why this analysis is especially useful for the Swiss market',
      points: [
        'Checks for multilingual skills (French, German, English)',
        'Evaluates structure according to Swiss standards (sober, precise, factual)',
        'Identifies ATS keywords used by Swiss marketing companies',
        'Compares your resume to local salary expectations and formats',
      ],
    },
    faq: [
      {
        question: 'Should my resume be bilingual for the Swiss market?',
        answer: 'It\'s not mandatory, but highly recommended. Many Swiss companies operate in multiple languages. CVScore.ai checks if your resume clearly mentions your language skills.',
      },
      {
        question: 'What marketing skills are most sought after in Switzerland?',
        answer: 'Swiss recruiters prioritize: digital marketing, data analysis (Google Analytics, etc.), multichannel campaign management, and marketing automation tools proficiency. Our analysis identifies if these skills are present and well highlighted.',
      },
      {
        question: 'Is the Swiss resume format different from the French format?',
        answer: 'Yes, slightly. The Swiss resume is generally more sober, photo not mandatory, and emphasizes quantified results. CVScore.ai helps you adapt your resume to these standards.',
      },
    ],
  },
};

export function SEOMarketingSuisse({ language, onStartAnalysis }: SEOMarketingSuisseProps) {
  return (
    <SEOTemplatePage
      language={language}
      intention={content[language]}
      onStartAnalysis={onStartAnalysis}
    />
  );
}
