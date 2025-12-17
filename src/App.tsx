import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { AnalysisTool } from './components/AnalysisTool';
import { ResultsMockup } from './components/ResultsMockup';
import { OptimizedCVDisplay } from './components/OptimizedCVDisplay';
import { PremiumAnalysisDisplay } from './components/PremiumAnalysisDisplay';
import { WhySection } from './components/WhySection';
import { WhoSection } from './components/WhoSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ExamplesPage } from './components/ExamplesPage';
import { PricingPage } from './components/PricingPage';
import { Dashboard } from './components/Dashboard';
import { FreeDashboard } from './components/FreeDashboard';
import { PremiumDashboard } from './components/PremiumDashboard';
import { LegalPage } from './components/LegalPage';
import { PrivacyPage } from './components/PrivacyPage';
import { PremiumModal } from './components/PremiumModal';
import { CheckoutMockup } from './components/CheckoutMockup';
import { PaymentSuccessPage } from './components/PaymentSuccessPage';
import { PaymentCancelPage } from './components/PaymentCancelPage';
import { MicroDemoSection } from './components/MicroDemoSection';
import { PremiumTransitionSection } from './components/PremiumTransitionSection';
import { MobileCTA } from './components/MobileCTA';
import { CVAnalysisResult } from './services/cvAnalysis';
import { CVOptimizationResult, optimizeCVWithAI } from './services/cvOptimization';
import { PremiumAnalysisResult, analyzeCVPremium } from './services/premiumAnalysis';

type Page = 'home' | 'examples' | 'pricing' | 'dashboard' | 'free-dashboard' | 'premium-dashboard' | 'legal' | 'privacy' | 'checkout' | 'payment-success' | 'payment-cancel';

export default function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [analysisHistory, setAnalysisHistory] = useState<any[]>([]);
  const [currentAnalysis, setCurrentAnalysis] = useState<CVAnalysisResult | null>(null);
  const [currentOptimization, setCurrentOptimization] = useState<CVOptimizationResult | null>(null);
  const [currentPremiumAnalysis, setCurrentPremiumAnalysis] = useState<PremiumAnalysisResult | null>(null);
  const [lastCVData, setLastCVData] = useState<any>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isPremiumAnalyzing, setIsPremiumAnalyzing] = useState(false);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [selectedPlanType, setSelectedPlanType] = useState<'monthly' | 'oneTime' | null>(null);

  const handleAnalyze = (analysis: CVAnalysisResult, cvData?: any) => {
    setCurrentAnalysis(analysis);
    setCurrentOptimization(null);
    setCurrentPremiumAnalysis(null);
    
    if (cvData) {
      setLastCVData(cvData);
      const newAnalysis = {
        id: Date.now(),
        date: new Date().toISOString(),
        score: analysis.overall_score,
        targetJob: cvData.targetJob || 'Non spécifié',
        country: cvData.country || 'FR',
        fullAnalysis: analysis,
      };
      setAnalysisHistory([newAnalysis, ...analysisHistory]);
    }
  };

  const handleOptimize = async () => {
    if (!currentAnalysis || !lastCVData) return;
    
    setIsOptimizing(true);
    try {
      // Génère le CV optimisé basé sur l'analyse
      const optimization = await optimizeCVWithAI({
        analysis: currentAnalysis,
        targetJob: lastCVData.targetJob || 'Professionnel',
        country: lastCVData.country,
        language,
      });
      
      setCurrentOptimization(optimization);
      
      setTimeout(() => {
        document.getElementById('optimized-cv')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error('Error optimizing CV:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  const handleUpgradePremium = async () => {
    if (!lastCVData) {
      // Redirect to pricing if no CV
      setCurrentPage('pricing');
      return;
    }
    
    setIsPremiumAnalyzing(true);
    try {
      const premiumAnalysis = await analyzeCVPremium({
        cvText: lastCVData.cvText,
        targetJob: lastCVData.targetJob || 'Professionnel',
        country: lastCVData.country,
        language,
      });
      
      setCurrentPremiumAnalysis(premiumAnalysis);
      
      setTimeout(() => {
        document.getElementById('premium-analysis')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error('Error with premium analysis:', error);
    } finally {
      setIsPremiumAnalyzing(false);
    }
  };

  const handlePremiumPurchase = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleOpenPremiumModal = () => {
    setIsPremiumModalOpen(true);
  };

  const handleSelectPlan = (planType: 'monthly' | 'oneTime') => {
    setSelectedPlanType(planType);
    setIsPremiumModalOpen(false);
    setCurrentPage('checkout');
  };

  const handleCheckoutComplete = () => {
    setCurrentPage('payment-success');
  };

  const handleCheckoutBack = () => {
    setSelectedPlanType(null);
    setCurrentPage('pricing');
  };

  const handlePaymentSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentCancel = () => {
    setCurrentPage('pricing');
    setSelectedPlanType(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        language={language} 
        setLanguage={setLanguage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
      />
      
      {currentPage === 'home' && (
        <>
          <Hero language={language} />
          <HowItWorks language={language} />
          <AnalysisTool language={language} onAnalyze={handleAnalyze} />
          {currentAnalysis && (
            <>
              <ResultsMockup 
                language={language} 
                analysis={currentAnalysis}
                onOptimize={isOptimizing ? undefined : handleOptimize}
                onUpgradePremium={isPremiumAnalyzing ? undefined : handleUpgradePremium}
              />
              {isOptimizing && (
                <div className="py-12 text-center">
                  <div className="inline-flex items-center gap-3 bg-purple-50 text-purple-700 px-6 py-3 rounded-full">
                    <div className="w-5 h-5 border-2 border-purple-700 border-t-transparent rounded-full animate-spin"></div>
                    <span>{language === 'fr' ? 'Optimisation en cours...' : 'Optimizing...'}</span>
                  </div>
                </div>
              )}
              {isPremiumAnalyzing && (
                <div className="py-12 text-center">
                  <div className="inline-flex items-center gap-3 bg-yellow-50 text-yellow-700 px-6 py-3 rounded-full">
                    <div className="w-5 h-5 border-2 border-yellow-700 border-t-transparent rounded-full animate-spin"></div>
                    <span>{language === 'fr' ? 'Analyse Premium en cours...' : 'Premium Analysis in progress...'}</span>
                  </div>
                </div>
              )}
              {currentPremiumAnalysis && (
                <div id="premium-analysis">
                  <PremiumAnalysisDisplay language={language} analysis={currentPremiumAnalysis} />
                </div>
              )}
              {currentOptimization && (
                <OptimizedCVDisplay language={language} optimization={currentOptimization} />
              )}
            </>
          )}
          <WhySection language={language} />
          <WhoSection language={language} />
          <FAQSection language={language} />
          <CTASection language={language} />
        </>
      )}

      {currentPage === 'examples' && (
        <ExamplesPage language={language} />
      )}

      {currentPage === 'pricing' && (
        <PricingPage 
          language={language} 
          onPurchase={handlePremiumPurchase}
          onOpenPremiumModal={handleOpenPremiumModal}
        />
      )}

      {currentPage === 'dashboard' && (
        <Dashboard 
          language={language}
          analysisHistory={analysisHistory}
          onNewAnalysis={() => {
            setCurrentPage('home');
            setTimeout(() => {
              document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />
      )}

      {currentPage === 'free-dashboard' && currentAnalysis && (
        <FreeDashboard 
          language={language}
          analysis={currentAnalysis}
          onUpgradePremium={handleOpenPremiumModal}
          onNewAnalysis={() => {
            setCurrentPage('home');
            setTimeout(() => {
              document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />
      )}

      {currentPage === 'premium-dashboard' && (
        <PremiumDashboard 
          language={language}
          onStartAnalysis={() => {
            setCurrentPage('home');
            setTimeout(() => {
              document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />
      )}

      {currentPage === 'legal' && (
        <LegalPage language={language} />
      )}

      {currentPage === 'privacy' && (
        <PrivacyPage language={language} />
      )}

      {currentPage === 'checkout' && selectedPlanType && (
        <CheckoutMockup 
          language={language} 
          planType={selectedPlanType}
          onBack={handleCheckoutBack}
          onComplete={handleCheckoutComplete}
        />
      )}

      {currentPage === 'payment-success' && (
        <PaymentSuccessPage 
          language={language}
          onContinue={handlePaymentSuccess}
        />
      )}

      {currentPage === 'payment-cancel' && (
        <PaymentCancelPage 
          language={language}
          onReturnToPricing={handlePaymentCancel}
          onReturnHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Premium Modal */}
      <PremiumModal
        isOpen={isPremiumModalOpen}
        onClose={() => setIsPremiumModalOpen(false)}
        language={language}
        onSelectPlan={handleSelectPlan}
      />

      <Footer language={language} setCurrentPage={setCurrentPage} />
    </div>
  );
}