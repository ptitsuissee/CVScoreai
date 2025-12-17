// Service d'analyse Premium approfondie
// Cette analyse est plus détaillée et inclut un feedback ligne par ligne

export interface PremiumAnalysisResult {
  overall_score: number;
  section_scores: {
    profile: number;
    experience: number;
    skills: number;
    education: number;
    ats: number;
  };
  strengths: string[];
  weaknesses: string[];
  line_by_line_feedback: Array<{
    original_line: string;
    improved_version: string;
    reason: string;
  }>;
  career_recommendations: string[];
  next_steps_7_days: string[];
}

interface PremiumAnalysisRequest {
  cvText: string;
  targetJob: string;
  country: string;
  language: 'fr' | 'en';
}

const SYSTEM_PROMPT = `🔹 PROMPT 3 — ANALYSE PREMIUM AVANCÉE (COACHING)
SYSTEM
Tu es un recruteur européen senior et coach carrière.
Tu réalises une analyse premium approfondie, honnête et stratégique.
Tu aides le candidat à maximiser ses chances d'entretien.
Ton feedback est précis, actionnable et adapté au pays et au poste.

SORTIE (JSON STRICT)
{
  "overall_score": 0,
  "section_scores": {
    "profile": 0,
    "experience": 0,
    "skills": 0,
    "education": 0,
    "ats": 0
  },
  "strengths": [
    ""
  ],
  "weaknesses": [
    ""
  ],
  "line_by_line_feedback": [
    {
      "original_line": "",
      "improved_version": "",
      "reason": ""
    }
  ],
  "career_recommendations": [
    ""
  ],
  "next_steps_7_days": [
    ""
  ]
}`;

// Fonction pour simuler l'appel à l'IA Premium
export async function analyzeCVPremium(request: PremiumAnalysisRequest): Promise<PremiumAnalysisResult> {
  // Simulation d'un délai réseau
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Dans un environnement réel, vous feriez :
  // const response = await fetch('/api/analyze-cv-premium', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     systemPrompt: SYSTEM_PROMPT,
  //     userPrompt: buildUserPrompt(request),
  //   }),
  // });
  // return response.json();

  return generateMockPremiumAnalysis(request);
}

function buildUserPrompt(request: PremiumAnalysisRequest): string {
  return `USER
Langue : ${request.language === 'fr' ? 'FR' : 'EN'}
Pays ciblé : ${request.country}
Poste visé : ${request.targetJob}

CV à analyser :
${request.cvText}`;
}

function generateMockPremiumAnalysis(request: PremiumAnalysisRequest): PremiumAnalysisResult {
  const { language, targetJob } = request;

  if (language === 'fr') {
    return {
      overall_score: 78,
      section_scores: {
        profile: 70,
        experience: 82,
        skills: 75,
        education: 85,
        ats: 68,
      },
      strengths: [
        'Expériences pertinentes et bien structurées chronologiquement',
        'Formation solide avec diplômes reconnus',
        'Présence de résultats mesurables dans certaines réalisations',
        'Bonne diversité de compétences techniques',
      ],
      weaknesses: [
        'Profil introductif absent ou trop générique',
        'Certaines expériences manquent de contexte et d\'impact chiffré',
        'Compétences techniques listées sans niveau de maîtrise',
        'Format non optimisé pour les systèmes ATS (tableaux, colonnes)',
        'Absence de mots-clés spécifiques au poste visé',
      ],
      line_by_line_feedback: [
        {
          original_line: 'Responsable du développement de nouvelles fonctionnalités',
          improved_version: 'Développé 15+ fonctionnalités critiques augmentant l\'engagement utilisateur de 35%',
          reason: 'Remplace un verbe passif par un verbe d\'action fort + ajoute métriques concrètes pour mesurer l\'impact',
        },
        {
          original_line: 'Travail en équipe sur plusieurs projets',
          improved_version: 'Collaboré avec équipe cross-fonctionnelle de 8 personnes sur 3 projets majeurs (budget total 500K€)',
          reason: 'Précise la taille de l\'équipe, le nombre de projets et ajoute le contexte budgétaire pour démontrer la responsabilité',
        },
        {
          original_line: 'Compétences : React, Node.js, Python',
          improved_version: 'Expertise technique : React (avancé, 4 ans), Node.js (expert, 5 ans), Python (intermédiaire, 2 ans)',
          reason: 'Ajoute le niveau de maîtrise et l\'expérience pour chaque technologie - essentiel pour le tri ATS et évaluation recruteur',
        },
        {
          original_line: 'Amélioration des performances',
          improved_version: 'Optimisé performances backend réduisant temps de réponse de 65% (4.2s → 1.5s) pour 50,000 utilisateurs',
          reason: 'Quantifie l\'amélioration avec métriques avant/après et précise l\'échelle d\'impact (nombre d\'utilisateurs)',
        },
        {
          original_line: 'Gestion de projet',
          improved_version: 'Piloté 4 projets Agile en parallèle, livraison 100% à temps avec satisfaction client moyenne de 4.5/5',
          reason: 'Transforme compétence générique en réalisation concrète avec métriques de succès (ponctualité, satisfaction)',
        },
      ],
      career_recommendations: [
        `Positionnement stratégique : Avec votre profil, visez des postes de ${targetJob || 'Senior/Lead'} dans des scale-ups ou PME tech européennes - vous avez le profil mais devez le valoriser`,
        'Développement de marque personnelle : Créez un profil LinkedIn optimisé, publiez 1-2 articles techniques par mois pour augmenter votre visibilité',
        'Certifications stratégiques : Considérez une certification AWS Solutions Architect ou Kubernetes (CKA) pour renforcer votre profil DevOps',
        'Réseau professionnel : Participez à 2-3 meetups techniques par mois pour élargir votre réseau et découvrir opportunités cachées',
        'Négociation salariale : Avec votre profil optimisé, vous pouvez viser 15-20% au-dessus de votre rémunération actuelle lors d\'un changement',
      ],
      next_steps_7_days: [
        'Jour 1-2 : Réécrire les 5 expériences clés en appliquant le feedback ligne par ligne',
        'Jour 3 : Créer/optimiser profil LinkedIn avec mots-clés ATS, ajouter 3-5 recommandations',
        'Jour 4 : Identifier 10 entreprises cibles et personnaliser CV pour chacune',
        'Jour 5-6 : Préparer 3 projets portfolio démontrant vos compétences techniques principales',
        'Jour 7 : Envoyer 5 candidatures stratégiques avec CV personnalisé + message direct au hiring manager',
      ],
    };
  } else {
    return {
      overall_score: 78,
      section_scores: {
        profile: 70,
        experience: 82,
        skills: 75,
        education: 85,
        ats: 68,
      },
      strengths: [
        'Relevant experiences well-structured chronologically',
        'Solid education with recognized degrees',
        'Presence of measurable results in some achievements',
        'Good diversity of technical skills',
      ],
      weaknesses: [
        'Profile summary absent or too generic',
        'Some experiences lack context and quantified impact',
        'Technical skills listed without proficiency level',
        'Format not optimized for ATS systems (tables, columns)',
        'Missing job-specific keywords',
      ],
      line_by_line_feedback: [
        {
          original_line: 'Responsible for developing new features',
          improved_version: 'Developed 15+ critical features increasing user engagement by 35%',
          reason: 'Replaces passive verb with strong action verb + adds concrete metrics to measure impact',
        },
        {
          original_line: 'Worked in team on several projects',
          improved_version: 'Collaborated with cross-functional team of 8 on 3 major projects (total budget €500K)',
          reason: 'Specifies team size, number of projects and adds budget context to demonstrate responsibility',
        },
        {
          original_line: 'Skills: React, Node.js, Python',
          improved_version: 'Technical Expertise: React (advanced, 4 years), Node.js (expert, 5 years), Python (intermediate, 2 years)',
          reason: 'Adds proficiency level and experience for each technology - essential for ATS filtering and recruiter evaluation',
        },
        {
          original_line: 'Performance improvements',
          improved_version: 'Optimized backend performance reducing response time by 65% (4.2s → 1.5s) for 50,000 users',
          reason: 'Quantifies improvement with before/after metrics and specifies impact scale (number of users)',
        },
        {
          original_line: 'Project management',
          improved_version: 'Led 4 parallel Agile projects, 100% on-time delivery with average client satisfaction of 4.5/5',
          reason: 'Transforms generic skill into concrete achievement with success metrics (timeliness, satisfaction)',
        },
      ],
      career_recommendations: [
        `Strategic positioning: With your profile, target ${targetJob || 'Senior/Lead'} positions in European tech scale-ups or SMEs - you have the profile but need to showcase it`,
        'Personal branding: Create optimized LinkedIn profile, publish 1-2 technical articles monthly to increase visibility',
        'Strategic certifications: Consider AWS Solutions Architect or Kubernetes (CKA) certification to strengthen your DevOps profile',
        'Professional network: Attend 2-3 tech meetups monthly to expand network and discover hidden opportunities',
        'Salary negotiation: With optimized profile, you can aim for 15-20% above current compensation when changing jobs',
      ],
      next_steps_7_days: [
        'Day 1-2: Rewrite 5 key experiences applying line-by-line feedback',
        'Day 3: Create/optimize LinkedIn profile with ATS keywords, add 3-5 recommendations',
        'Day 4: Identify 10 target companies and customize resume for each',
        'Day 5-6: Prepare 3 portfolio projects demonstrating your core technical skills',
        'Day 7: Send 5 strategic applications with customized resume + direct message to hiring manager',
      ],
    };
  }
}
