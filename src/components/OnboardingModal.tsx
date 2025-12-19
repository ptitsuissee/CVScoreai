import { useState } from 'react';
import { FileText, Sparkles, TrendingUp, X, ChevronRight, ChevronLeft } from 'lucide-react';

interface OnboardingModalProps {
  language: 'fr' | 'en';
  onClose: () => void;
  isOpen: boolean;
}

const content = {
  fr: {
    skip: 'Passer',
    next: 'Suivant',
    previous: 'Précédent',
    start: 'Commencer',
    steps: [
      {
        icon: FileText,
        title: 'Colle ton CV',
        description: 'Analyse ton CV en quelques secondes grâce à l\'IA.',
        detail: 'Pas besoin de créer un compte. Colle simplement le texte de ton CV et laisse l\'IA faire le travail.',
      },
      {
        icon: Sparkles,
        title: 'Obtiens ton score',
        description: 'Découvre ton score et tes axes d\'amélioration.',
        detail: 'Un score global sur 100 et 4 sous-scores détaillés : Clarté, Impact, Structure et Compatibilité ATS.',
      },
      {
        icon: TrendingUp,
        title: 'Améliore & postule',
        description: 'Optimise ton CV pour les recruteurs et les ATS.',
        detail: 'Reçois des conseils concrets et personnalisés pour améliorer ton CV et augmenter tes chances d\'entretien.',
      },
    ],
  },
  en: {
    skip: 'Skip',
    next: 'Next',
    previous: 'Previous',
    start: 'Get started',
    steps: [
      {
        icon: FileText,
        title: 'Paste your resume',
        description: 'Analyze your resume in seconds with AI.',
        detail: 'No need to create an account. Simply paste your resume text and let the AI do the work.',
      },
      {
        icon: Sparkles,
        title: 'Get your score',
        description: 'Discover your score and improvement areas.',
        detail: 'An overall score out of 100 and 4 detailed subscores: Clarity, Impact, Structure and ATS Compatibility.',
      },
      {
        icon: TrendingUp,
        title: 'Improve & apply',
        description: 'Optimize your resume for recruiters and ATS.',
        detail: 'Receive concrete, personalized advice to improve your resume and increase your interview chances.',
      },
    ],
  },
};

export function OnboardingModal({ language, onClose, isOpen }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const t = content[language];
  const steps = t.steps;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Icon size={32} />
            </div>
            <div>
              <div className="text-sm text-blue-200 mb-1">
                {language === 'fr' ? 'Étape' : 'Step'} {currentStep + 1}/{steps.length}
              </div>
              <h3 className="text-2xl sm:text-3xl">{currentStepData.title}</h3>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-all ${
                  index <= currentStep ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <p className="text-xl text-gray-900 mb-4">{currentStepData.description}</p>
          <p className="text-gray-600 leading-relaxed">{currentStepData.detail}</p>
        </div>

        {/* Footer */}
        <div className="p-6 sm:p-8 bg-gray-50 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-gray-600 hover:text-gray-900 transition-all"
          >
            {t.skip}
          </button>

          <div className="flex gap-3">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all flex items-center gap-2"
              >
                <ChevronLeft size={18} />
                <span>{t.previous}</span>
              </button>
            )}
            
            <button
              onClick={handleNext}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 group"
            >
              <span>{currentStep === steps.length - 1 ? t.start : t.next}</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}