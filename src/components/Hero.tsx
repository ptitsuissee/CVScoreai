import { ArrowRight, Sparkles, CheckCircle, Zap, Shield } from 'lucide-react';

interface HeroProps {
  language: 'fr' | 'en';
  onNavigate?: (page: string) => void;
}

const content = {
  fr: {
    title: 'Analyse de CV par IA pour améliorer ton CV en 60 secondes',
    subtitle: 'CVScore.ai propose une analyse de CV par intelligence artificielle pour t\'aider à améliorer ton CV, optimiser sa structure et augmenter tes chances face aux recruteurs et aux systèmes ATS.',
    primaryCTA: 'Analyser mon CV gratuitement',
    secondaryCTA: 'Créer mon CV en ligne',
    trustText: 'Sans compte · Résultats instantanés · Paiement sécurisé pour l\'export',
    trustBadges: [
      { icon: Zap, text: 'Analyse en moins de 60 secondes' },
      { icon: Shield, text: 'Adapté aux recruteurs européens' },
      { icon: CheckCircle, text: 'Compatible ATS' },
    ],
    mockup: {
      score: 'Score Global',
      clarity: 'Clarté',
      impact: 'Impact',
      structure: 'Structure',
      feedback1: 'Ajoutez des réalisations quantifiables',
      feedback2: 'Excellente utilisation de verbes d\'action',
    },
  },
  en: {
    title: 'AI Resume Analysis to Improve Your Resume in 60 Seconds',
    subtitle: 'CVScore.ai offers AI-powered resume analysis to help you improve your resume, optimize its structure, and increase your chances with recruiters and ATS systems.',
    primaryCTA: 'Analyze my Resume for Free',
    secondaryCTA: 'Create my Resume Online',
    trustText: 'No account · Instant results · Secure payment for export',
    trustBadges: [
      { icon: Zap, text: 'Analysis in under 60 seconds' },
      { icon: Shield, text: 'Tailored to European recruiters' },
      { icon: CheckCircle, text: 'ATS compatible' },
    ],
    mockup: {
      score: 'Overall Score',
      clarity: 'Clarity',
      impact: 'Impact',
      structure: 'Structure',
      feedback1: 'Add quantifiable achievements',
      feedback2: 'Great use of action verbs',
    },
  },
};

export function Hero({ language, onNavigate }: HeroProps) {
  const t = content[language];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full mb-6">
              <Sparkles size={16} />
              <span className="text-sm">AI-Powered Analysis</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              {t.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#analyze"
                className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                {t.primaryCTA}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => onNavigate && onNavigate('creer-cv')}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 flex items-center justify-center gap-2"
              >
                {t.secondaryCTA}
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center lg:text-left">
              {t.trustText}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-4">
              {t.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <badge.icon size={16} className="text-blue-600" />
                  <span className="text-sm text-gray-500">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              {/* CV Preview */}
              <div className="space-y-4 mb-6">
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-2 bg-gray-100 rounded w-full"></div>
                <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                <div className="h-2 bg-gray-100 rounded w-4/6"></div>
              </div>

              {/* Score Display */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">{t.mockup.score}</span>
                  <span className="text-4xl text-blue-600">72/100</span>
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>{t.mockup.clarity}</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>{t.mockup.impact}</span>
                      <span>65%</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>{t.mockup.structure}</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-green-600 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback preview */}
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5"></div>
                  <span className="text-gray-600">{t.mockup.feedback1}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                  <span className="text-gray-600">{t.mockup.feedback2}</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600 rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}