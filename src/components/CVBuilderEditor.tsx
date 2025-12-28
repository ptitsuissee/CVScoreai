import { CVData } from './CVBuilder';
import { Sparkles, Plus, Trash2, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CVBuilderEditorProps {
  language: 'fr' | 'en';
  cvData: CVData;
  onChange: (data: Partial<CVData>) => void;
  isPremium: boolean;
}

const content = {
  fr: {
    sections: {
      personalInfo: 'Informations personnelles',
      jobTitle: 'Titre du poste',
      summary: 'Résumé professionnel',
      experiences: 'Expériences professionnelles',
      education: 'Formation',
      skills: 'Compétences',
      languages: 'Langues',
    },
    fields: {
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      city: 'Ville',
      country: 'Pays',
      position: 'Poste',
      company: 'Entreprise',
      startDate: 'Date de début',
      endDate: 'Date de fin',
      current: 'Poste actuel',
      description: 'Description',
      degree: 'Diplôme',
      school: 'École / Université',
      skill: 'Compétence',
      language: 'Langue',
      level: 'Niveau',
    },
    buttons: {
      improveWithAI: 'Améliorer avec l\'IA',
      addExperience: 'Ajouter une expérience',
      addEducation: 'Ajouter une formation',
      addSkill: 'Ajouter une compétence',
      addLanguage: 'Ajouter une langue',
      remove: 'Supprimer',
    },
    placeholders: {
      jobTitle: 'ex: Développeur Full-Stack Senior',
      summary: 'Décrivez votre profil professionnel en 2-3 phrases...',
      position: 'ex: Chef de projet marketing',
      company: 'ex: Google France',
      description: 'Décrivez vos missions et réalisations...',
      degree: 'ex: Master Marketing Digital',
      school: 'ex: HEC Paris',
      skill: 'ex: Python, Leadership, SEO...',
      language: 'ex: Anglais',
    },
    aiSuggestions: {
      tooVague: 'Trop vague - ajoutez des chiffres',
      missingKeywords: 'Mots-clés manquants',
      noNumbers: 'Ajoutez des résultats chiffrés',
      good: 'Excellente formulation',
    },
    levels: {
      native: 'Langue maternelle',
      fluent: 'Courant (C1-C2)',
      advanced: 'Avancé (B2)',
      intermediate: 'Intermédiaire (B1)',
      basic: 'Notions (A1-A2)',
    },
  },
  en: {
    sections: {
      personalInfo: 'Personal Information',
      jobTitle: 'Job Title',
      summary: 'Professional Summary',
      experiences: 'Professional Experience',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
    },
    fields: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      city: 'City',
      country: 'Country',
      position: 'Position',
      company: 'Company',
      startDate: 'Start Date',
      endDate: 'End Date',
      current: 'Current position',
      description: 'Description',
      degree: 'Degree',
      school: 'School / University',
      skill: 'Skill',
      language: 'Language',
      level: 'Level',
    },
    buttons: {
      improveWithAI: 'Improve with AI',
      addExperience: 'Add experience',
      addEducation: 'Add education',
      addSkill: 'Add skill',
      addLanguage: 'Add language',
      remove: 'Remove',
    },
    placeholders: {
      jobTitle: 'e.g., Senior Full-Stack Developer',
      summary: 'Describe your professional profile in 2-3 sentences...',
      position: 'e.g., Marketing Project Manager',
      company: 'e.g., Google France',
      description: 'Describe your missions and achievements...',
      degree: 'e.g., Master in Digital Marketing',
      school: 'e.g., HEC Paris',
      skill: 'e.g., Python, Leadership, SEO...',
      language: 'e.g., English',
    },
    aiSuggestions: {
      tooVague: 'Too vague - add numbers',
      missingKeywords: 'Missing keywords',
      noNumbers: 'Add quantified results',
      good: 'Excellent wording',
    },
    levels: {
      native: 'Native',
      fluent: 'Fluent (C1-C2)',
      advanced: 'Advanced (B2)',
      intermediate: 'Intermediate (B1)',
      basic: 'Basic (A1-A2)',
    },
  },
};

export function CVBuilderEditor({ language, cvData, onChange, isPremium }: CVBuilderEditorProps) {
  const t = content[language];
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['personalInfo', 'jobTitle', 'summary'])
  );
  const [aiUsageCount, setAiUsageCount] = useState(0);
  const AI_FREE_LIMIT = 3;

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const handleImproveWithAI = (field: string, value: string) => {
    if (!isPremium && aiUsageCount >= AI_FREE_LIMIT) {
      alert(language === 'fr' 
        ? '❌ Limite gratuite atteinte. Passez Premium pour une utilisation illimitée de l\'IA.' 
        : '❌ Free limit reached. Upgrade to Premium for unlimited AI usage.');
      return;
    }

    // Simulate AI improvement
    const improved = value + ' [Amélioré par IA]';
    
    if (field === 'jobTitle') {
      onChange({ jobTitle: improved });
    } else if (field === 'summary') {
      onChange({ summary: improved });
    }
    
    if (!isPremium) {
      setAiUsageCount(aiUsageCount + 1);
    }
  };

  const addExperience = () => {
    onChange({
      experiences: [
        ...cvData.experiences,
        {
          id: Date.now().toString(),
          position: '',
          company: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ],
    });
  };

  const removeExperience = (id: string) => {
    onChange({
      experiences: cvData.experiences.filter((exp) => exp.id !== id),
    });
  };

  const updateExperience = (id: string, field: string, value: any) => {
    onChange({
      experiences: cvData.experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const addEducation = () => {
    onChange({
      education: [
        ...cvData.education,
        {
          id: Date.now().toString(),
          degree: '',
          school: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      education: cvData.education.filter((edu) => edu.id !== id),
    });
  };

  const updateEducation = (id: string, field: string, value: any) => {
    onChange({
      education: cvData.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const addSkill = (skill: string) => {
    if (skill.trim()) {
      onChange({
        skills: [...cvData.skills, skill.trim()],
      });
    }
  };

  const removeSkill = (index: number) => {
    onChange({
      skills: cvData.skills.filter((_, i) => i !== index),
    });
  };

  const addLanguage = () => {
    onChange({
      languages: [
        ...cvData.languages,
        {
          id: Date.now().toString(),
          language: '',
          level: 'intermediate',
        },
      ],
    });
  };

  const removeLanguage = (id: string) => {
    onChange({
      languages: cvData.languages.filter((lang) => lang.id !== id),
    });
  };

  const updateLanguage = (id: string, field: string, value: any) => {
    onChange({
      languages: cvData.languages.map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      ),
    });
  };

  const SectionHeader = ({ title, sectionKey }: { title: string; sectionKey: string }) => {
    const isExpanded = expandedSections.has(sectionKey);
    return (
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
      >
        <h3 className="text-lg text-gray-900">{title}</h3>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
    );
  };

  const AIButton = ({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 transition-all ${
        disabled
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg'
      }`}
    >
      <Sparkles size={14} />
      {t.buttons.improveWithAI}
      {!isPremium && (
        <span className="ml-1 text-xs">({AI_FREE_LIMIT - aiUsageCount}/3)</span>
      )}
    </button>
  );

  return (
    <div className="space-y-4">
      {/* Personal Info */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <SectionHeader title={t.sections.personalInfo} sectionKey="personalInfo" />
        <AnimatePresence>
          {expandedSections.has('personalInfo') && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4 space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.firstName}</label>
                  <input
                    type="text"
                    value={cvData.personalInfo.firstName}
                    onChange={(e) =>
                      onChange({
                        personalInfo: { ...cvData.personalInfo, firstName: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.lastName}</label>
                  <input
                    type="text"
                    value={cvData.personalInfo.lastName}
                    onChange={(e) =>
                      onChange({
                        personalInfo: { ...cvData.personalInfo, lastName: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.email}</label>
                  <input
                    type="email"
                    value={cvData.personalInfo.email}
                    onChange={(e) =>
                      onChange({
                        personalInfo: { ...cvData.personalInfo, email: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.phone}</label>
                  <input
                    type="tel"
                    value={cvData.personalInfo.phone}
                    onChange={(e) =>
                      onChange({
                        personalInfo: { ...cvData.personalInfo, phone: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.city}</label>
                  <input
                    type="text"
                    value={cvData.personalInfo.city}
                    onChange={(e) =>
                      onChange({
                        personalInfo: { ...cvData.personalInfo, city: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.country}</label>
                  <input
                    type="text"
                    value={cvData.personalInfo.country}
                    onChange={(e) =>
                      onChange({
                        personalInfo: { ...cvData.personalInfo, country: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Job Title */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <SectionHeader title={t.sections.jobTitle} sectionKey="jobTitle" />
        <AnimatePresence>
          {expandedSections.has('jobTitle') && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4"
            >
              <div className="flex items-start gap-2">
                <input
                  type="text"
                  value={cvData.jobTitle}
                  onChange={(e) => onChange({ jobTitle: e.target.value })}
                  placeholder={t.placeholders.jobTitle}
                  className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <AIButton
                  onClick={() => handleImproveWithAI('jobTitle', cvData.jobTitle)}
                  disabled={!cvData.jobTitle.trim()}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <SectionHeader title={t.sections.summary} sectionKey="summary" />
        <AnimatePresence>
          {expandedSections.has('summary') && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4"
            >
              <textarea
                value={cvData.summary}
                onChange={(e) => onChange({ summary: e.target.value })}
                placeholder={t.placeholders.summary}
                rows={4}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none mb-2"
              />
              <div className="flex items-center justify-between">
                <AIButton
                  onClick={() => handleImproveWithAI('summary', cvData.summary)}
                  disabled={!cvData.summary.trim()}
                />
                {cvData.summary.length > 0 && cvData.summary.length < 50 && (
                  <div className="flex items-center gap-1 text-sm text-yellow-600">
                    <AlertCircle size={16} />
                    {t.aiSuggestions.tooVague}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Experiences */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <SectionHeader title={t.sections.experiences} sectionKey="experiences" />
        <AnimatePresence>
          {expandedSections.has('experiences') && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4 space-y-4"
            >
              {cvData.experiences.map((exp, index) => (
                <div key={exp.id} className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600">
                      {language === 'fr' ? 'Expérience' : 'Experience'} #{index + 1}
                    </span>
                    <button
                      onClick={() => removeExperience(exp.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                      placeholder={t.placeholders.position}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                      placeholder={t.placeholders.company}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="month"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                      />
                      <input
                        type="month"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                        disabled={exp.current}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none disabled:bg-gray-100"
                      />
                    </div>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={exp.current}
                        onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-sm text-gray-700">{t.fields.current}</span>
                    </label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                      placeholder={t.placeholders.description}
                      rows={3}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={addExperience}
                className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Plus size={20} />
                {t.buttons.addExperience}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Education */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <SectionHeader title={t.sections.education} sectionKey="education" />
        <AnimatePresence>
          {expandedSections.has('education') && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4 space-y-4"
            >
              {cvData.education.map((edu, index) => (
                <div key={edu.id} className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600">
                      {language === 'fr' ? 'Formation' : 'Education'} #{index + 1}
                    </span>
                    <button
                      onClick={() => removeEducation(edu.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                      placeholder={t.placeholders.degree}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={edu.school}
                      onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                      placeholder={t.placeholders.school}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="month"
                        value={edu.startDate}
                        onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                      />
                      <input
                        type="month"
                        value={edu.endDate}
                        onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={addEducation}
                className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Plus size={20} />
                {t.buttons.addEducation}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <SectionHeader title={t.sections.skills} sectionKey="skills" />
        <AnimatePresence>
          {expandedSections.has('skills') && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {cvData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full flex items-center gap-2"
                  >
                    <span>{skill}</span>
                    <button
                      onClick={() => removeSkill(index)}
                      className="hover:text-blue-900"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>

              <input
                type="text"
                placeholder={t.placeholders.skill}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addSkill((e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = '';
                  }
                }}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <p className="text-xs text-gray-500 mt-2">
                {language === 'fr' ? 'Appuyez sur Entrée pour ajouter' : 'Press Enter to add'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Languages */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <SectionHeader title={t.sections.languages} sectionKey="languages" />
        <AnimatePresence>
          {expandedSections.has('languages') && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4 space-y-4"
            >
              {cvData.languages.map((lang, index) => (
                <div key={lang.id} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={lang.language}
                    onChange={(e) => updateLanguage(lang.id, 'language', e.target.value)}
                    placeholder={t.placeholders.language}
                    className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                  <select
                    value={lang.level}
                    onChange={(e) => updateLanguage(lang.id, 'level', e.target.value)}
                    className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="native">{t.levels.native}</option>
                    <option value="fluent">{t.levels.fluent}</option>
                    <option value="advanced">{t.levels.advanced}</option>
                    <option value="intermediate">{t.levels.intermediate}</option>
                    <option value="basic">{t.levels.basic}</option>
                  </select>
                  <button
                    onClick={() => removeLanguage(lang.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}

              <button
                onClick={addLanguage}
                className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Plus size={20} />
                {t.buttons.addLanguage}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
