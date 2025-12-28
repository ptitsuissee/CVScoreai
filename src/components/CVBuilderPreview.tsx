import { CVData } from './CVBuilder';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

interface CVBuilderPreviewProps {
  language: 'fr' | 'en';
  cvData: CVData;
  isPremium: boolean;
}

const content = {
  fr: {
    preview: 'Aperçu',
    liveUpdate: 'Mise à jour en direct',
    watermark: 'CVScore.ai - Version gratuite',
    present: 'Présent',
    sections: {
      summary: 'Résumé professionnel',
      experience: 'Expérience professionnelle',
      education: 'Formation',
      skills: 'Compétences',
      languages: 'Langues',
    },
  },
  en: {
    preview: 'Preview',
    liveUpdate: 'Live update',
    watermark: 'CVScore.ai - Free version',
    present: 'Present',
    sections: {
      summary: 'Professional Summary',
      experience: 'Professional Experience',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
    },
  },
};

export function CVBuilderPreview({ language, cvData, isPremium }: CVBuilderPreviewProps) {
  const t = content[language];

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month] = dateStr.split('-');
    const monthNames = language === 'fr'
      ? ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="space-y-4">
      {/* Preview Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg text-gray-900">{t.preview}</h3>
          <p className="text-sm text-gray-600">{t.liveUpdate}</p>
        </div>
      </div>

      {/* CV Preview - A4 Format */}
      <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '210/297' }}>
        <div className="h-full overflow-y-auto p-8 relative">
          {/* Watermark for free users */}
          {!isPremium && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
              <div className="text-6xl text-gray-900 rotate-[-45deg] select-none">
                {t.watermark}
              </div>
            </div>
          )}

          {/* Header */}
          <div className="mb-6 pb-4 border-b-2 border-gray-200">
            <h1 className="text-3xl text-gray-900 mb-1">
              {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
            </h1>
            {cvData.jobTitle && (
              <h2 className="text-xl text-blue-600 mb-3">{cvData.jobTitle}</h2>
            )}
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {cvData.personalInfo.email && (
                <div className="flex items-center gap-1">
                  <Mail size={14} />
                  {cvData.personalInfo.email}
                </div>
              )}
              {cvData.personalInfo.phone && (
                <div className="flex items-center gap-1">
                  <Phone size={14} />
                  {cvData.personalInfo.phone}
                </div>
              )}
              {(cvData.personalInfo.city || cvData.personalInfo.country) && (
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  {[cvData.personalInfo.city, cvData.personalInfo.country].filter(Boolean).join(', ')}
                </div>
              )}
            </div>
          </div>

          {/* Summary */}
          {cvData.summary && (
            <div className="mb-6">
              <h3 className="text-lg text-gray-900 mb-2 pb-1 border-b border-gray-300">
                {t.sections.summary}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{cvData.summary}</p>
            </div>
          )}

          {/* Experience */}
          {cvData.experiences.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg text-gray-900 mb-3 pb-1 border-b border-gray-300">
                {t.sections.experience}
              </h3>
              <div className="space-y-4">
                {cvData.experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h4 className="text-base text-gray-900">{exp.position}</h4>
                        <p className="text-sm text-gray-700">{exp.company}</p>
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(exp.startDate)} - {exp.current ? t.present : formatDate(exp.endDate)}
                      </div>
                    </div>
                    {exp.description && (
                      <p className="text-sm text-gray-600 leading-relaxed mt-1">{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {cvData.education.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg text-gray-900 mb-3 pb-1 border-b border-gray-300">
                {t.sections.education}
              </h3>
              <div className="space-y-4">
                {cvData.education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h4 className="text-base text-gray-900">{edu.degree}</h4>
                        <p className="text-sm text-gray-700">{edu.school}</p>
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </div>
                    </div>
                    {edu.description && (
                      <p className="text-sm text-gray-600 leading-relaxed mt-1">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {cvData.skills.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg text-gray-900 mb-2 pb-1 border-b border-gray-300">
                {t.sections.skills}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {cvData.languages.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg text-gray-900 mb-2 pb-1 border-b border-gray-300">
                {t.sections.languages}
              </h3>
              <div className="space-y-1">
                {cvData.languages.map((lang) => (
                  <div key={lang.id} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{lang.language}</span>
                    <span className="text-gray-600">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty state */}
          {!cvData.personalInfo.firstName &&
            !cvData.personalInfo.lastName &&
            !cvData.jobTitle &&
            !cvData.summary &&
            cvData.experiences.length === 0 &&
            cvData.education.length === 0 &&
            cvData.skills.length === 0 &&
            cvData.languages.length === 0 && (
              <div className="h-full flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <p className="text-lg mb-2">
                    {language === 'fr'
                      ? 'Votre CV apparaîtra ici'
                      : 'Your CV will appear here'}
                  </p>
                  <p className="text-sm">
                    {language === 'fr'
                      ? 'Commencez à remplir les sections'
                      : 'Start filling in the sections'}
                  </p>
                </div>
              </div>
            )}
        </div>
      </div>

      {/* Format info */}
      <div className="text-xs text-gray-500 text-center">
        {language === 'fr' ? 'Format A4 - Optimisé ATS' : 'A4 Format - ATS Optimized'}
      </div>
    </div>
  );
}
