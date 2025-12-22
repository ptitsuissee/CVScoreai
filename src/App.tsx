import { EnhancedPremiumAnalysis } from './components/EnhancedPremiumAnalysis';
import { SEOMarketingSuisse } from './components/SEOMarketingSuisse';
import { SEOEtudiantEurope } from './components/SEOEtudiantEurope';
import { SEODataAnalyst } from './components/SEODataAnalyst';
import { SEOPremierEmploi } from './components/SEOPremierEmploi';
import { GrowthLoop } from './components/GrowthLoop';
import { PostPurchaseEmail } from './components/PostPurchaseEmail';
import { ProductRoadmap } from './components/ProductRoadmap';
import { MicroDemoSection } from './components/MicroDemoSection';
import { useState, useEffect } from 'react';
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
import { PricingPageStripe } from './components/PricingPageStripe';
import { AnalysisPage } from './components/AnalysisPage';
import { ImprovedAnalysisPage } from './components/ImprovedAnalysisPage';
import { WidgetDemoPage } from './components/WidgetDemoPage';
import { FreemiumWidgetPage } from './components/FreemiumWidgetPage';
import { Dashboard } from './components/Dashboard';
import { FreeDashboard } from './components/FreeDashboard';
import { PremiumDashboard } from './components/PremiumDashboard';
import { LegalPage } from './components/LegalPage';
import { PrivacyPage } from './components/PrivacyPage';
import { PremiumModal } from './components/PremiumModal';
import { CheckoutMockup } from './components/CheckoutMockup';
import { PaymentSuccessPage } from './components/PaymentSuccessPage';
import { PaymentCancelPage } from './components/PaymentCancelPage';
import { PremiumActivationPage } from './components/PremiumActivationPage';
import { PremiumSuccessPage } from './components/PremiumSuccessPage';
import { LaunchChecklistPage } from './components/LaunchChecklistPage';
import { OnboardingModal } from './components/OnboardingModal';
import { AdminDevTools } from './components/AdminDevTools';
import { LaunchStatusBanner } from './components/LaunchStatusBanner';
import { LaunchCelebration } from './components/LaunchCelebration';
import { MetricsDashboard } from './components/MetricsDashboard';
import { FreemiumComparisonVisual } from './components/FreemiumComparisonVisual';
import { UserJourneyVisualization } from './components/UserJourneyVisualization';
import { PremiumTransitionSection } from './components/PremiumTransitionSection';
import { MobileCTA } from './components/MobileCTA';
import { CVAnalysisResult } from './services/cvAnalysis';
import { CVOptimizationResult, optimizeCVWithAI } from './services/cvOptimization';
import { PremiumAnalysisResult, analyzeCVPremium } from './services/premiumAnalysis';

type Page = 'home' | 'examples' | 'pricing' | 'pricing-email' | 'stripe-success' | 'analysis' | 'widget' | 'widget-demo' | 'freemium' | 'dashboard' | 'user-dashboard' | 'free-dashboard' | 'premium-dashboard' | 'seo-landing' | 'mobile-experience' | 'growth-loop' | 'post-purchase-email' | 'roadmap' | 'enhanced-premium' | 'seo-marketing-suisse' | 'seo-etudiant-europe' | 'seo-data-analyst' | 'seo-premier-emploi' | 'legal' | 'privacy' | 'checkout' | 'payment-success' | 'payment-cancel' | 'premium-activation' | 'premium-success' | 'launch-checklist' | 'metrics' | 'comparison' | 'user-journey' | 'email-widget';

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
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Check Premium status from localStorage
  useEffect(() => {
    const isPremiumStored = localStorage.getItem('isPremium') === 'true';
    setIsLoggedIn(isPremiumStored);
  }, []);

  // Show onboarding only on first visit
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeenOnboarding && currentPage === 'home') {
      setShowOnboarding(true);
      localStorage.setItem('hasSeenOnboarding', 'true');
    }
  }, [currentPage]);

  // Activate Premium
  const activatePremium = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isPremium', 'true');
  };

  // Toggle Premium (dev)
  const togglePremium = () => {
    const newState = !isLoggedIn;
    setIsLoggedIn(newState);
    localStorage.setItem('isPremium', newState ? 'true' : 'false');
  };

  // Reset onboarding (dev)
  const resetOnboarding = () => {
    localStorage.removeItem('hasSeenOnboarding');
    setShowOnboarding(true);
  };

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
          <Hero language={language} onNavigate={setCurrentPage} />
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
        <PricingPageStripe 
          language={language} 
          onNavigate={setCurrentPage}
        />
      )}

      {currentPage === 'pricing-email' && (
        <PricingPageEmail 
          language={language} 
          onNavigate={setCurrentPage}
        />
      )}

      {currentPage === 'stripe-success' && (
        <StripeSuccessPage 
          language={language}
          onReturnToAnalysis={() => {
            activatePremium();
            setCurrentPage('email-widget');
          }}
          onViewPremiumFeatures={() => setCurrentPage('comparison')}
        />
      )}

      {currentPage === 'analysis' && (
        <AnalysisPage 
          language={language}
          onNavigate={setCurrentPage}
        />
      )}

      {currentPage === 'widget' && (
        <ImprovedAnalysisPage 
          language={language}
          onNavigate={setCurrentPage}
        />
      )}

      {currentPage === 'widget-demo' && (
        <WidgetDemoPage 
          language={language}
          onNavigate={setCurrentPage}
        />
      )}

      {currentPage === 'freemium' && (
        <FreemiumWidgetPage 
          language={language}
          onNavigate={setCurrentPage}
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

      {currentPage === 'user-dashboard' && (
        <UserDashboardPage 
          language={language}
          isPremium={isLoggedIn}
          onNavigate={setCurrentPage}
          analysisHistory={analysisHistory}
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

      {currentPage === 'premium-activation' && (
        <PremiumActivationPage 
          language={language}
          onContinue={() => {
            activatePremium();
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          planType={selectedPlanType || 'oneTime'}
        />
      )}

      {currentPage === 'premium-success' && (
        <PremiumSuccessPage 
          language={language}
          onAccessAnalysis={() => {
            activatePremium();
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {currentPage === 'launch-checklist' && (
        <LaunchChecklistPage language={language} />
      )}

      {currentPage === 'metrics' && (
        <MetricsDashboard language={language} />
      )}

      {currentPage === 'comparison' && (
        <FreemiumComparisonVisual 
          language={language}
          onUpgradePremium={() => setCurrentPage('pricing')}
        />
      )}

      {currentPage === 'user-journey' && (
        <UserJourneyVisualization language={language} />
      )}

      {currentPage === 'email-widget' && (
        <EmailPremiumWidget 
          language={language}
          onNavigateToPricing={() => setCurrentPage('pricing')}
        />
      )}

      {currentPage === 'seo-landing' && (
        <SEOLandingPage 
          language={language}
          onNavigate={setCurrentPage}
        />
      )}

      {currentPage === 'mobile-experience' && (
        <MobileFirstExperience 
          language={language}
          onNavigate={setCurrentPage}
        />
      )}

      {currentPage === 'growth-loop' && currentAnalysis && (
        <GrowthLoop 
          language={language}
          userScore={currentAnalysis.overall_score}
          isPremium={isLoggedIn}
          onAnalyzeAgain={() => {
            setCurrentPage('home');
            setTimeout(() => {
              document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          onCompare={() => setCurrentPage('comparison')}
        />
      )}

      {currentPage === 'post-purchase-email' && (
        <PostPurchaseEmail 
          language={language}
          userEmail="user@example.com"
          purchaseDate={new Date().toLocaleDateString()}
        />
      )}

      {currentPage === 'roadmap' && (
        <ProductRoadmap 
          language={language}
          layout="vertical"
        />
      )}

      {currentPage === 'enhanced-premium' && currentAnalysis && (
        <EnhancedPremiumAnalysis 
          language={language}
          isPremium={isLoggedIn}
          cvScore={currentAnalysis.overall_score}
          onUpgrade={() => setCurrentPage('pricing')}
        />
      )}

      {currentPage === 'seo-marketing-suisse' && (
        <SEOMarketingSuisse 
          language={language}
          onStartAnalysis={() => {
            setCurrentPage('home');
            setTimeout(() => {
              document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />
      )}

      {currentPage === 'seo-etudiant-europe' && (
        <SEOEtudiantEurope 
          language={language}
          onStartAnalysis={() => {
            setCurrentPage('home');
            setTimeout(() => {
              document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />
      )}

      {currentPage === 'seo-data-analyst' && (
        <SEODataAnalyst 
          language={language}
          onStartAnalysis={() => {
            setCurrentPage('home');
            setTimeout(() => {
              document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />
      )}

      {currentPage === 'seo-premier-emploi' && (
        <SEOPremierEmploi 
          language={language}
          onStartAnalysis={() => {
            setCurrentPage('home');
            setTimeout(() => {
              document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
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

      {/* Onboarding Modal */}
      <OnboardingModal
        isOpen={showOnboarding}
        onClose={() => setShowOnboarding(false)}
        language={language}
      />

      {/* Admin Dev Tools */}
      <AdminDevTools
        onNavigate={setCurrentPage}
        onResetOnboarding={resetOnboarding}
        onTogglePremium={togglePremium}
        isPremium={isLoggedIn}
      />

      {/* Launch Celebration (shown when checklist 100%) */}
      <LaunchCelebration />

      <Footer language={language} setCurrentPage={setCurrentPage} />
    </div>
  );
}