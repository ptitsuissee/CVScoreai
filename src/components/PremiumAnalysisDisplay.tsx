import { Crown, TrendingUp, CheckCircle2, AlertCircle, ArrowRight, Target, Calendar, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { PremiumAnalysisResult } from '../services/premiumAnalysis';

interface PremiumAnalysisDisplayProps {
  language: 'fr' | 'en';
  analysis: PremiumAnalysisResult;
}

const content = {
  fr: {
    title: 'Analyse Premium Approfondie',
    subtitle: 'Accompagnement professionnel complet',
    overallScore: 'Score Global',
    sectionScores: 'Scores par Section',
    profile: 'Profil',
    experience: 'Expérience',
    skills: 'Compétences',
    education: 'Formation',
    ats: 'ATS',
    strengths: 'Forces Identifiées',
    weaknesses: 'Axes d\'Amélioration',
    lineByLine: 'Feedback Ligne par Ligne',
    original: 'Original',
    improved: 'Version Améliorée',
    reason: 'Pourquoi',
    careerRec: 'Recommandations Carrière',
    nextSteps: 'Plan d\'Action 7 Jours',
  },
  en: {
    title: 'In-Depth Premium Analysis',
    subtitle: 'Complete professional coaching',
    overallScore: 'Overall Score',
    sectionScores: 'Section Scores',
    profile: 'Profile',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    ats: 'ATS',
    strengths: 'Identified Strengths',
    weaknesses: 'Areas for Improvement',
    lineByLine: 'Line-by-Line Feedback',
    original: 'Original',
    improved: 'Improved Version',
    reason: 'Why',
    careerRec: 'Career Recommendations',
    nextSteps: '7-Day Action Plan',
  },
};

export function PremiumAnalysisDisplay({ language, analysis }: PremiumAnalysisDisplayProps) {
  const t = content[language];

  const sectionScoresData = [
    { key: 'profile', name: t.profile, value: analysis.section_scores.profile, color: 'bg-blue-600' },
    { key: 'experience', name: t.experience, value: analysis.section_scores.experience, color: 'bg-purple-600' },
    { key: 'skills', name: t.skills, value: analysis.section_scores.skills, color: 'bg-green-600' },
    { key: 'education', name: t.education, value: analysis.section_scores.education, color: 'bg-indigo-600' },
    { key: 'ats', name: t.ats, value: analysis.section_scores.ats, color: 'bg-orange-600' },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-20 bg-gradient-to-b from-yellow-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full mb-4">
            <Crown size={18} />
            <span className="text-sm">Premium Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-2">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        {/* Overall Score */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl text-gray-900">{t.overallScore}</h3>
            <div className="text-right">
              <div className={`text-5xl ${getScoreColor(analysis.overall_score)}`}>
                {analysis.overall_score}
              </div>
              <div className="text-gray-600">/100</div>
            </div>
          </div>

          {/* Section Scores */}
          <div className="bg-white rounded-xl p-6">
            <h4 className="text-sm text-gray-700 mb-4">{t.sectionScores}</h4>
            <div className="space-y-4">
              {sectionScoresData.map((section, index) => (
                <motion.div
                  key={section.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between text-sm text-gray-700 mb-2">
                    <span>{section.name}</span>
                    <span className={getScoreColor(section.value)}>{section.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${section.value}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className={`h-full ${section.color} rounded-full`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Strengths & Weaknesses */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="text-white" size={20} />
              </div>
              <h3 className="text-xl text-gray-900">{t.strengths}</h3>
            </div>

            <div className="space-y-3">
              {analysis.strengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-3">
                  <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{strength}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Weaknesses */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-orange-50 border border-orange-200 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <AlertCircle className="text-white" size={20} />
              </div>
              <h3 className="text-xl text-gray-900">{t.weaknesses}</h3>
            </div>

            <div className="space-y-3">
              {analysis.weaknesses.map((weakness, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-3">
                  <AlertCircle size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{weakness}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Line by Line Feedback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white border-2 border-blue-200 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-white" size={20} />
            </div>
            <h3 className="text-xl text-gray-900">{t.lineByLine}</h3>
          </div>

          <div className="space-y-6">
            {analysis.line_by_line_feedback.map((feedback, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-gray-50 rounded-xl p-5 border border-gray-200"
              >
                {/* Original */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">{t.original}</span>
                  </div>
                  <p className="text-sm text-gray-700 italic line-through opacity-75">
                    "{feedback.original_line}"
                  </p>
                </div>

                {/* Improved */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">{t.improved}</span>
                  </div>
                  <p className="text-sm text-gray-900 font-medium">
                    "{feedback.improved_version}"
                  </p>
                </div>

                {/* Reason */}
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <div className="flex items-start gap-2">
                    <Lightbulb size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{t.reason} :</span>
                      <p className="text-xs text-gray-700 mt-1">{feedback.reason}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Target className="text-white" size={20} />
            </div>
            <h3 className="text-xl text-gray-900">{t.careerRec}</h3>
          </div>

          <div className="space-y-4">
            {analysis.career_recommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-purple-100">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-purple-600">{index + 1}</span>
                </div>
                <p className="text-sm text-gray-700">{rec}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Next Steps 7 Days */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Calendar className="text-white" size={24} />
            </div>
            <h3 className="text-2xl">{t.nextSteps}</h3>
          </div>

          <div className="space-y-4">
            {analysis.next_steps_7_days.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowRight size={16} className="text-white" />
                </div>
                <p className="text-sm text-white">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
