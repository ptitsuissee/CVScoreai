import { Mail, Lock, CreditCard, FileText, Shield } from 'lucide-react';

interface EmailRGPDTextsProps {
  language: 'fr' | 'en';
  type: 'account-creation' | 'login' | 'payment' | 'export-pdf';
  showFooter?: boolean;
}

const content = {
  fr: {
    'account-creation': {
      icon: 'mail',
      title: 'Création de compte',
      message: 'Cet email est envoyé suite à la création de ton compte CVScore.ai.\nTes données sont utilisées uniquement pour te fournir le service.',
    },
    'login': {
      icon: 'lock',
      title: 'Connexion sécurisée',
      message: 'Ce message contient un accès sécurisé à ton espace personnel.',
    },
    'payment': {
      icon: 'creditcard',
      title: 'Paiement sécurisé',
      message: 'Le paiement est traité de manière sécurisée par Stripe.\nCVScore.ai n\'a jamais accès à tes informations bancaires.',
    },
    'export-pdf': {
      icon: 'filetext',
      title: 'Export PDF',
      message: 'Ton CV est généré à partir des informations que tu as fournies.',
    },
    footer: {
      text: 'Tu reçois cet email car tu utilises le service CVScore.ai.\nPour toute question : CVScoreai@outlook.com',
      privacy: 'Nous respectons ta vie privée.',
    },
  },
  en: {
    'account-creation': {
      icon: 'mail',
      title: 'Account Creation',
      message: 'This email is sent following the creation of your CVScore.ai account.\nYour data is used only to provide the service.',
    },
    'login': {
      icon: 'lock',
      title: 'Secure Login',
      message: 'This message contains secure access to your personal space.',
    },
    'payment': {
      icon: 'creditcard',
      title: 'Secure Payment',
      message: 'Payment is securely processed by Stripe.\nCVScore.ai never has access to your banking information.',
    },
    'export-pdf': {
      icon: 'filetext',
      title: 'PDF Export',
      message: 'Your resume is generated from the information you provided.',
    },
    footer: {
      text: 'You receive this email because you use the CVScore.ai service.\nFor any questions: CVScoreai@outlook.com',
      privacy: 'We respect your privacy.',
    },
  },
};

const iconMap: Record<string, any> = {
  mail: Mail,
  lock: Lock,
  creditcard: CreditCard,
  filetext: FileText,
};

export function EmailRGPDTexts({ language, type, showFooter = true }: EmailRGPDTextsProps) {
  const t = content[language];
  const emailContent = t[type];
  const Icon = iconMap[emailContent.icon];

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden max-w-2xl mx-auto">
      {/* Email Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
        <div className="text-white text-2xl">
          CVScore<span className="text-blue-200">.ai</span>
        </div>
      </div>

      {/* Email Body */}
      <div className="px-6 py-8">
        {/* Title with icon */}
        <div className="flex items-center gap-3 mb-6">
          {Icon && (
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Icon size={24} className="text-blue-600" />
            </div>
          )}
          <h2 className="text-2xl text-gray-900">{emailContent.title}</h2>
        </div>

        {/* Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg px-6 py-4 mb-6">
          <p className="text-sm text-blue-800 whitespace-pre-line">
            {emailContent.message}
          </p>
        </div>

        {/* Example content placeholder */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-6 py-8 mb-6 text-center">
          <p className="text-gray-500 italic">
            {language === 'fr' 
              ? '[Contenu spécifique de l\'email ici]'
              : '[Specific email content here]'}
          </p>
        </div>

        {/* Footer (if enabled) */}
        {showFooter && (
          <div className="border-t border-gray-200 pt-6">
            {/* Privacy badge */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield size={16} className="text-green-600" />
              <span className="text-sm text-green-700">{t.footer.privacy}</span>
            </div>

            {/* Footer text */}
            <p className="text-xs text-gray-600 text-center whitespace-pre-line">
              {t.footer.text}
            </p>
          </div>
        )}
      </div>

      {/* Email Footer */}
      <div className="bg-gray-100 px-6 py-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          {language === 'fr' 
            ? 'CVScore.ai · Service conforme RGPD · Données sécurisées'
            : 'CVScore.ai · GDPR Compliant Service · Secure Data'}
        </p>
      </div>
    </div>
  );
}
