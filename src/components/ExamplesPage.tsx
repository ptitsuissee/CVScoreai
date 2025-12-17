import { ArrowRight, CheckCircle2, XCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface ExamplesPageProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Exemples de CV Analysés',
    subtitle: 'Découvrez comment CVScore.ai transforme les CV',
    beforeAfter: 'Avant / Après',
    score: 'Score',
    improvements: 'Améliorations apportées',
    viewAnalysis: 'Voir l\'analyse complète',
    examples: [
      {
        name: 'Marie Dupont',
        role: 'Développeuse Full-Stack',
        scoreBefore: 45,
        scoreAfter: 89,
        before: {
          issues: [
            'Descriptions vagues sans résultats chiffrés',
            'Compétences techniques non structurées',
            'Format non optimisé pour les ATS',
            'Manque de mots-clés pertinents',
          ],
        },
        after: {
          improvements: [
            'Ajout de métriques : "Réduit le temps de chargement de 60%"',
            'Compétences organisées par catégories (Frontend, Backend, DevOps)',
            'Format ATS-compatible avec sections claires',
            'Intégration de mots-clés spécifiques au poste visé',
          ],
        },
      },
      {
        name: 'Thomas Martin',
        role: 'Chef de Projet Marketing',
        scoreBefore: 52,
        scoreAfter: 91,
        before: {
          issues: [
            'Trop de texte, sections longues et denses',
            'Responsabilités listées au lieu de réalisations',
            'Absence d\'indicateurs de performance',
            'Design surchargé et difficile à lire',
          ],
        },
        after: {
          improvements: [
            'Réduit de 40% en gardant l\'essentiel',
            'Transformé en réalisations : "Augmentation ROI de 150%"',
            'KPIs ajoutés : budget géré, équipes managées, croissance',
            'Design épuré avec hiérarchie visuelle claire',
          ],
        },
      },
      {
        name: 'Sophie Bernard',
        role: 'Étudiante en Commerce',
        scoreBefore: 38,
        scoreAfter: 82,
        before: {
          issues: [
            'Trop d\'accent sur les études, peu sur l\'expérience',
            'Stages décrits de manière générique',
            'Compétences soft non démontrées',
            'Absence de projets académiques pertinents',
          ],
        },
        after: {
          improvements: [
            'Équilibre études/expérience avec mise en avant des stages',
            'Missions concrètes : "Analysé 500+ feedbacks clients"',
            'Exemples concrets : "Leadership dans projet associatif de 30 membres"',
            'Ajout de projets académiques avec résultats mesurables',
          ],
        },
      },
    ],
  },
  en: {
    title: 'Resume Analysis Examples',
    subtitle: 'See how CVScore.ai transforms resumes',
    beforeAfter: 'Before / After',
    score: 'Score',
    improvements: 'Improvements Made',
    viewAnalysis: 'View Full Analysis',
    examples: [
      {
        name: 'Marie Dupont',
        role: 'Full-Stack Developer',
        scoreBefore: 45,
        scoreAfter: 89,
        before: {
          issues: [
            'Vague descriptions without quantified results',
            'Unstructured technical skills',
            'Non-ATS optimized format',
            'Missing relevant keywords',
          ],
        },
        after: {
          improvements: [
            'Added metrics: "Reduced loading time by 60%"',
            'Skills organized by categories (Frontend, Backend, DevOps)',
            'ATS-compatible format with clear sections',
            'Integration of job-specific keywords',
          ],
        },
      },
      {
        name: 'Thomas Martin',
        role: 'Marketing Project Manager',
        scoreBefore: 52,
        scoreAfter: 91,
        before: {
          issues: [
            'Too much text, long and dense sections',
            'Responsibilities listed instead of achievements',
            'No performance indicators',
            'Cluttered design, difficult to read',
          ],
        },
        after: {
          improvements: [
            'Reduced by 40% keeping the essentials',
            'Transformed into achievements: "Increased ROI by 150%"',
            'Added KPIs: budget managed, teams led, growth',
            'Clean design with clear visual hierarchy',
          ],
        },
      },
      {
        name: 'Sophie Bernard',
        role: 'Business Student',
        scoreBefore: 38,
        scoreAfter: 82,
        before: {
          issues: [
            'Too much focus on studies, little on experience',
            'Internships described generically',
            'Soft skills not demonstrated',
            'No relevant academic projects',
          ],
        },
        after: {
          improvements: [
            'Balanced studies/experience with internship highlights',
            'Concrete missions: "Analyzed 500+ customer feedbacks"',
            'Concrete examples: "Led student association project with 30 members"',
            'Added academic projects with measurable results',
          ],
        },
      },
    ],
  },
};

export function ExamplesPage({ language }: ExamplesPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Examples */}
        <div className="space-y-16">
          {t.examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl mb-2">{example.name}</h3>
                    <p className="text-blue-100">{example.role}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-sm text-blue-100 mb-1">Avant</div>
                      <div className="text-3xl">{example.scoreBefore}/100</div>
                    </div>
                    <ArrowRight size={32} className="text-blue-200" />
                    <div className="text-center">
                      <div className="text-sm text-blue-100 mb-1">Après</div>
                      <div className="text-3xl">{example.scoreAfter}/100</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Before */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <XCircle className="text-red-600" size={20} />
                    </div>
                    <h4 className="text-lg text-gray-900">Avant</h4>
                  </div>
                  <div className="space-y-3">
                    {example.before.issues.map((issue, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                        <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                        <p className="text-sm text-gray-700">{issue}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="text-green-600" size={20} />
                    </div>
                    <h4 className="text-lg text-gray-900">Après</h4>
                  </div>
                  <div className="space-y-3">
                    {example.after.improvements.map((improvement, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <p className="text-sm text-gray-700">{improvement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Score Improvement Visualization */}
              <div className="px-8 pb-8">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="text-green-600" size={20} />
                    <span className="text-gray-900">
                      {language === 'fr' ? 'Progression' : 'Improvement'}: +{example.scoreAfter - example.scoreBefore} points
                    </span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: `${example.scoreBefore}%` }}
                      animate={{ width: `${example.scoreAfter}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-green-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl mb-4">
            {language === 'fr' ? 'Prêt à améliorer votre CV ?' : 'Ready to improve your resume?'}
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            {language === 'fr'
              ? 'Obtenez votre analyse personnalisée en quelques secondes'
              : 'Get your personalized analysis in seconds'}
          </p>
          <a
            href="#analyze"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all shadow-xl"
          >
            <span className="text-lg">
              {language === 'fr' ? 'Analyser mon CV gratuitement' : 'Analyze my Resume for Free'}
            </span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
