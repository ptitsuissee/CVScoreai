import { Shield, Mail, CreditCard, Lock, Eye, Edit, Trash2, Ban } from 'lucide-react';

interface PrivacyPolicyPageProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Politique de confidentialité',
    intro: 'La protection de tes données personnelles est une priorité pour CVScore.ai.',
    lastUpdate: 'Dernière mise à jour : 29 décembre 2024',
    
    sections: [
      {
        icon: 'shield',
        title: 'Données collectées',
        content: [
          {
            subtitle: 'Lors de la création de compte :',
            items: [
              'Email (pour identification et communication)',
              'Mot de passe (stocké de manière chiffrée)',
              'Date de création du compte',
            ],
          },
          {
            subtitle: 'Lors de l\'utilisation du service :',
            items: [
              'CV et contenus saisis (textes, expériences, formations)',
              'Résultats d\'analyse générés par l\'IA',
              'Données d\'usage du service (pages visitées, fonctionnalités utilisées)',
            ],
          },
          {
            subtitle: 'Lors du paiement :',
            items: [
              'Données de paiement traitées exclusivement par Stripe',
              'CVScore.ai n\'a jamais accès à tes informations bancaires',
            ],
          },
        ],
      },
      {
        icon: 'lock',
        title: 'Utilisation des données',
        intro: 'Les données collectées sont utilisées uniquement pour :',
        items: [
          'Fournir le service d\'analyse et de création de CV',
          'Améliorer la qualité de l\'analyse IA',
          'Gérer l\'accès Premium et les abonnements',
          'Assurer la sécurité du site et prévenir les abus',
          'Communiquer avec toi concernant ton compte et le service',
        ],
      },
      {
        icon: 'creditcard',
        title: 'Paiements',
        content: [
          {
            subtitle: 'Traitement sécurisé',
            text: 'Les paiements sont traités par Stripe, prestataire certifié PCI-DSS niveau 1 (plus haut niveau de sécurité bancaire).',
          },
          {
            subtitle: 'Confidentialité bancaire',
            text: 'CVScore.ai n\'a jamais accès à tes informations bancaires (numéro de carte, cryptogramme, etc.).',
          },
          {
            subtitle: 'Données conservées',
            text: 'Seuls ton email et le statut de ton abonnement sont associés à ton compte.',
          },
        ],
      },
      {
        icon: 'lock',
        title: 'Stockage et sécurité',
        content: [
          {
            subtitle: 'Hébergement',
            text: 'Les données sont stockées sur des serveurs européens conformes aux normes de sécurité RGPD.',
          },
          {
            subtitle: 'Protection',
            items: [
              'Mots de passe chiffrés (hashing sécurisé)',
              'Connexion sécurisée HTTPS',
              'Accès restreint aux données',
              'Sauvegardes régulières',
            ],
          },
          {
            subtitle: 'Conservation',
            text: 'Tes données sont conservées tant que ton compte est actif. En cas de suppression de compte, tes données personnelles sont effacées sous 30 jours.',
          },
        ],
      },
      {
        icon: 'ban',
        title: 'Partage des données',
        content: [
          {
            subtitle: 'Principe',
            text: 'Tes données ne sont jamais revendues à des tiers.',
          },
          {
            subtitle: 'Partage limité',
            text: 'Les seuls partages effectués concernent :',
            items: [
              'Stripe (traitement des paiements)',
              'Prestataires d\'hébergement (stockage sécurisé)',
            ],
          },
          {
            subtitle: 'Garantie',
            text: 'Tous nos prestataires sont conformes RGPD et soumis à des obligations de confidentialité.',
          },
        ],
      },
      {
        icon: 'eye',
        title: 'Droits des utilisateurs',
        intro: 'Conformément au RGPD (UE) et à la LPD (Suisse), tu disposes des droits suivants :',
        rights: [
          {
            icon: 'eye',
            title: 'Droit d\'accès',
            text: 'Consulter les données personnelles que nous détenons sur toi',
          },
          {
            icon: 'edit',
            title: 'Droit de rectification',
            text: 'Corriger ou mettre à jour tes informations personnelles',
          },
          {
            icon: 'trash',
            title: 'Droit de suppression',
            text: 'Supprimer ton compte et effacer tes données personnelles',
          },
          {
            icon: 'ban',
            title: 'Droit d\'opposition',
            text: 'T\'opposer au traitement de certaines données',
          },
        ],
        footer: 'Pour exercer ces droits, contacte-nous à l\'adresse ci-dessous.',
      },
      {
        icon: 'mail',
        title: 'Contact',
        text: 'Pour toute question relative à la protection de tes données personnelles :',
        email: 'CVScoreai@outlook.com',
        delay: 'Nous nous engageons à répondre sous 72 heures.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    intro: 'Protecting your personal data is a priority for CVScore.ai.',
    lastUpdate: 'Last updated: December 29, 2024',
    
    sections: [
      {
        icon: 'shield',
        title: 'Data Collected',
        content: [
          {
            subtitle: 'When creating an account:',
            items: [
              'Email (for identification and communication)',
              'Password (stored in encrypted form)',
              'Account creation date',
            ],
          },
          {
            subtitle: 'When using the service:',
            items: [
              'Resume and content entered (text, experience, education)',
              'AI-generated analysis results',
              'Service usage data (pages visited, features used)',
            ],
          },
          {
            subtitle: 'During payment:',
            items: [
              'Payment data processed exclusively by Stripe',
              'CVScore.ai never has access to your banking information',
            ],
          },
        ],
      },
      {
        icon: 'lock',
        title: 'Data Usage',
        intro: 'Collected data is used only to:',
        items: [
          'Provide resume analysis and creation services',
          'Improve AI analysis quality',
          'Manage Premium access and subscriptions',
          'Ensure site security and prevent abuse',
          'Communicate with you about your account and the service',
        ],
      },
      {
        icon: 'creditcard',
        title: 'Payments',
        content: [
          {
            subtitle: 'Secure processing',
            text: 'Payments are processed by Stripe, a PCI-DSS Level 1 certified provider (highest banking security level).',
          },
          {
            subtitle: 'Banking confidentiality',
            text: 'CVScore.ai never has access to your banking information (card number, CVV, etc.).',
          },
          {
            subtitle: 'Data retained',
            text: 'Only your email and subscription status are associated with your account.',
          },
        ],
      },
      {
        icon: 'lock',
        title: 'Storage and Security',
        content: [
          {
            subtitle: 'Hosting',
            text: 'Data is stored on European servers compliant with GDPR security standards.',
          },
          {
            subtitle: 'Protection',
            items: [
              'Encrypted passwords (secure hashing)',
              'Secure HTTPS connection',
              'Restricted data access',
              'Regular backups',
            ],
          },
          {
            subtitle: 'Retention',
            text: 'Your data is kept as long as your account is active. If you delete your account, your personal data is erased within 30 days.',
          },
        ],
      },
      {
        icon: 'ban',
        title: 'Data Sharing',
        content: [
          {
            subtitle: 'Principle',
            text: 'Your data is never sold to third parties.',
          },
          {
            subtitle: 'Limited sharing',
            text: 'The only sharing performed concerns:',
            items: [
              'Stripe (payment processing)',
              'Hosting providers (secure storage)',
            ],
          },
          {
            subtitle: 'Guarantee',
            text: 'All our providers are GDPR compliant and subject to confidentiality obligations.',
          },
        ],
      },
      {
        icon: 'eye',
        title: 'User Rights',
        intro: 'In accordance with GDPR (EU) and LPD (Switzerland), you have the following rights:',
        rights: [
          {
            icon: 'eye',
            title: 'Right of access',
            text: 'View the personal data we hold about you',
          },
          {
            icon: 'edit',
            title: 'Right of rectification',
            text: 'Correct or update your personal information',
          },
          {
            icon: 'trash',
            title: 'Right to deletion',
            text: 'Delete your account and erase your personal data',
          },
          {
            icon: 'ban',
            title: 'Right to object',
            text: 'Object to the processing of certain data',
          },
        ],
        footer: 'To exercise these rights, contact us at the address below.',
      },
      {
        icon: 'mail',
        title: 'Contact',
        text: 'For any questions regarding the protection of your personal data:',
        email: 'CVScoreai@outlook.com',
        delay: 'We commit to responding within 72 hours.',
      },
    ],
  },
};

const iconMap: Record<string, any> = {
  shield: Shield,
  mail: Mail,
  creditcard: CreditCard,
  lock: Lock,
  eye: Eye,
  edit: Edit,
  trash: Trash2,
  ban: Ban,
};

export function PrivacyPolicyPage({ language }: PrivacyPolicyPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Shield size={24} className="text-blue-600" />
            </div>
            <h1 className="text-4xl text-gray-900">{t.title}</h1>
          </div>
          <p className="text-lg text-gray-700 mb-4">{t.intro}</p>
          <p className="text-sm text-gray-500">{t.lastUpdate}</p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {t.sections.map((section, idx) => {
            const Icon = iconMap[section.icon];
            
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6">
                  {Icon && (
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                  )}
                  <h2 className="text-2xl text-gray-900">{section.title}</h2>
                </div>

                {/* Section Content */}
                {section.intro && (
                  <p className="text-gray-700 mb-4">{section.intro}</p>
                )}

                {/* Simple list */}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Complex content */}
                {section.content && (
                  <div className="space-y-6">
                    {section.content.map((item, i) => (
                      <div key={i}>
                        {item.subtitle && (
                          <h3 className="text-lg text-gray-900 mb-2">{item.subtitle}</h3>
                        )}
                        {item.text && (
                          <p className="text-gray-700 mb-2">{item.text}</p>
                        )}
                        {item.items && (
                          <ul className="space-y-2 ml-4">
                            {item.items.map((subitem, j) => (
                              <li key={j} className="flex items-start gap-3 text-gray-700">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{subitem}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Rights section */}
                {section.rights && (
                  <div className="space-y-4">
                    {section.rights.map((right, i) => {
                      const RightIcon = iconMap[right.icon];
                      return (
                        <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                          {RightIcon && (
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <RightIcon size={16} className="text-blue-600" />
                            </div>
                          )}
                          <div>
                            <h3 className="text-gray-900 mb-1">{right.title}</h3>
                            <p className="text-sm text-gray-600">{right.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {section.footer && (
                  <p className="text-gray-600 mt-4 italic">{section.footer}</p>
                )}

                {/* Contact section */}
                {section.text && (
                  <div>
                    <p className="text-gray-700 mb-4">{section.text}</p>
                    {section.email && (
                      <a 
                        href={`mailto:${section.email}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Mail size={18} />
                        {section.email}
                      </a>
                    )}
                    {section.delay && (
                      <p className="text-sm text-gray-600 mt-4">{section.delay}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer RGPD */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="text-sm text-blue-800 text-center">
            {language === 'fr' 
              ? 'Données hébergées de manière sécurisée.\nConforme au RGPD (UE) et à la LPD (Suisse).'
              : 'Data securely hosted.\nCompliant with GDPR (EU) and LPD (Switzerland).'}
          </p>
        </div>
      </div>
    </div>
  );
}
