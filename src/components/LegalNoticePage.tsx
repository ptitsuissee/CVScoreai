import { FileText, Mail, Server, AlertCircle, Copyright, Scale } from 'lucide-react';

interface LegalNoticePageProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Mentions légales',
    lastUpdate: 'Dernière mise à jour : 29 décembre 2024',
    
    sections: [
      {
        icon: 'filetext',
        title: 'Éditeur du site',
        content: [
          {
            label: 'Nom du service',
            text: 'CVScore.ai',
          },
          {
            label: 'Nature du service',
            text: 'Service en ligne d\'analyse et de création de CV assisté par intelligence artificielle.',
          },
          {
            label: 'Pays',
            text: 'Suisse',
          },
        ],
      },
      {
        icon: 'mail',
        title: 'Contact',
        content: [
          {
            label: 'Email',
            text: 'CVScoreai@outlook.com',
            link: 'mailto:CVScoreai@outlook.com',
          },
          {
            label: 'Délai de réponse',
            text: 'Nous nous engageons à répondre sous 72 heures.',
          },
        ],
      },
      {
        icon: 'server',
        title: 'Hébergement',
        content: [
          {
            label: 'Infrastructure',
            text: 'Le site est hébergé par des prestataires européens conformes aux standards de sécurité RGPD.',
          },
          {
            label: 'Localisation',
            text: 'Serveurs situés dans l\'Union Européenne.',
          },
          {
            label: 'Sécurité',
            text: 'Connexion sécurisée HTTPS, sauvegardes régulières, accès restreint.',
          },
        ],
      },
      {
        icon: 'alert',
        title: 'Responsabilité',
        content: [
          {
            label: 'Nature du service',
            text: 'Les analyses de CV fournies sont générées par une intelligence artificielle et sont données à titre indicatif.',
          },
          {
            label: 'Exactitude',
            text: 'CVScore.ai met tout en œuvre pour fournir des résultats pertinents, mais ne garantit pas l\'exactitude absolue des recommandations.',
          },
          {
            label: 'Utilisation',
            text: 'L\'utilisateur reste seul responsable de l\'utilisation qu\'il fait des résultats et du contenu généré.',
          },
          {
            label: 'Disponibilité',
            text: 'CVScore.ai s\'efforce d\'assurer une disponibilité maximale du service, mais ne peut garantir une accessibilité ininterrompue.',
          },
        ],
      },
      {
        icon: 'copyright',
        title: 'Propriété intellectuelle',
        content: [
          {
            label: 'Contenu du site',
            text: 'L\'ensemble du contenu du site (textes, design, logos, code) est protégé par le droit d\'auteur.',
          },
          {
            label: 'Marque',
            text: 'La marque "CVScore.ai" et son logo sont des marques déposées.',
          },
          {
            label: 'CV créés',
            text: 'Les CV créés par les utilisateurs leur appartiennent. CVScore.ai ne revendique aucun droit sur le contenu créé par les utilisateurs.',
          },
          {
            label: 'Technologie IA',
            text: 'Les algorithmes et modèles d\'intelligence artificielle utilisés sont la propriété de CVScore.ai.',
          },
        ],
      },
      {
        icon: 'scale',
        title: 'Droit applicable',
        content: [
          {
            label: 'Juridiction',
            text: 'Le site est soumis au droit suisse.',
          },
          {
            label: 'Protection des données',
            text: 'Conformité à la LPD (Loi fédérale sur la protection des données, Suisse) et au RGPD (Règlement général sur la protection des données, UE).',
          },
          {
            label: 'Litiges',
            text: 'En cas de litige, les tribunaux suisses sont compétents.',
          },
        ],
      },
    ],
  },
  en: {
    title: 'Legal Notice',
    lastUpdate: 'Last updated: December 29, 2024',
    
    sections: [
      {
        icon: 'filetext',
        title: 'Website Publisher',
        content: [
          {
            label: 'Service name',
            text: 'CVScore.ai',
          },
          {
            label: 'Service type',
            text: 'Online AI-assisted resume analysis and creation service.',
          },
          {
            label: 'Country',
            text: 'Switzerland',
          },
        ],
      },
      {
        icon: 'mail',
        title: 'Contact',
        content: [
          {
            label: 'Email',
            text: 'CVScoreai@outlook.com',
            link: 'mailto:CVScoreai@outlook.com',
          },
          {
            label: 'Response time',
            text: 'We commit to responding within 72 hours.',
          },
        ],
      },
      {
        icon: 'server',
        title: 'Hosting',
        content: [
          {
            label: 'Infrastructure',
            text: 'The site is hosted by European providers compliant with GDPR security standards.',
          },
          {
            label: 'Location',
            text: 'Servers located in the European Union.',
          },
          {
            label: 'Security',
            text: 'Secure HTTPS connection, regular backups, restricted access.',
          },
        ],
      },
      {
        icon: 'alert',
        title: 'Liability',
        content: [
          {
            label: 'Service nature',
            text: 'Resume analyses provided are generated by artificial intelligence and are for informational purposes only.',
          },
          {
            label: 'Accuracy',
            text: 'CVScore.ai strives to provide relevant results but does not guarantee absolute accuracy of recommendations.',
          },
          {
            label: 'Usage',
            text: 'The user remains solely responsible for the use of results and generated content.',
          },
          {
            label: 'Availability',
            text: 'CVScore.ai strives to ensure maximum service availability but cannot guarantee uninterrupted access.',
          },
        ],
      },
      {
        icon: 'copyright',
        title: 'Intellectual Property',
        content: [
          {
            label: 'Site content',
            text: 'All site content (text, design, logos, code) is protected by copyright.',
          },
          {
            label: 'Trademark',
            text: 'The "CVScore.ai" brand and logo are registered trademarks.',
          },
          {
            label: 'Created resumes',
            text: 'Resumes created by users belong to them. CVScore.ai claims no rights over user-created content.',
          },
          {
            label: 'AI Technology',
            text: 'AI algorithms and models used are the property of CVScore.ai.',
          },
        ],
      },
      {
        icon: 'scale',
        title: 'Applicable Law',
        content: [
          {
            label: 'Jurisdiction',
            text: 'The site is subject to Swiss law.',
          },
          {
            label: 'Data protection',
            text: 'Compliance with LPD (Federal Data Protection Act, Switzerland) and GDPR (General Data Protection Regulation, EU).',
          },
          {
            label: 'Disputes',
            text: 'In case of dispute, Swiss courts have jurisdiction.',
          },
        ],
      },
    ],
  },
};

const iconMap: Record<string, any> = {
  filetext: FileText,
  mail: Mail,
  server: Server,
  alert: AlertCircle,
  copyright: Copyright,
  scale: Scale,
};

export function LegalNoticePage({ language }: LegalNoticePageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
              <FileText size={24} className="text-gray-900" />
            </div>
            <h1 className="text-4xl text-gray-900">{t.title}</h1>
          </div>
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
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-gray-900" />
                    </div>
                  )}
                  <h2 className="text-2xl text-gray-900">{section.title}</h2>
                </div>

                {/* Section Content */}
                <div className="space-y-4">
                  {section.content.map((item, i) => (
                    <div key={i} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <h3 className="text-sm text-gray-500 mb-1">{item.label}</h3>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-gray-900 hover:text-blue-600 transition-colors inline-flex items-center gap-2"
                        >
                          <Mail size={16} />
                          {item.text}
                        </a>
                      ) : (
                        <p className="text-gray-700">{item.text}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 bg-gray-100 rounded-xl p-6">
          <p className="text-sm text-gray-600 text-center">
            {language === 'fr' 
              ? '© 2025 CVScore.ai. Tous droits réservés.\nService conforme au droit suisse et européen.'
              : '© 2025 CVScore.ai. All rights reserved.\nService compliant with Swiss and European law.'}
          </p>
        </div>
      </div>
    </div>
  );
}
