import { XCircle, ArrowLeft, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface PaymentCancelPageProps {
  language: 'fr' | 'en';
  onReturnToPricing: () => void;
  onReturnHome: () => void;
}

const content = {
  fr: {
    title: 'Paiement annulé',
    subtitle: 'Aucun paiement n\'a été effectué.',
    cta: {
      pricing: 'Retour aux tarifs',
      home: 'Retour à l\'accueil',
    },
  },
  en: {
    title: 'Payment cancelled',
    subtitle: 'No payment was processed.',
    cta: {
      pricing: 'Back to pricing',
      home: 'Back to home',
    },
  },
};

export function PaymentCancelPage({
  language,
  onReturnToPricing,
  onReturnHome,
}: PaymentCancelPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Cancel Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mb-8 shadow-2xl"
          >
            <XCircle className="text-white" size={48} />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl text-gray-900 mb-4"
          >
            {t.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-8"
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onReturnToPricing}
            className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            {t.cta.pricing}
          </button>

          <button
            onClick={onReturnHome}
            className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
          >
            {t.cta.home}
          </button>
        </motion.div>
      </div>
    </div>
  );
}