import { Shield, Database, Lock, Eye, UserCheck, Mail, AlertCircle, FileText } from 'lucide-react';

interface PrivacyPageProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Politique de confidentialité',
    lastUpdated: 'Dernière mise à jour : Décembre 2024',
    intro: 'La présente politique de confidentialité explique comment CVScore.ai collecte, utilise et protège les données personnelles des utilisateurs.',
    sections: [
      {
        icon: AlertCircle,
        title: '1. Introduction',
        content: 'CVScore.ai s\'engage à protéger la vie privée de ses utilisateurs. Cette politique décrit nos pratiques concernant la collecte, l\'utilisation et la protection de vos données personnelles conformément aux principes du RGPD et aux bonnes pratiques suisses en matière de protection des données.',
      },
      {
        icon: Database,
        title: '2. Données collectées',
        content: 'CVScore.ai peut collecter les types de données suivants :',
        items: [
          'Le contenu du CV fourni volontairement par l\'utilisateur pour analyse',
          'Des données techniques anonymes (type de navigateur, système d\'exploitation, type d\'appareil)',
          'Des informations d\'utilisation du service (nombre d\'analyses effectuées, fonctionnalités utilisées)',
        ],
      },
      {
        icon: FileText,
        title: '3. Utilisation des données',
        content: 'Les données collectées sont utilisées uniquement pour :',
        items: [
          'Fournir l\'analyse du CV demandée par l\'utilisateur',
          'Générer des recommandations personnalisées d\'amélioration',
          'Améliorer la qualité et la pertinence du service',
          'Assurer le bon fonctionnement technique de la plateforme',
        ],
      },
      {
        icon: Lock,
        title: '4. Conservation des données',
        content: 'Les CV analysés ne sont pas conservés durablement sur nos serveurs. Les données sont traitées uniquement le temps nécessaire à l\'analyse puis supprimées. Aucun CV n\'est stocké de manière permanente sans le consentement explicite de l\'utilisateur.',
      },
      {
        icon: Eye,
        title: '5. Partage des données',
        content: 'CVScore.ai s\'engage fermement à ne jamais vendre, louer ou partager vos données personnelles à des fins commerciales. Les données ne sont pas transmises à des tiers, sauf obligation légale ou avec votre consentement explicite.',
      },
      {
        icon: Shield,
        title: '6. Sécurité',
        content: 'Des mesures techniques et organisationnelles raisonnables sont mises en œuvre pour protéger vos données contre tout accès non autorisé, perte, destruction ou altération. Nous utilisons des protocoles de chiffrement et des pratiques de sécurité conformes aux standards de l\'industrie.',
      },
      {
        icon: UserCheck,
        title: '7. Droits des utilisateurs',
        content: 'Conformément au RGPD, vous disposez des droits suivants :',
        items: [
          'Droit d\'accès à vos données personnelles',
          'Droit de rectification de vos données inexactes',
          'Droit de suppression de vos données (droit à l\'oubli)',
          'Droit d\'opposition au traitement de vos données',
          'Droit à la portabilité de vos données',
        ],
        footer: 'Pour exercer vos droits, contactez-nous à l\'adresse ci-dessous.',
      },
      {
        icon: Mail,
        title: '8. Contact',
        content: 'Pour toute question relative à la protection de vos données personnelles ou pour exercer vos droits, vous pouvez nous contacter à :',
        email: 'CVScoreai@outlook.com',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: December 2024',
    intro: 'This Privacy Policy explains how CVScore.ai collects, uses, and protects users\' personal data.',
    sections: [
      {
        icon: AlertCircle,
        title: '1. Introduction',
        content: 'CVScore.ai is committed to protecting the privacy of its users. This policy describes our practices regarding the collection, use, and protection of your personal data in accordance with GDPR principles and Swiss best practices for data protection.',
      },
      {
        icon: Database,
        title: '2. Data collected',
        content: 'CVScore.ai may collect the following types of data:',
        items: [
          'Resume content voluntarily provided by the user for analysis',
          'Anonymous technical data (browser type, operating system, device type)',
          'Service usage information (number of analyses performed, features used)',
        ],
      },
      {
        icon: FileText,
        title: '3. Use of data',
        content: 'Collected data is used solely to:',
        items: [
          'Provide the resume analysis requested by the user',
          'Generate personalized improvement recommendations',
          'Improve service quality and relevance',
          'Ensure proper technical operation of the platform',
        ],
      },
      {
        icon: Lock,
        title: '4. Data retention',
        content: 'Analyzed resumes are not stored long-term on our servers. Data is processed only for the duration necessary for analysis and then deleted. No resume is permanently stored without the user\'s explicit consent.',
      },
      {
        icon: Eye,
        title: '5. Data sharing',
        content: 'CVScore.ai firmly commits to never sell, rent, or share your personal data for commercial purposes. Data is not transmitted to third parties, except when legally required or with your explicit consent.',
      },
      {
        icon: Shield,
        title: '6. Security',
        content: 'Reasonable technical and organizational measures are implemented to protect your data against unauthorized access, loss, destruction, or alteration. We use encryption protocols and security practices compliant with industry standards.',
      },
      {
        icon: UserCheck,
        title: '7. User rights',
        content: 'In accordance with GDPR, you have the following rights:',
        items: [
          'Right to access your personal data',
          'Right to rectify inaccurate data',
          'Right to delete your data (right to be forgotten)',
          'Right to object to data processing',
          'Right to data portability',
        ],
        footer: 'To exercise your rights, contact us at the address below.',
      },
      {
        icon: Mail,
        title: '8. Contact',
        content: 'For any questions regarding the protection of your personal data or to exercise your rights, you can contact us at:',
        email: 'CVScoreai@outlook.com',
      },
    ],
  },
};

export function PrivacyPage({ language }: PrivacyPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="text-blue-600" size={32} />
            <h1 className="text-gray-900">{t.title}</h1>
          </div>
          <p className="text-center text-gray-500 text-sm mb-4">{t.lastUpdated}</p>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">{t.intro}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {t.sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:border-gray-300 transition-colors"
              >
                {/* Section Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-blue-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-gray-900 mb-3">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                  </div>
                </div>

                {/* Items list if present */}
                {section.items && (
                  <ul className="mt-4 space-y-2 ml-13">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Email if present */}
                {section.email && (
                  <div className="mt-4 ml-13">
                    <a
                      href={`mailto:${section.email}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 underline"
                    >
                      <Mail size={18} />
                      {section.email}
                    </a>
                  </div>
                )}

                {/* Footer note if present */}
                {section.footer && (
                  <p className="mt-4 ml-13 text-sm text-gray-500 italic">{section.footer}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Final note */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex items-start gap-3">
            <Shield className="text-blue-600 flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="text-sm text-blue-900 leading-relaxed">
                {language === 'fr' ? (
                  <>
                    <strong>Engagement de transparence :</strong> CVScore.ai s'engage à maintenir 
                    cette politique de confidentialité à jour et à informer ses utilisateurs de toute 
                    modification substantielle. Votre confiance est notre priorité.
                  </>
                ) : (
                  <>
                    <strong>Commitment to transparency:</strong> CVScore.ai commits to keeping 
                    this privacy policy up to date and informing users of any substantial changes. 
                    Your trust is our priority.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
