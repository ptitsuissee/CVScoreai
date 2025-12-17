import { Globe, Cpu, MessageSquare, Users } from 'lucide-react';

interface WhySectionProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Pourquoi CVScore.ai ?',
    benefits: [
      {
        icon: Cpu,
        title: 'Compatible ATS',
        description: 'Lisible par les logiciels de tri',
      },
      {
        icon: Globe,
        title: 'Standards européens',
        description: 'Adapté au recrutement européen',
      },
      {
        icon: MessageSquare,
        title: 'Conseils clairs et actionnables',
        description: 'Recommandations concrètes',
      },
      {
        icon: Users,
        title: 'Pour étudiants & professionnels',
        description: 'Tous niveaux d\'expérience',
      },
    ],
  },
  en: {
    title: 'Why CVScore.ai?',
    benefits: [
      {
        icon: Cpu,
        title: 'ATS-compatible',
        description: 'Readable by screening systems',
      },
      {
        icon: Globe,
        title: 'European standards',
        description: 'Tailored to European hiring',
      },
      {
        icon: MessageSquare,
        title: 'Clear, actionable feedback',
        description: 'Concrete recommendations',
      },
      {
        icon: Users,
        title: 'Used by students & professionals',
        description: 'All experience levels',
      },
    ],
  },
};

export function WhySection({ language }: WhySectionProps) {
  const t = content[language];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}