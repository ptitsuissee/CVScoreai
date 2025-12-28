import { useState } from 'react';
import { Plus, Trash2, Sparkles, AlertCircle } from 'lucide-react';
import { AIAssistanceButton } from './AIAssistanceButton';

interface CVEditorFormProps {
  language: 'fr' | 'en';
  data: any;
  onUpdate: (data: any) => void;
}

const content = {
  fr: {
    sections: {
      personal: 'Informations personnelles',
      summary: 'Résumé professionnel',
      experience: 'Expériences professionnelles',
      education: 'Formation',
      skills: 'Compétences',
      languages: 'Langues',
    },
    fields: {
      name: 'Nom complet',
      title: 'Titre du poste',
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      linkedin: 'LinkedIn',
      summaryPlaceholder: 'Décris ton parcours professionnel et tes objectifs en quelques lignes...',
      jobTitle: 'Titre du poste',
      company: 'Entreprise',
      startDate: 'Date de début',
      endDate: 'Date de fin',
      current: 'Poste actuel',
      description: 'Description',
      degree: 'Diplôme',
      school: 'École / Université',
      year: 'Année',
      skillName: 'Compétence',
      level: 'Niveau',
      language: 'Langue',
      proficiency: 'Niveau',
    },
    actions: {
      add: 'Ajouter',
      addExperience: 'Ajouter une expérience',
      addEducation: 'Ajouter une formation',
      addSkill: 'Ajouter une compétence',
      addLanguage: 'Ajouter une langue',
      delete: 'Supprimer',
    },
    hints: {
      summaryTooShort: 'Ton résumé est un peu court. Ajoute des détails sur tes compétences clés.',
      noNumbers: 'Ajoute des résultats chiffrés pour plus d\'impact',
      tooGeneric: 'Cette description est trop générique',
    },
    levels: {
      beginner: 'Débutant',
      intermediate: 'Intermédiaire',
      advanced: 'Avancé',
      expert: 'Expert',
    },
    proficiency: {
      basic: 'Basique',
      conversational: 'Courant',
      fluent: 'Courant',
      native: 'Natif',
    },
  },
  en: {
    sections: {
      personal: 'Personal Information',
      summary: 'Professional Summary',
      experience: 'Work Experience',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
    },
    fields: {
      name: 'Full Name',
      title: 'Job Title',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      linkedin: 'LinkedIn',
      summaryPlaceholder: 'Describe your professional background and goals in a few lines...',
      jobTitle: 'Job Title',
      company: 'Company',
      startDate: 'Start Date',
      endDate: 'End Date',
      current: 'Current Position',
      description: 'Description',
      degree: 'Degree',
      school: 'School / University',
      year: 'Year',
      skillName: 'Skill',
      level: 'Level',
      language: 'Language',
      proficiency: 'Proficiency',
    },
    actions: {
      add: 'Add',
      addExperience: 'Add Experience',
      addEducation: 'Add Education',
      addSkill: 'Add Skill',
      addLanguage: 'Add Language',
      delete: 'Delete',
    },
    hints: {
      summaryTooShort: 'Your summary is a bit short. Add details about your key skills.',
      noNumbers: 'Add quantified results for more impact',
      tooGeneric: 'This description is too generic',
    },
    levels: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      expert: 'Expert',
    },
    proficiency: {
      basic: 'Basic',
      conversational: 'Conversational',
      fluent: 'Fluent',
      native: 'Native',
    },
  },
};

export function CVEditorForm({ language, data, onUpdate }: CVEditorFormProps) {
  const t = content[language];

  const updatePersonalInfo = (field: string, value: string) => {
    onUpdate({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [field]: value,
      },
    });
  };

  const updateSummary = (value: string) => {
    onUpdate({ ...data, summary: value });
  };

  const addExperience = () => {
    onUpdate({
      ...data,
      experiences: [
        ...data.experiences,
        {
          id: Date.now(),
          jobTitle: '',
          company: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ],
    });
  };

  const updateExperience = (id: number, field: string, value: any) => {
    onUpdate({
      ...data,
      experiences: data.experiences.map((exp: any) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const deleteExperience = (id: number) => {
    onUpdate({
      ...data,
      experiences: data.experiences.filter((exp: any) => exp.id !== id),
    });
  };

  const addEducation = () => {
    onUpdate({
      ...data,
      education: [
        ...data.education,
        {
          id: Date.now(),
          degree: '',
          school: '',
          year: '',
          description: '',
        },
      ],
    });
  };

  const updateEducation = (id: number, field: string, value: string) => {
    onUpdate({
      ...data,
      education: data.education.map((edu: any) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const deleteEducation = (id: number) => {
    onUpdate({
      ...data,
      education: data.education.filter((edu: any) => edu.id !== id),
    });
  };

  const addSkill = () => {
    onUpdate({
      ...data,
      skills: [
        ...data.skills,
        { id: Date.now(), name: '', level: 'intermediate' },
      ],
    });
  };

  const updateSkill = (id: number, field: string, value: string) => {
    onUpdate({
      ...data,
      skills: data.skills.map((skill: any) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    });
  };

  const deleteSkill = (id: number) => {
    onUpdate({
      ...data,
      skills: data.skills.filter((skill: any) => skill.id !== id),
    });
  };

  const addLanguage = () => {
    onUpdate({
      ...data,
      languages: [
        ...data.languages,
        { id: Date.now(), name: '', proficiency: 'conversational' },
      ],
    });
  };

  const updateLanguage = (id: number, field: string, value: string) => {
    onUpdate({
      ...data,
      languages: data.languages.map((lang: any) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      ),
    });
  };

  const deleteLanguage = (id: number) => {
    onUpdate({
      ...data,
      languages: data.languages.filter((lang: any) => lang.id !== id),
    });
  };

  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
          {t.sections.personal}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-700 mb-1">{t.fields.name}</label>
            <input
              type="text"
              value={data.personalInfo?.name || ''}
              onChange={(e) => updatePersonalInfo('name', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-700 mb-1">{t.fields.title}</label>
            <input
              type="text"
              value={data.personalInfo?.title || ''}
              onChange={(e) => updatePersonalInfo('title', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">{t.fields.email}</label>
            <input
              type="email"
              value={data.personalInfo?.email || ''}
              onChange={(e) => updatePersonalInfo('email', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">{t.fields.phone}</label>
            <input
              type="tel"
              value={data.personalInfo?.phone || ''}
              onChange={(e) => updatePersonalInfo('phone', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">{t.fields.location}</label>
            <input
              type="text"
              value={data.personalInfo?.location || ''}
              onChange={(e) => updatePersonalInfo('location', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">{t.fields.linkedin}</label>
            <input
              type="text"
              value={data.personalInfo?.linkedin || ''}
              onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl text-gray-900">{t.sections.summary}</h3>
          <AIAssistanceButton
            language={language}
            section="summary"
            currentText={data.summary}
            onImprove={(improved) => updateSummary(improved)}
          />
        </div>
        <textarea
          value={data.summary || ''}
          onChange={(e) => updateSummary(e.target.value)}
          placeholder={t.fields.summaryPlaceholder}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
        {data.summary && data.summary.length < 100 && (
          <div className="mt-2 flex items-center gap-2 text-sm text-amber-600">
            <AlertCircle size={16} />
            <span>{t.hints.summaryTooShort}</span>
          </div>
        )}
      </div>

      {/* Work Experience */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl text-gray-900">{t.sections.experience}</h3>
          <button
            onClick={addExperience}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all"
          >
            <Plus size={18} />
            <span>{t.actions.addExperience}</span>
          </button>
        </div>
        <div className="space-y-6">
          {data.experiences?.map((exp: any, index: number) => (
            <div key={exp.id} className="border border-gray-200 rounded-lg p-4 relative">
              <button
                onClick={() => deleteExperience(exp.id)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 size={18} />
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.jobTitle}</label>
                  <input
                    type="text"
                    value={exp.jobTitle}
                    onChange={(e) => updateExperience(exp.id, 'jobTitle', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.company}</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.startDate}</label>
                  <input
                    type="text"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                    placeholder="MM/YYYY"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.endDate}</label>
                  <input
                    type="text"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    placeholder="MM/YYYY"
                    disabled={exp.current}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={exp.current}
                    onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  {t.fields.current}
                </label>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm text-gray-700">{t.fields.description}</label>
                  <AIAssistanceButton
                    language={language}
                    section="experience"
                    currentText={exp.description}
                    onImprove={(improved) => updateExperience(exp.id, 'description', improved)}
                  />
                </div>
                <textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>
            </div>
          ))}
          {data.experiences?.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              {language === 'fr' ? 'Aucune expérience ajoutée' : 'No experience added'}
            </p>
          )}
        </div>
      </div>

      {/* Education */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl text-gray-900">{t.sections.education}</h3>
          <button
            onClick={addEducation}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all"
          >
            <Plus size={18} />
            <span>{t.actions.addEducation}</span>
          </button>
        </div>
        <div className="space-y-4">
          {data.education?.map((edu: any) => (
            <div key={edu.id} className="border border-gray-200 rounded-lg p-4 relative">
              <button
                onClick={() => deleteEducation(edu.id)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 size={18} />
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.degree}</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.school}</label>
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-gray-700 mb-1">{t.fields.year}</label>
                  <input
                    type="text"
                    value={edu.year}
                    onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                    placeholder="YYYY"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
          {data.education?.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              {language === 'fr' ? 'Aucune formation ajoutée' : 'No education added'}
            </p>
          )}
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl text-gray-900">{t.sections.skills}</h3>
          <button
            onClick={addSkill}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all"
          >
            <Plus size={18} />
            <span>{t.actions.addSkill}</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.skills?.map((skill: any) => (
            <div key={skill.id} className="flex items-center gap-2">
              <input
                type="text"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                placeholder={t.fields.skillName}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <select
                value={skill.level}
                onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="beginner">{t.levels.beginner}</option>
                <option value="intermediate">{t.levels.intermediate}</option>
                <option value="advanced">{t.levels.advanced}</option>
                <option value="expert">{t.levels.expert}</option>
              </select>
              <button
                onClick={() => deleteSkill(skill.id)}
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          {data.skills?.length === 0 && (
            <p className="text-center text-gray-500 py-8 sm:col-span-2">
              {language === 'fr' ? 'Aucune compétence ajoutée' : 'No skills added'}
            </p>
          )}
        </div>
      </div>

      {/* Languages */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl text-gray-900">{t.sections.languages}</h3>
          <button
            onClick={addLanguage}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all"
          >
            <Plus size={18} />
            <span>{t.actions.addLanguage}</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.languages?.map((lang: any) => (
            <div key={lang.id} className="flex items-center gap-2">
              <input
                type="text"
                value={lang.name}
                onChange={(e) => updateLanguage(lang.id, 'name', e.target.value)}
                placeholder={t.fields.language}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <select
                value={lang.proficiency}
                onChange={(e) => updateLanguage(lang.id, 'proficiency', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="basic">{t.proficiency.basic}</option>
                <option value="conversational">{t.proficiency.conversational}</option>
                <option value="fluent">{t.proficiency.fluent}</option>
                <option value="native">{t.proficiency.native}</option>
              </select>
              <button
                onClick={() => deleteLanguage(lang.id)}
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          {data.languages?.length === 0 && (
            <p className="text-center text-gray-500 py-8 sm:col-span-2">
              {language === 'fr' ? 'Aucune langue ajoutée' : 'No languages added'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
