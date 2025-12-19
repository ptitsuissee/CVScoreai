import { CVAnalysisWidget } from './CVAnalysisWidget';

interface ImprovedAnalysisPageProps {
  language: 'fr' | 'en';
  onNavigate: (page: string) => void;
}

export function ImprovedAnalysisPage({ language, onNavigate }: ImprovedAnalysisPageProps) {
  const handleUpgradePremium = () => {
    onNavigate('pricing');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <CVAnalysisWidget 
          language={language} 
          onUpgradePremium={handleUpgradePremium}
          embedded={false}
        />
      </div>
    </div>
  );
}
