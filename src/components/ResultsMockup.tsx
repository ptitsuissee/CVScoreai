import { AlertCircle, CheckCircle2, TrendingUp, Lightbulb, Globe, Zap, Wand2, Crown } from 'lucide-react';
import { motion } from 'motion/react';
import { CVAnalysisResult } from '../services/cvAnalysis';
import { useState } from 'react';

interface ResultsMockupProps {
  language: 'fr' | 'en';
  analysis: CVAnalysisResult;
  onOptimize?: () => void;
  onUpgradePremium?: () => void;
}

const content = {
  fr: {
    title: 'Résultat de l\'Analyse',
    overallScore: 'Score Global',
    subscores: 'Scores Détaillés',
    clarity: 'Clarté',
    impact: 'Impact',
    structure: 'Structure',
    atsCompatibility: 'Compatibilité ATS',
    summary: 'Résumé',
    priorities: 'Priorités à corriger',
    detailedFeedback: 'Analyse Détaillée',
    actionableTips: 'Conseils Concrets',
    countryAdvice: 'Conseils Spécifiques au Pays',
    optimizeCV: 'Optimiser mon CV avec l\'IA',
    optimizeDescription: 'Laissez l\'IA réécrire votre CV en appliquant tous ces conseils',
    premiumAnalysis: 'Débloquer l\'Analyse Premium',
    premiumDescription: 'Feedback ligne par ligne + recommandations carrière stratégiques',
  },
  en: {
    title: 'Analysis Results',
    overallScore: 'Overall Score',
    subscores: 'Detailed Scores',
    clarity: 'Clarity',
    impact: 'Impact',
    structure: 'Structure',
    atsCompatibility: 'ATS Compatibility',
    summary: 'Summary',
    priorities: 'Priorities to Fix',
    detailedFeedback: 'Detailed Analysis',
    actionableTips: 'Actionable Tips',
    countryAdvice: 'Country-Specific Advice',
    optimizeCV: 'Optimize my Resume with AI',
    optimizeDescription: 'Let AI rewrite your resume by applying all these tips',
    premiumAnalysis: 'Unlock Premium Analysis',
    premiumDescription: 'Line-by-line feedback + strategic career recommendations',
  },
};

export function ResultsMockup({ language, analysis, onOptimize, onUpgradePremium }: ResultsMockupProps) {
  const t = content[language];

  const scoreData = [
    { key: 'clarity', name: t.clarity, value: analysis.sub_scores.clarity, color: 'bg-blue-600' },
    { key: 'impact', name: t.impact, value: analysis.sub_scores.impact, color: 'bg-purple-600' },
    { key: 'structure', name: t.structure, value: analysis.sub_scores.structure, color: 'bg-green-600' },
    { key: 'atsCompatibility', name: t.atsCompatibility, value: analysis.sub_scores.ats_compatibility, color: 'bg-orange-600' },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <motion.section
      id="results"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.title}</h2>
        </div>

        {/* Overall Score Card */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border border-blue-200"
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

          {/* Summary */}
          <div className="bg-white rounded-xl p-6 mb-6">
            <p className="text-gray-700 leading-relaxed">{analysis.summary}</p>
          </div>

          {/* Subscores */}
          <div className="bg-white rounded-xl p-6">
            <h4 className="text-sm text-gray-700 mb-4">{t.subscores}</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {scoreData.map((score, index) => (
                <motion.div
                  key={score.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between text-sm text-gray-700 mb-2">
                    <span>{score.name}</span>
                    <span className={getScoreColor(score.value)}>{score.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${score.value}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className={`h-full ${score.color} rounded-full`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Premium Analysis CTA */}
        {onUpgradePremium && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl p-8 text-center text-white mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Crown size={16} />
              <span className="text-sm">Premium</span>
            </div>
            <h3 className="text-2xl mb-2">{t.premiumAnalysis}</h3>
            <p className="text-yellow-100 mb-6">{t.premiumDescription}</p>
            <button
              onClick={onUpgradePremium}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-50 transition-colors shadow-xl"
            >
              <Crown size={20} />
              <span className="text-lg">{t.premiumAnalysis}</span>
            </button>
          </motion.div>
        )}

        {/* AI Optimization CTA */}
        {onOptimize && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <Wand2 size={16} />
              <span className="text-sm">IA Optimisation</span>
            </div>
            <h3 className="text-2xl mb-2">{t.optimizeCV}</h3>
            <p className="text-purple-100 mb-6">{t.optimizeDescription}</p>
            <button
              onClick={onOptimize}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-50 transition-colors shadow-xl"
            >
              <Wand2 size={20} />
              <span className="text-lg">{t.optimizeCV}</span>
            </button>
          </motion.div>
        )}

        {/* Priority Fixes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <AlertCircle className="text-white" size={20} />
            </div>
            <h3 className="text-xl text-gray-900">{t.priorities}</h3>
          </div>

          <div className="space-y-4">
            {analysis.priority_fixes.map((fix, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm text-orange-600">{index + 1}</span>
                </div>
                <p className="text-gray-700">{fix}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Feedback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-blue-600" size={20} />
            </div>
            <h3 className="text-xl text-gray-900">{t.detailedFeedback}</h3>
          </div>

          <div className="space-y-6">
            {analysis.detailed_feedback.map((feedback, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-gray-900 mb-2">{feedback.section}</h4>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Problème :</span> {feedback.issue}
                </p>
                <p className="text-sm text-green-700 bg-green-50 rounded p-2">
                  <span className="font-medium">✓ Recommandation :</span> {feedback.recommendation}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Actionable Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Lightbulb className="text-white" size={20} />
            </div>
            <h3 className="text-xl text-gray-900">{t.actionableTips}</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {analysis.actionable_tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Country-Specific Advice */}
        {analysis.country_specific_advice && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="text-white" size={20} />
              </div>
              <h3 className="text-xl text-gray-900">{t.countryAdvice}</h3>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-700">{analysis.country_specific_advice}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
