import { Zap, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SEOTemplatePageProps {
  language: 'fr' | 'en';
  intention: {
    title: string;
    h1: string;
    introduction: string;
    whyUseful: {
      title: string;
      points: string[];
    };
    faq: {
      question: string;
      answer: string;
    }[];
  };
  onStartAnalysis: () => void;
}

export function SEOTemplatePage({ language, intention, onStartAnalysis }: SEOTemplatePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* H1 - SEO Critical */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
            {intention.h1}
          </h1>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm mb-8">
            <CheckCircle size={16} />
            <span>{language === 'fr' ? 'Analyse IA gratuite et instantanée' : 'Free and instant AI analysis'}</span>
          </div>

          {/* Introduction pédagogique */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {intention.introduction}
          </p>
        </motion.div>

        {/* CTA Principal - Accès direct à l'outil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center shadow-2xl">
            <h2 className="text-2xl sm:text-3xl text-white mb-4">
              {language === 'fr' ? 'Commence ton analyse maintenant' : 'Start your analysis now'}
            </h2>
            <p className="text-blue-100 mb-6">
              {language === 'fr' 
                ? 'Obtiens ton score et des conseils personnalisés en 30 secondes'
                : 'Get your score and personalized advice in 30 seconds'}
            </p>
            <button
              onClick={onStartAnalysis}
              className="px-8 py-4 bg-white text-purple-700 rounded-xl hover:bg-gray-100 transition-all inline-flex items-center gap-3 text-lg shadow-xl"
            >
              <Zap size={24} />
              <span>{language === 'fr' ? 'Analyser mon CV gratuitement' : 'Analyze my resume for free'}</span>
              <ArrowRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Bloc "Pourquoi cette analyse est utile" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
            <h2 className="text-2xl sm:text-3xl text-gray-900 mb-6">{intention.whyUseful.title}</h2>
            <div className="space-y-4">
              {intention.whyUseful.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mini FAQ ciblée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl text-gray-900 mb-8 text-center">
            {language === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}
          </h2>
          <div className="space-y-4">
            {intention.faq.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md hover:border-blue-300 transition-all">
                <h3 className="text-lg text-gray-900 mb-3 flex items-start gap-2">
                  <HelpCircle size={24} className="text-blue-600 flex-shrink-0" />
                  <span>{item.question}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border-2 border-blue-200 p-8">
            <h3 className="text-xl sm:text-2xl text-gray-900 mb-4">
              {language === 'fr' ? 'Prêt à améliorer ton CV ?' : 'Ready to improve your resume?'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'fr'
                ? 'Rejoins des milliers de candidats qui ont optimisé leur CV avec CVScore.ai'
                : 'Join thousands of candidates who optimized their resume with CVScore.ai'}
            </p>
            <button
              onClick={onStartAnalysis}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all inline-flex items-center gap-3 text-lg"
            >
              <Zap size={24} />
              <span>{language === 'fr' ? 'Commencer maintenant' : 'Start now'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
