import { Sparkles, ArrowRight, Shield, Zap } from 'lucide-react';

interface AnalysisPageProps {
  language: 'fr' | 'en';
  onNavigate: (page: string) => void;
}

const content = {
  fr: {
    title: 'Analyse ton CV avec l\'IA',
    subtitle: 'Obtiens une note sur 100 et des recommandations adaptées au marché européen.',
    disclaimer: 'Analyse assistée par intelligence artificielle. Résultats fournis à titre indicatif.',
    premium: {
      badge: 'Premium',
      title: 'Débloque l\'analyse Premium',
      description: 'Accède à une analyse détaillée, ligne par ligne, et optimise ton CV pour les ATS.',
      cta: 'Passer Premium',
      features: [
        'Analyse ligne par ligne',
        'Optimisation ATS avancée',
        'Réécriture automatique',
      ],
    },
  },
  en: {
    title: 'Analyze your resume with AI',
    subtitle: 'Get a score out of 100 and personalized feedback for the European job market.',
    disclaimer: 'AI-powered analysis. Results are provided for informational purposes only.',
    premium: {
      badge: 'Premium',
      title: 'Unlock Premium analysis',
      description: 'Access detailed line-by-line analysis and optimize your resume for ATS.',
      cta: 'Go Premium',
      features: [
        'Line-by-line analysis',
        'Advanced ATS optimization',
        'Automatic rewriting',
      ],
    },
  },
};

export function AnalysisPage({ language, onNavigate }: AnalysisPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles size={18} />
            <span className="text-sm">Powered by AI</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6">
            {t.title}
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* AI Tool Embed */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <iframe
              src="https://apicvscore.netlify.app/"
              title="CVScore AI Analysis Tool"
              className="w-full"
              style={{ height: '900px', border: 'none' }}
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            />
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-gray-500 mb-12">
          <Shield className="inline-block mr-1.5" size={14} />
          {t.disclaimer}
        </p>

        {/* Premium CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left: Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full mb-4">
                  <Sparkles size={16} />
                  <span className="text-sm">{t.premium.badge}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl text-white mb-4">
                  {t.premium.title}
                </h2>

                <p className="text-lg text-blue-100 mb-6">
                  {t.premium.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {t.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-white justify-center lg:justify-start">
                      <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap size={14} className="text-white" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => onNavigate('pricing')}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl group"
                >
                  <span>{t.premium.cta}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right: Visual */}
              <div className="hidden lg:block flex-shrink-0">
                <div className="w-64 h-64 bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={120} className="text-blue-200" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-12" />
      </div>
    </div>
  );
}
