import { GraduationCap, Briefcase, Globe2 } from 'lucide-react';

interface WhoSectionProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Pour qui ?',
    subtitle: 'CVScore.ai s\'adapte à tous les profils',
    profiles: [
      {
        icon: GraduationCap,
        title: 'Étudiants & Jeunes diplômés',
        description: 'Améliorez votre CV même avec une expérience limitée',
      },
      {
        icon: Briefcase,
        title: 'Professionnels',
        description: 'Augmentez votre impact et obtenez plus de rappels d\'entretien',
      },
      {
        icon: Globe2,
        title: 'Candidats européens',
        description: 'Analyse adaptée aux pratiques de recrutement européennes',
      },
    ],
  },
  en: {
    title: 'Who is it for?',
    subtitle: 'CVScore.ai adapts to all profiles',
    profiles: [
      {
        icon: GraduationCap,
        title: 'Students & Graduates',
        description: 'Improve your resume even with limited experience',
      },
      {
        icon: Briefcase,
        title: 'Professionals',
        description: 'Increase your impact and get more interview callbacks',
      },
      {
        icon: Globe2,
        title: 'European Candidates',
        description: 'Analysis adapted to European hiring practices',
      },
    ],
  },
};

export function WhoSection({ language }: WhoSectionProps) {
  const t = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{profile.title}</h3>
                <p className="text-gray-600 leading-relaxed">{profile.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
