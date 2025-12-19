import { Sparkles } from 'lucide-react';

interface OnboardingTestButtonProps {
  onClick: () => void;
}

export function OnboardingTestButton({ onClick }: OnboardingTestButtonProps) {
  const resetOnboarding = () => {
    localStorage.removeItem('hasSeenOnboarding');
    onClick();
  };

  return (
    <button
      onClick={resetOnboarding}
      className="fixed bottom-4 left-4 z-40 px-4 py-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all flex items-center gap-2 text-sm"
      title="Reset onboarding and show modal"
    >
      <Sparkles size={16} />
      <span>Test Onboarding</span>
    </button>
  );
}
