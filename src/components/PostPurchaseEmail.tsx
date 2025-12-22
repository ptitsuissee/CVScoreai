import { CheckCircle, Mail, Crown, Sparkles, ExternalLink, FileText, Target, Download, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface PostPurchaseEmailProps {
  language: 'fr' | 'en';
  userEmail?: string;
  purchaseDate?: string;
}

const content = {
  fr: {
    // Header
    subject: 'Accès Premium activé 🎉',
    preheader: 'Ton paiement a été confirmé',
    
    // Main content
    greeting: 'Merci pour ton achat !',
    mainText: 'Ton accès Premium est maintenant actif.',
    
    // Important section
    importantTitle: '⚠️ Important',
    importantText1: 'L\'accès Premium est lié à l\'email utilisé lors du paiement.',
    importantText2: 'Pour activer Premium dans l\'outil :',
    steps: [
      'Retourne sur CVScore.ai',
      'Entre cet email',
      'Clique sur "Activer Premium"',
    ],
    
    // Email display
    yourEmail: 'Ton email',
    
    // CTA
    ctaButton: 'Accéder à mon analyse Premium',
    ctaUrl: 'https://cvscore.ai/email-widget',
    
    // Benefits reminder
    benefitsTitle: 'Ce qui est maintenant débloqué',
    benefits: [
      {
        icon: FileText,
        title: 'Analyse complète',
        description: 'Feedback détaillé ligne par ligne',
      },
      {
        icon: Target,
        title: 'Optimisation ATS',
        description: 'Améliore ta compatibilité avec les systèmes de recrutement',
      },
      {
        icon: Download,
        title: 'Export PDF',
        description: 'Télécharge tes analyses en format professionnel',
      },
      {
        icon: Sparkles,
        title: 'Analyses illimitées',
        description: 'Teste autant de CV que tu veux',
      },
    ],
    
    // Support
    supportTitle: 'Une question ?',
    supportText: 'Notre équipe est là pour t\'aider',
    supportEmail: 'CVScoreai@outlook.com',
    
    // Footer
    footerText: 'Tu as reçu cet email car tu as acheté un accès Premium sur CVScore.ai',
    unsubscribe: 'Se désabonner',
    privacy: 'Politique de confidentialité',
  },
  en: {
    // Header
    subject: 'Premium access activated 🎉',
    preheader: 'Your payment has been confirmed',
    
    // Main content
    greeting: 'Thank you for your purchase!',
    mainText: 'Your Premium access is now active.',
    
    // Important section
    importantTitle: '⚠️ Important',
    importantText1: 'Premium access is linked to the email used during payment.',
    importantText2: 'To activate Premium in the tool:',
    steps: [
      'Return to CVScore.ai',
      'Enter this email',
      'Click "Activate Premium"',
    ],
    
    // Email display
    yourEmail: 'Your email',
    
    // CTA
    ctaButton: 'Access my Premium analysis',
    ctaUrl: 'https://cvscore.ai/email-widget',
    
    // Benefits reminder
    benefitsTitle: 'What\'s now unlocked',
    benefits: [
      {
        icon: FileText,
        title: 'Complete analysis',
        description: 'Detailed line-by-line feedback',
      },
      {
        icon: Target,
        title: 'ATS optimization',
        description: 'Improve your compatibility with recruitment systems',
      },
      {
        icon: Download,
        title: 'PDF export',
        description: 'Download your analyses in professional format',
      },
      {
        icon: Sparkles,
        title: 'Unlimited analyses',
        description: 'Test as many resumes as you want',
      },
    ],
    
    // Support
    supportTitle: 'Need help?',
    supportText: 'Our team is here to help',
    supportEmail: 'CVScoreai@outlook.com',
    
    // Footer
    footerText: 'You received this email because you purchased Premium access on CVScore.ai',
    unsubscribe: 'Unsubscribe',
    privacy: 'Privacy Policy',
  },
};

export function PostPurchaseEmail({ language, userEmail = 'user@example.com', purchaseDate = new Date().toLocaleDateString() }: PostPurchaseEmailProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Email Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          {/* Email Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-center">
            <div className="text-white text-2xl mb-2">CVScore.ai</div>
            <div className="flex items-center justify-center gap-2">
              <Crown className="text-yellow-300" size={24} />
              <h1 className="text-xl text-white">{t.subject}</h1>
            </div>
          </div>

          {/* Email Body */}
          <div className="px-8 py-8">
            {/* Success Icon */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h2 className="text-2xl text-gray-900 mb-2">{t.greeting}</h2>
              <p className="text-lg text-gray-600">{t.mainText}</p>
            </div>

            {/* Important Section */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-400 rounded-r-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="text-lg text-gray-900 mb-2">{t.importantTitle}</h3>
                  <p className="text-gray-700 mb-3">{t.importantText1}</p>
                  <p className="text-gray-700 mb-3">{t.importantText2}</p>
                  
                  {/* Steps */}
                  <div className="space-y-2">
                    {t.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                          {index + 1}
                        </div>
                        <span className="text-gray-800 pt-0.5">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Email Display */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
              <div className="text-sm text-gray-600 mb-2">{t.yourEmail}</div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-blue-600" />
                <span className="text-lg text-gray-900">{userEmail}</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-8">
              <a
                href={t.ctaUrl}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all text-lg"
              >
                <Crown size={24} />
                <span>{t.ctaButton}</span>
                <ExternalLink size={20} />
              </a>
            </div>

            {/* Benefits Reminder */}
            <div className="mb-8">
              <h3 className="text-xl text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
                <Sparkles className="text-yellow-500" size={24} />
                {t.benefitsTitle}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900 mb-1">{benefit.title}</div>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Support Section */}
            <div className="bg-gray-50 rounded-lg p-6 text-center border-2 border-gray-200">
              <h4 className="text-lg text-gray-900 mb-2 flex items-center justify-center gap-2">
                <Mail size={20} className="text-blue-600" />
                {t.supportTitle}
              </h4>
              <p className="text-gray-600 mb-3">{t.supportText}</p>
              <a
                href={`mailto:${t.supportEmail}`}
                className="text-blue-600 hover:text-blue-700 underline"
              >
                {t.supportEmail}
              </a>
            </div>
          </div>

          {/* Email Footer */}
          <div className="bg-gray-100 px-8 py-6 border-t-2 border-gray-200 text-center">
            <p className="text-sm text-gray-600 mb-3">{t.footerText}</p>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-700">{t.unsubscribe}</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-700">{t.privacy}</a>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              CVScore.ai • {purchaseDate}
            </div>
          </div>
        </motion.div>

        {/* Preview Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {language === 'fr' 
              ? '💡 Ceci est un aperçu du design de l\'email post-paiement' 
              : '💡 This is a preview of the post-purchase email design'}
          </p>
        </div>
      </div>
    </div>
  );
}
