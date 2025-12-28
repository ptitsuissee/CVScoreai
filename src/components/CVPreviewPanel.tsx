import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface CVPreviewPanelProps {
  language: 'fr' | 'en';
  data: any;
}

export function CVPreviewPanel({ language, data }: CVPreviewPanelProps) {
  const formatDate = (start: string, end: string, current: boolean) => {
    if (current) {
      return `${start} - ${language === 'fr' ? 'Présent' : 'Present'}`;
    }
    return `${start} - ${end}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Watermark Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm">
        {language === 'fr' ? '🔒 Aperçu - Télécharger en PDF' : '🔒 Preview - Download as PDF'}
      </div>

      {/* A4 Preview Container */}
      <div className="aspect-[1/1.414] bg-white p-8 overflow-auto relative">
        {/* Header */}
        <div className="mb-6 pb-6 border-b-2 border-gray-200">
          <h1 className="text-3xl text-gray-900 mb-2">
            {data.personalInfo?.name || (language === 'fr' ? 'Votre Nom' : 'Your Name')}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            {data.personalInfo?.title || (language === 'fr' ? 'Titre du poste' : 'Job Title')}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {data.personalInfo?.email && (
              <div className="flex items-center gap-1">
                <Mail size={14} />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo?.phone && (
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo?.location && (
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
            {data.personalInfo?.linkedin && (
              <div className="flex items-center gap-1">
                <Linkedin size={14} />
                <span>{data.personalInfo.linkedin}</span>
              </div>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        {data.summary && (
          <div className="mb-6">
            <h2 className="text-lg text-gray-900 mb-2 pb-1 border-b border-gray-300">
              {language === 'fr' ? 'Résumé Professionnel' : 'Professional Summary'}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{data.summary}</p>
          </div>
        )}

        {/* Work Experience */}
        {data.experiences && data.experiences.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg text-gray-900 mb-3 pb-1 border-b border-gray-300">
              {language === 'fr' ? 'Expérience Professionnelle' : 'Work Experience'}
            </h2>
            <div className="space-y-4">
              {data.experiences.map((exp: any) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-base text-gray-900">{exp.jobTitle || language === 'fr' ? 'Titre du poste' : 'Job Title'}</h3>
                      <p className="text-sm text-gray-600">{exp.company || language === 'fr' ? 'Entreprise' : 'Company'}</p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {exp.startDate || exp.endDate 
                        ? formatDate(exp.startDate || '', exp.endDate || '', exp.current)
                        : ''}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap mt-2">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg text-gray-900 mb-3 pb-1 border-b border-gray-300">
              {language === 'fr' ? 'Formation' : 'Education'}
            </h2>
            <div className="space-y-3">
              {data.education.map((edu: any) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base text-gray-900">{edu.degree || language === 'fr' ? 'Diplôme' : 'Degree'}</h3>
                      <p className="text-sm text-gray-600">{edu.school || language === 'fr' ? 'École' : 'School'}</p>
                    </div>
                    {edu.year && <span className="text-xs text-gray-500">{edu.year}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg text-gray-900 mb-3 pb-1 border-b border-gray-300">
              {language === 'fr' ? 'Compétences' : 'Skills'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill: any) => (
                <div key={skill.id} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
                  {skill.name}
                  {skill.level && skill.level !== 'intermediate' && (
                    <span className="ml-1 opacity-75">
                      ({skill.level === 'expert' ? '★★★' : skill.level === 'advanced' ? '★★' : '★'})
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {data.languages && data.languages.length > 0 && (
          <div>
            <h2 className="text-lg text-gray-900 mb-3 pb-1 border-b border-gray-300">
              {language === 'fr' ? 'Langues' : 'Languages'}
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.languages.map((lang: any) => (
                <div key={lang.id} className="text-sm text-gray-700">
                  <span>{lang.name}</span>
                  {lang.proficiency && (
                    <span className="text-gray-500 ml-1">
                      ({lang.proficiency === 'native' ? language === 'fr' ? 'Natif' : 'Native' : 
                        lang.proficiency === 'fluent' ? language === 'fr' ? 'Courant' : 'Fluent' :
                        lang.proficiency === 'conversational' ? language === 'fr' ? 'Conversationnel' : 'Conversational' :
                        language === 'fr' ? 'Basique' : 'Basic'})
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!data.personalInfo?.name && !data.summary && (!data.experiences || data.experiences.length === 0) && (
          <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="text-center text-gray-400">
              <p className="text-lg mb-2">
                {language === 'fr' ? '📝 Votre CV apparaîtra ici' : '📝 Your resume will appear here'}
              </p>
              <p className="text-sm">
                {language === 'fr' ? 'Commencez à remplir les sections à gauche' : 'Start filling in the sections on the left'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}