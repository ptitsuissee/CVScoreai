// Service d'optimisation CV basé sur l'analyse
// Dans un environnement de production, ce service ferait un appel API à un backend
// qui utiliserait OpenAI/Anthropic avec le prompt système fourni

import { CVAnalysisResult } from './cvAnalysis';

export interface FinalCV {
  header: {
    title: string;
    subtitle: string;
  };
  profile_summary: string;
  experience: Array<{
    role: string;
    company: string;
    achievements: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
  }>;
  skills: {
    technical: string[];
    soft: string[];
  };
}

export interface CVOptimizationResult {
  final_cv: FinalCV;
  expected_score_after_optimization: number;
  ats_keywords_added: string[];
}

interface OptimizationRequest {
  analysis: CVAnalysisResult;
  targetJob: string;
  country: string;
  language: 'fr' | 'en';
}

const SYSTEM_PROMPT = `🔹 PROMPT 2 — GÉNÉRER UN CV OPTIMISÉ À PARTIR DE L'ANALYSE
SYSTEM
Tu es un recruteur européen expert.
À partir d'une analyse de CV existante, tu génères un CV final optimisé,
professionnel, clair et prêt à être envoyé.
Le CV doit être compatible ATS et cohérent avec l'analyse fournie.

SORTIE (JSON STRICT)
{
  "final_cv": {
    "header": {
      "title": "",
      "subtitle": ""
    },
    "profile_summary": "",
    "experience": [
      {
        "role": "",
        "company": "",
        "achievements": [
          ""
        ]
      }
    ],
    "education": [
      {
        "degree": "",
        "institution": ""
      }
    ],
    "skills": {
      "technical": [
        ""
      ],
      "soft": [
        ""
      ]
    }
  },
  "expected_score_after_optimization": 0,
  "ats_keywords_added": [
    ""
  ]
}`;

// Fonction pour simuler l'appel à l'IA
// En production, ceci appellerait votre backend qui utilise OpenAI/Claude
export async function optimizeCVWithAI(request: OptimizationRequest): Promise<CVOptimizationResult> {
  // Simulation d'un délai réseau
  await new Promise(resolve => setTimeout(resolve, 2500));

  // Dans un environnement réel, vous feriez :
  // const response = await fetch('/api/optimize-cv', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     systemPrompt: SYSTEM_PROMPT,
  //     userPrompt: buildUserPrompt(request),
  //   }),
  // });
  // return response.json();

  // Pour la démo, on retourne un résultat simulé basé sur l'analyse
  return generateMockOptimization(request);
}

function buildUserPrompt(request: OptimizationRequest): string {
  return `USER
Langue : ${request.language === 'fr' ? 'FR' : 'EN'}
Pays ciblé : ${request.country}
Poste visé : ${request.targetJob}

Analyse du CV (JSON) :
${JSON.stringify(request.analysis, null, 2)}`;
}

// Fonction pour générer une optimisation simulée basée sur l'analyse
function generateMockOptimization(request: OptimizationRequest): CVOptimizationResult {
  const { analysis, targetJob, language } = request;

  // Calcul du score attendu (amélioration basée sur le score actuel)
  const improvementPotential = Math.min(100 - analysis.overall_score, 25);
  const expectedScore = Math.min(95, analysis.overall_score + improvementPotential);

  if (language === 'fr') {
    return {
      final_cv: {
        header: {
          title: targetJob || 'Professionnel Expérimenté',
          subtitle: 'Expert en développement de solutions innovantes et optimisation des processus',
        },
        profile_summary: `Professionnel ${targetJob || 'polyvalent'} avec ${analysis.overall_score >= 70 ? 'solide' : 'croissante'} expérience dans le développement de solutions innovantes. Reconnu pour ma capacité à livrer des résultats mesurables et à m'adapter rapidement aux nouveaux défis. Passionné par l'excellence opérationnelle et l'amélioration continue.`,
        experience: [
          {
            role: targetJob || 'Développeur Full-Stack Senior',
            company: 'TechCorp International',
            achievements: [
              'Conçu et déployé 12+ applications web critiques, augmentant l\'engagement utilisateur de 45%',
              'Optimisé l\'architecture backend, réduisant le temps de réponse de 60% (3s → 1.2s)',
              'Piloté une équipe de 5 développeurs sur un projet stratégique de refonte (budget 200K€)',
              'Implémenté suite de tests automatisés, augmentant couverture de code de 30% à 85%',
              'Formé 8 développeurs juniors aux bonnes pratiques et méthodologies Agile',
            ],
          },
          {
            role: 'Développeur Full-Stack',
            company: 'InnovLab Solutions',
            achievements: [
              'Développé 25+ fonctionnalités pour plateforme SaaS B2B (10,000+ utilisateurs actifs)',
              'Résolu 150+ incidents techniques avec taux de satisfaction client de 95%',
              'Collaboré avec équipe UX pour refonte interface, résultant en +20% de rétention',
              'Participé à migration vers architecture microservices, améliorant scalabilité de 300%',
            ],
          },
        ],
        education: [
          {
            degree: 'Master en Informatique - Spécialisation Intelligence Artificielle',
            institution: 'École Polytechnique Fédérale de Lausanne (EPFL)',
          },
          {
            degree: 'Licence en Sciences Informatiques',
            institution: 'Université Paris-Saclay',
          },
        ],
        skills: {
          technical: [
            'Langages : JavaScript/TypeScript, Python, Java, SQL, Go',
            'Frontend : React, Vue.js, Next.js, Tailwind CSS',
            'Backend : Node.js, Express, Django, Spring Boot, REST APIs',
            'Base de données : PostgreSQL, MongoDB, Redis, Elasticsearch',
            'DevOps : Docker, Kubernetes, Jenkins, GitLab CI/CD',
            'Cloud : AWS (EC2, S3, Lambda), Azure, Google Cloud Platform',
            'Outils : Git, Jira, Confluence, Postman, VS Code',
          ],
          soft: [
            'Leadership d\'équipe et mentorat',
            'Communication claire et documentation technique',
            'Résolution de problèmes complexes',
            'Gestion de projet Agile/Scrum',
            'Adaptabilité et apprentissage rapide',
            'Collaboration interculturelle',
          ],
        },
      },
      expected_score_after_optimization: expectedScore,
      ats_keywords_added: [
        'Full-Stack',
        'React',
        'Node.js',
        'Docker',
        'Kubernetes',
        'Agile',
        'CI/CD',
        'AWS',
        'Python',
        'Leadership',
        'Optimisation',
        'Architecture',
        'Microservices',
      ],
    };
  } else {
    return {
      final_cv: {
        header: {
          title: targetJob || 'Experienced Professional',
          subtitle: 'Expert in developing innovative solutions and process optimization',
        },
        profile_summary: `${targetJob || 'Versatile'} professional with ${analysis.overall_score >= 70 ? 'solid' : 'growing'} experience in developing innovative solutions. Recognized for ability to deliver measurable results and adapt quickly to new challenges. Passionate about operational excellence and continuous improvement.`,
        experience: [
          {
            role: targetJob || 'Senior Full-Stack Developer',
            company: 'TechCorp International',
            achievements: [
              'Designed and deployed 12+ critical web applications, increasing user engagement by 45%',
              'Optimized backend architecture, reducing response time by 60% (3s → 1.2s)',
              'Led team of 5 developers on strategic redesign project (€200K budget)',
              'Implemented automated testing suite, increasing code coverage from 30% to 85%',
              'Trained 8 junior developers in best practices and Agile methodologies',
            ],
          },
          {
            role: 'Full-Stack Developer',
            company: 'InnovLab Solutions',
            achievements: [
              'Developed 25+ features for B2B SaaS platform (10,000+ active users)',
              'Resolved 150+ technical incidents with 95% customer satisfaction rate',
              'Collaborated with UX team on interface redesign, resulting in +20% retention',
              'Participated in migration to microservices architecture, improving scalability by 300%',
            ],
          },
        ],
        education: [
          {
            degree: 'Master\'s in Computer Science - AI Specialization',
            institution: 'Swiss Federal Institute of Technology (EPFL)',
          },
          {
            degree: 'Bachelor\'s in Computer Science',
            institution: 'Paris-Saclay University',
          },
        ],
        skills: {
          technical: [
            'Languages: JavaScript/TypeScript, Python, Java, SQL, Go',
            'Frontend: React, Vue.js, Next.js, Tailwind CSS',
            'Backend: Node.js, Express, Django, Spring Boot, REST APIs',
            'Databases: PostgreSQL, MongoDB, Redis, Elasticsearch',
            'DevOps: Docker, Kubernetes, Jenkins, GitLab CI/CD',
            'Cloud: AWS (EC2, S3, Lambda), Azure, Google Cloud Platform',
            'Tools: Git, Jira, Confluence, Postman, VS Code',
          ],
          soft: [
            'Team leadership and mentoring',
            'Clear communication and technical documentation',
            'Complex problem solving',
            'Agile/Scrum project management',
            'Adaptability and fast learning',
            'Cross-cultural collaboration',
          ],
        },
      },
      expected_score_after_optimization: expectedScore,
      ats_keywords_added: [
        'Full-Stack',
        'React',
        'Node.js',
        'Docker',
        'Kubernetes',
        'Agile',
        'CI/CD',
        'AWS',
        'Python',
        'Leadership',
        'Optimization',
        'Architecture',
        'Microservices',
      ],
    };
  }
}
