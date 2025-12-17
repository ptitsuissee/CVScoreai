import { FileText, Mail, Server, Shield, Copyright, AlertCircle } from 'lucide-react';

interface LegalPageProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Mentions légales',
    lastUpdated: 'Dernière mise à jour : Décembre 2024',
    sections: [
      {
        icon: FileText,
        title: 'Éditeur du site',
        items: [
          { label: 'Nom du site', value: 'CVScore.ai' },
          { label: 'Responsable', value: 'CVScore.ai' },
          { label: 'Pays', value: 'Suisse' },
        ],
      },
      {
        icon: Mail,
        title: 'Contact',
        items: [
          { label: 'Email', value: 'CVScoreai@outlook.com' },
        ],
      },
      {
        icon: Server,
        title: 'Hébergement',
        content: 'Le site est hébergé par un prestataire d\'hébergement web professionnel.',
      },
      {
        icon: AlertCircle,
        title: 'Objet du site',
        content: 'CVScore.ai propose un service d\'analyse et d\'amélioration de CV assisté par intelligence artificielle. Les résultats fournis sont à titre informatif et ne constituent pas une garantie d\'embauche.',
      },
      {
        icon: Shield,
        title: 'Responsabilité',
        content: 'L\'éditeur ne saurait être tenu responsable des décisions prises par les utilisateurs sur la base des analyses fournies par l\'outil. Les recommandations sont fournies à titre indicatif et ne remplacent pas l\'avis d\'un professionnel du recrutement.',
      },
      {
        icon: Shield,
        title: 'Protection des données',
        content: 'Les CV analysés sont utilisés uniquement dans le cadre de l\'analyse demandée par l\'utilisateur. Aucune donnée personnelle n\'est vendue, louée ou partagée avec des tiers à des fins commerciales. Les données ne sont pas stockées de manière permanente sur nos serveurs.',
      },
      {
        icon: Copyright,
        title: 'Propriété intellectuelle',
        content: 'L\'ensemble du contenu du site (textes, design, logo, interface) est la propriété exclusive de CVScore.ai, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.',
      },
    ],
  },
  en: {
    title: 'Legal Notice',
    lastUpdated: 'Last updated: December 2024',
    sections: [
      {
        icon: FileText,
        title: 'Site Publisher',
        items: [
          { label: 'Site name', value: 'CVScore.ai' },
          { label: 'Responsible', value: 'CVScore.ai' },
          { label: 'Country', value: 'Switzerland' },
        ],
      },
      {
        icon: Mail,
        title: 'Contact',
        items: [
          { label: 'Email', value: 'CVScoreai@outlook.com' },
        ],
      },
      {
        icon: Server,
        title: 'Hosting',
        content: 'The site is hosted by a professional web hosting provider.',
      },
      {
        icon: AlertCircle,
        title: 'Purpose of the Site',
        content: 'CVScore.ai provides an AI-assisted resume analysis and improvement service. The results provided are for informational purposes only and do not constitute a guarantee of employment.',
      },
      {
        icon: Shield,
        title: 'Liability',
        content: 'The publisher cannot be held responsible for decisions made by users based on the analyses provided by the tool. Recommendations are provided for informational purposes and do not replace the advice of a recruitment professional.',
      },
      {
        icon: Shield,
        title: 'Data Protection',
        content: 'Resumes analyzed are used solely for the purpose of the analysis requested by the user. No personal data is sold, rented or shared with third parties for commercial purposes. Data is not permanently stored on our servers.',
      },
      {
        icon: Copyright,
        title: 'Intellectual Property',
        content: 'All site content (text, design, logo, interface) is the exclusive property of CVScore.ai, unless otherwise stated. Any reproduction, distribution or use without prior authorization is prohibited.',
      },
    ],
  },
};

export function LegalPage({ language }: LegalPageProps) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-gray-900 text-center mb-4">{t.title}</h1>
          <p className="text-center text-gray-500 text-sm">{t.lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10">
          {t.sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:border-gray-300 transition-colors"
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-blue-600" size={20} />
                  </div>
                  <h2 className="text-gray-900">{section.title}</h2>
                </div>

                {/* Section Content */}
                {section.items ? (
                  <dl className="space-y-4">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:gap-4">
                        <dt className="text-gray-600 sm:w-32 flex-shrink-0">{item.label} :</dt>
                        <dd className="text-gray-900 mt-1 sm:mt-0">
                          {item.value.includes('@') ? (
                            <a
                              href={`mailto:${item.value}`}
                              className="text-blue-600 hover:text-blue-700 underline"
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-600 leading-relaxed text-center">
            {language === 'fr' ? (
              <>
                Pour toute question concernant ces mentions légales, veuillez nous contacter à{' '}
                <a
                  href="mailto:CVScoreai@outlook.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  CVScoreai@outlook.com
                </a>
              </>
            ) : (
              <>
                For any questions regarding this legal notice, please contact us at{' '}
                <a
                  href="mailto:CVScoreai@outlook.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  CVScoreai@outlook.com
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
