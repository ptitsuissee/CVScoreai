import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Améliorez votre CV dès aujourd\'hui',
    cta: 'Analyser mon CV gratuitement',
  },
  en: {
    title: 'Improve your resume today',
    cta: 'Analyze my resume for free',
  },
};

export function CTASection({ language }: CTASectionProps) {
  const t = content[language];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Sparkles size={16} className="text-white" />
          <span className="text-sm text-white">100% Gratuit</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">{t.title}</h2>

        <a
          href="#analyze"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl"
        >
          <span className="text-lg">{t.cta}</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
          <div>
            <div className="text-3xl sm:text-4xl text-white mb-2">5,000+</div>
            <div className="text-sm text-blue-100">
              {language === 'fr' ? 'CV analysés' : 'Resumes analyzed'}
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl text-white mb-2">4.9/5</div>
            <div className="text-sm text-blue-100">
              {language === 'fr' ? 'Note moyenne' : 'Average rating'}
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl text-white mb-2">+32%</div>
            <div className="text-sm text-blue-100">
              {language === 'fr' ? 'Taux de réponse' : 'Response rate'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}