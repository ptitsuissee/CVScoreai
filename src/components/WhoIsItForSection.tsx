import { GraduationCap, TrendingUp, Briefcase } from 'lucide-react';

interface WhoIsItForSectionProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Pour qui ?',
    subtitle: 'CVScore.ai s\'adapte à chaque profil et objectif professionnel',
    personas: [
      {
        icon: GraduationCap,
        title: 'Étudiants / 1er emploi',
        description: 'Structure ton premier CV professionnel et mets en valeur tes stages, projets académiques et soft skills.',
        iconColor: 'text-blue-600',
        bgColor: 'bg-blue-50',
      },
      {
        icon: TrendingUp,
        title: 'Profils Juniors',
        description: 'Optimise ton CV avec des réalisations quantifiables et améliore ta compatibilité ATS pour décrocher plus d\'entretiens.',
        iconColor: 'text-purple-600',
        bgColor: 'bg-purple-50',
      },
      {
        icon: Briefcase,
        title: 'Profils expérimentés',
        description: 'Valorise ton expertise, structure ton parcours complexe et positionne-toi stratégiquement face aux recruteurs.',
        iconColor: 'text-orange-600',
        bgColor: 'bg-orange-50',
      },
    ],
  },
  en: {
    title: 'Who is it for?',
    subtitle: 'CVScore.ai adapts to every profile and career goal',
    personas: [
      {
        icon: GraduationCap,
        title: 'Students / First Job',
        description: 'Structure your first professional resume and highlight your internships, academic projects and soft skills.',
        iconColor: 'text-blue-600',
        bgColor: 'bg-blue-50',
      },
      {
        icon: TrendingUp,
        title: 'Junior Profiles',
        description: 'Optimize your resume with quantifiable achievements and improve your ATS compatibility to land more interviews.',
        iconColor: 'text-purple-600',
        bgColor: 'bg-purple-50',
      },
      {
        icon: Briefcase,
        title: 'Experienced Profiles',
        description: 'Showcase your expertise, structure your complex career path and position yourself strategically with recruiters.',
        iconColor: 'text-orange-600',
        bgColor: 'bg-orange-50',
      },
    ],
  },
};

export function WhoIsItForSection({ language }: WhoIsItForSectionProps) {
  const t = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Personas Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.personas.map((persona, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${persona.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                <persona.icon size={32} className={persona.iconColor} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">
                {persona.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
