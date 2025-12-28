import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Download, Eye } from 'lucide-react';
import { AIAssistanceButton } from './AIAssistanceButton';
import { CVExportModal } from './CVExportModal';

interface CVEditorMobileStepperProps {
  language: 'fr' | 'en';
  data: any;
  onUpdate: (data: any) => void;
  onBack: () => void;
}

const content = {
  fr: {
    steps: ['Profil', 'Expérience', 'Formation', 'Compétences'],
    next: 'Suivant',
    previous: 'Précédent',
    preview: 'Aperçu',
    download: 'Télécharger',
    fields: {
      name: 'Nom complet',
      title: 'Titre du poste',
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      linkedin: 'LinkedIn',
      summary: 'Résumé professionnel',
      summaryPlaceholder: 'Décris ton parcours et tes objectifs...',
      jobTitle: 'Titre du poste',
      company: 'Entreprise',
      startDate: 'Début (MM/YYYY)',
      endDate: 'Fin (MM/YYYY)',
      current: 'Poste actuel',
      description: 'Description',
      addExperience: '+ Ajouter une expérience',
      degree: 'Diplôme',
      school: 'École / Université',
      year: 'Année',
      addEducation: '+ Ajouter une formation',
      skillName: 'Compétence',
      addSkill: '+ Ajouter',
    },
  },
  en: {
    steps: ['Profile', 'Experience', 'Education', 'Skills'],
    next: 'Next',
    previous: 'Previous',
    preview: 'Preview',
    download: 'Download',
    fields: {
      name: 'Full Name',
      title: 'Job Title',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      linkedin: 'LinkedIn',
      summary: 'Professional Summary',
      summaryPlaceholder: 'Describe your background and goals...',
      jobTitle: 'Job Title',
      company: 'Company',
      startDate: 'Start (MM/YYYY)',
      endDate: 'End (MM/YYYY)',
      current: 'Current Position',
      description: 'Description',
      addExperience: '+ Add Experience',
      degree: 'Degree',
      school: 'School / University',
      year: 'Year',
      addEducation: '+ Add Education',
      skillName: 'Skill',
      addSkill: '+ Add',
    },
  },
};

export function CVEditorMobileStepper({ language, data, onUpdate, onBack }: CVEditorMobileStepperProps) {
  const t = content[language];
  const [currentStep, setCurrentStep] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const updatePersonalInfo = (field: string, value: string) => {
    onUpdate({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value },
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
        { id: Date.now(), jobTitle: '', company: '', startDate: '', endDate: '', current: false, description: '' },
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

  const addEducation = () => {
    onUpdate({
      ...data,
      education: [
        ...data.education,
        { id: Date.now(), degree: '', school: '', year: '' },
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

  const addSkill = () => {
    onUpdate({
      ...data,
      skills: [...data.skills, { id: Date.now(), name: '', level: 'intermediate' }],
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

  const handleNext = () => {
    if (currentStep < t.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSelectPlan = (plan: 'oneTime' | 'monthly') => {
    setShowExportModal(false);
    alert(language === 'fr' 
      ? `Redirection vers le paiement ${plan === 'oneTime' ? 'unique' : 'mensuel'}...` 
      : `Redirecting to ${plan === 'oneTime' ? 'one-time' : 'monthly'} payment...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-40">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={onBack} className="text-gray-600">
              <ArrowLeft size={24} />
            </button>
            <button onClick={() => setShowPreview(true)} className="text-blue-600 flex items-center gap-2">
              <Eye size={20} />
              <span>{t.preview}</span>
            </button>
          </div>

          {/* Stepper */}
          <div className="flex items-center gap-2">
            {t.steps.map((step, index) => (
              <div key={index} className="flex items-center flex-1">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-xs transition-all ${
                    index < currentStep
                      ? 'bg-green-500 text-white'
                      : index === currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index < currentStep ? <Check size={16} /> : index + 1}
                </div>
                {index < t.steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-1 ${
                      index < currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">{t.steps[currentStep]}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {/* Step 0 - Profile */}
        {currentStep === 0 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">{t.fields.name}</label>
              <input
                type="text"
                value={data.personalInfo?.name || ''}
                onChange={(e) => updatePersonalInfo('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">{t.fields.title}</label>
              <input
                type="text"
                value={data.personalInfo?.title || ''}
                onChange={(e) => updatePersonalInfo('title', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">{t.fields.email}</label>
              <input
                type="email"
                value={data.personalInfo?.email || ''}
                onChange={(e) => updatePersonalInfo('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">{t.fields.phone}</label>
              <input
                type="tel"
                value={data.personalInfo?.phone || ''}
                onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">{t.fields.location}</label>
              <input
                type="text"
                value={data.personalInfo?.location || ''}
                onChange={(e) => updatePersonalInfo('location', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm text-gray-700">{t.fields.summary}</label>
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
            </div>
          </div>
        )}

        {/* Step 1 - Experience */}
        {currentStep === 1 && (
          <div className="space-y-4">
            {data.experiences?.map((exp: any, index: number) => (
              <div key={exp.id} className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-xs text-gray-500 mb-3">{language === 'fr' ? 'Expérience' : 'Experience'} {index + 1}</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={exp.jobTitle}
                    onChange={(e) => updateExperience(exp.id, 'jobTitle', e.target.value)}
                    placeholder={t.fields.jobTitle}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    placeholder={t.fields.company}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                      placeholder={t.fields.startDate}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                      placeholder={t.fields.endDate}
                      disabled={exp.current}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                    />
                  </div>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    {t.fields.current}
                  </label>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs text-gray-700">{t.fields.description}</label>
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
            <button
              onClick={addExperience}
              className="w-full py-3 border-2 border-dashed border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
            >
              {t.fields.addExperience}
            </button>
          </div>
        )}

        {/* Step 2 - Education */}
        {currentStep === 2 && (
          <div className="space-y-4">
            {data.education?.map((edu: any, index: number) => (
              <div key={edu.id} className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-xs text-gray-500 mb-3">{language === 'fr' ? 'Formation' : 'Education'} {index + 1}</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    placeholder={t.fields.degree}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                    placeholder={t.fields.school}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    value={edu.year}
                    onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                    placeholder={t.fields.year}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addEducation}
              className="w-full py-3 border-2 border-dashed border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
            >
              {t.fields.addEducation}
            </button>
          </div>
        )}

        {/* Step 3 - Skills */}
        {currentStep === 3 && (
          <div className="space-y-3">
            {data.skills?.map((skill: any) => (
              <div key={skill.id} className="flex items-center gap-2">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                  placeholder={t.fields.skillName}
                  className="flex-1 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}
            <button
              onClick={addSkill}
              className="w-full py-3 border-2 border-dashed border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
            >
              {t.fields.addSkill}
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4 shadow-lg">
        <div className="flex items-center justify-between gap-3">
          {currentStep > 0 ? (
            <button
              onClick={handlePrevious}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
            >
              <ArrowLeft size={18} />
              {t.previous}
            </button>
          ) : (
            <div></div>
          )}

          {currentStep < t.steps.length - 1 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all ml-auto"
            >
              {t.next}
              <ArrowRight size={18} />
            </button>
          ) : (
            <button
              onClick={() => setShowExportModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all ml-auto"
            >
              <Download size={18} />
              {t.download}
            </button>
          )}
        </div>
      </div>

      {/* Export Modal */}
      <CVExportModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        language={language}
        onSelectPlan={handleSelectPlan}
      />
    </div>
  );
}
