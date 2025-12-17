import { FileText, Sparkles, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Comment ça marche',
    steps: [
      {
        title: 'Collez votre CV',
        description: 'Copier-coller rapide',
      },
      {
        title: "L'IA l'analyse",
        description: 'Analyse instantanée',
      },
      {
        title: 'Obtenez note & conseils',
        description: 'Résultats actionnables',
      },
    ],
  },
  en: {
    title: 'How it works',
    steps: [
      {
        title: 'Paste your resume',
        description: 'Quick copy-paste',
      },
      {
        title: 'AI analyzes it',
        description: 'Instant analysis',
      },
      {
        title: 'Get your score & improvements',
        description: 'Actionable results',
      },
    ],
  },
};

const icons = [FileText, Sparkles, CheckCircle2];

export function HowItWorks({ language }: HowItWorksProps) {
  const t = content[language];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">{t.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="relative">
                {/* Connector line (desktop) */}
                {index < t.steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent"></div>
                )}

                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}