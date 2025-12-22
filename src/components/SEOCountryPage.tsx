import { MapPin, CheckCircle, Zap, Globe, Target, ArrowRight, HelpCircle, Crown, Flag } from 'lucide-react';
import { motion } from 'motion/react';

interface SEOCountryPageProps {
  language: 'fr' | 'en';
  country: 'suisse' | 'france' | 'europe';
  onStartAnalysis: () => void;
  onUpgradePremium: () => void;
}

const countryContent = {
  suisse: {
    fr: {
      flag: '🇨🇭',
      title: 'Analyse CV Suisse : optimise ton CV pour le marché suisse',
      hero: {
        h1: 'Analyse CV Suisse : optimise ton CV pour le marché suisse',
        intro: 'Le marché du travail suisse a des spécificités uniques. Les recruteurs suisses valorisent la sobriété, la précision et les résultats concrets. Le multilinguisme (français, allemand, anglais) est souvent essentiel. Les salaires élevés impliquent des attentes importantes en termes de compétences et d\'expérience. Notre IA analyse ton CV selon les critères des recruteurs suisses pour maximiser tes chances.',
      },
      specificities: {
        h2: 'Spécificités du CV suisse',
        points: [
          {
            title: 'Sobriété et professionnalisme',
            text: 'Le CV suisse est sobre, épuré, factuel. Pas de photo obligatoire (sauf certains secteurs), pas de couleurs vives, pas de design trop créatif. Les recruteurs privilégient la clarté et l\'efficacité. Mise en page simple, typographie lisible, hiérarchie visuelle claire.',
          },
          {
            title: 'Multilinguisme essentiel',
            text: 'La Suisse compte 4 langues nationales. Beaucoup de postes requièrent 2 ou 3 langues (français, allemand, anglais). Ton CV doit clairement indiquer ton niveau dans chaque langue : A1-C2 ou Langue maternelle / Courant / Intermédiaire / Notions.',
          },
          {
            title: 'Résultats et chiffres',
            text: 'Les recruteurs suisses sont orientés résultats et ROI. Chaque expérience doit inclure des réalisations chiffrées : budget géré, économies réalisées, croissance générée, projets menés. Les salaires suisses étant élevés, les attentes le sont aussi.',
          },
          {
            title: 'Permis de travail',
            text: 'Si tu n\'es pas suisse, mentionne clairement ton statut : permis B, C, G, ou précise si tu as besoin d\'un permis. Les recruteurs filtrent souvent selon ce critère. Si tu es frontalier, indique-le.',
          },
        ],
      },
      whatChecks: {
        h2: 'Ce que l\'analyse vérifie pour la Suisse',
        checks: [
          'Format sobre et professionnel (pas de design trop créatif)',
          'Présence claire des compétences linguistiques avec niveaux',
          'Résultats chiffrés et impact business dans chaque expérience',
          'Compatibilité avec les ATS utilisés en Suisse (SAP, Workday)',
          'Mention du statut de permis de travail si non-suisse',
          'Structure chronologique claire et cohérente',
        ],
      },
      tips: {
        title: 'Conseils spécifiques Suisse',
        examples: [
          '✅ Indique clairement ton niveau de langues : Français (Langue maternelle), Allemand (B2), Anglais (C1)',
          '✅ Mentionne ton permis de travail : "Nationalité française, Permis B Suisse valide"',
          '✅ Privilégie les chiffres en CHF si tu mentionnes des budgets',
          '✅ Adapte ta candidature au canton visé (Genève FR/EN, Zurich DE/EN, Lausanne FR)',
        ],
      },
      faq: [
        {
          q: 'Dois-je mettre une photo sur mon CV suisse ?',
          a: 'Ce n\'est pas obligatoire en Suisse. Certains secteurs (banque, conseil) apprécient une photo professionnelle, d\'autres non. En cas de doute, privilégie un CV sans photo pour éviter toute discrimination potentielle.',
        },
        {
          q: 'Comment mentionner mon niveau de langues ?',
          a: 'Utilise le système CECR (A1-C2) ou des termes clairs : Langue maternelle, Courant, Avancé, Intermédiaire, Notions. Sois honnête : les recruteurs suisses testent souvent les langues en entretien.',
        },
        {
          q: 'Le salaire doit-il apparaître sur le CV ?',
          a: 'Non, jamais. Les attentes salariales se discutent lors de l\'entretien ou dans la lettre de motivation si demandé. En Suisse, les salaires varient beaucoup selon le canton, l\'expérience et le secteur.',
        },
      ],
    },
    en: {
      flag: '🇨🇭',
      title: 'Swiss Resume Analysis: Optimize your resume for the Swiss market',
      hero: {
        h1: 'Swiss Resume Analysis: Optimize your resume for the Swiss market',
        intro: 'The Swiss job market has unique specificities. Swiss recruiters value sobriety, precision and concrete results. Multilingualism (French, German, English) is often essential. High salaries imply high expectations in terms of skills and experience. Our AI analyzes your resume according to Swiss recruiters\' criteria to maximize your chances.',
      },
      specificities: {
        h2: 'Swiss resume specificities',
        points: [
          {
            title: 'Sobriety and professionalism',
            text: 'Swiss resume is sober, clean, factual. No mandatory photo (except certain sectors), no bright colors, no overly creative design. Recruiters prioritize clarity and efficiency. Simple layout, readable typography, clear visual hierarchy.',
          },
          {
            title: 'Essential multilingualism',
            text: 'Switzerland has 4 national languages. Many positions require 2 or 3 languages (French, German, English). Your resume must clearly indicate your level in each language: A1-C2 or Native / Fluent / Intermediate / Basic.',
          },
          {
            title: 'Results and numbers',
            text: 'Swiss recruiters are results and ROI oriented. Each experience must include quantified achievements: budget managed, savings made, growth generated, projects led. Swiss salaries being high, expectations are too.',
          },
          {
            title: 'Work permit',
            text: 'If you\'re not Swiss, clearly mention your status: B, C, G permit, or specify if you need a permit. Recruiters often filter based on this criterion. If you\'re a cross-border worker, indicate it.',
          },
        ],
      },
      whatChecks: {
        h2: 'What the analysis checks for Switzerland',
        checks: [
          'Sober and professional format (not overly creative design)',
          'Clear presence of language skills with levels',
          'Quantified results and business impact in each experience',
          'Compatibility with ATS used in Switzerland (SAP, Workday)',
          'Mention of work permit status if non-Swiss',
          'Clear and consistent chronological structure',
        ],
      },
      tips: {
        title: 'Switzerland-specific tips',
        examples: [
          '✅ Clearly indicate your language levels: French (Native), German (B2), English (C1)',
          '✅ Mention your work permit: "French nationality, valid Swiss B permit"',
          '✅ Use CHF for budget figures',
          '✅ Adapt your application to the target canton (Geneva FR/EN, Zurich DE/EN, Lausanne FR)',
        ],
      },
      faq: [
        {
          q: 'Should I put a photo on my Swiss resume?',
          a: 'It\'s not mandatory in Switzerland. Some sectors (banking, consulting) appreciate a professional photo, others don\'t. When in doubt, prefer a resume without photo to avoid potential discrimination.',
        },
        {
          q: 'How to mention my language levels?',
          a: 'Use the CEFR system (A1-C2) or clear terms: Native, Fluent, Advanced, Intermediate, Basic. Be honest: Swiss recruiters often test languages in interviews.',
        },
        {
          q: 'Should salary appear on the resume?',
          a: 'No, never. Salary expectations are discussed during the interview or in the cover letter if requested. In Switzerland, salaries vary greatly by canton, experience and sector.',
        },
      ],
    },
  },
  france: {
    fr: {
      flag: '🇫🇷',
      title: 'Analyse CV France : optimise ton CV pour le marché français',
      hero: {
        h1: 'Analyse CV France : optimise ton CV pour le marché français',
        intro: 'Le marché du travail français a ses propres codes. Les recruteurs français apprécient un CV structuré, clair, avec une touche de personnalité. La formation reste importante (diplômes, écoles). Les soft skills et la capacité d\'adaptation sont de plus en plus valorisées. Notre IA analyse ton CV selon les critères des recruteurs français pour optimiser ton impact.',
      },
      specificities: {
        h2: 'Spécificités du CV français',
        points: [
          {
            title: 'Structure classique valorisée',
            text: 'Le CV français suit généralement une structure chronologique anti-chronologique : Expériences (du plus récent au plus ancien), Formation, Compétences, Langues, Centres d\'intérêt. Les recruteurs français sont habitués à cette logique.',
          },
          {
            title: 'Formation et diplômes',
            text: 'En France, la formation compte. Mentionne tes diplômes (Bac+2, Bac+3, Bac+5), le nom de ton école/université, et les mentions obtenues. Les Grandes Écoles ont un poids important. Si tu es autodidacte, mets en avant tes réalisations concrètes.',
          },
          {
            title: 'Personnalité et soft skills',
            text: 'Les recruteurs français apprécient une touche de personnalité : centres d\'intérêt pertinents, engagement associatif, projets personnels. Les soft skills (communication, adaptabilité, leadership) sont de plus en plus valorisées. Démontre-les par des exemples.',
          },
          {
            title: 'Longueur du CV',
            text: 'En France, un CV fait idéalement 1 page (junior/intermédiaire) ou 2 pages maximum (senior/expert). Les recruteurs passent 30 secondes sur un CV : il doit être concis, clair et percutant.',
          },
        ],
      },
      whatChecks: {
        h2: 'Ce que l\'analyse vérifie pour la France',
        checks: [
          'Structure chronologique anti-chronologique classique',
          'Présence et qualité de la section Formation (diplômes, écoles)',
          'Équilibre entre hard skills et soft skills',
          'Clarté des expériences avec verbes d\'action',
          'Compatibilité avec les ATS utilisés en France (Taleo, Cornerstone)',
          'Longueur adaptée (1-2 pages)',
        ],
      },
      tips: {
        title: 'Conseils spécifiques France',
        examples: [
          '✅ Mentionne tes diplômes avec le niveau : "Master 2 Marketing Digital, ESC Paris"',
          '✅ Ajoute une section Centres d\'intérêt pertinents : sport, culture, bénévolat',
          '✅ Utilise des verbes d\'action forts : Piloté, Développé, Optimisé, Créé',
          '✅ Adapte ton CV à chaque offre en reprenant les mots-clés',
        ],
      },
      faq: [
        {
          q: 'Dois-je mettre une photo sur mon CV français ?',
          a: 'Ce n\'est pas obligatoire. Certaines entreprises apprécient, d\'autres préfèrent l\'éviter pour limiter les biais. En cas de doute, privilégie un CV sans photo. Si tu en mets une, elle doit être professionnelle.',
        },
        {
          q: 'Faut-il mentionner les stages sur un CV junior ?',
          a: 'Oui, absolument. Pour un profil junior, les stages sont des expériences professionnelles à part entière. Décris-les comme des postes : contexte, missions, résultats.',
        },
        {
          q: 'La lettre de motivation est-elle encore nécessaire ?',
          a: 'Oui, en France, la lettre de motivation reste importante. Elle permet d\'expliquer ta motivation, ton parcours, et ta valeur ajoutée. CVScore.ai se concentre sur l\'optimisation du CV.',
        },
      ],
    },
    en: {
      flag: '🇫🇷',
      title: 'French Resume Analysis: Optimize your resume for the French market',
      hero: {
        h1: 'French Resume Analysis: Optimize your resume for the French market',
        intro: 'The French job market has its own codes. French recruiters appreciate a structured, clear resume with a touch of personality. Education remains important (degrees, schools). Soft skills and adaptability are increasingly valued. Our AI analyzes your resume according to French recruiters\' criteria to optimize your impact.',
      },
      specificities: {
        h2: 'French resume specificities',
        points: [
          {
            title: 'Classic structure valued',
            text: 'French resume generally follows a reverse chronological structure: Experiences (most recent first), Education, Skills, Languages, Interests. French recruiters are used to this logic.',
          },
          {
            title: 'Education and degrees',
            text: 'In France, education matters. Mention your degrees (Bachelor, Master), school/university name, and honors obtained. Grandes Écoles have significant weight. If self-taught, highlight concrete achievements.',
          },
          {
            title: 'Personality and soft skills',
            text: 'French recruiters appreciate a touch of personality: relevant interests, volunteer work, personal projects. Soft skills (communication, adaptability, leadership) are increasingly valued. Demonstrate them through examples.',
          },
          {
            title: 'Resume length',
            text: 'In France, a resume ideally fits on 1 page (junior/intermediate) or 2 pages maximum (senior/expert). Recruiters spend 30 seconds on a resume: it must be concise, clear and impactful.',
          },
        ],
      },
      whatChecks: {
        h2: 'What the analysis checks for France',
        checks: [
          'Classic reverse chronological structure',
          'Presence and quality of Education section (degrees, schools)',
          'Balance between hard skills and soft skills',
          'Clear experiences with action verbs',
          'Compatibility with ATS used in France (Taleo, Cornerstone)',
          'Appropriate length (1-2 pages)',
        ],
      },
      tips: {
        title: 'France-specific tips',
        examples: [
          '✅ Mention your degrees with level: "Master 2 Digital Marketing, ESC Paris"',
          '✅ Add relevant Interests section: sports, culture, volunteering',
          '✅ Use strong action verbs: Led, Developed, Optimized, Created',
          '✅ Adapt your resume to each offer by using keywords',
        ],
      },
      faq: [
        {
          q: 'Should I put a photo on my French resume?',
          a: 'It\'s not mandatory. Some companies appreciate it, others prefer to avoid it to limit bias. When in doubt, prefer a resume without photo. If you include one, it must be professional.',
        },
        {
          q: 'Should I mention internships on a junior resume?',
          a: 'Yes, absolutely. For a junior profile, internships are full professional experiences. Describe them like positions: context, missions, results.',
        },
        {
          q: 'Is a cover letter still necessary?',
          a: 'Yes, in France, the cover letter remains important. It allows you to explain your motivation, background, and added value. CVScore.ai focuses on resume optimization.',
        },
      ],
    },
  },
  europe: {
    fr: {
      flag: '🇪🇺',
      title: 'Analyse CV Europe : optimise ton CV pour le marché européen',
      hero: {
        h1: 'Analyse CV Europe : optimise ton CV pour le marché européen',
        intro: 'Le marché du travail européen est diversifié mais partage des standards communs. Les recruteurs européens valorisent la mobilité, le multilinguisme, et l\'adaptabilité culturelle. Le format Europass est reconnu partout, mais un CV classique bien structuré fonctionne aussi. Notre IA analyse ton CV selon les critères des recruteurs européens pour maximiser tes opportunités transfrontalières.',
      },
      specificities: {
        h2: 'Spécificités du CV européen',
        points: [
          {
            title: 'Mobilité et flexibilité',
            text: 'Les recruteurs européens apprécient les profils mobiles, ayant vécu ou travaillé dans plusieurs pays. Mentionne tes expériences internationales, tes séjours Erasmus, tes missions à l\'étranger. Cela démontre ta capacité d\'adaptation et ton ouverture.',
          },
          {
            title: 'Multilinguisme valorisé',
            text: 'L\'anglais est essentiel. Beaucoup de postes européens requièrent 2 ou 3 langues. Utilise le système CECR (A1-C2) pour indiquer ton niveau. Mentionne toutes les langues que tu maîtrises : c\'est un atout majeur en Europe.',
          },
          {
            title: 'Format Europass ou classique',
            text: 'Le CV Europass est standardisé et reconnu dans toute l\'UE. Il est utile pour des mobilités intra-européennes. Cependant, un CV classique bien structuré, sobre et professionnel fonctionne aussi très bien.',
          },
          {
            title: 'Compétences interculturelles',
            text: 'Travailler en Europe implique souvent de collaborer avec des équipes multiculturelles. Mets en avant ta capacité à travailler en environnement international, ta sensibilité culturelle, et tes expériences collaboratives.',
          },
        ],
      },
      whatChecks: {
        h2: 'Ce que l\'analyse vérifie pour l\'Europe',
        checks: [
          'Présence claire des compétences linguistiques (système CECR)',
          'Mention des expériences internationales et mobilité',
          'Structure compatible avec les standards européens',
          'Compatibilité avec les ATS utilisés en Europe',
          'Équilibre entre hard skills et soft skills interculturels',
          'Format professionnel et lisible dans différents contextes',
        ],
      },
      tips: {
        title: 'Conseils spécifiques Europe',
        examples: [
          '✅ Indique toutes tes langues avec le système CECR : Anglais (C1), Allemand (B1), Espagnol (A2)',
          '✅ Mentionne tes expériences internationales : "6 mois Erasmus à Berlin", "Mission 3 mois Amsterdam"',
          '✅ Adapte ton CV au pays visé : sobre pour l\'Allemagne, plus créatif pour les Pays-Bas',
          '✅ Privilégie l\'anglais si tu postules dans plusieurs pays',
        ],
      },
      faq: [
        {
          q: 'Dois-je utiliser le format Europass ?',
          a: 'Ce n\'est pas obligatoire. Europass est reconnu partout en Europe, mais un CV classique bien fait fonctionne aussi. L\'important est la clarté, la structure et le contenu. Si tu postules dans plusieurs pays, Europass peut simplifier les choses.',
        },
        {
          q: 'Comment valoriser mon expérience Erasmus ?',
          a: 'Mentionne-la dans ta section Formation ou Expériences. Précise la durée, le pays, et ce que tu en as retiré (autonomie, adaptabilité, langue). Les recruteurs européens apprécient fortement Erasmus.',
        },
        {
          q: 'Dois-je traduire mon CV dans toutes les langues ?',
          a: 'Pas forcément. L\'anglais suffit souvent pour postuler en Europe. Cependant, si tu cibles un pays spécifique (Allemagne, Espagne), une version dans la langue locale est un plus.',
        },
      ],
    },
    en: {
      flag: '🇪🇺',
      title: 'European Resume Analysis: Optimize your resume for the European market',
      hero: {
        h1: 'European Resume Analysis: Optimize your resume for the European market',
        intro: 'The European job market is diverse but shares common standards. European recruiters value mobility, multilingualism, and cultural adaptability. The Europass format is recognized everywhere, but a well-structured classic resume also works. Our AI analyzes your resume according to European recruiters\' criteria to maximize your cross-border opportunities.',
      },
      specificities: {
        h2: 'European resume specificities',
        points: [
          {
            title: 'Mobility and flexibility',
            text: 'European recruiters appreciate mobile profiles, having lived or worked in multiple countries. Mention your international experiences, Erasmus stays, foreign assignments. This demonstrates adaptability and openness.',
          },
          {
            title: 'Valued multilingualism',
            text: 'English is essential. Many European positions require 2 or 3 languages. Use the CEFR system (A1-C2) to indicate your level. Mention all languages you master: it\'s a major asset in Europe.',
          },
          {
            title: 'Europass or classic format',
            text: 'Europass resume is standardized and recognized throughout the EU. It\'s useful for intra-European mobility. However, a well-structured, sober and professional classic resume also works very well.',
          },
          {
            title: 'Intercultural skills',
            text: 'Working in Europe often involves collaborating with multicultural teams. Highlight your ability to work in international environment, cultural sensitivity, and collaborative experiences.',
          },
        ],
      },
      whatChecks: {
        h2: 'What the analysis checks for Europe',
        checks: [
          'Clear presence of language skills (CEFR system)',
          'Mention of international experiences and mobility',
          'Structure compatible with European standards',
          'Compatibility with ATS used in Europe',
          'Balance between hard skills and intercultural soft skills',
          'Professional and readable format in different contexts',
        ],
      },
      tips: {
        title: 'Europe-specific tips',
        examples: [
          '✅ List all your languages with CEFR system: English (C1), German (B1), Spanish (A2)',
          '✅ Mention international experiences: "6 months Erasmus in Berlin", "3-month mission Amsterdam"',
          '✅ Adapt your resume to target country: sober for Germany, more creative for Netherlands',
          '✅ Prefer English if applying to multiple countries',
        ],
      },
      faq: [
        {
          q: 'Should I use Europass format?',
          a: 'It\'s not mandatory. Europass is recognized throughout Europe, but a well-done classic resume also works. What matters is clarity, structure and content. If applying to multiple countries, Europass can simplify things.',
        },
        {
          q: 'How to showcase my Erasmus experience?',
          a: 'Mention it in your Education or Experience section. Specify duration, country, and what you gained (autonomy, adaptability, language). European recruiters highly appreciate Erasmus.',
        },
        {
          q: 'Should I translate my resume into all languages?',
          a: 'Not necessarily. English often suffices for applying in Europe. However, if targeting a specific country (Germany, Spain), a version in the local language is a plus.',
        },
      ],
    },
  },
};

export function SEOCountryPage({ language, country, onStartAnalysis, onUpgradePremium }: SEOCountryPageProps) {
  const t = countryContent[country][language];

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
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">{t.flag}</span>
              <MapPin size={20} />
              <span className="text-sm">{country.charAt(0).toUpperCase() + country.slice(1)}</span>
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
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              {language === 'fr' ? 'Analyse ton CV maintenant' : 'Analyze your resume now'}
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              {language === 'fr' 
                ? `Vérifie si ton CV est adapté au marché ${country === 'suisse' ? 'suisse' : country === 'france' ? 'français' : 'européen'}`
                : `Check if your resume is adapted to the ${country === 'suisse' ? 'Swiss' : country === 'france' ? 'French' : 'European'} market`}
            </p>
            
            <button
              onClick={onStartAnalysis}
              className="px-8 py-4 bg-white text-blue-700 rounded-xl hover:bg-gray-100 transition-all inline-flex items-center gap-3 text-lg shadow-xl"
            >
              <Zap size={24} />
              <span>{language === 'fr' ? 'Analyser mon CV' : 'Analyze my resume'}</span>
              <ArrowRight size={24} />
            </button>
            
            <p className="text-sm text-blue-100 mt-4">
              {language === 'fr' ? 'Sans inscription · Résultat en 30 secondes' : 'No registration · Results in 30 seconds'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specificities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-8">{t.specificities.h2}</h2>
            
            <div className="space-y-6">
              {t.specificities.points.map((point, index) => (
                <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <Target size={24} className="text-blue-600 flex-shrink-0" />
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-8">{t.whatChecks.h2}</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 p-6">
              <ul className="space-y-3">
                {t.whatChecks.checks.map((check, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{check}</span>
                  </li>
                ))}
              </ul>
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
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-8">{t.tips.title}</h2>
            
            <div className="space-y-3">
              {t.tips.examples.map((example, index) => (
                <div key={index} className="bg-white rounded-lg border-2 border-blue-200 p-4">
                  <p className="text-gray-700">{example}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-12 text-center">
              {language === 'fr' ? 'Gratuit vs Premium' : 'Free vs Premium'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Free */}
              <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 shadow-lg">
                <h3 className="text-2xl text-gray-900 mb-2">
                  {language === 'fr' ? 'Analyse Gratuite' : 'Free Analysis'}
                </h3>
                <div className="text-4xl text-blue-600 mb-6">€0</div>
                
                <button
                  onClick={onStartAnalysis}
                  className="w-full py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-all"
                >
                  {language === 'fr' ? 'Analyser gratuitement' : 'Analyze for free'}
                </button>
              </div>

              {/* Premium */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-4 border-blue-400 p-8 shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm flex items-center gap-2">
                    <Crown size={16} />
                    {language === 'fr' ? 'Recommandé' : 'Recommended'}
                  </div>
                </div>
                
                <h3 className="text-2xl text-gray-900 mb-2">
                  {language === 'fr' ? 'Analyse Premium' : 'Premium Analysis'}
                </h3>
                <div className="text-4xl text-blue-600 mb-6">€9</div>
                
                <button
                  onClick={onUpgradePremium}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-12 text-center">
              {language === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}
            </h2>
            
            <div className="space-y-6">
              {t.faq.map((item, index) => (
                <div key={index} className="bg-white rounded-xl border-2 border-blue-200 p-6 hover:border-blue-300 transition-all">
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
    </div>
  );
}
