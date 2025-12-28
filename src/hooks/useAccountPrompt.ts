import { useEffect, useState } from 'react';

interface UseAccountPromptOptions {
  isLoggedIn: boolean;
  onPrompt: (variant: 'save' | 'history' | 'payment') => void;
}

export function useAccountPrompt({ isLoggedIn, onPrompt }: UseAccountPromptOptions) {
  const [cvCreationCount, setCvCreationCount] = useState(0);
  const [analysisCount, setAnalysisCount] = useState(0);
  const [hasPromptedSave, setHasPromptedSave] = useState(false);
  const [hasPromptedHistory, setHasPromptedHistory] = useState(false);

  // Track CV creations
  const trackCVCreation = () => {
    if (isLoggedIn) return;
    
    const newCount = cvCreationCount + 1;
    setCvCreationCount(newCount);

    // Prompt after 2nd CV creation
    if (newCount >= 2 && !hasPromptedSave) {
      setHasPromptedSave(true);
      onPrompt('save');
    }
  };

  // Track analyses
  const trackAnalysis = () => {
    if (isLoggedIn) return;
    
    const newCount = analysisCount + 1;
    setAnalysisCount(newCount);

    // Prompt after 3rd analysis
    if (newCount >= 3 && !hasPromptedHistory) {
      setHasPromptedHistory(true);
      onPrompt('history');
    }
  };

  // Detect page leave attempt (beforeunload)
  useEffect(() => {
    if (isLoggedIn || hasPromptedSave) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Only prompt if user has created at least 1 CV
      if (cvCreationCount > 0) {
        e.preventDefault();
        e.returnValue = '';
        
        // Show account prompt modal
        setTimeout(() => {
          setHasPromptedSave(true);
          onPrompt('save');
        }, 100);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isLoggedIn, cvCreationCount, hasPromptedSave, onPrompt]);

  // Prompt on payment flow
  const trackPaymentIntent = () => {
    if (isLoggedIn) return;
    
    onPrompt('payment');
  };

  return {
    trackCVCreation,
    trackAnalysis,
    trackPaymentIntent,
    cvCreationCount,
    analysisCount,
  };
}
