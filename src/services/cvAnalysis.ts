// Service d'analyse CV avec IA
// Dans un environnement de production, ce service ferait un appel API à un backend
// qui utiliserait OpenAI/Anthropic avec le prompt système fourni

export interface CVAnalysisResult {
  overall_score: number;
  sub_scores: {
    clarity: number;
    impact: number;
    structure: number;
    ats_compatibility: number;
  };
  summary: string;
  priority_fixes: string[];
  detailed_feedback: Array<{
    section: string;
    issue: string;
    recommendation: string;
  }>;
  actionable_tips: string[];
  country_specific_advice: string;
}

interface AnalysisRequest {
  cvText: string;
  targetJob?: string;
  country: string;
  language: 'fr' | 'en';
}

const SYSTEM_PROMPT = `🔒 RÔLE (SYSTEM PROMPT)

Tu es un recruteur européen senior, spécialiste du tri de CV, des logiciels ATS et des standards de recrutement en Europe (France, Suisse, Allemagne, Italie, Espagne).
Tu analyses des CV pour des étudiants, juniors et professionnels.
Ton objectif est d'aider le candidat à augmenter ses chances d'entretien, avec un feedback clair, honnête, direct et actionnable.
Tu évites le jargon inutile.

📤 SORTIE ATTENDUE (OBLIGATOIRE)

⚠️ Tu dois répondre UNIQUEMENT en JSON valide, sans texte avant ou après.

{
  "overall_score": 0,
  "sub_scores": {
    "clarity": 0,
    "impact": 0,
    "structure": 0,
    "ats_compatibility": 0
  },
  "summary": "",
  "priority_fixes": [
    "",
    "",
    ""
  ],
  "detailed_feedback": [
    {
      "section": "",
      "issue": "",
      "recommendation": ""
    }
  ],
  "actionable_tips": [
    "",
    "",
    "",
    "",
    ""
  ],
  "country_specific_advice": ""
}

📏 RÈGLES DE NOTATION (TRÈS IMPORTANT)

Toutes les notes sont entre 0 et 100
La note globale doit refléter la qualité réelle du CV (pas indulgente)

Critères :
- Clarity : lisibilité, langage simple, phrases compréhensibles
- Impact : résultats chiffrés, verbes d'action, valeur apportée
- Structure : organisation, hiérarchie, cohérence des sections
- ATS compatibility : mots-clés, format simple, absence de tableaux/images

Si le CV est faible, la note peut être < 50

🎯 RÈGLES DE FEEDBACK

Chaque conseil doit être concret et applicable immédiatement

❌ Pas de phrases vagues ("améliore la clarté")
✅ Exemples précis :
- "Remplace 'responsable de' par un verbe d'action"
- "Ajoute un chiffre mesurant ton impact"

Adapte toujours l'analyse :
- au poste visé
- au pays
- aux standards européens

🌍 ADAPTATION PAR PAYS

🇫🇷 France : CV clair, 1 page, pas de photo obligatoire
🇨🇭 Suisse : ton professionnel, structuré, factuel
🇩🇪 Allemagne : CV détaillé, chronologique, sérieux
🇪🇺 Europe : format sobre, ATS-friendly`;

// Fonction pour simuler l'appel à l'IA
// En production, ceci appellerait votre backend qui utilise OpenAI/Claude
export async function analyzeCVWithAI(request: AnalysisRequest): Promise<CVAnalysisResult> {
  // Simulation d'un délai réseau
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Dans un environnement réel, vous feriez :
  // const response = await fetch('/api/analyze-cv', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     systemPrompt: SYSTEM_PROMPT,
  //     userPrompt: buildUserPrompt(request),
  //   }),
  // });
  // return response.json();

  // Pour la démo, on retourne un résultat simulé basé sur l'analyse du CV
  return generateMockAnalysis(request);
}

function buildUserPrompt(request: AnalysisRequest): string {
  return `📥 ENTRÉE UTILISATEUR (USER PROMPT)

Langue de réponse : ${request.language === 'fr' ? 'FR' : 'EN'}
Pays ciblé : ${request.country}
Poste visé (optionnel) : ${request.targetJob || 'Non spécifié'}

Voici le CV à analyser :
${request.cvText}`;
}

// Fonction pour générer une analyse simulée intelligente
function generateMockAnalysis(request: AnalysisRequest): CVAnalysisResult {
  const { cvText, targetJob, country, language } = request;
  
  // Analyse basique du CV
  const wordCount = cvText.split(/\s+/).length;
  const hasNumbers = /\d+%|\d+\s*(euros?|€|\$|CHF)/i.test(cvText);
  const hasActionVerbs = /(développé|géré|créé|augmenté|réduit|optimisé|lancé|piloté|coordonné|developed|managed|created|increased|reduced|optimized|launched|led|coordinated)/i.test(cvText);
  const hasSections = /(expérience|formation|compétence|experience|education|skills)/i.test(cvText);
  
  // Calcul des scores
  let clarity = 50;
  let impact = 40;
  let structure = 45;
  let ats = 50;

  // Ajustements basés sur l'analyse
  if (wordCount > 100 && wordCount < 500) clarity += 20;
  if (wordCount > 500) clarity += 30;
  
  if (hasNumbers) impact += 25;
  if (hasActionVerbs) impact += 20;
  
  if (hasSections) structure += 30;
  if (wordCount > 200) structure += 15;
  
  if (!cvText.includes('|') && !cvText.includes('tableau')) ats += 25;
  if (hasActionVerbs) ats += 15;

  const overall = Math.round((clarity + impact + structure + ats) / 4);

  if (language === 'fr') {
    return {
      overall_score: overall,
      sub_scores: {
        clarity,
        impact,
        structure,
        ats_compatibility: ats,
      },
      summary: overall >= 80 
        ? `Excellent CV ! Bien structuré et percutant. Quelques ajustements mineurs permettront d'atteindre l'excellence.`
        : overall >= 60
        ? `CV correct avec des bases solides. Plusieurs améliorations importantes augmenteront significativement son impact.`
        : `CV nécessitant des améliorations substantielles. Les recommandations ci-dessous sont prioritaires pour maximiser vos chances.`,
      priority_fixes: [
        hasNumbers ? 'Ajoutez encore plus de résultats chiffrés dans chaque expérience' : 'Quantifiez vos réalisations avec des chiffres concrets (%, €, nombre)',
        hasActionVerbs ? 'Variez vos verbes d\'action pour plus d\'impact' : 'Commencez chaque réalisation par un verbe d\'action fort (développé, optimisé, piloté)',
        hasSections ? 'Optimisez la hiérarchie visuelle des sections' : 'Structurez votre CV en sections claires (Expérience, Formation, Compétences)',
      ],
      detailed_feedback: [
        {
          section: 'Expériences professionnelles',
          issue: impact < 60 ? 'Descriptions trop génériques, manque de résultats mesurables' : 'Bonnes bases mais peut être renforcé',
          recommendation: 'Pour chaque mission, ajoutez : "Résultat obtenu : +X% de Y" ou "Impact : économie de X€"',
        },
        {
          section: 'Compétences',
          issue: ats < 70 ? 'Mots-clés insuffisants pour passer les filtres ATS' : 'Bonne présence de mots-clés',
          recommendation: targetJob 
            ? `Ajoutez les compétences spécifiques au poste de ${targetJob} (frameworks, outils, certifications)`
            : 'Listez vos compétences techniques avec le niveau de maîtrise',
        },
        {
          section: 'Format général',
          issue: structure < 70 ? 'Structure peu claire, difficile à scanner rapidement' : 'Structure acceptable',
          recommendation: 'Utilisez des puces, espacez les sections, limitez à 1-2 pages maximum',
        },
      ],
      actionable_tips: [
        'Remplacez "Responsable de..." par "Piloté la stratégie X, résultat : +25% de Y"',
        'Ajoutez une section "Projets clés" si vous êtes junior',
        `Adaptez votre CV aux standards ${country === 'CH' ? 'suisses (factuel, sobre)' : country === 'FR' ? 'français (1 page, synthétique)' : 'européens (ATS-friendly)'}`,
        'Supprimez les informations obsolètes (>10 ans) sauf si pertinentes',
        'Relisez pour corriger toute faute d\'orthographe (éliminatoire)',
      ],
      country_specific_advice: country === 'FR'
        ? '🇫🇷 France : Privilégiez un CV d\'1 page, format chronologique inversé. La photo n\'est pas obligatoire. Soyez concis et factuel.'
        : country === 'CH'
        ? '🇨🇭 Suisse : Ton très professionnel exigé. Mentionnez vos références. Format sobre. Salaire attendu peut être demandé.'
        : country === 'DE'
        ? '🇩🇪 Allemagne : CV détaillé accepté (2-3 pages). Photo professionnelle recommandée. Ordre chronologique strict.'
        : '🇪🇺 Europe : Format sobre et ATS-compatible. Évitez les tableaux et designs complexes. Mots-clés essentiels.',
    };
  } else {
    return {
      overall_score: overall,
      sub_scores: {
        clarity,
        impact,
        structure,
        ats_compatibility: ats,
      },
      summary: overall >= 80 
        ? `Excellent resume! Well-structured and impactful. A few minor adjustments will help you reach perfection.`
        : overall >= 60
        ? `Decent resume with solid foundations. Several important improvements will significantly increase its impact.`
        : `Resume requiring substantial improvements. The recommendations below are priorities to maximize your chances.`,
      priority_fixes: [
        hasNumbers ? 'Add even more quantified results in each experience' : 'Quantify your achievements with concrete numbers (%, €, count)',
        hasActionVerbs ? 'Vary your action verbs for more impact' : 'Start each achievement with a strong action verb (developed, optimized, led)',
        hasSections ? 'Optimize the visual hierarchy of sections' : 'Structure your resume in clear sections (Experience, Education, Skills)',
      ],
      detailed_feedback: [
        {
          section: 'Professional Experience',
          issue: impact < 60 ? 'Too generic descriptions, lack of measurable results' : 'Good foundation but can be strengthened',
          recommendation: 'For each mission, add: "Result achieved: +X% of Y" or "Impact: saved X€"',
        },
        {
          section: 'Skills',
          issue: ats < 70 ? 'Insufficient keywords to pass ATS filters' : 'Good keyword presence',
          recommendation: targetJob 
            ? `Add specific skills for the ${targetJob} position (frameworks, tools, certifications)`
            : 'List your technical skills with proficiency level',
        },
        {
          section: 'Overall Format',
          issue: structure < 70 ? 'Unclear structure, difficult to scan quickly' : 'Acceptable structure',
          recommendation: 'Use bullet points, space out sections, limit to 1-2 pages maximum',
        },
      ],
      actionable_tips: [
        'Replace "Responsible for..." with "Led X strategy, result: +25% of Y"',
        'Add a "Key Projects" section if you\'re junior',
        `Adapt your resume to ${country === 'CH' ? 'Swiss standards (factual, sober)' : country === 'FR' ? 'French standards (1 page, concise)' : 'European standards (ATS-friendly)'}`,
        'Remove outdated information (>10 years) unless relevant',
        'Proofread to correct any spelling mistakes (eliminatory)',
      ],
      country_specific_advice: country === 'FR'
        ? '🇫🇷 France: Prefer a 1-page resume, reverse chronological format. Photo not mandatory. Be concise and factual.'
        : country === 'CH'
        ? '🇨🇭 Switzerland: Very professional tone required. Mention your references. Sober format. Expected salary may be requested.'
        : country === 'DE'
        ? '🇩🇪 Germany: Detailed resume accepted (2-3 pages). Professional photo recommended. Strict chronological order.'
        : '🇪🇺 Europe: Sober and ATS-compatible format. Avoid tables and complex designs. Keywords essential.',
    };
  }
}
