import { SEOTemplatePage } from './SEOTemplatePage';

interface SEODataAnalystProps {
  language: 'fr' | 'en';
  onStartAnalysis: () => void;
}

const content = {
  fr: {
    title: 'Analyse CV Data Analyst | CVScore.ai',
    h1: 'Analyse ton CV Data Analyst avec l\'IA 📊',
    introduction: 'Le métier de Data Analyst est très demandé, mais aussi très compétitif. Notre IA vérifie si ton CV met en valeur tes compétences techniques (SQL, Python, Power BI), tes réalisations concrètes et ton impact business.',
    whyUseful: {
      title: 'Pourquoi cette analyse est cruciale pour les Data Analysts',
      points: [
        'Vérifie la présence des compétences techniques clés (SQL, Python, R, Excel, Tableau, Power BI)',
        'Évalue la clarté de tes projets data et leur impact business (ROI, KPI)',
        'Identifie les mots-clés ATS spécifiques au métier de Data Analyst',
        'Compare ton CV aux standards du secteur data en Europe',
      ],
    },
    faq: [
      {
        question: 'Quelles compétences techniques dois-je absolument mentionner ?',
        answer: 'Les essentiels : SQL (obligatoire), Python ou R, Excel avancé, un outil de visualisation (Tableau, Power BI, Looker), et idéalement des notions de machine learning. CVScore.ai vérifie si ces compétences sont présentes et bien mises en valeur.',
      },
      {
        question: 'Comment valoriser mes projets data dans mon CV ?',
        answer: 'Chaque projet doit inclure : le contexte, les outils utilisés, la méthodologie, et surtout l\'impact business (ex: "Réduction des coûts de 15%", "Augmentation de la rétention client de 20%"). Notre IA vérifie si tes projets sont bien structurés.',
      },
      {
        question: 'Faut-il mentionner mes certifications (Google Analytics, etc.) ?',
        answer: 'Oui, absolument. Les certifications (Google Analytics, Microsoft, Tableau, etc.) sont très valorisées. Crée une section dédiée et mentionne-les clairement.',
      },
      {
        question: 'Mon CV doit-il être technique ou business-oriented ?',
        answer: 'Les deux. Tu dois montrer tes compétences techniques ET ton impact business. CVScore.ai t\'aide à trouver le bon équilibre entre langage technique et résultats concrets.',
      },
    ],
  },
  en: {
    title: 'Data Analyst Resume Analysis | CVScore.ai',
    h1: 'Analyze your Data Analyst resume with AI 📊',
    introduction: 'Data Analyst is a highly sought-after role, but also very competitive. Our AI checks if your resume highlights your technical skills (SQL, Python, Power BI), concrete achievements and business impact.',
    whyUseful: {
      title: 'Why this analysis is crucial for Data Analysts',
      points: [
        'Checks for key technical skills (SQL, Python, R, Excel, Tableau, Power BI)',
        'Evaluates clarity of your data projects and their business impact (ROI, KPIs)',
        'Identifies ATS keywords specific to Data Analyst role',
        'Compares your resume to data sector standards in Europe',
      ],
    },
    faq: [
      {
        question: 'What technical skills should I absolutely mention?',
        answer: 'The essentials: SQL (mandatory), Python or R, advanced Excel, a visualization tool (Tableau, Power BI, Looker), and ideally machine learning basics. CVScore.ai checks if these skills are present and well highlighted.',
      },
      {
        question: 'How to showcase my data projects on my resume?',
        answer: 'Each project should include: context, tools used, methodology, and most importantly business impact (e.g., "15% cost reduction", "20% increase in customer retention"). Our AI checks if your projects are well structured.',
      },
      {
        question: 'Should I mention my certifications (Google Analytics, etc.)?',
        answer: 'Yes, absolutely. Certifications (Google Analytics, Microsoft, Tableau, etc.) are highly valued. Create a dedicated section and mention them clearly.',
      },
      {
        question: 'Should my resume be technical or business-oriented?',
        answer: 'Both. You must show your technical skills AND your business impact. CVScore.ai helps you find the right balance between technical language and concrete results.',
      },
    ],
  },
};

export function SEODataAnalyst({ language, onStartAnalysis }: SEODataAnalystProps) {
  return (
    <SEOTemplatePage
      language={language}
      intention={content[language]}
      onStartAnalysis={onStartAnalysis}
    />
  );
}
