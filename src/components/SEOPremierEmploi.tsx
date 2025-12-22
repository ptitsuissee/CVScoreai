import { SEOTemplatePage } from './SEOTemplatePage';

interface SEOPremierEmploiProps {
  language: 'fr' | 'en';
  onStartAnalysis: () => void;
}

const content = {
  fr: {
    title: 'Analyse CV Premier Emploi | CVScore.ai',
    h1: 'Analyse ton CV pour décrocher ton premier emploi 🚀',
    introduction: 'Tu cherches ton premier emploi après tes études ? Notre IA t\'aide à transformer ton parcours académique en CV professionnel qui attire les recruteurs, même sans expérience longue.',
    whyUseful: {
      title: 'Pourquoi cette analyse est essentielle pour ton premier emploi',
      points: [
        'Valorise tes stages, projets étudiants et expériences associatives',
        'Identifie les compétences transférables que les recruteurs recherchent',
        'Optimise la structure de ton CV pour un profil junior',
        'Vérifie la compatibilité avec les systèmes ATS des grandes entreprises',
      ],
    },
    faq: [
      {
        question: 'Comment compenser le manque d\'expérience professionnelle ?',
        answer: 'Mets en avant : stages (même courts), projets universitaires concrets, travail associatif, compétences techniques acquises, et soft skills. CVScore.ai t\'aide à présenter ces éléments de manière professionnelle et convaincante.',
      },
      {
        question: 'Dois-je mentionner mes jobs étudiants (serveur, caissier, etc.) ?',
        answer: 'Oui, surtout si tu manques d\'expérience. Ces jobs montrent ta capacité à travailler, ta fiabilité et des soft skills (gestion du stress, service client). Notre outil t\'aide à les valoriser intelligemment.',
      },
      {
        question: 'Quelle longueur pour un CV de premier emploi ?',
        answer: 'Une page maximum. Les recruteurs passent 6 secondes sur un CV junior. CVScore.ai vérifie que ton CV est concis, clair et va à l\'essentiel.',
      },
      {
        question: 'Faut-il une lettre de motivation en plus du CV ?',
        answer: 'Souvent oui, surtout pour un premier emploi. La lettre permet d\'expliquer ta motivation et de compenser le manque d\'expérience. CVScore.ai se concentre sur l\'optimisation de ton CV.',
      },
      {
        question: 'Comment choisir les bonnes compétences à mettre en avant ?',
        answer: 'Analyse l\'offre d\'emploi et reprends les compétences demandées. Notre IA identifie les mots-clés importants et vérifie s\'ils sont présents dans ton CV.',
      },
    ],
  },
  en: {
    title: 'First Job Resume Analysis | CVScore.ai',
    h1: 'Analyze your resume to land your first job 🚀',
    introduction: 'Looking for your first job after studies? Our AI helps you transform your academic background into a professional resume that attracts recruiters, even without extensive experience.',
    whyUseful: {
      title: 'Why this analysis is essential for your first job',
      points: [
        'Highlights your internships, student projects and volunteer experiences',
        'Identifies transferable skills that recruiters are looking for',
        'Optimizes your resume structure for a junior profile',
        'Checks compatibility with ATS systems of large companies',
      ],
    },
    faq: [
      {
        question: 'How to compensate for lack of professional experience?',
        answer: 'Highlight: internships (even short ones), concrete university projects, volunteer work, acquired technical skills, and soft skills. CVScore.ai helps you present these elements professionally and convincingly.',
      },
      {
        question: 'Should I mention my student jobs (waiter, cashier, etc.)?',
        answer: 'Yes, especially if you lack experience. These jobs show your ability to work, reliability and soft skills (stress management, customer service). Our tool helps you showcase them intelligently.',
      },
      {
        question: 'What length for a first job resume?',
        answer: 'One page maximum. Recruiters spend 6 seconds on a junior resume. CVScore.ai ensures your resume is concise, clear and to the point.',
      },
      {
        question: 'Do I need a cover letter in addition to the resume?',
        answer: 'Often yes, especially for a first job. The cover letter allows you to explain your motivation and compensate for lack of experience. CVScore.ai focuses on optimizing your resume.',
      },
      {
        question: 'How to choose the right skills to highlight?',
        answer: 'Analyze the job posting and use the requested skills. Our AI identifies important keywords and checks if they are present in your resume.',
      },
    ],
  },
};

export function SEOPremierEmploi({ language, onStartAnalysis }: SEOPremierEmploiProps) {
  return (
    <SEOTemplatePage
      language={language}
      intention={content[language]}
      onStartAnalysis={onStartAnalysis}
    />
  );
}
