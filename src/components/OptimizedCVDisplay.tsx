import { CheckCircle2, Copy, Download, Sparkles, TrendingUp, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import { CVOptimizationResult } from '../services/cvOptimization';
import { useState } from 'react';

interface OptimizedCVDisplayProps {
  language: 'fr' | 'en';
  optimization: CVOptimizationResult;
}

const content = {
  fr: {
    title: 'Votre CV Optimisé',
    subtitle: 'Version professionnelle prête à candidater',
    expectedScore: 'Score Attendu',
    currentVsExpected: 'Progression',
    atsKeywords: 'Mots-clés ATS Ajoutés',
    profileSummary: 'Profil Professionnel',
    experience: 'Expérience Professionnelle',
    education: 'Formation',
    technicalSkills: 'Compétences Techniques',
    softSkills: 'Compétences Interpersonnelles',
    copyCV: 'Copier le CV',
    downloadTXT: 'Télécharger (.txt)',
    copied: 'Copié !',
  },
  en: {
    title: 'Your Optimized Resume',
    subtitle: 'Professional version ready to apply',
    expectedScore: 'Expected Score',
    currentVsExpected: 'Improvement',
    atsKeywords: 'ATS Keywords Added',
    profileSummary: 'Professional Profile',
    experience: 'Professional Experience',
    education: 'Education',
    technicalSkills: 'Technical Skills',
    softSkills: 'Soft Skills',
    copyCV: 'Copy Resume',
    downloadTXT: 'Download (.txt)',
    copied: 'Copied!',
  },
};

export function OptimizedCVDisplay({ language, optimization }: OptimizedCVDisplayProps) {
  const t = content[language];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const cvText = formatCVAsText(optimization, language);
    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const cvText = formatCVAsText(optimization, language);
    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cv-optimise-cvscore.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600';
    if (score >= 70) return 'text-blue-600';
    return 'text-orange-600';
  };

  return (
    <motion.section
      id="optimized-cv"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-20 bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Sparkles size={18} />
            <span className="text-sm">Optimisé par IA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-2">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        {/* Score Improvement Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 mb-8 border border-green-200"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-white" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t.expectedScore}</p>
                <p className={`text-3xl ${getScoreColor(optimization.expected_score_after_optimization)}`}>
                  {optimization.expected_score_after_optimization}/100
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                <Tag className="text-white" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t.atsKeywords}</p>
                <p className="text-3xl text-blue-600">
                  +{optimization.ats_keywords_added.length}
                </p>
              </div>
            </div>
          </div>

          {/* Keywords Pills */}
          <div className="mt-6 pt-6 border-t border-green-200">
            <div className="flex flex-wrap gap-2">
              {optimization.ats_keywords_added.map((keyword, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="px-3 py-1 bg-white text-sm text-gray-700 rounded-full border border-gray-200"
                >
                  {keyword}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            {copied ? (
              <>
                <CheckCircle2 size={20} />
                {t.copied}
              </>
            ) : (
              <>
                <Copy size={20} />
                {t.copyCV}
              </>
            )}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
          >
            <Download size={20} />
            {t.downloadTXT}
          </button>
        </div>

        {/* CV Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 sm:p-12"
        >
          {/* Header */}
          <div className="mb-8 pb-6 border-b-2 border-gray-200">
            <h1 className="text-3xl text-gray-900 mb-2">
              {optimization.final_cv.header.title}
            </h1>
            <p className="text-lg text-gray-600">
              {optimization.final_cv.header.subtitle}
            </p>
          </div>

          {/* Profile Summary */}
          <div className="mb-8">
            <h3 className="text-xl text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              {t.profileSummary}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {optimization.final_cv.profile_summary}
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-xl text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              {t.experience}
            </h3>
            <div className="space-y-6">
              {optimization.final_cv.experience.map((exp, index) => (
                <div key={index}>
                  <div className="mb-3">
                    <h4 className="text-lg text-gray-900">{exp.role}</h4>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-xl text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              {t.education}
            </h3>
            <div className="space-y-3">
              {optimization.final_cv.education.map((edu, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h3 className="text-xl text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              {t.technicalSkills}
            </h3>
            <div className="space-y-2">
              {optimization.final_cv.skills.technical.map((skill, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 mt-1.5 flex-shrink-0">▪</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              {t.softSkills}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {optimization.final_cv.skills.soft.map((skill, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl mb-2">
            {language === 'fr' ? 'Passez à Premium pour plus de fonctionnalités' : 'Upgrade to Premium for more features'}
          </h3>
          <p className="text-blue-100 mb-6">
            {language === 'fr'
              ? 'Export PDF professionnel, lettres de motivation IA, suivi de candidatures'
              : 'Professional PDF export, AI cover letters, application tracking'}
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
            {language === 'fr' ? 'Découvrir Premium - 9,90€/mois' : 'Discover Premium - €9.90/month'}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Helper function to format CV as plain text
function formatCVAsText(optimization: CVOptimizationResult, language: 'fr' | 'en'): string {
  const cv = optimization.final_cv;
  const t = language === 'fr' ? {
    profile: 'PROFIL PROFESSIONNEL',
    experience: 'EXPÉRIENCE PROFESSIONNELLE',
    education: 'FORMATION',
    technicalSkills: 'COMPÉTENCES TECHNIQUES',
    softSkills: 'COMPÉTENCES INTERPERSONNELLES',
  } : {
    profile: 'PROFESSIONAL PROFILE',
    experience: 'PROFESSIONAL EXPERIENCE',
    education: 'EDUCATION',
    technicalSkills: 'TECHNICAL SKILLS',
    softSkills: 'SOFT SKILLS',
  };

  let text = `${cv.header.title.toUpperCase()}\n`;
  text += `${cv.header.subtitle}\n\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━��━━━━━━━━\n\n`;

  text += `${t.profile}\n`;
  text += `${cv.profile_summary}\n\n`;

  text += `${t.experience}\n\n`;
  cv.experience.forEach(exp => {
    text += `${exp.role}\n`;
    text += `${exp.company}\n`;
    exp.achievements.forEach(achievement => {
      text += `  • ${achievement}\n`;
    });
    text += `\n`;
  });

  text += `${t.education}\n\n`;
  cv.education.forEach(edu => {
    text += `  ✓ ${edu.degree}\n`;
    text += `    ${edu.institution}\n\n`;
  });

  text += `${t.technicalSkills}\n`;
  cv.skills.technical.forEach(skill => {
    text += `  ▪ ${skill}\n`;
  });
  text += `\n`;

  text += `${t.softSkills}\n`;
  cv.skills.soft.forEach(skill => {
    text += `  ✓ ${skill}\n`;
  });

  return text;
}
