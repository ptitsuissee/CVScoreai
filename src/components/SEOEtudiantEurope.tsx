import { SEOTemplatePage } from './SEOTemplatePage';

interface SEOEtudiantEuropeProps {
  language: 'fr' | 'en';
  onStartAnalysis: () => void;
}

const content = {
  fr: {
    title: 'Analyse CV Étudiant Europe | CVScore.ai',
    h1: 'Analyse ton CV étudiant pour le marché européen 🎓',
    introduction: 'Tu cherches un stage, une alternance ou ton premier emploi en Europe ? Notre IA analyse ton CV selon les critères des recruteurs européens et t\'aide à valoriser ton parcours académique et tes premières expériences.',
    whyUseful: {
      title: 'Pourquoi cette analyse est utile pour les étudiants européens',
      points: [
        'Valorise tes projets académiques et associatifs même sans expérience pro',
        'Vérifie la présence de compétences transférables (travail d\'équipe, langues, outils)',
        'Adapte ton CV aux formats européens (Europass ou CV classique)',
        'Identifie les mots-clés recherchés pour stages et alternances',
      ],
    },
    faq: [
      {
        question: 'Comment rédiger un bon CV étudiant sans expérience professionnelle ?',
        answer: 'Mets en avant tes projets universitaires, stages courts, missions associatives, et compétences acquises (langues, logiciels, soft skills). CVScore.ai t\'aide à structurer ces éléments de manière professionnelle.',
      },
      {
        question: 'Dois-je utiliser le format Europass pour candidater en Europe ?',
        answer: 'Le format Europass est reconnu dans toute l\'Europe, mais n\'est pas obligatoire. Un CV classique bien structuré fonctionne aussi. Notre outil analyse les deux formats et te conseille sur la meilleure option.',
      },
      {
        question: 'Quelles compétences valoriser en tant qu\'étudiant ?',
        answer: 'Les recruteurs apprécient : maîtrise des langues, compétences informatiques, capacité à travailler en équipe, projets concrets réalisés, et mobilité internationale. CVScore.ai vérifie si ces éléments sont présents et bien mis en valeur.',
      },
      {
        question: 'Mon CV doit-il faire une page ou peut-il être plus long ?',
        answer: 'Pour un étudiant ou jeune diplômé, une page suffit largement. Notre analyse te conseille sur la concision et l\'essentiel à garder.',
      },
    ],
  },
  en: {
    title: 'Student Resume Analysis Europe | CVScore.ai',
    h1: 'Analyze your student resume for the European market 🎓',
    introduction: 'Looking for an internship or your first job in Europe? Our AI analyzes your resume according to European recruiters\' criteria and helps you highlight your academic background and first experiences.',
    whyUseful: {
      title: 'Why this analysis is useful for European students',
      points: [
        'Highlights academic and extracurricular projects even without professional experience',
        'Checks for transferable skills (teamwork, languages, tools)',
        'Adapts your resume to European formats (Europass or classic resume)',
        'Identifies keywords sought for internships and apprenticeships',
      ],
    },
    faq: [
      {
        question: 'How to write a good student resume without professional experience?',
        answer: 'Highlight university projects, short internships, volunteer work, and acquired skills (languages, software, soft skills). CVScore.ai helps you structure these elements professionally.',
      },
      {
        question: 'Should I use the Europass format to apply in Europe?',
        answer: 'Europass format is recognized throughout Europe, but not mandatory. A well-structured classic resume also works. Our tool analyzes both formats and advises you on the best option.',
      },
      {
        question: 'What skills to highlight as a student?',
        answer: 'Recruiters appreciate: language proficiency, computer skills, teamwork ability, concrete projects completed, and international mobility. CVScore.ai checks if these elements are present and well highlighted.',
      },
      {
        question: 'Should my resume be one page or can it be longer?',
        answer: 'For a student or recent graduate, one page is more than enough. Our analysis advises you on conciseness and what\'s essential to keep.',
      },
    ],
  },
};

export function SEOEtudiantEurope({ language, onStartAnalysis }: SEOEtudiantEuropeProps) {
  return (
    <SEOTemplatePage
      language={language}
      intention={content[language]}
      onStartAnalysis={onStartAnalysis}
    />
  );
}
