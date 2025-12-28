import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface AIAssistanceButtonProps {
  language: 'fr' | 'en';
  section: string;
  currentText: string;
  onImprove: (improvedText: string) => void;
}

const content = {
  fr: {
    button: 'Améliorer avec l\'IA',
    improving: 'Amélioration...',
  },
  en: {
    button: 'Improve with AI',
    improving: 'Improving...',
  },
};

export function AIAssistanceButton({ language, section, currentText, onImprove }: AIAssistanceButtonProps) {
  const t = content[language];
  const [isImproving, setIsImproving] = useState(false);

  const handleImprove = async () => {
    if (!currentText.trim()) return;

    setIsImproving(true);

    // Simulate AI improvement (in production, call AI API)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock improvement logic
    let improved = currentText;
    
    if (section === 'summary') {
      improved = currentText + '\n\n' + (language === 'fr' 
        ? 'Passionné(e) par l\'innovation et l\'excellence, je recherche constamment à développer mes compétences et à apporter de la valeur aux projets sur lesquels je travaille.'
        : 'Passionate about innovation and excellence, I constantly seek to develop my skills and bring value to the projects I work on.');
    } else if (section === 'experience') {
      improved = currentText + '\n\n• ' + (language === 'fr'
        ? 'Augmentation de 30% de la productivité de l\'équipe grâce à l\'implémentation de nouvelles méthodologies'
        : 'Increased team productivity by 30% through implementation of new methodologies');
    }

    onImprove(improved);
    setIsImproving(false);
  };

  return (
    <button
      onClick={handleImprove}
      disabled={!currentText.trim() || isImproving}
      className="flex items-center gap-1 px-3 py-1.5 text-xs text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Sparkles size={14} />
      <span>{isImproving ? t.improving : t.button}</span>
    </button>
  );
}
