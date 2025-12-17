import { CheckCircle, ArrowRight, Sparkles, Download } from 'lucide-react';
import { motion } from 'motion/react';

interface PaymentSuccessPageProps {
  language: 'fr' | 'en';
  onContinue: () => void;
}

const content = {
  fr: {
    title: 'Paiement confirmé ✅',
    subtitle: 'Merci pour ton achat.',
    message: 'Ton accès Premium est maintenant actif.',
    cta: 'Revenir à l\'analyse',
  },
  en: {
    title: 'Payment confirmed ✅',
    subtitle: 'Thank you for your purchase.',
    message: 'Your Premium access is now active.',
    cta: 'Back to analysis',
  },
};

export function PaymentSuccessPage({ language, onContinue }: PaymentSuccessPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-8 shadow-2xl"
          >
            <CheckCircle className="text-white" size={48} />
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
            className="text-xl text-green-600 mb-8"
          >
            {t.subtitle}
          </motion.p>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t.message}
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={onContinue}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-600/30 flex items-center gap-3 text-lg"
          >
            {t.cta}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </motion.div>

        {/* Confetti effect (visual only) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 1,
                x: Math.random() * window.innerWidth,
                y: -20,
                rotate: 0,
              }}
              animate={{
                opacity: 0,
                y: window.innerHeight + 20,
                rotate: 360,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: 'linear',
              }}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'][
                  Math.floor(Math.random() * 4)
                ],
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}