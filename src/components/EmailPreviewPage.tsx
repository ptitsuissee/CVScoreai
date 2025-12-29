import { EmailRGPDTexts } from './EmailRGPDTexts';

interface EmailPreviewPageProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Aperçu des emails transactionnels',
    subtitle: 'Tous les emails envoyés par CVScore.ai respectent les standards RGPD.',
    types: [
      { id: 'account-creation', label: 'Email de création de compte' },
      { id: 'login', label: 'Email de connexion sécurisée' },
      { id: 'payment', label: 'Email de confirmation de paiement' },
      { id: 'export-pdf', label: 'Email d\'export PDF' },
    ],
  },
  en: {
    title: 'Transactional Email Preview',
    subtitle: 'All emails sent by CVScore.ai comply with GDPR standards.',
    types: [
      { id: 'account-creation', label: 'Account creation email' },
      { id: 'login', label: 'Secure login email' },
      { id: 'payment', label: 'Payment confirmation email' },
      { id: 'export-pdf', label: 'PDF export email' },
    ],
  },
};

export function EmailPreviewPage({ language }: EmailPreviewPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-gray-900 mb-4">{t.title}</h1>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        {/* Email previews */}
        <div className="space-y-12">
          {t.types.map((type) => (
            <div key={type.id}>
              <h2 className="text-2xl text-gray-900 mb-6 text-center">{type.label}</h2>
              <EmailRGPDTexts 
                language={language} 
                type={type.id as any} 
                showFooter={true}
              />
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="text-sm text-blue-800 text-center">
            {language === 'fr' 
              ? 'Ces emails sont automatiquement envoyés pour informer l\'utilisateur et garantir la transparence du service.\nConformes RGPD et LPD (Suisse).'
              : 'These emails are automatically sent to inform users and ensure service transparency.\nGDPR and LPD (Switzerland) compliant.'}
          </p>
        </div>
      </div>
    </div>
  );
}
