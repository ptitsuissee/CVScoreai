import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface MobileCTAProps {
  language: 'fr' | 'en';
  currentPage: string;
  onAnalyze: () => void;
}

const content = {
  fr: {
    cta: 'Analyser gratuitement',
  },
  en: {
    cta: 'Analyze for free',
  },
};

export function MobileCTA({ language, currentPage, onAnalyze }: MobileCTAProps) {
  const t = content[language];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px on home page
      if (currentPage === 'home' && window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Only show on mobile/tablet
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-30 p-4 bg-white border-t border-gray-200 shadow-2xl lg:hidden"
        >
          <button
            onClick={onAnalyze}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>{t.cta}</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
